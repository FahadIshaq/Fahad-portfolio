"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, GraduationCap, User } from "lucide-react"

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" ref={ref} className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-emerald-500">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-foreground/70 text-lg">Get to know more about me and my background</p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10">
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-full">
                    <User className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      I&apos;m a passionate and detail-oriented Software Engineer with hands-on experience in full stack development and IT project management. I specialize in building scalable, high-performance applications using modern JavaScript technologies like React, Node.js, and Next.js.
                    </p>
                    <p className="text-foreground/70 leading-relaxed mt-3">
                      Known for turning complex technical requirements into efficient, maintainable code, I approach every project with a focus on performance, usability, and clean architecture. Skilled in Agile practices, I work with intention and adaptability, continuously refining processes to boost efficiency and deliver on time. I&apos;m committed to staying current with emerging technologies and always eager to learn, experiment, and bring fresh ideas to the table.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10">
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Education</h3>
                    <div className="mb-2">
                      <h4 className="font-medium">Bachelors in Computer Science</h4>
                      <p className="text-foreground/70">Comsats University, Islamabad</p>
                      <p className="text-foreground/70">CGPA: 3.10/4.00</p>
                      <p className="text-foreground/70">Graduated: June 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-full">
                    <Code className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-foreground/70">
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>JavaScript</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>TypeScript</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>Python</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>HTML</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>CSS</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>ReactJS</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>React Native</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>Next.js</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>Bootstrap</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>TailwindCSS</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>Material UI</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>SASS</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>Node.js</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>Express.js</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>NestJS</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>MongoDB</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>MySQL</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>Git</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>GitHub</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>Bitbucket</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>REST API Integration</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>Redux</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>RTK Query</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>MangoPay Integration</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>Agile Methodologies</span></li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-500 rounded-full"></span><span>Jira</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
