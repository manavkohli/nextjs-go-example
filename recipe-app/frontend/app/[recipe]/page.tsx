import { RecipeDisplay } from '@/app/RecipeDisplay'
import { notFound } from 'next/navigation'


interface Recipe {
  name: string
  description: string
  ingredients: string[]
  steps: string[]
  customers_served?: number
}

async function getRecipe(slug: string): Promise<Recipe | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://backend:8347'
  const res = await fetch(`${apiUrl}/api/recipe/${slug}`, {
    cache: 'no-store'
  })
  
  if (!res.ok) {
    throw new Error(`Failed to fetch recipe: ${res.status}`)
  }
  
  return res.json()
}

export default async function RecipePage({ params }: { params: { recipe: string } }) {
  const recipeObject = await getRecipe(params.recipe)
  
  if (!recipeObject) {
    notFound()
  }

  return <RecipeDisplay recipe={recipeObject} />
}