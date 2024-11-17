'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-8">
      <motion.div
        className="max-w-8xl w-full flex flex-col md:flex-row items-center md:items-start gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-full md:w-1/2 aspect-square"
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
        <div className="w-full md:w-1/2 flex flex-col justify-center">
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
            I&apos;m a beginner <span className="font-semibold text-blue-600">DevSecOps Engineer.</span>
          </motion.p>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            I am a young graduate of an engineering school in the field of cybersecurity. I continue my career as a DevSecOps engineer but I am also interested in many other areas including web development, UX etc.... . 
          </motion.p>
          <motion.p
            className="text-lg mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Apart from the computer world I also like golf, cooking & video games. 
          </motion.p>
          <motion.div
            className="mt-8 flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Image
              src="/quentin-bender.io/logo_school.png"
              alt="School Logo"
              width={200}
              height={100}
              className="object-contain mr-4 shadow-lg rounded-lg "
            />
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}