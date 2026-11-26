package config

import (
	"os"
	"testing"
	"time"
)

func TestConfigDefaults(t *testing.T) {
	// Clear relevant env vars
	for _, key := range []string{
		"APP_PORT",
		"DB_HOST",
		"DATABASE_URL",
		"PUBLIC_URL",
		"FRONTEND_ORIGIN",
		"SESSION_COOKIE_SECURE",
		"SESSION_COOKIE_SAME_SITE",
	} {
		t.Setenv(key, "")
	}

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
	if cfg.FrontendOrigin != "http://localhost:5173" {
		t.Errorf("Expected default FrontendOrigin http://localhost:5173, got %s", cfg.FrontendOrigin)
	}
	if cfg.SessionCookieSecure {
		t.Error("Expected secure session cookies to be disabled for the default HTTP URL")
	}
	if cfg.SessionCookieSameSite != "Lax" {
		t.Errorf("Expected default SameSite Lax, got %s", cfg.SessionCookieSameSite)
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

func TestConfigEnablesSecureCrossSiteCookiesForHTTPS(t *testing.T) {
	t.Setenv("PUBLIC_URL", "https://api.example.com")
	t.Setenv("SESSION_COOKIE_SECURE", "")
	t.Setenv("SESSION_COOKIE_SAME_SITE", "None")

	cfg, err := Load()
	if err != nil {
		t.Fatalf("Expected valid cookie configuration, got %v", err)
	}
	if !cfg.SessionCookieSecure {
		t.Error("Expected secure cookies for HTTPS")
	}
	if cfg.SessionCookieSameSite != "None" {
		t.Errorf("Expected SameSite None, got %s", cfg.SessionCookieSameSite)
	}
}

func TestConfigRejectsInsecureSameSiteNone(t *testing.T) {
	t.Setenv("PUBLIC_URL", "http://localhost:3000")
	t.Setenv("SESSION_COOKIE_SECURE", "")
	t.Setenv("SESSION_COOKIE_SAME_SITE", "None")

	if _, err := Load(); err == nil {
		t.Error("Expected SameSite=None without Secure to be rejected")
	}
}
