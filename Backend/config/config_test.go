package config

import (
	"os"
	"testing"
	"time"
)

func TestConfigDefaults(t *testing.T) {
	// Clear relevant env vars
	os.Unsetenv("APP_PORT")
	os.Unsetenv("DB_HOST")
	os.Unsetenv("DATABASE_URL")

	cfg, err := Load()
	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}

	if cfg.AppPort != "3000" {
		t.Errorf("Expected default AppPort 3000, got %s", cfg.AppPort)
	}
	if cfg.DBHost != "localhost" {
		t.Errorf("Expected default DBHost localhost, got %s", cfg.DBHost)
	}
	if cfg.DBMaxOpenConns != 25 {
		t.Errorf("Expected default DBMaxOpenConns 25, got %d", cfg.DBMaxOpenConns)
	}
	if cfg.DBConnMaxLifetime != 15*time.Minute {
		t.Errorf("Expected default DBConnMaxLifetime 15m, got %v", cfg.DBConnMaxLifetime)
	}
}

func TestConfigEnvOverride(t *testing.T) {
	os.Setenv("APP_PORT", "8080")
	os.Setenv("DB_NAME", "custom_portfolio")
	defer func() {
		os.Unsetenv("APP_PORT")
		os.Unsetenv("DB_NAME")
	}()

	cfg, err := Load()
	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}

	if cfg.AppPort != "8080" {
		t.Errorf("Expected AppPort 8080, got %s", cfg.AppPort)
	}
	if cfg.DBName != "custom_portfolio" {
		t.Errorf("Expected DBName custom_portfolio, got %s", cfg.DBName)
	}
}
