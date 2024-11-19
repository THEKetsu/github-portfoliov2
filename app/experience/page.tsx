'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Building2, Calendar, GraduationCap, Briefcase, FolderGit2, Zap } from 'lucide-react'
import timelineData from './timelineData.json'
const hideScrollbarClass = "scrollbar-hide"

const globalStyles = `
  .${hideScrollbarClass} {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .${hideScrollbarClass}::-webkit-scrollbar {
    display: none;
  }
`

const totalDuration = timelineData.reduce((sum, item) => sum + item.duration, 0)

const getIcon = (type: string) => {
  switch (type) {
    case 'education':
      return GraduationCap
    case 'project':
      return FolderGit2
    case 'work':
    default:
      return Briefcase
  }
}
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Legend = () => (
  <div className="flex flex-wrap justify-center gap-4 mb-8 pt-4">
    {['education', 'project', 'work'].map((type) => {
      const Icon = getIcon(type)
      return (
        <div key={type} className="flex items-center">
          <Icon className={`w-6 h-6 mr-2 ${
            type === 'education' ? 'text-blue-500' :
            type === 'project' ? 'text-green-500' :
            'text-primary'
          }`} />
          <span className="capitalize">{type}</span>
        </div>
      )
    })}
  </div>
)

export default function EnhancedTimeline() {
  useTheme()
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  useEffect(() => {
    const styleElement = document.createElement('style')
    styleElement.textContent = globalStyles
    document.head.appendChild(styleElement)
    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  return (
<div className="min-h-screen flex flex-col w-full">
  <Legend />
  <div className="flex-grow flex items-center overflow-x-auto scrollbar-hide px-4">
    <div className="relative w-full py-20">
      <div className="absolute left-0 right-0 h-1 bg-primary/30 top-1/2 transform -translate-y-1/2" />
      <div className="flex justify-between items-center w-full">
        {timelineData.map((item, index) => {
          const Icon = getIcon(item.type);
          const [year, month] = item.startDate.split('-');
          const monthName = monthNames[parseInt(month, 10) - 1];
          return (
            <div 
              key={item.id} 
              className="flex flex-col items-center relative"
              style={{ 
                flexBasis: `${(item.duration / totalDuration) * 100}%`,
                minWidth: '120px',
              }}
            >
              <motion.button
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary font-bold text-xl z-10 border border-primary/50 shadow-lg hover:shadow-primary/30 transition-all duration-300 ${
                  item.type === 'education' ? 'bg-blue-500/20' :
                  item.type === 'project' ? 'bg-green-500/20' :
                  'bg-primary/20'
                }`}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(var(--primary), 0.3)' }}
                onClick={() => setSelectedItem(item.id === selectedItem ? null : item.id)}
                aria-label={`View details for ${item.title}`}
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.button>
              <motion.p 
                className="mt-2 text-sm text-primary/80 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {`${monthName} ${year}`} {/* Display month name and year */}
              </motion.p>
              <AnimatePresence>
                {selectedItem === item.id && (
                  <motion.div
                    className={`absolute w-72 sm:w-96 bg-card/90 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg border border-primary/20 z-20
                      ${index % 2 === 0 ? 'top-full mt-4' : 'bottom-full mb-4'}`}
                    initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: index % 2 === 0 ? -20 : 20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-semibold text-primary mb-2">{item.title}</h2>
                    <div className="flex items-center mb-2">
                      {item.type === 'work' && <Building2 className="w-4 h-4 mr-2 text-secondary" />}
                      {item.type === 'education' && <GraduationCap className="w-4 h-4 mr-2 text-blue-500" />}
                      {item.type === 'project' && <FolderGit2 className="w-4 h-4 mr-2 text-green-500" />}
                      <p className="text-secondary">{item.company || item.institution || item.projectName}</p>
                    </div>
                    <div className="flex items-center mb-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <p>{item.period}</p>
                    </div>
                    <p className="text-card-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech, i) => (
                        <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center">
                          <Zap className="w-3 h-3 mr-1" />
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
          );
        })}
      </div>
    </div>
  </div>
</div>
  )
}