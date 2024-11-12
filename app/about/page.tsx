'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-lg mb-4">
          I am a recent graduate with a degree in engineering, specializing in cybersecurity from ISEN (Institut Supérieur de l&apos;Électronique et du Numérique)[^1]. This field has particularly attracted me, thanks in large part to my father&apos;s influence and various videos on the subject.
        </p>
        <p className="text-lg mb-4">
          Gradually, I began to take a more serious interest in the subject by attempting cybersecurity challenges on a well-known website called Root-me[^2]. Initially, the challenges were extremely difficult as I was starting from almost no background in terms of computer science knowledge.
        </p>
        <p className="text-lg mb-4">
          However, over the years, with the various courses I&apos;ve taken, I&apos;ve begun to solve challenges more easily. This progress has also sparked my interest in staying updated with news related to the world of digital development.
        </p>
        <p className="text-lg">
          My journey in cybersecurity has been one of continuous learning and growth. From struggling with basic concepts to now being able to tackle complex challenges, I&apos;ve developed a deep appreciation for the field and its importance in our increasingly digital world.
        </p>
      </motion.div>
      <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
        <p>[^1]: <Link href="https://isen-mediterranee.fr" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ISEN - Institut Supérieur de l&apos;Électronique et du Numérique</Link></p>
        <p>[^2]: <Link href="https://www.root-me.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Root-me - Hacking and Information Security learning platform</Link></p>
      </div>
    </motion.div>
  )
}