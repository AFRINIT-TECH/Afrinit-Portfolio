package middleware

import (
	"context"
	"errors"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"portfolio-Backend/auth"

	"github.com/gofiber/fiber/v2"
)

type testSessionValidator struct {
	adminID string
	err     error
}

func (v testSessionValidator) Validate(context.Context, string) (string, error) {
	return v.adminID, v.err
}

func TestRequireAuthWithoutCookie(t *testing.T) {
	app := fiber.New()

	app.Get("/admin", RequireAuth(testSessionValidator{}, false, "Lax"), func(c *fiber.Ctx) error {
		return c.SendString("Welcome Admin")
	})

	req := httptest.NewRequest(http.MethodGet, "/admin", nil)
	req.Header.Set(auth.SessionCookieConsentHeader, "accepted")

	resp, err := app.Test(req)

	if err != nil {
		t.Fatalf("Request failed: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != fiber.StatusUnauthorized {
		t.Errorf(
			"Expected status %d, got %d",
			fiber.StatusUnauthorized,
			resp.StatusCode,
		)
	}
}

func TestRequireAuthWithCookie(t *testing.T) {
	app := fiber.New()

	app.Get("/admin", RequireAuth(testSessionValidator{adminID: "admin-123"}, false, "Lax"), func(c *fiber.Ctx) error {
		return c.SendString(c.Locals("admin_id").(string))
	})

	req := httptest.NewRequest(http.MethodGet, "/admin", nil)

	req.AddCookie(&http.Cookie{
		Name:  "session_id",
		Value: "test-session-123",
	})
	req.Header.Set(auth.SessionCookieConsentHeader, "accepted")

	resp, err := app.Test(req)

	if err != nil {
		t.Fatalf("Request failed: %v", err)
	}

	if resp.StatusCode != fiber.StatusOK {
		t.Fatalf("Expected status %d, got %d", fiber.StatusOK, resp.StatusCode)
	}
	if body, err := io.ReadAll(resp.Body); err != nil {
		t.Fatalf("Failed to read response: %v", err)
	} else if string(body) != "admin-123" {
		t.Errorf("Expected admin id in response, got %q", body)
	}
}

func TestRequireAuthRejectsInvalidSession(t *testing.T) {
	app := fiber.New()
	app.Get("/admin", RequireAuth(testSessionValidator{err: auth.ErrInvalidSession}, false, "Lax"))

	req := httptest.NewRequest(http.MethodGet, "/admin", nil)
	req.AddCookie(&http.Cookie{Name: auth.SessionCookieName, Value: "invalid"})
	req.Header.Set(auth.SessionCookieConsentHeader, "accepted")

	resp, err := app.Test(req)
	if err != nil {
		t.Fatalf("Request failed: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != fiber.StatusUnauthorized {
		t.Errorf("Expected status %d, got %d", fiber.StatusUnauthorized, resp.StatusCode)
	}
	if cookie := resp.Header.Get("Set-Cookie"); !strings.Contains(cookie, "expires=Thu, 01 Jan 1970") {
		t.Errorf("Expected invalid session cookie to be cleared, got %q", cookie)
	}
}

func TestRequireAuthReturnsServerErrorForStoreFailure(t *testing.T) {
	app := fiber.New()
	app.Get("/admin", RequireAuth(testSessionValidator{err: errors.New("database unavailable")}, false, "Lax"))

	req := httptest.NewRequest(http.MethodGet, "/admin", nil)
	req.AddCookie(&http.Cookie{Name: auth.SessionCookieName, Value: "valid-looking"})
	req.Header.Set(auth.SessionCookieConsentHeader, "accepted")

	resp, err := app.Test(req)
	if err != nil {
		t.Fatalf("Request failed: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != fiber.StatusInternalServerError {
		t.Errorf("Expected status %d, got %d", fiber.StatusInternalServerError, resp.StatusCode)
	}
}

func TestRequireAuthRejectsMissingCookieConsent(t *testing.T) {
	app := fiber.New()
	app.Get("/admin", RequireAuth(testSessionValidator{adminID: "admin-123"}, false, "Lax"))

	req := httptest.NewRequest(http.MethodGet, "/admin", nil)
	resp, err := app.Test(req)
	if err != nil {
		t.Fatalf("Request failed: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != fiber.StatusForbidden {
		t.Errorf("Expected status %d, got %d", fiber.StatusForbidden, resp.StatusCode)
	}
}
