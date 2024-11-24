'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Code, Shield, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 mt-8">
      <motion.div
        className="max-w-6xl w-full flex flex-col gap-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <motion.div
            className="relative w-full md:w-1/3 aspect-square h-500"
            initial={{ scale: 0.5, x: -50 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/quentin-bender.io/profile.jpg"
              alt="Profile"
              fill
              className="object-cover shadow-lg rounded-lg"
            />
          </motion.div>
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <motion.h1 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Quentin BENDER
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Ingénieur DevSecOps débutant, passionné par la cybersécurité et le développement web.
            </motion.p>
            <motion.div 
              className="text-lg space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p>
                Récemment diplômé en cybersécurité, je suis prêt à mettre mes compétences au service de vos projets innovants.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Mes Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-6 w-6" />
                  DevSecOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sécurité intégrée au développement</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-6 w-6" />
                  Full Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Développement web complet</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-6 w-6" />
                  Web In Progress...
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sites responsifs et performants</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

      </motion.div>
      
      {/* Footer section */}
      <motion.div
        className="mt-16 w-full max-w-6xl flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="w-full flex flex-wrap justify-center items-center gap-8 mb-8">
          <Image
            src="/quentin-bender.io/logo_school.png"
            alt="Logo de l'école"
            width={200}
            height={100}
            className="object-contain shadow-lg rounded-lg"
          />
          <div className="flex items-center space-x-4">
            <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400">
          © 2023 Quentin Bender. Tous droits réservés.
        </p>
      </motion.div>
    </div>
  )
}

