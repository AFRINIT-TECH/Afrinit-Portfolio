package db

import (
	"testing"

	"portfolio-Backend/config"
)

func TestConnectInvalidURL(t *testing.T) {
	cfg := &config.Config{
		DatabaseURL: "postgres://invalid_user:invalid_password@127.0.0.1:54329/nonexistent?sslmode=disable",
	}

	_, err := Connect(cfg)
	if err == nil {
		t.Fatal("Expected error when connecting to non-existent database, got nil")
	}
}

func TestConnectEmptyURL(t *testing.T) {
	cfg := &config.Config{
		DatabaseURL: "",
	}

	_, err := Connect(cfg)
	if err == nil {
		t.Fatal("Expected error when connecting with empty database URL, got nil")
	}
}

func TestMigrationFileEmbedded(t *testing.T) {
	script, err := migrationFS.ReadFile("migrations/000001_init_schema.up.sql")
	if err != nil {
		t.Fatalf("Failed to read embedded migration file: %v", err)
	}
	if len(script) == 0 {
		t.Fatal("Migration script is empty")
	}
}
