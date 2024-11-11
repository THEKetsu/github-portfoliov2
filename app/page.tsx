'use client'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-xl mb-4">
        I&apos;m a beginner <span>DevSecOps</span> Engineer
      </p>
      <motion.img
        src="/placeholder.svg?height=300&width=300"
        alt="Profile"
        width={300}
        height={300}
        className="rounded-full mx-auto mb-6"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <p className="text-lg">
        Explore my work and experience to see how I can help bring your projects to life.
      </p>
    </motion.div>
  )
}