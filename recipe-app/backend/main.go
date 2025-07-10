package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Recipe struct {
	Name            string   `json:"name"`
	Description     string   `json:"description"`
	Ingredients     []string `json:"ingredients"`
	Steps           []string `json:"steps"`
	CustomersServed int      `json:"customers_served"`
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/api/recipe", recipeHandler).Methods("GET")
	r.HandleFunc("/api/recipe/{slug}", recipeSlugHandler).Methods("GET")
	r.HandleFunc("/health", healthHandler).Methods("GET")

	log.Println("Backend server starting on port 8347")
	if err := http.ListenAndServe(":8347", r); err != nil {
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

func recipeSlugHandler(w http.ResponseWriter, r *http.Request) {
	// Only allow GET requests
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	// Extract slug from URL path using mux.Vars
	vars := mux.Vars(r)
	recipeSlug := vars["slug"]

	// Map of slugs to recipes
	recipes := map[string]Recipe{
		"carbonara": {
			Name:        "Classic Carbonara",
			Description: "Traditional Italian pasta with eggs, cheese, and guanciale",
			Ingredients: []string{
				"400g spaghetti",
				"200g guanciale or pancetta",
				"4 large eggs",
				"100g Pecorino Romano cheese",
				"Black pepper",
			},
			Steps: []string{
				"Cook spaghetti in salted boiling water",
				"Cut guanciale into small pieces and fry until crispy",
				"Beat eggs with grated Pecorino and black pepper",
				"Drain pasta, saving some pasta water",
				"Mix hot pasta with guanciale",
				"Remove from heat and add egg mixture, stirring quickly",
				"Add pasta water if needed for creaminess",
			},
		},
		"thai-green-curry": {
			Name:        "Thai Green Curry",
			Description: "Aromatic and spicy Thai curry with coconut milk",
			Ingredients: []string{
				"2 tbsp green curry paste",
				"400ml coconut milk",
				"500g chicken thigh",
				"Thai basil leaves",
				"2 Thai eggplants",
				"Fish sauce",
			},
			Steps: []string{
				"Heat oil in a pan and fry curry paste",
				"Add thick coconut milk and stir",
				"Add chicken and cook until done",
				"Add vegetables and remaining coconut milk",
				"Season with fish sauce",
				"Garnish with Thai basil",
			},
			CustomersServed: 10,
		},
	}

	var recipe Recipe
	found := false

	if recipeSlug != "" {
		if r, ok := recipes[recipeSlug]; ok {
			recipe = r
			found = true
		}
	}

	if !found {
		w.WriteHeader(http.StatusNotFound)
		recipe = Recipe{
			Name:        "Recipe Not Found",
			Description: "No recipe found",
			Ingredients: []string{},
			Steps:       []string{},
		}
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