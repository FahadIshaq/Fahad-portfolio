"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
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
      description: "A modern real estate platform for property listings, search, and management in the UAE.",
      features: [
        "Advanced property search and filtering",
        "Interactive map integration",
        "User dashboards for agents and buyers",
        "Responsive design for mobile and desktop",
      ],
      image: "/bayuti.png",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "TailwindCSS", "Mapbox"],
      github: "#",
      demo: "https://bayuti.com/",
      type: "Web App",
    },
    {
      title: "Ask Asif",
      description: "A business and service platform connecting users with professionals and service providers.",
      features: [
        "Service provider directory",
        "Booking and inquiry system",
        "User reviews and ratings",
        "Mobile app integration",
      ],
      image: "/askasif.png",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "TailwindCSS", "Redux"],
      github: "#",
      demo: "https://www.askasif.com",
      type: "Web App",
    },
    {
      title: "Victor Harris Commercial",
      description: "A luxury property and real estate website for the London market.",
      features: [
        "High-end property listings",
        "Virtual tours and galleries",
        "Agent and client dashboards",
        "SEO optimized for real estate",
      ],
      image: "/victorharris.png",
      technologies: ["WordPress", "Next.js", "React", "SEO Tools", "Google Maps API"],
      github: "#",
      demo: "https://victorharris.co.uk",
      type: "Web App",
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
      title: "Multimarkt",
      description: "A marketplace platform for buying and selling products in Belgium.",
      features: [
        "Product listings and search",
        "User registration and profiles",
        "Secure payment integration",
        "Admin dashboard for management",
      ],
      image: "/multimarkt.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe API"],
      github: "#",
      demo: "http://Multimarkt.be",
      type: "Web App",
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
      title: "Vopox",
      description: "A business platform for showcasing services and client projects in Belgium.",
      features: [
        "Service showcase",
        "Client project galleries",
        "Contact forms",
        "Responsive design",
      ],
      image: "/vopox.png",
      technologies: ["WordPress", "Elementor", "Contact Form 7", "SEO Tools"],
      github: "#",
      demo: "https://www.vopox.be",
      type: "Web App",
    },
    {
      title: "Arabic Learning Platform",
      description: "AI-powered Arabic learning platform with personalized lessons, real-time conversation, and adaptive learning paths.",
      features: [
        "AI-powered personalized lessons",
        "Real-time conversation practice",
        "Listening and writing exercises",
        "Progress tracking and achievements",
      ],
      image: "/arabic.png",
      technologies: ["Next.js", "React", "Node.js", "TailwindCSS", "OpenAI API"],
      github: "#",
      demo: "https://arabic-llm-lotc.vercel.app/",
      type: "Web App",
    },
    {
      title: "MotorMart",
      description: "MotorMart is an e-commerce platform specializing in auto parts and accessories, offering a seamless shopping experience for car enthusiasts and professionals. The platform features a wide range of products, secure payment methods, and dedicated customer support.",
      features: [
        "Extensive catalog of auto parts and accessories",
        "Free shipping on orders over $75",
        "Secure online payments",
        "Customer reviews and product ratings",
        "In-store or curbside pickup options",
        "Membership club with exclusive offers",
        "24/7 customer service and expert support",
      ],
      image: "/motormart.png",
      technologies: ["Wix", "JavaScript", "E-commerce integrations", "Responsive Web Design"],
      github: "#",
      demo: "https://faisalwcon.wixsite.com/motormart",
      type: "E-commerce Platform",
    },
    {
      title: "BeWell",
      description:
        "A digital mental health platform, developed using React-Native for the frontend and Node.js with Express.js for backend functionalities. Incorporated advanced technologies such as Flask for serving machine learning APIs. Utilized MongoDB as a database management system to securely store and manage user data, ensuring data privacy and compliance. Designed to bridge the treatment gap in mental health care by offering accessible, effective, and personalized mental health services globally.",
      features: [
        "CBT sessions",
        "Real-time progress tracking",
        "Community support forums",
        "Personalized mental health services",
        "Machine learning API integration",
      ],
      image: "/bewell.png",
      technologies: [
        "React-Native",
        "Node.js",
        "TypeScript",
        "CSS styled Components",
        "Redux",
        "MongoDB",
        "Python",
        "FastAPI",
      ],
      github: "#",
      demo: "#",
      type: "Final Year Project",
    },
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
                    <div className="overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform"
                        whileHover={{ scale: 1.05 }}
                      />
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
