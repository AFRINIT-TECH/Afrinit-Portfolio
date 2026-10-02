package auth

import "github.com/gofiber/fiber/v2"

func SetSesssionCookies(c *fiber.Ctx, sessionID string) {
	c.Cookie(&fiber.Cookie{
		Name: "session_id",
		Value: sessionID,
		HTTPOnly: true,
		Secure: true,
		SameSite: "Lax",
		Path: "/",
	})
}