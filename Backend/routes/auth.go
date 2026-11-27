package routes

import (
	"context"
	"errors"
	"log"
	"time"

	"portfolio-Backend/auth"
	"portfolio-Backend/middleware"

	"github.com/gofiber/fiber/v2"
)

const (
	adminSessionTTL = 12 * time.Hour
)

type loginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func AuthRoutes(
	app *fiber.App,
	admins auth.AdminAuthenticator,
	sessions auth.SessionManager,
	secureCookie bool,
	sameSite string,
) {
	app.Post("/api/auth/login", func(c *fiber.Ctx) error {
		if c.Get(auth.SessionCookieConsentHeader) != "accepted" {
			return c.Status(fiber.StatusForbidden).JSON(fiber.Map{
				"error": "Session-cookie consent is required",
			})
		}

		var request loginRequest
		if err := c.BodyParser(&request); err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid login request",
			})
		}
		if request.Username == "" || request.Password == "" {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Username and password are required",
			})
		}

		ctx, cancel := context.WithTimeout(c.UserContext(), 10*time.Second)
		defer cancel()

		adminID, err := admins.AuthenticateAdmin(ctx, request.Username, request.Password)
		if errors.Is(err, auth.ErrInvalidCredentials) {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Invalid username or password",
			})
		}
		if err != nil {
			log.Printf("admin authentication failed: %v", err)
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": "Unable to authenticate",
			})
		}

		sessionID, expiresAt, err := sessions.Create(ctx, adminID, adminSessionTTL)
		if err != nil {
			log.Printf("admin session creation failed: %v", err)
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": "Unable to create session",
			})
		}

		auth.SetSessionCookie(c, sessionID, secureCookie, sameSite)
		return c.JSON(fiber.Map{
			"authenticated": true,
			"expires_at":    expiresAt,
		})
	})

	app.Get(
		"/api/auth/session",
		middleware.RequireAuth(sessions, secureCookie, sameSite),
		func(c *fiber.Ctx) error {
			return c.JSON(fiber.Map{
				"authenticated": true,
				"admin_id":      c.Locals("admin_id"),
			})
		},
	)

	app.Post("/api/auth/logout", func(c *fiber.Ctx) error {
		sessionID := c.Cookies(auth.SessionCookieName)
		auth.ClearSessionCookie(c, secureCookie, sameSite)
		if sessionID != "" {
			ctx, cancel := context.WithTimeout(c.UserContext(), 5*time.Second)
			defer cancel()
			if err := sessions.Revoke(ctx, sessionID); err != nil {
				log.Printf("admin session revocation failed: %v", err)
				return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
					"error": "Unable to revoke session",
				})
			}
		}
		return c.SendStatus(fiber.StatusNoContent)
	})
}
