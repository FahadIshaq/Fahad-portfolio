"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Approach } from "@/components/approach"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import { Loader } from "@/components/loader"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      <ParticlesBackground />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Approach />
      <Contact />
      <Footer />
    </main>
  )
}
