"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
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

  const projects = [
    
   
    {
      title: "Bayuti",
      description: "A modern real estate platform for property listings, search, and management in the United Kingdom.",
      features: [
        "Advanced property search and filtering",
        "Interactive map integration",
        "User dashboards for agents and buyers",
        "Responsive design for mobile and desktop",
      ],
      image: "/main1.png",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "TailwindCSS", "Mapbox"],
      github: "#",
      demo: "https://bayuti.com/",
      type: "Web App / Mobile App",
    },
    {
      title: "AskAsif",
      description: "A premium commercial real estate platform specializing in office space solutions across London, offering personalized property search, virtual meetings, and end-to-end leasing and advisory services.",
      features: [
        "Comprehensive property search by town, city, or postcode",
        "Virtual meeting scheduling with office space specialists",
        "Detailed property listings with pricing and location info",
        "Services including property rentals, sales, market insights, relocation support, and legal/financial advisory",
        "User-friendly interface with FAQ and enquiry submission",
        "Client testimonials and Google review integration",
        "Responsive and mobile-optimized web app"
      ],
      image: "/askasif.png",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "PostgreSQL",
        "TailwindCSS",
        "Interactive Maps & Scheduling System"
      ],
      github: "#",
      demo: "https://askasif.com",
      type: "Web App"
    }
,    
    {
      title: "Victor Harris Commercial",
      description: "A luxury real estate platform showcasing high-end commercial and residential properties in London, featuring immersive galleries, virtual tours, and advanced client-agent interactions.",
      features: [
        "Premium property listings with detailed information",
        "Virtual tours and image galleries for properties",
        "Agent and client dashboards for property management and inquiries",
        "SEO-optimized for London real estate searches",
        "Integrated Google Maps for property locations",
        "Responsive and mobile-friendly design"
      ],
      image: "/main3.png",
      technologies: [
        "WordPress",
        "SEO Tools",
        "Google Maps API",
        "Custom Dashboards"
      ],
      github: "#",
      demo: "https://victorharris.co.uk",
      type: "Web App"
    },    
    {
      title: "My Specialist Appinion (MSA)",
      description: "A comprehensive healthcare platform providing UK-based specialist medical consultations via web and mobile apps, offering secure messaging, document uploads, and instant second opinions.",
      features: [
        "Web application for patient access using Next.js",
        "Mobile apps (iOS & Android) built with React Native",
        "Admin panel for managing specialists, appointments, and patients",
        "Secure document upload and storage",
        "Real-time messaging with Firebase and custom queuing system",
        "Personalized specialist recommendations",
        "GDPR-compliant privacy and data protection",
        "Affordable pricing plans and instant access to UK specialists"
      ],
      image: "/msa-app.png",
      technologies: [
        "Next.js",
        "React Native",
        "Express.js",
        "PostgreSQL",
        "Firebase Messaging",
        "Custom Queue System (like Redis MQ)",
        "TypeScript",
        "REST APIs",
        "JWT Authentication"
      ],
      github: "#",
      demo: "https://myspecialistappinion.com",
      type: "Web / Mobile"
    },
    {
      title: "Mayfair Agent",
      description: "A real estate agent platform for property management and client engagement.",
      features: [
        "Agent and client portals",
        "Property management tools",
        "Automated email notifications",
        "Responsive and modern UI",
      ],
      image: "/mayfairagent.png",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "TailwindCSS"],
      github: "#",
      demo: "https://mayfairagent.co.uk/",
      type: "Web App",
    },
    {
      title: "The Halimah Project",
      description:
        "A faith-centered mentorship platform empowering Muslim youth through academic, professional, social, and spiritual guidance. The Halimah Project connects students with trained mentors to build confidence, character, and a strong sense of community.",
      features: [
        "Weekly mentorship sessions",
        "Academic support and study skills",
        "Life skills and leadership development",
        "Faith-based guidance rooted in Islamic values",
        "Mentor and mentee matching system",
        "Community-building activities and events",
        "Donation and volunteer involvement system",
        "Email subscriptions for updates and programs",
      ],
      impact: [
        "494+ mentees supported",
        "296+ trained mentors",
        "4 active chapters",
        "2966+ hours of mentorship delivered",
      ],
      outcomes: [
        "93% mentees return for another semester",
        "87% continue the following year",
        "95% report increased confidence",
        "91% strengthened connection to faith",
      ],
      image: "/main2.png",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Node.js",
        "MongoDB",
        "Stripe (Donations)",
        "Email Subscription Service",
      ],
      demo: "https://www.halimahproject.org",
      github: "#",
      type: "Non-Profit Web Platform",
    },    
    {
      title: "We Serve UAE",
      description: "A service provider platform for connecting users with local businesses in the UAE.",
      features: [
        "Business directory",
        "Service booking system",
        "User reviews and ratings",
        "Mobile-friendly design",
      ],
      image: "/weserveuae.png",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "TailwindCSS"],
      github: "#",
      demo: "https://weserveuae.com/",
      type: "Web App",
    },
    {
      title: "Honest Home Spaces",
      description: "A home spaces and property website for listings and interior design inspiration.",
      features: [
        "Property and interior listings",
        "Gallery and inspiration boards",
        "Contact forms for inquiries",
        "SEO optimized content",
      ],
      image: "/home.png",
      technologies: ["WordPress", "Elementor", "SEO Tools", "Contact Form 7"],
      github: "#",
      demo: "https://honesthomespaces.co.uk/",
      type: "Web App",
    },
    {
      title: "PC Plastering and Painting",
      description: "A website for plastering and painting services in the UK.",
      features: [
        "Service listings",
        "Online quote request",
        "Gallery of completed projects",
        "Contact and booking forms",
      ],
      image: "/paint.png",
      technologies: ["WordPress", "Elementor", "Contact Form 7", "SEO Tools"],
      github: "#",
      demo: "https://pcplasteringandpainting.co.uk/",
      type: "Web App",
    },
    {
      title: "Epic Backyards of Texas",
      description: "A lead-generation business website for a Texas-based company specializing in high-end backyard playground equipment, including playsets, basketball goals, and trampolines.",
      features: [
        "Product showcase for playgrounds, basketball goals, and trampolines",
        "Request a quote and contact forms",
        "Gallery for completed installations",
        "Local business information with map, address, and phone",
        "Mobile-friendly and responsive design",
        "Warranty and product brand highlighting"
      ],
      image: "/epic-backyards-texas.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "NestJS",
        "PostgreSQL",
        "TypeScript",
        "TailwindCSS",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SEO Optimization"
      ],
      github: "#",
      demo: "https://epicbackyardstexas.com",
      type: "Business Website"
    }
,    
{
  title: "Arabic Learning Platform",
  description: "AI-powered Arabic learning platform offering personalized lessons, real-time conversation practice, and adaptive learning paths for efficient language mastery.",
  features: [
    "AI-driven personalized lesson plans tailored to each learner",
    "Real-time conversation practice with instant AI feedback",
    "Listening, reading, and writing exercises",
    "Progress tracking with achievements and gamification"
  ],
  image: "/arabic.png",
  technologies: ["Next.js", "React", "Node.js", "TailwindCSS", "OpenAI API", "AI & Adaptive Learning Algorithms"],
  github: "#",
  demo: "https://arabic-llm-lotc.vercel.app/",
  type: "AI-Powered Web App"
}
,
    
{
  title: "Nour Endowment",
  description: "A sustainable education endowment platform that allows donors to invest in marginalized communities, with contributions professionally invested and returns used to fund scholarships and educational initiatives.",
  features: [
    "Recurring donations with principal preservation",
    "Investment growth calculator with 50-year projections",
    "Scholarship allocation tracking and impact visualization",
    "Tiered donor system (Founding Members, Impact Partners, Legacy Builders)",
    "Donor testimonials and community engagement",
    "Transparent reporting and educational impact tracking",
    "Responsive web design for easy access and contribution"
  ],
  image: "/nour-endowment.png",
  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "TailwindCSS",
    "Interactive Charts & Data Visualization"
  ],
  github: "#",
  demo: "https://nourendowment.org/",
  type: "Web App"
}
,
  ]

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-emerald-500">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-foreground/70 text-lg">Showcasing my recent work and applications</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <div className="absolute top-2 right-2 z-10">
                      <Badge variant="secondary" className="bg-emerald-500/90 text-white border-none">
                        {project.type}
                      </Badge>
                    </div>
                    <div className="overflow-hidden relative aspect-video bg-muted/20 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute inset-0"
                        style={{ 
                          transform: "translateZ(0)",
                          WebkitTransform: "translateZ(0)",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden"
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain select-none"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          quality={85}
                          priority={false}
                          draggable={false}
                          style={{ 
                            objectFit: "contain",
                            transform: "translateZ(0)",
                            WebkitTransform: "translateZ(0)"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-foreground/70 text-sm flex items-start">
                            <span className="h-2 w-2 bg-emerald-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-emerald-500/50 hover:bg-emerald-500/10 flex items-center gap-2"
                        asChild
                      >
                        {/* <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          <span>Code</span>
                        </a> */}
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white flex items-center gap-2"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
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
