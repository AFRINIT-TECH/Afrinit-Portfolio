package middleware

import "github.com/gofiber/fiber/v2"

func RequireAuth(c *fiber.Ctx) error {
	sessionID := c.Cookies("session_id")

	if sessionID == "" {
		return c.Status(401).JSON(fiber.Map{
			"error": "Unauthorized",
		})
	}
	return c.Next()
}