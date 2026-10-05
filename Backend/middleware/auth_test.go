package middleware

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gofiber/fiber/v2"
)

func TestRequireAuthWithoutCookie(t *testing.T) {
	app := fiber.New()

	app.Get("/admin", RequireAuth, func(c *fiber.Ctx) error {
		return c.SendString("Welcome Admin")
	})

	req := httptest.NewRequest(http.MethodGet, "/admin", nil)

	resp, err := app.Test(req)

	if err != nil {
		t.Fatalf("Request failed: %v", err)
	}

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

	app.Get("/admin", RequireAuth, func(c *fiber.Ctx) error {
		return c.SendString("Welcome Admin")
	})

	req := httptest.NewRequest(http.MethodGet, "/admin", nil)

	req.AddCookie(&http.Cookie{
		Name:  "session_id",
		Value: "test-session-123",
	})

	resp, err := app.Test(req)

	if err != nil {
		t.Fatalf("Request failed: %v", err)
	}

	if resp.StatusCode != fiber.StatusOK {
		t.Errorf(
			"Expected status %d, got %d",
			fiber.StatusOK,
			resp.StatusCode,
		)
	}
}