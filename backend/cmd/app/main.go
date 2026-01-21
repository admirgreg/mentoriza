package main

import (
	"log"
	"net/http"
)

func main() {
	// Porta do servidor
	port := ":8080"

	// Rotas
	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/health", healthHandler)

	log.Println("Servidor rodando em http://localhost" + port)

	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal("Erro ao iniciar servidor:", err)
	}
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Backend Mentoriza rodando com sucesso"))
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("OK"))
}
