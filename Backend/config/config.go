package config

import (
	"fmt"
	"net/url"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/joho/godotenv"
)

// Config holds all environment configurations for the portfolio backend.
type Config struct {
	AppPort string

	// Database configurations
	DatabaseURL       string
	DBHost            string
	DBPort            string
	DBUser            string
	DBPassword        string
	DBName            string
	DBSSLMode         string
	DBMaxOpenConns    int
	DBMaxIdleConns    int
	DBConnMaxLifetime time.Duration
	DBConnMaxIdleTime time.Duration

	// Static assets / Image upload storage
	UploadDir             string
	PublicURL             string
	FrontendOrigin        string
	SessionCookieSecure   bool
	SessionCookieSameSite string
}

// Load reads configuration from .env file (if present) and system environment variables.
func Load() (*Config, error) {
	// Attempt loading .env file. If it doesn't exist, ignore error as env vars may be set in system/container.
	_ = godotenv.Load()

	publicURL := getEnv("PUBLIC_URL", "http://localhost:3000")
	sessionCookieSecure := strings.HasPrefix(strings.ToLower(publicURL), "https://")
	if value, exists := os.LookupEnv("SESSION_COOKIE_SECURE"); exists && value != "" {
		parsed, err := strconv.ParseBool(value)
		if err != nil {
			return nil, fmt.Errorf("invalid SESSION_COOKIE_SECURE value: %w", err)
		}
		sessionCookieSecure = parsed
	}

	sessionCookieSameSite := strings.ToLower(getEnv("SESSION_COOKIE_SAME_SITE", "lax"))
	switch sessionCookieSameSite {
	case "lax":
		sessionCookieSameSite = "Lax"
	case "strict":
		sessionCookieSameSite = "Strict"
	case "none":
		if !sessionCookieSecure {
			return nil, fmt.Errorf("SESSION_COOKIE_SAME_SITE=none requires SESSION_COOKIE_SECURE=true")
		}
		sessionCookieSameSite = "None"
	default:
		return nil, fmt.Errorf("invalid SESSION_COOKIE_SAME_SITE value %q: expected Lax, Strict, or None", sessionCookieSameSite)
	}

	cfg := &Config{
		AppPort:               getEnv("APP_PORT", "3000"),
		DatabaseURL:           getEnv("DATABASE_URL", ""),
		DBHost:                getEnv("DB_HOST", "localhost"),
		DBPort:                getEnv("DB_PORT", "5432"),
		DBUser:                getEnv("DB_USER", "postgres"),
		DBPassword:            getEnv("DB_PASSWORD", ""),
		DBName:                getEnv("DB_NAME", "afrinit_portfolio"),
		DBSSLMode:             getEnv("DB_SSLMODE", "disable"),
		DBMaxOpenConns:        getEnvAsInt("DB_MAX_OPEN_CONNS", 25),
		DBMaxIdleConns:        getEnvAsInt("DB_MAX_IDLE_CONNS", 25),
		DBConnMaxLifetime:     getEnvAsDuration("DB_CONN_MAX_LIFETIME", 15*time.Minute),
		DBConnMaxIdleTime:     getEnvAsDuration("DB_CONN_MAX_IDLE_TIME", 5*time.Minute),
		UploadDir:             getEnv("UPLOAD_DIR", "./uploads"),
		PublicURL:             publicURL,
		FrontendOrigin:        getEnv("FRONTEND_ORIGIN", "http://localhost:5173"),
		SessionCookieSecure:   sessionCookieSecure,
		SessionCookieSameSite: sessionCookieSameSite,
	}

	// If DATABASE_URL is not set directly, build DSN from discrete variables
	if cfg.DatabaseURL == "" {
		cfg.DatabaseURL = fmt.Sprintf(
			"postgres://%s:%s@%s:%s/%s?sslmode=%s",
			url.QueryEscape(cfg.DBUser),
			url.QueryEscape(cfg.DBPassword),
			cfg.DBHost,
			cfg.DBPort,
			cfg.DBName,
			cfg.DBSSLMode,
		)
	}

	return cfg, nil
}

func getEnv(key, defaultVal string) string {
	if val, exists := os.LookupEnv(key); exists && val != "" {
		return val
	}
	return defaultVal
}

func getEnvAsInt(key string, defaultVal int) int {
	valStr := getEnv(key, "")
	if val, err := strconv.Atoi(valStr); err == nil {
		return val
	}
	return defaultVal
}

func getEnvAsDuration(key string, defaultVal time.Duration) time.Duration {
	valStr := getEnv(key, "")
	if val, err := time.ParseDuration(valStr); err == nil {
		return val
	}
	return defaultVal
}
