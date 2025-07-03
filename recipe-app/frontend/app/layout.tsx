import './globals.css'

export const metadata = {
  title: 'French Omelette Recipe',
  description: 'Learn how to make a perfect French omelette',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}