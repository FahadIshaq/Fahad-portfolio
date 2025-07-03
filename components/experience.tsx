"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
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

  const experiences = [
    {
      title: "CTO & Full Stack Developer",
      company: "ASKASIF",
      period: "January 2025 – Present",
      description: [
        "Technical Leadership: Led the entire technology strategy and development team, overseeing architecture decisions and ensuring scalable, maintainable codebase across all platforms.",
        "Full-Stack Development: Built askasif.com from ground up using modern web technologies, implementing responsive design, SEO optimization, and high-performance user interfaces.",
        "Mobile App Development: Developed and maintained ASKASIF mobile applications for both iOS and Android platforms using React Native, ensuring cross-platform compatibility and native performance.",
        "Database Architecture: Designed and implemented comprehensive database management systems using MongoDB and MySQL, optimizing queries and ensuring data integrity and security.",
        "CRM System Development: Built custom CRM management solutions to streamline business operations, automate workflows, and enhance customer relationship tracking.",
        "CI/CD Pipeline Implementation: Established robust continuous integration and deployment pipelines using GitHub Actions, Docker, and cloud deployment strategies for automated testing and deployment.",
        "Team Management: Managed development team, conducted code reviews, implemented best practices, and mentored junior developers to maintain high code quality standards.",
        "Infrastructure Management: Oversaw cloud infrastructure, server management, and DevOps practices to ensure optimal performance and reliability of all systems.",
      ],
      skills: [
        "ReactJS",
        "React Native",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "TypeScript",
        "JavaScript",
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "AWS/Cloud Infrastructure",
        "REST API Development",
        "GraphQL",
        "Redux",
        "TailwindCSS",
        "Material UI",
        "SEO Optimization",
        "Mobile App Development",
        "Database Design",
        "System Architecture",
        "Team Leadership",
        "Project Management",
      ],
    },
    {
      title: "Associate Frontend Developer",
      company: "31 Green Ltd",
      period: "October 2024 - Present",
      description: [
        "Real Estate Platform Development: Contributed to a property investment platform using Next.js and React Native, focusing on performance, scalability, and usability across web and mobile platforms.",
        "UI/UX & Responsiveness: Implemented responsive design principles to ensure seamless user experience across all device types.",
        "Reusable Component Architecture: Designed and built modular, reusable components to accelerate development cycles and maintain consistency throughout the codebase.",
        "State Management & Performance Optimization: Used Redux to manage application state efficiently, enhancing performance and reducing complexity in large-scale interfaces.",
        "Cross-Team Collaboration: Worked closely with designers and backend developers to ensure fully integrated and cohesive product delivery.",
        "Code Quality & Best Practices: Followed modern frontend architecture standards, participated in code reviews, and contributed to maintaining a clean and maintainable codebase.",
        "API Integration: Integrated RESTful APIs for dynamic data rendering and real-time user interaction capabilities.",
      ],
      skills: [
        "ReactJS",
        "React Native",
        "Next.js",
        "Redux",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "SASS",
        "Material UI",
        "REST API Integration",
        "Git",
        "Bitbucket",
        "Jira",
        "RTK",
        "TailwindCSS",
        "Payment Integration via Mangopay",
        "NestJS",
      ],
    },
    {
      title: "Coach & Technical Mentor",
      company: "Independent",
      period: "June 2021 – September 2024",
      description: [
        "Student Mentorship: Provided one-on-one and group coaching sessions on a wide range of software development topics, focusing on practical learning and career guidance.",
        "FYP Supervision: Mentored students through their Final Year Projects (FYPs), helping with planning, implementation, debugging, and documentation of real-world software applications.",
        "AI/ML Training: Conducted hands-on workshops and tutorials on artificial intelligence and machine learning using Python, TensorFlow, and Scikit-learn, guiding model development from dataset preparation to deployment.",
        "Networking Labs: Taught computer networking concepts through Cisco Packet Tracer, helping students simulate network topologies, configure routers/switches, and troubleshoot connectivity.",
        "Project Assistance: Helped students debug code, optimize algorithms, and apply best practices in their academic and personal coding projects.",
        "Tech Stack Exposure: Exposed students to modern tools and languages including Python, JavaScript, React, and basic DevOps concepts.",
      ],
      skills: [
        "Mentorship",
        "Python",
        "AI/ML",
        "TensorFlow",
        "Scikit-learn",
        "ReactJS",
        "JavaScript",
        "Packet Tracer",
        "Networking",
        "Debugging",
        "Project Guidance",
        "Code Review",
        "Teaching",
        "FYP Supervision",
        "Git",
      ],
    },
    
    {
      title: "IT Project Manager & Full Stack Developer",
      company: "Victor Harris Commercial",
      period: "August 2023 – September 2024",
      description: [
        "Digital Marketing and Web Development: Implemented SEO strategies and developed new websites using WordPress and Next.js, enhancing online visibility and user engagement.",
        "CRM and Automation: Managed and automated Handshake CRM system to streamline client interactions and improve management processes.",
        "IT Leadership and Security: Led IT projects with a focus on network security and real-time operations, ensuring robust cybersecurity measures were in place.",
        "Technical Support and Training: Provided ongoing technical support and conducted training sessions to elevate staff technical skills and operational efficiency.",
      ],
      skills: [
        "SEO Optimization",
        "WordPress Development",
        "Next.js Development",
        "CRM Management",
        "CRM Automation",
        "IT Project Leadership",
        "Network Security Management",
        "Cybersecurity Practices",
        "Technical Support",
        "Technical Training",
        "Redux",
        "ReactJS",
        "React Native",
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="text-emerald-500">Experience</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-foreground/70 text-lg">My professional journey and roles</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600 transform md:-translate-x-px"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`mb-12 relative ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                } md:w-1/2`}
              >
                <div
                  className={`absolute top-0 ${
                    index % 2 === 0 ? "left-0 md:left-auto md:right-0 md:-mr-6" : "left-0 md:-ml-6"
                  } mt-1.5 h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center z-10`}
                >
                  <Briefcase className="h-5 w-5 text-emerald-500" />
                </div>

                <Card
                  className={`border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-left">{exp.title}</h3>
                    <p className="text-emerald-500 font-medium mb-4 text-left">{exp.company}</p>

                    <ul className="space-y-2 mb-4 text-left">
                      {exp.description.map((item, i) => {
                        const match = item.match(/^(.*?):\s*(.*)$/);
                        return (
                          <li key={i} className="relative pl-8 text-foreground/70 text-sm leading-relaxed">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 bg-emerald-500 rounded-full"></span>
                            {match ? (
                              <>
                                <span className="font-semibold">{match[1]}:</span> {match[2]}
                              </>
                            ) : item}
                          </li>
                        );
                      })}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
