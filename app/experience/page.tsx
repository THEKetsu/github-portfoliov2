'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    title: 'Senior Web Developer',
    company: 'Tech Solutions Inc.',
    period: '2020 - Present',
    description: 'Lead development of complex web applications using React and Node.js.',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Innovations Co.',
    period: '2017 - 2020',
    description: 'Developed and maintained various web applications using MERN stack.',
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    period: '2015 - 2017',
    description: 'Assisted in the development of web applications and gained experience in front-end technologies.',
  },
]

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">My Experience</h1>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold">{exp.title}</h2>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.period}</p>
            <p className="mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}