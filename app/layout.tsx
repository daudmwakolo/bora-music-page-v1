import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Loading Cinzel (Trajan style) and Dancing Script (Matitu Signature) */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Dancing+Script:wght@700&family=Inter:wght@400;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-[#080808] text-white selection:bg-[#D4AF37] selection:text-black">
        {children}
      </body>
    </html>
  )
}