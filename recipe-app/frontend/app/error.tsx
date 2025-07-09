'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Something went wrong!</h2>
      <p style={styles.message}>Unable to load the recipe. Please try again.</p>
      <button
        onClick={() => reset()}
        style={styles.button}
      >
        Try again
      </button>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '100px auto',
    padding: '40px 20px',
    textAlign: 'center' as const,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  title: {
    fontSize: '32px',
    marginBottom: '16px',
    color: '#333',
  },
  message: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '32px',
  },
  button: {
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
}