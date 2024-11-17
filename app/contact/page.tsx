'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from 'lucide-react';
import NextLink from 'next/link';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      
      <form action="https://formspree.io/f/xwpkqedo" method="POST" className="space-y-4 max-w-md mx-auto">
        <Input placeholder="Your Name" name="name" />
        <Input type="email" placeholder="Your Email" name="email" />
        <Textarea placeholder="Your Message" name="message" />
        <Button type="submit" className="w-full">Send Message</Button>
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
