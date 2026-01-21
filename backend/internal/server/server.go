package server

import (
	"github.com/admirgreg/mentoriza/backend/internal/auth"
	"github.com/admirgreg/mentoriza/backend/internal/handlers"
	"github.com/gin-gonic/gin"
)

func Start() {
	r := gin.Default()

	r.GET("/health", func(c *gin.Context) {
		c.String(200, "OK")
	})

	r.POST("/login", handlers.Login)
	r.POST("/refresh", handlers.Refresh)

	protected := r.Group("/api")
	protected.Use(auth.AuthMiddleware())
	{
		protected.GET("/dashboard", func(c *gin.Context) {
			c.JSON(200, gin.H{"message": "Acesso autorizado"})
		})
	}

	r.Run(":8080")
}
