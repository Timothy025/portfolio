"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Globe, Download } from "lucide-react"
import Link from "next/link"

export default function About() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jeraldtimothy@gmail.com",
      href: "mailto:jeraldtimothy@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9894659593",
      href: "tel:+919894659593"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Based in India",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/timothy-jerald/",
      href: "https://linkedin.com/in/timothy-jerald/"
    },
    {
      icon: Globe,
      label: "Behance",
      value: "behance.net/timothyjerald",
      href: "https://behance.net/timothyjerald"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image & Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Profile Image */}
              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                <CardContent className="p-8">
                  <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border-2 border-blue-500/30">
                    <div className="text-6xl font-bold text-blue-500/50">TJ</div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <motion.div
                        key={contact.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <contact.icon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          {contact.href ? (
                            <Link
                              href={contact.href}
                              className="text-sm font-medium hover:text-blue-500 transition-colors truncate block"
                              target={contact.href.startsWith('http') ? '_blank' : undefined}
                              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.value}
                            </Link>
                          ) : (
                            <p className="text-sm font-medium">{contact.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Download Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-center"
              >
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Bio */}
              <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 font-space-grotesk">Professional Bio</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      I&apos;m Timothy Jerald Xavier, a creative and user-centric UI/UX Designer with over 2 years of experience turning complex challenges into elegant and engaging user experiences.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      I specialize in SaaS, Web3, and enterprise platforms, and love working across research, design systems, and prototyping. Whether it&apos;s crafting responsive dashboards or animating micro-interactions, I bring a blend of logic and creativity into every pixel.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 font-space-grotesk">Skills & Expertise</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "UI/UX Design",
                      "Product Design",
                      "Figma",
                      "Prototyping",
                      "Design Systems",
                      "User Research",
                      "Responsive Design",
                      "Micro-interactions"
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                        className="flex items-center space-x-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience Highlights */}
              <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 font-space-grotesk">Experience Highlights</h3>
                  <div className="space-y-4">
                    {[
                      "2+ years of UI/UX design experience",
                      "Specialized in SaaS and Web3 platforms",
                      "Expert in design systems and prototyping",
                      "Passionate about meaningful user experiences"
                    ].map((highlight, index) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">{highlight}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 