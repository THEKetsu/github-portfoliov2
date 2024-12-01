import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { LanguageProvider } from '@/contexts/language-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mon Portfolio',
  description: 'Bienvenue sur mon portfolio professionnel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
              <AnimatedBackground />
              <Navbar />
              <main className="flex-grow w-full overflow-hidden px-4 sm:px-6 lg:px-8 pt-16">
                {children}
              </main>
              <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  © 2024 GitHub Pages Portfolio. Tous droits réservés.
                </div>
              </footer>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
