package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"

	"portfolio-Backend/config"
	"portfolio-Backend/db"
)

func main() {
	migrateFlag := flag.Bool("migrate", false, "Run database migrations and exit")
	flag.Parse()

	// 1. Load application configuration
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("Configuration error: %v", err)
	}

	// 2. Establish PostgreSQL database connection
	database, err := db.Connect(cfg)
	if err != nil {
		log.Printf("WARNING: Failed to connect to PostgreSQL: %v", err)
		log.Printf("Verify database credentials in .env file (see .env.example)")
	} else {
		defer database.Close()
	}

	// 3. Handle migration flag if specified
	if *migrateFlag {
		if database == nil {
			log.Fatalf("Cannot run migrations: database connection failed.")
		}
		if err := db.RunInitialMigration(database); err != nil {
			log.Fatalf("Migration failed: %v", err)
		}
		log.Println("Migrations executed successfully. Exiting.")
		return
	}

	// 4. Initialize Fiber App
	app := fiber.New(fiber.Config{
		AppName: "Afrinit Portfolio Backend",
	})

	app.Use(recover.New())
	app.Use(logger.New())

	// Static route for serving uploaded images (relative paths)
	app.Static("/uploads", cfg.UploadDir)

	// Base index endpoint
	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Afrinit Portfolio backend is running",
			"status":  "healthy",
		})
	})

	// Health check endpoint verifying DB status
	app.Get("/health", func(c *fiber.Ctx) error {
		if database == nil {
			return c.Status(fiber.StatusServiceUnavailable).JSON(fiber.Map{
				"status":   "unhealthy",
				"database": "disconnected",
			})
		}

		ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
		defer cancel()

		if err := database.PingContext(ctx); err != nil {
			return c.Status(fiber.StatusServiceUnavailable).JSON(fiber.Map{
				"status":   "unhealthy",
				"database": err.Error(),
			})
		}

		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"status":   "healthy",
			"database": "connected",
		})
	})

	// 5. Graceful Shutdown listener
	shutdownChan := make(chan os.Signal, 1)
	signal.Notify(shutdownChan, os.Interrupt, syscall.SIGTERM)

	go func() {
		<-shutdownChan
		log.Println("Gracefully shutting down backend server...")
		_ = app.Shutdown()
	}()

	addr := fmt.Sprintf(":%s", cfg.AppPort)
	log.Printf("Starting server on port %s...", cfg.AppPort)
	if err := app.Listen(addr); err != nil {
		log.Printf("Server shutdown: %v", err)
	}
}
