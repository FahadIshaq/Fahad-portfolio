"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Typed from "typed.js"

export function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Software Engineer",
          "Associate Frontend Developer",
          "React Developer",
          "Next.js Developer",
          "React Native Developer",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-10">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-600 blur-xl opacity-20 rounded-full" />
              <img
                src="/profile.jpeg"
                alt="Fahad Ishaq"
                className="w-48 h-48 rounded-full border-4 border-emerald-500/20 object-cover relative z-10"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-2"
          >
            Fahad Ishaq
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-xl italic text-emerald-600 mb-2"
          >
            Anyone can build solutions — <span className="font-semibold not-italic text-emerald-700">I build them better.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-foreground/80 mb-6 h-10"
          >
            I&apos;m a <span ref={typedRef} className="text-emerald-500"></span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-foreground/70 max-w-2xl mb-8 text-lg"
          >
            Passionate and detail-oriented Software Engineer with hands-on experience in full stack development and IT project management. I specialize in building scalable, high-performance applications using modern JavaScript technologies like React, Node.js, and Next.js. From concept to deployment, I enjoy turning complex ideas into clean, efficient code that powers real-world solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-500/50 hover:bg-emerald-500/10"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/FahadIshaq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 p-3 rounded-full hover:bg-emerald-500/10 transition-colors border border-border hover:border-emerald-500/50"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ishaq-fahad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 p-3 rounded-full hover:bg-emerald-500/10 transition-colors border border-border hover:border-emerald-500/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:fa20bcs017@gmail.com"
              className="bg-background/80 p-3 rounded-full hover:bg-emerald-500/10 transition-colors border border-border hover:border-emerald-500/50"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
