// This is a static page with recipe data embedded at build time
// In a real app, you might fetch this data at build time from your API

const recipe = {
  name: "French Omelette",
  description: "A classic French omelette - creamy, soft, and delicate",
  ingredients: [
    "3 large eggs",
    "1 tablespoon butter",
    "Salt to taste",
    "Freshly ground black pepper",
    "1 tablespoon fresh chives (optional)",
  ],
  steps: [
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
  ],
}

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{recipe.name}</h1>
      <p style={styles.description}>{recipe.description}</p>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Ingredients</h2>
        <ul style={styles.list}>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} style={styles.listItem}>{ingredient}</li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Instructions</h2>
        <ol style={styles.orderedList}>
          {recipe.steps.map((step, index) => (
            <li key={index} style={styles.step}>{step}</li>
          ))}
        </ol>
      </section>

      <footer style={styles.footer}>
        <p>This recipe is served from static files. The backend API provides the same data dynamically.</p>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  title: {
    fontSize: '48px',
    marginBottom: '16px',
    color: '#333',
  },
  description: {
    fontSize: '20px',
    color: '#666',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#444',
  },
  list: {
    paddingLeft: '20px',
  },
  listItem: {
    fontSize: '18px',
    marginBottom: '8px',
    color: '#555',
  },
  orderedList: {
    paddingLeft: '20px',
  },
  step: {
    fontSize: '18px',
    marginBottom: '16px',
    lineHeight: '1.6',
    color: '#555',
  },
  footer: {
    marginTop: '60px',
    paddingTop: '20px',
    borderTop: '1px solid #eee',
    textAlign: 'center' as const,
    color: '#999',
    fontSize: '14px',
  },
}