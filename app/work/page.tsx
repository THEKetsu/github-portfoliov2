'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { translations } from '../i18n/translations'

const projects = [
  { id: 1, title: 'BIFROST', description: 'A bridge between the cloud and the enterprise', url: 'https://github.com/THEKetsu/BIFROST' },
  { id: 2, title: 'RCTStrat', description: 'An interactive web & mobile strategy maker application for RCT', url: 'https://github.com/THEKetsu/projectRCT' },
  { id: 3, title: 'MyPortofolio', description: 'My portfolio website', url: 'https://github.com/THEKetsu/quentin-bender.io' },
]

export default function Work() {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations].work

  const showPopup = () => setIsPopupVisible(true)
  const hidePopup = () => setIsPopupVisible(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
                <a href={project.url} className="text-secondary hover:underline">{project.url}</a>
              </CardContent>
              <CardFooter>
                <Button onClick={showPopup}>{t.viewProject}</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isPopupVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            onClick={hidePopup}
          >
            <div 
              className="bg-background p-6 rounded-lg shadow-lg max-w-md w-full m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-primary">{t.notice}</h2>
                <Button variant="ghost" size="icon" onClick={hidePopup}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">{t.close}</span>
                </Button>
              </div>
              <p className="text-foreground mb-4">
                {t.noticeMessage}
              </p>
              <Button onClick={hidePopup} className="w-full">{t.close}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

