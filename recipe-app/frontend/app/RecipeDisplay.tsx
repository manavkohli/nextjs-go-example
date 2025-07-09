interface Recipe {
  name: string
  description: string
  ingredients: string[]
  steps: string[]
}

interface RecipeDisplayProps {
  recipe: Recipe
}

export function RecipeDisplay({ recipe }: RecipeDisplayProps) {
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
        <p>This recipe is served using Next.js server-side rendering.</p>
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