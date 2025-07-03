"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-emerald-500">Touch</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-foreground/70 text-lg">Have a question or want to work together?</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="space-y-6">
                <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:fa20bcs017@gmail.com"
                          className="text-foreground/70 hover:text-emerald-500 transition-colors"
                        >
                          fa20bcs017@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:+923405955570"
                          className="text-foreground/70 hover:text-emerald-500 transition-colors"
                        >
                          +92-340-5955570
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Location</h3>
                        <p className="text-foreground/70">Islamabad, Pakistan</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/10 p-3 rounded-full">
                        <Download className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Resume</h3>
                        <button
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/fahad_cv.pdf';
                            link.download = 'Fahad Ishaq CV.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                          className="text-foreground/70 hover:text-emerald-500 transition-colors underline"
                        >
                          Download CV
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2">
              <Card className="border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg overflow-hidden h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="border-border/50 bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          required
                          className="border-border/50 bg-background/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subject"
                        required
                        className="border-border/50 bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        required
                        className="border-border/50 bg-background/50 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
