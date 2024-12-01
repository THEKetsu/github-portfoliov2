'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu, Globe } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/contexts/language-context'
import { translations } from '../app/i18n/translations'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Tech', href: '/tech' },
  { name: 'Contact', href: '/contact' },
  { name: 'Experience', href: '/experience' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language as keyof typeof translations]

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="fixed top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-lg font-semibold text-gray-900 dark:text-white">
            Quentin BENDER 
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                {t.nav[item.name.toLowerCase() as keyof typeof t.nav]}
                {pathname === item.href && (
                  <motion.div
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    layoutId="navbar-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <Globe size={18} />
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-1 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {t.nav[item.name.toLowerCase() as keyof typeof t.nav]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
