package handlers

import (
	"net/http"

	"github.com/admirgreg/mentoriza/backend/internal/auth"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func Login(c *gin.Context) {
	var body struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "JSON inválido"})
		return
	}

	if body.Email != "admin@mentoriza.com" || body.Password != "123456" {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Credenciais inválidas"})
		return
	}

	accessToken, _ := auth.GenerateAccessToken("1")
	refreshToken, _ := auth.GenerateRefreshToken("1")

	c.JSON(http.StatusOK, gin.H{
		"access_token":  accessToken,
		"refresh_token": refreshToken,
	})
}

func Refresh(c *gin.Context) {
	var body struct {
		RefreshToken string `json:"refresh_token"`
	}

	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "JSON inválido"})
		return
	}

	token, err := auth.ValidateToken(body.RefreshToken)
	if err != nil || !token.Valid {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Refresh token inválido"})
		return
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Claims inválidas"})
		return
	}

	userID, ok := claims["user_id"].(string)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Usuário inválido"})
		return
	}

	newAccessToken, _ := auth.GenerateAccessToken(userID)

	c.JSON(http.StatusOK, gin.H{
		"access_token": newAccessToken,
	})
}
