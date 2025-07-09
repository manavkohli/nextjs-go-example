import { RecipeDisplay } from './RecipeDisplay'

interface Recipe {
  name: string
  description: string
  ingredients: string[]
  steps: string[]
}

async function getRecipe(): Promise<Recipe> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://backend:8347'
  const res = await fetch(`${apiUrl}/api/recipe`, {
    cache: 'no-store'
  })
  
  if (!res.ok) {
    throw new Error(`Failed to fetch recipe: ${res.status}`)
  }
  
  return res.json()
}

export default async function Home() {
  const recipe = await getRecipe()
  
  return <RecipeDisplay recipe={recipe} />
}