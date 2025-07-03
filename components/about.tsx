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

  const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    { name: "REST API Integration",       icon: "https://cdn-icons-png.flaticon.com/512/6011/6011078.png"
      // plug icon from Flaticon
    },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "RTK Query", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "MangoPay Integration",        icon: "https://cdn-icons-png.flaticon.com/512/4203/4203611.png", // credit card/payment icon
      // plug icon from Flaticon
    },
    { name: "Agile Methodologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    // Python Automation Frameworks
    { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    { name: "BeautifulSoup", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Requests", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
    { name: "Scikit-learn",   icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
    },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    // Additional Skills
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Bash/Shell Scripting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    { name: "Framer Motion",  icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/framer.svg"
    },
    { name: "Socket.IO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
    { name: "WebSockets", icon: "https://cdn-icons-png.flaticon.com/512/3544/3544681.png"
    },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ]

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
                      {skills.map((skill, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="h-5 w-5"
                            onError={(e) => {
                              // Fallback to a generic icon if the devicon fails to load
                              e.currentTarget.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg"
                            }}
                          />
                          <span>{skill.name}</span>
                        </li>
                      ))}
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
