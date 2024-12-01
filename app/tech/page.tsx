'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '@/contexts/language-context'
import { translations } from '../i18n/translations'

const technologies = [
  'React', 'TypeScript', 'Next.js', 'Python',
  'Rust', 'Gitlab', 'Docker', 'Kubernetes', 
  'Datadog', 'Grafana', 'Bash', 'Ansible', 'Web(CSS/HTML)', 'Proxmox',
  'Windows', 'PKCS11', 'UI(egui)'
]

const projects = [
  { id: 1, name: 'PKI Dashboard', techs: ['Rust', 'Web(CSS/HTML)', 'Docker'] },
  { id: 2, name: 'Portfolio Website', techs: ['Next.js', 'TypeScript'] },
  { id: 3, name: 'BIFROST', techs: ['Rust', 'Kubernetes', 'Docker', 'Grafana'] },
  { id: 4, name: 'RCT Project', techs: ['React', 'Github'] },
  { id: 5, name: 'Data Centric Security', techs: ['Rust', 'UI(egui)', 'Windows','PKCS11'] },
]

const colorMap : Record<string, string> = {
  'React': 'bg-blue-500',
  'TypeScript': 'bg-blue-700',
  'Next.js': 'bg-black',
  'Python': 'bg-yellow-500',
  'Rust': 'bg-orange-600',
  'Gitlab': 'bg-orange-500',
  'Docker': 'bg-blue-600',
  'Kubernetes': 'bg-blue-400',
  'Datadog': 'bg-purple-600',
  'Grafana': 'bg-orange-400',
  'Bash': 'bg-gray-700',
  'Ansible': 'bg-red-600',
  'Web(CSS/HTML)': 'bg-pink-500',
  'Proxmox': 'bg-green-600',
  'Windows': 'bg-blue-900',
  'PKCS11': 'bg-gray-900',
  'UI(egui)': 'bg-gray-800'
}

export default function Tech() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations].tech

  const filteredProjects = useMemo(() => 
    selectedTech
      ? projects.filter(project => project.techs.includes(selectedTech))
      : projects
  , [selectedTech])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
      <div className="flex flex-wrap gap-4">
        {technologies.map((tech) => (
          <Button
            key={tech}
            variant={selectedTech === tech ? "default" : "outline"}
            onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
            className={`${selectedTech === tech ? colorMap[tech] : ''} text-white`}
          >
            {tech}
          </Button>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6">
        {selectedTech ? `${t.projectsUsing} ${selectedTech}` : t.allProjects}
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
                  {t.technologies}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className={`${colorMap[tech]} text-white text-xs font-semibold px-2 py-1 rounded`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">{t.viewProject}</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500">{t.noProjects}</p>
      )}
    </motion.div>
  )
}
