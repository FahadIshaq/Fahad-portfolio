"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-8 bg-background/90 backdrop-blur-sm border-t border-border/20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-6  transform -translate-x-1/2"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-emerald-500/50 bg-background hover:bg-emerald-500/10"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-emerald-500" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent mb-4"
          >
            Fahad Ishaq
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 mb-6"
          >
            <a
              href="https://github.com/FahadIshaq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 p-2 rounded-full hover:bg-emerald-500/10 transition-colors border border-border hover:border-emerald-500/50"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/ishaq-fahad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 p-2 rounded-full hover:bg-emerald-500/10 transition-colors border border-border hover:border-emerald-500/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:fa20bcs017@gmail.com"
              className="bg-background/80 p-2 rounded-full hover:bg-emerald-500/10 transition-colors border border-border hover:border-emerald-500/50"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-foreground/60 text-sm"
          >
            <p>© {new Date().getFullYear()} Fahad Ishaq. All rights reserved.</p>
            <p className="mt-1">Built with Next.js, Tailwind CSS, and Framer Motion</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
