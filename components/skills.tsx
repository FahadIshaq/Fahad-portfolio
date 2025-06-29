"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "C#", level: 75 },
      ],
    },
    {
      category: "Frontend Technologies",
      skills: [
        { name: "ReactJS", level: 90 },
        { name: "React Native", level: 85 },
        { name: "Next.js", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "TailwindCSS", level: 85 },
        { name: "Material UI", level: 80 },
        { name: "SASS", level: 75 },
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "NestJS", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "REST API Integration", level: 85 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Bitbucket", level: 80 },
        { name: "Redux", level: 85 },
        { name: "RTK Query", level: 80 },
        { name: "MangoPay Integration", level: 75 },
        { name: "Agile Methodologies", level: 85 },
        { name: "Jira", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-emerald-500">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-foreground/70 text-lg">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <ul className="space-y-2 text-base text-foreground/80 pl-2">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "Python",
                    "HTML5",
                    "CSS3",
                    "SQL",
                    "Bash/Shell Scripting",
                    "JSON / YAML",
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Frontend Technologies */}
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
                <ul className="space-y-2 text-base text-foreground/80 pl-2">
                  {[
                    "ReactJS",
                    "React Native",
                    "Next.js",
                    "Vue.js",
                    "Angular",
                    "Redux",
                    "RTK / RTK Query",
                    "TailwindCSS",
                    "Material UI",
                    "Bootstrap",
                    "SASS / SCSS",
                    "Framer Motion",
                    "React Hook Form / Formik",
                    "Storybook",
                    "i18n (e.g., react-i18next)",
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Backend & Databases */}
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Backend & Databases</h3>
                <ul className="space-y-2 text-base text-foreground/80 pl-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "NestJS",
                    "MongoDB",
                    "MySQL",
                    "PostgreSQL",
                    "Prisma ORM",
                    "Redis",
                    "Firebase (Auth, Firestore, Hosting)",
                    "Supabase",
                    "REST API Integration",
                    "GraphQL / Apollo Server",
                    "WebSockets / Socket.IO",
                    "Authentication (JWT, Passport.js, Auth0)",
                    "Docker",
                    "Microservices Architecture",
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Dev Tools & Version Control */}
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Dev Tools & Version Control</h3>
                <ul className="space-y-2 text-base text-foreground/80 pl-2">
                  {[
                    "Git",
                    "GitHub",
                    "Bitbucket",
                    "Vite / Webpack",
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Deployment & Infrastructure */}
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Deployment & Infrastructure</h3>
                <ul className="space-y-2 text-base text-foreground/80 pl-2">
                  {[
                    "Vercel",
                    "Netlify",
                    "Heroku",
                    "Nginx / Apache",
                    "AWS / GCP / Azure",
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Project & Workflow Management */}
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Project & Workflow Management</h3>
                <ul className="space-y-2 text-base text-foreground/80 pl-2">
                  {[
                    "Jira",
                    "Agile Methodologies (Scrum, Kanban)",
                    "Confluence",
                    "Technical Project Leadership",
                    "IT Support & Technical Training",
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Security & Optimization */}
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Security & Optimization</h3>
                <ul className="space-y-2 text-base text-foreground/80 pl-2">
                  {[
                    "Cybersecurity Best Practices",
                    "Network Security Management",
                    "OWASP Top 10",
                    "CORS / HTTPS / Helmet.js",
                    "SEO Optimization",
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Testing Tools */}
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Testing Tools</h3>
                <ul className="space-y-2 text-base text-foreground/80 pl-2">
                  {[
                    "Jest",
                    "React Testing Library",
                    "Cypress",
                    "Postman / Insomnia",
                    "Swagger / OpenAPI",
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Payment Integration */}
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Payment Integration</h3>
                <ul className="space-y-2 text-base text-foreground/80 pl-2">
                  {[
                    "MangoPay Integration",
                    "Stripe / PayPal",
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Other Tools & Expertise */}
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Other Tools & Expertise</h3>
                <ul className="space-y-2 text-base text-foreground/80 pl-2">
                  {[
                    "WordPress Development",
                    "CRM Management",
                    "CRM Automation",
                    "Technical Support",
                    "Lighthouse Audits & Performance Optimization",
                    "Code Reviews & Mentorship",
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
