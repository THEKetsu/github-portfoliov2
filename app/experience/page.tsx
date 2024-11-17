'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Building2, Calendar, Code } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Cybersecurity Engineer',
    company: 'Thales SIX Cyber Defense Solutions(CDS)',
    period: '2023 - 2023',
    description: 'Digital signature using cryptographic object for Sidecar Files Binding Profile in a Data Centric Environment',
    technologies: ['Rust', 'Windows', 'PKCS11', 'UI(egui)', 'Gitlab'],
    duration: 1, // years
    startDate: '2023-01-01',
    endDate: '2023-12-31',
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Thales Digital Identity & Security',
    period: '2023 - 2024',
    description: 'Benchmarking and technological watch for MQTT and TSDB solution. Setting up an infrastructure monitoring alternative using Datadog. Contribution to improving a production chain monitoring project deployed worldwide',
    technologies: ['Python', 'Gitlab', 'React', 'Ansible', 'Datadog', 'Docker', 'MQTT', 'TSDB'],
    duration: 1,
    startDate: '2023-01-01',
    endDate: '2024-12-31',
  },
  {
    id: 3,
    title: 'Product Owner & DevSecOps Lead',
    company: 'Thales Digital Identity & Security',
    period: '2024 - Present',
    description: 'Set up an industrialization and support plan for a real time monitoring project. Support teams in integrating DevSecOps methodologies in order to accelerate the project development cycle while guaranteeing security',
    technologies: ['DevSecOps', 'Ansible', 'Gitlab', 'Bash', 'Flux', 'Datadog'],
    duration: 1, // years
    startDate: '2024-01-01',
    endDate: 'Present',
  },
]

const totalDuration = experiences.reduce((sum, exp) => sum + exp.duration, 0)

export default function Experience() {
  useTheme()
  const [selectedExp, setSelectedExp] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col justify-center p-6 w-full">
      <div className="relative w-[90%] mx-auto">
        <div className="absolute left-0 right-0 h-0.5 bg-primary/30 top-1/2 transform -translate-y-1/2" />
        <div className="flex justify-between relative">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="flex flex-col items-center"
              style={{ 
                flexBasis: `${(exp.duration / totalDuration) * 100}%`,
                flexGrow: 0,
                flexShrink: 0
              }}
            >
              <motion.button
                className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary font-bold text-xl z-10 border border-primary/50 shadow-lg hover:shadow-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(var(--primary), 0.3)' }}
                onClick={() => setSelectedExp(exp.id === selectedExp ? null : exp.id)}
                aria-label={`View details for ${exp.title} at ${exp.company}`}
              >
                <Calendar className="w-8 h-8" />
              </motion.button>
              <motion.p 
                className="mt-2 text-sm text-primary/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {exp.startDate.split('-')[0]}
              </motion.p>
              <AnimatePresence>
                {selectedExp === exp.id && (
                  <motion.div
                    className={`absolute w-80 bg-card/90 backdrop-blur-md p-6 rounded-lg shadow-lg border border-primary/20 ${
                      index % 2 === 0 ? 'top-full mt-4' : 'bottom-full mb-4'
                    }`}
                    initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: index % 2 === 0 ? -20 : 20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-semibold text-primary mb-2">{exp.title}</h2>
                    <div className="flex items-center mb-2">
                      <Building2 className="w-4 h-4 mr-2 text-secondary" />
                      <p className="text-secondary">{exp.company}</p>
                    </div>
                    <div className="flex items-center mb-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <p>{exp.period}</p>
                    </div>
                    <p className="text-card-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center">
                          <Code className="w-3 h-3 mr-1" />
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="w-full h-1 bg-primary/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}