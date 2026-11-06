package db

import (
	"context"
	"database/sql"
	"embed"
	"fmt"
	"log"
	"time"

	_ "github.com/jackc/pgx/v5/stdlib"
	"portfolio-Backend/config"
)

//go:embed migrations/*.sql
var migrationFS embed.FS

// Connect initializes the PostgreSQL connection pool using pgx driver and verifies connectivity.
func Connect(cfg *config.Config) (*sql.DB, error) {
	if cfg.DatabaseURL == "" {
		return nil, fmt.Errorf("database URL is empty")
	}

	db, err := sql.Open("pgx", cfg.DatabaseURL)
	if err != nil {
		return nil, fmt.Errorf("failed to open database connection: %w", err)
	}

	// Configure connection pool parameters
	db.SetMaxOpenConns(cfg.DBMaxOpenConns)
	db.SetMaxIdleConns(cfg.DBMaxIdleConns)
	db.SetConnMaxLifetime(cfg.DBConnMaxLifetime)
	db.SetConnMaxIdleTime(cfg.DBConnMaxIdleTime)

	// Verify connectivity with a strict 5-second timeout
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := db.PingContext(ctx); err != nil {
		_ = db.Close()
		return nil, fmt.Errorf("database ping failed: %w", err)
	}

	log.Printf("Successfully connected to PostgreSQL at %s:%s (database: %s)", cfg.DBHost, cfg.DBPort, cfg.DBName)
	return db, nil
}

// RunInitialMigration executes the embedded schema initialization script.
func RunInitialMigration(db *sql.DB) error {
	script, err := migrationFS.ReadFile("migrations/000001_init_schema.up.sql")
	if err != nil {
		return fmt.Errorf("failed to read embedded migration file: %w", err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	tx, err := db.BeginTx(ctx, nil)
	if err != nil {
		return fmt.Errorf("failed to start migration transaction: %w", err)
	}
	defer tx.Rollback()

	if _, err := tx.ExecContext(ctx, string(script)); err != nil {
		return fmt.Errorf("failed to execute migration script: %w", err)
	}

	if err := tx.Commit(); err != nil {
		return fmt.Errorf("failed to commit migration transaction: %w", err)
	}

	log.Println("Database schema migrations applied successfully.")
	return nil
}
