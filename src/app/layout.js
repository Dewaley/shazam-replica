import './globals.css'

export const metadata = {
  title: 'Shazam',
  description: 'A clone of the shazam app, built with Next JS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
