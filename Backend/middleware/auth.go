package middleware

import (
	"context"
	"errors"
	"log"

	"portfolio-Backend/auth"

	"github.com/gofiber/fiber/v2"
)

type SessionValidator interface {
	Validate(ctx context.Context, sessionID string) (string, error)
}

func RequireAuth(sessions SessionValidator, secureCookie bool, sameSite string) fiber.Handler {
	return func(c *fiber.Ctx) error {
		if c.Get(auth.SessionCookieConsentHeader) != "accepted" {
			return c.Status(fiber.StatusForbidden).JSON(fiber.Map{
				"error": "Session-cookie consent is required",
			})
		}

		sessionID := c.Cookies(auth.SessionCookieName)
		if sessionID == "" {
			return unauthorized(c)
		}

		adminID, err := sessions.Validate(c.UserContext(), sessionID)
		if errors.Is(err, auth.ErrInvalidSession) {
			auth.ClearSessionCookie(c, secureCookie, sameSite)
			return unauthorized(c)
		}
		if err != nil {
			log.Printf("failed to validate admin session: %v", err)
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": "Unable to validate session",
			})
		}

		c.Locals("admin_id", adminID)
		return c.Next()
	}
}

func unauthorized(c *fiber.Ctx) error {
	return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
		"error": "Unauthorized",
	})
}
