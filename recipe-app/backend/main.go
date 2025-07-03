package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Recipe struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Ingredients []string `json:"ingredients"`
	Steps       []string `json:"steps"`
}

func main() {
	http.HandleFunc("/api/recipe", recipeHandler)
	http.HandleFunc("/health", healthHandler)

	log.Println("Backend server starting on port 8347")
	if err := http.ListenAndServe(":8347", nil); err != nil {
		log.Fatal("Server failed to start:", err)
	}
}

func recipeHandler(w http.ResponseWriter, r *http.Request) {
	// Only allow GET requests
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	recipe := Recipe{
		Name:        "French Omelette",
		Description: "A classic French omelette - creamy, soft, and delicate",
		Ingredients: []string{
			"3 large eggs",
			"1 tablespoon butter",
			"Salt to taste",
			"Freshly ground black pepper",
			"1 tablespoon fresh chives (optional)",
		},
		Steps: []string{
			"Crack the eggs into a bowl and beat them vigorously with a fork until completely combined",
			"Season with a pinch of salt and pepper",
			"Heat a non-stick pan over medium-high heat",
			"Add butter and swirl to coat the pan as it melts",
			"When the butter starts to foam but before it browns, pour in the eggs",
			"Using a spatula, stir the eggs rapidly in a circular motion while shaking the pan",
			"As the eggs begin to set, stop stirring and let them cook for 10-15 seconds",
			"Tilt the pan and use the spatula to fold the omelette in half",
			"Slide onto a plate - the inside should still be slightly creamy",
			"Garnish with chives if desired and serve immediately",
		},
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	
	if err := json.NewEncoder(w).Encode(recipe); err != nil {
		log.Printf("Error encoding recipe: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("OK"))
}