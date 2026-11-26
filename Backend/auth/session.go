package auth

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"database/sql"
	"encoding/base64"
	"encoding/hex"
	"errors"
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

const (
	SessionCookieName          = "session_id"
	SessionCookieConsentHeader = "X-Session-Cookie-Consent"
)

var (
	ErrInvalidCredentials = errors.New("invalid credentials")
	ErrInvalidSession     = errors.New("invalid session")
)

type AdminAuthenticator interface {
	AuthenticateAdmin(ctx context.Context, username, password string) (string, error)
}

type SessionManager interface {
	Validate(ctx context.Context, sessionID string) (string, error)
	Create(ctx context.Context, adminID string, ttl time.Duration) (string, time.Time, error)
	Revoke(ctx context.Context, sessionID string) error
}

type SQLStore struct {
	DB *sql.DB
}

func (s SQLStore) AuthenticateAdmin(ctx context.Context, username, password string) (string, error) {
	var adminID string
	var passwordHash string
	err := s.DB.QueryRowContext(
		ctx,
		`SELECT id, password_hash FROM admins WHERE username = $1`,
		username,
	).Scan(&adminID, &passwordHash)
	if errors.Is(err, sql.ErrNoRows) {
		return "", ErrInvalidCredentials
	}
	if err != nil {
		return "", fmt.Errorf("query admin credentials: %w", err)
	}
	if bcrypt.CompareHashAndPassword([]byte(passwordHash), []byte(password)) != nil {
		return "", ErrInvalidCredentials
	}
	return adminID, nil
}

func (s SQLStore) Create(ctx context.Context, adminID string, ttl time.Duration) (string, time.Time, error) {
	randomValue := make([]byte, 32)
	if _, err := rand.Read(randomValue); err != nil {
		return "", time.Time{}, fmt.Errorf("generate session token: %w", err)
	}

	sessionID := base64.RawURLEncoding.EncodeToString(randomValue)
	expiresAt := time.Now().UTC().Add(ttl)
	if _, err := s.DB.ExecContext(ctx, `DELETE FROM admin_sessions WHERE expires_at <= CURRENT_TIMESTAMP`); err != nil {
		return "", time.Time{}, fmt.Errorf("remove expired sessions: %w", err)
	}
	_, err := s.DB.ExecContext(
		ctx,
		`INSERT INTO admin_sessions (token_hash, admin_id, expires_at) VALUES ($1, $2, $3)`,
		hashSessionID(sessionID),
		adminID,
		expiresAt,
	)
	if err != nil {
		return "", time.Time{}, fmt.Errorf("store admin session: %w", err)
	}

	return sessionID, expiresAt, nil
}

func (s SQLStore) Validate(ctx context.Context, sessionID string) (string, error) {
	var adminID string
	err := s.DB.QueryRowContext(
		ctx,
		`SELECT admin_id FROM admin_sessions WHERE token_hash = $1 AND expires_at > CURRENT_TIMESTAMP`,
		hashSessionID(sessionID),
	).Scan(&adminID)
	if errors.Is(err, sql.ErrNoRows) {
		return "", ErrInvalidSession
	}
	if err != nil {
		return "", fmt.Errorf("validate admin session: %w", err)
	}
	return adminID, nil
}

func (s SQLStore) Revoke(ctx context.Context, sessionID string) error {
	if _, err := s.DB.ExecContext(
		ctx,
		`DELETE FROM admin_sessions WHERE token_hash = $1`,
		hashSessionID(sessionID),
	); err != nil {
		return fmt.Errorf("revoke admin session: %w", err)
	}
	return nil
}

func SetSessionCookie(c *fiber.Ctx, sessionID string, secure bool, sameSite string) {
	c.Cookie(&fiber.Cookie{
		Name:     SessionCookieName,
		Value:    sessionID,
		HTTPOnly: true,
		Secure:   secure,
		SameSite: sameSite,
		Path:     "/",
	})
}

func ClearSessionCookie(c *fiber.Ctx, secure bool, sameSite string) {
	c.Cookie(&fiber.Cookie{
		Name:     SessionCookieName,
		Value:    "",
		HTTPOnly: true,
		Secure:   secure,
		SameSite: sameSite,
		Path:     "/",
		MaxAge:   -1,
		Expires:  time.Unix(1, 0),
	})
}

func hashSessionID(sessionID string) string {
	hash := sha256.Sum256([]byte(sessionID))
	return hex.EncodeToString(hash[:])
}
