'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const technologies = [
  'React', 'Node.js', 'TypeScript', 'Next.js', 'Python', 'GraphQL'
]

const projects = [
  { id: 1, name: 'E-commerce Platform', techs: ['React', 'Node.js', 'GraphQL'] },
  { id: 2, name: 'Portfolio Website', techs: ['Next.js', 'TypeScript'] },
  { id: 3, name: 'Data Analysis Tool', techs: ['Python', 'TypeScript'] },
  { id: 4, name: 'Mobile App', techs: ['React', 'GraphQL'] },
]

export default function Tech() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const filteredProjects = selectedTech
    ? projects.filter(project => project.techs.includes(selectedTech))
    : projects

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold mb-6">My Tech Stack</h1>
      <div className="flex flex-wrap gap-4">
        {technologies.map((tech) => (
          <Button
            key={tech}
            variant={selectedTech === tech ? "default" : "outline"}
            onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
          >
            {tech}
          </Button>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6">
        {selectedTech ? `Projects using ${selectedTech}` : 'All Projects'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Technologies used: {project.techs.join(', ')}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Project</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500">No projects found for the selected technology.</p>
      )}
    </motion.div>
  )
}