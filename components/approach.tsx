"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Code, Rocket } from "lucide-react"

export function Approach() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const phases = [
    {
      phase: "Phase 1",
      title: "Planning & Strategy",
      description: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },
    {
      phase: "Phase 2",
      title: "Development & Progress Update",
      description: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
      icon: Code,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
    {
      phase: "Phase 3",
      title: "Development & Launch",
      description: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
      icon: Rocket,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-500",
    },
  ]

  return (
    <section id="approach" ref={ref} className="py-20 bg-background/30 relative overflow-hidden">
      {/* Background animated elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-emerald-500">Approach</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              A systematic process that ensures your project is delivered on time, within budget, and exceeds expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                    <CardContent className="p-8 relative overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      {/* Phase number */}
                      <motion.div
                        className={`absolute top-4 right-4 w-12 h-12 ${phase.bgColor} rounded-full flex items-center justify-center text-sm font-bold text-foreground/70 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {index + 1}
                      </motion.div>

                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          className={`w-16 h-16 ${phase.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <IconComponent className={`w-8 h-8 ${phase.iconColor}`} />
                        </motion.div>

                        {/* Phase label */}
                        <motion.p
                          className={`text-sm font-semibold mb-2 bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          {phase.phase}
                        </motion.p>

                        {/* Title */}
                        <motion.h3
                          className="text-xl font-bold mb-4 group-hover:text-emerald-500 transition-colors duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.6 }}
                        >
                          {phase.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          className="text-foreground/70 leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.7 }}
                        >
                          {phase.description}
                        </motion.p>

                        {/* Animated underline */}
                        <motion.div
                          className={`h-0.5 bg-gradient-to-r ${phase.color} mt-4`}
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: index * 0.1 + 1, duration: 0.8 }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mt-16"
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ready to Start Your Project?
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 