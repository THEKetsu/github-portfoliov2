'use client'

import { useRef,ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
}

export default function ParallaxWrapper({ children, speed = 0.5 }: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div 
        style={{ y }} 
        className="relative z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-900 pointer-events-none"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1])
        }}
      />
    </div>
  )
}