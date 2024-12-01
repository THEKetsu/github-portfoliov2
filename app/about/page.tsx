'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/language-context'
import { translations } from '../i18n/translations'

export default function About() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations].about

  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-lg mb-4">{t.intro}</p>
        <p className="text-lg mb-4">{t.journey1}</p>
        <p className="text-lg mb-4">{t.journey2}</p>
        <p className="text-lg">{t.journey3}</p>
      </motion.div>

       {/* Interests and Images section */}
       <motion.div
          className="w-full mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg mb-4">{t.interests}</p>
          <div className="flex w-full h-48 gap-2 overflow-hidden rounded-lg">
            <div className="relative w-1/4 h-full">
              <Image
                src="/quentin-bender.io/golf_pic.jpeg"
                alt="Golf"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-1/4 h-full">
              <Image
                src="/quentin-bender.io/rocket.jpg"
                alt="Rocket League"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-1/4 h-full">
              <Image
                src="/quentin-bender.io/test.jpg"
                alt="Strategy Game"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-1/4 h-full">
              <Image
                src="/quentin-bender.io/marine.jpg"
                alt="Marine"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </motion.div>
        <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
        <p>[^1]: <Link href="https://isen-mediterranee.fr" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ISEN - Institut Supérieur de l&apos;Électronique et du Numérique</Link></p>
        <p>[^2]: <Link href="https://www.root-me.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Root-me - Hacking and Information Security learning platform</Link></p>
      </div>
    </motion.div>
  )
}

