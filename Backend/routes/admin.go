package routes

import (
	"portfolio-Backend/auth"
	"portfolio-Backend/middleware"

	"github.com/gofiber/fiber/v2"
)

func AdminRoutes(app *fiber.App, sessions auth.SessionManager, secureCookie bool, sameSite string) {
	admin := app.Group(
		"/api/admin",
		middleware.RequireAuth(sessions, secureCookie, sameSite),
	)

	admin.Get("/dashboard", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"admin_id": c.Locals("admin_id"),
			"status":   "authenticated",
		})
	})
}
