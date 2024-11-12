'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg mb-4">
        I&apos;m a passionate web developer with a keen eye for design and a love for creating intuitive user experiences. With years of experience in front-end and back-end technologies, I bring ideas to life through clean, efficient code.
      </p>
      <p className="text-lg mb-4">
        My journey in web development started with a curiosity for how things work on the internet. Since then, I&apos;ve honed my skills in various programming languages and frameworks, always staying up-to-date with the latest industry trends.
      </p>
      <p className="text-lg">
        When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community events.
      </p>
    </motion.div>
  )
}