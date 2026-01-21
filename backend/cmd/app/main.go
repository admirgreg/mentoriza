package main

import (
	"log"
	"net/http"

	"app/internal/chat"
)

func main() {
	srv := chat.NewServer()

	http.HandleFunc("/ws", srv.HandleWS)

	log.Println("Servidor rodando em :8080/ws")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}