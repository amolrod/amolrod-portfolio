import { Space_Grotesk } from 'next/font/google'
import { generateSEO } from '@/lib/seo'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = generateSEO({})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider>
          <CustomCursor />
          <div className="relative min-h-screen overflow-x-hidden">
            <div className="animated-gradient fixed inset-0 -z-10" />
            <div className="grid-pattern fixed inset-0 -z-10 opacity-20" />
            
            <Navbar />
            
            <main className="relative z-10">
              {children}
            </main>
            
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
