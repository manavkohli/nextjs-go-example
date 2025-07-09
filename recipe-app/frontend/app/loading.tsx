export default function Loading() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading recipe...</p>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #0070f3',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#666',
  },
}