package routes

import (
	"context"
	"errors"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"portfolio-Backend/auth"

	"github.com/gofiber/fiber/v2"
)

type fakeAdminAuthenticator struct {
	adminID string
	err     error
}

func (a fakeAdminAuthenticator) AuthenticateAdmin(context.Context, string, string) (string, error) {
	return a.adminID, a.err
}

type fakeSessionManager struct {
	sessionID string
	adminID   string
	expiresAt time.Time
	err       error
	created   bool
	revoked   string
}

func (s *fakeSessionManager) Validate(context.Context, string) (string, error) {
	return s.adminID, s.err
}

func (s *fakeSessionManager) Create(_ context.Context, adminID string, _ time.Duration) (string, time.Time, error) {
	s.created = true
	s.adminID = adminID
	return s.sessionID, s.expiresAt, s.err
}

func (s *fakeSessionManager) Revoke(_ context.Context, sessionID string) error {
	s.revoked = sessionID
	return s.err
}

func TestLoginRequiresCookieConsent(t *testing.T) {
	sessions := &fakeSessionManager{sessionID: "token"}
	app := fiber.New()
	AuthRoutes(app, fakeAdminAuthenticator{adminID: "admin-123"}, sessions, false, "Lax")

	req := httptest.NewRequest(http.MethodPost, "/api/auth/login", strings.NewReader(`{"username":"admin","password":"secret"}`))
	req.Header.Set("Content-Type", "application/json")
	resp, err := app.Test(req)
	if err != nil {
		t.Fatalf("Request failed: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != fiber.StatusForbidden {
		t.Fatalf("Expected status %d, got %d", fiber.StatusForbidden, resp.StatusCode)
	}
	if sessions.created {
		t.Error("Did not expect a session to be created without consent")
	}
}

func TestLoginSetsHttpOnlySessionCookieAfterConsent(t *testing.T) {
	sessions := &fakeSessionManager{
		sessionID: "opaque-token",
		expiresAt: time.Now().Add(12 * time.Hour),
	}
	app := fiber.New()
	AuthRoutes(app, fakeAdminAuthenticator{adminID: "admin-123"}, sessions, false, "Lax")

	req := httptest.NewRequest(http.MethodPost, "/api/auth/login", strings.NewReader(`{"username":"admin","password":"secret"}`))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set(auth.SessionCookieConsentHeader, "accepted")
	resp, err := app.Test(req)
	if err != nil {
		t.Fatalf("Request failed: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != fiber.StatusOK {
		t.Fatalf("Expected status %d, got %d", fiber.StatusOK, resp.StatusCode)
	}
	if !sessions.created {
		t.Fatal("Expected a session to be created")
	}
	cookie := resp.Header.Get("Set-Cookie")
	for _, expected := range []string{"session_id=opaque-token", "HttpOnly", "SameSite=Lax"} {
		if !strings.Contains(cookie, expected) {
			t.Errorf("Expected Set-Cookie header to contain %q, got %q", expected, cookie)
		}
	}
	if strings.Contains(cookie, "Secure") {
		t.Errorf("Did not expect Secure on local HTTP cookie, got %q", cookie)
	}
}

func TestLoginRejectsInvalidCredentials(t *testing.T) {
	sessions := &fakeSessionManager{sessionID: "token"}
	app := fiber.New()
	AuthRoutes(app, fakeAdminAuthenticator{err: auth.ErrInvalidCredentials}, sessions, false, "Lax")

	req := httptest.NewRequest(http.MethodPost, "/api/auth/login", strings.NewReader(`{"username":"admin","password":"wrong"}`))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set(auth.SessionCookieConsentHeader, "accepted")
	resp, err := app.Test(req)
	if err != nil {
		t.Fatalf("Request failed: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != fiber.StatusUnauthorized {
		t.Errorf("Expected status %d, got %d", fiber.StatusUnauthorized, resp.StatusCode)
	}
	if sessions.created {
		t.Error("Did not expect a session to be created for invalid credentials")
	}
}

func TestLogoutRevokesSessionAndClearsCookie(t *testing.T) {
	sessions := &fakeSessionManager{}
	app := fiber.New()
	AuthRoutes(app, fakeAdminAuthenticator{}, sessions, true, "None")

	req := httptest.NewRequest(http.MethodPost, "/api/auth/logout", nil)
	req.AddCookie(&http.Cookie{Name: auth.SessionCookieName, Value: "opaque-token"})
	resp, err := app.Test(req)
	if err != nil {
		t.Fatalf("Request failed: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != fiber.StatusNoContent {
		t.Errorf("Expected status %d, got %d", fiber.StatusNoContent, resp.StatusCode)
	}
	if sessions.revoked != "opaque-token" {
		t.Errorf("Expected session to be revoked, got %q", sessions.revoked)
	}
	cookie := resp.Header.Get("Set-Cookie")
	cookieAttributes := strings.ToLower(cookie)
	if !strings.Contains(cookieAttributes, "httponly") || !strings.Contains(cookieAttributes, "secure") || !strings.Contains(cookieAttributes, "samesite=none") {
		t.Errorf("Expected secure cookie-clearing header, got %q", cookie)
	}
}

func TestLoginSurfacesAdminStoreFailures(t *testing.T) {
	sessions := &fakeSessionManager{sessionID: "token"}
	app := fiber.New()
	AuthRoutes(app, fakeAdminAuthenticator{err: errors.New("database down")}, sessions, false, "Lax")

	req := httptest.NewRequest(http.MethodPost, "/api/auth/login", strings.NewReader(`{"username":"admin","password":"secret"}`))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set(auth.SessionCookieConsentHeader, "accepted")
	resp, err := app.Test(req)
	if err != nil {
		t.Fatalf("Request failed: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != fiber.StatusInternalServerError {
		t.Errorf("Expected status %d, got %d", fiber.StatusInternalServerError, resp.StatusCode)
	}
	if sessions.created {
		t.Error("Did not expect a session to be created when admin authentication fails")
	}
}
