package main

import (
	"log"

	"portfolio-Backend/auth"
	"portfolio-Backend/config"
	"portfolio-Backend/db"
	"portfolio-Backend/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("Failed to load configuration: %v", err)
	}

	database, err := db.Connect(cfg)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer database.Close()

	if err := db.RunInitialMigration(database); err != nil {
		log.Fatalf("Failed to run database migrations: %v", err)
	}

	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins:     cfg.FrontendOrigin,
		AllowMethods:     "GET,POST,PUT,DELETE,OPTIONS",
		AllowHeaders:     "Origin,Content-Type,Accept,X-Session-Cookie-Consent",
		AllowCredentials: true,
	}))

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Portfolio backend is running!")
	})
	app.Get("/health", func(c *fiber.Ctx) error {
		if err := database.PingContext(c.UserContext()); err != nil {
			return c.Status(fiber.StatusServiceUnavailable).JSON(fiber.Map{
				"database": "disconnected",
				"status":   "unhealthy",
			})
		}
		return c.JSON(fiber.Map{
			"database": "connected",
			"status":   "healthy",
		})
	})

	sessions := auth.SQLStore{DB: database}
	routes.AuthRoutes(app, sessions, sessions, cfg.SessionCookieSecure, cfg.SessionCookieSameSite)
	routes.AdminRoutes(app, sessions, cfg.SessionCookieSecure, cfg.SessionCookieSameSite)

	log.Printf("Starting server on port %s...", cfg.AppPort)
	if err := app.Listen(":" + cfg.AppPort); err != nil {
		log.Fatalf("Backend server stopped: %v", err)
	}
}
