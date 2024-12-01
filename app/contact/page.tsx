'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from 'lucide-react';
import NextLink from 'next/link';
import { useLanguage } from '@/contexts/language-context'
import { translations } from '../i18n/translations'

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations].contact

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
      
      <form action="https://formspree.io/f/xwpkqedo" method="POST" className="space-y-4 max-w-md mx-auto">
        <Input placeholder={t.name} name="name" />
        <Input type="email" placeholder={t.email} name="email" />
        <Textarea placeholder={t.message} name="message" />
        <Button type="submit" className="w-full">{t.send}</Button>
      </form>

      
      <div className="flex justify-center space-x-4 mt-8">
        <NextLink href="https://github.com/THEKetsu" passHref>
          <Button variant="outline" size="icon" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
          </Button>
        </NextLink>
        <NextLink href="https://www.linkedin.com/in/quentin-bender-8252241b8/" passHref>
          <Button variant="outline" size="icon"  rel="noopener noreferrer">
            <Linkedin className="h-4 w-4" />
          </Button>
        </NextLink>
        <NextLink href="bender.quent@outlook.fr" passHref>
          <Button variant="outline" size="icon" rel="noopener noreferrer">
            <Mail className="h-4 w-4" />
          </Button>
        </NextLink>
      </div>
    </motion.div>
  );
}