package routes

import (
    "github.com/gofiber/fiber/v2"
)

func AdminRoutes(app *fiber.App) {
    admin := app.Group("/api/admin", middleware.RequireAuth)

    admin.Get("/dashboard", handlers.Dashboard)
    admin.Post("/projects", handlers.CreateProject)
    admin.Put("/projects/:id", handlers.UpdateProject)
    admin.Delete("/projects/:id", handlers.DeleteProject)
}