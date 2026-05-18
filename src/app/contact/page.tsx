"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin, Globe, Send, Download } from "lucide-react"
import Link from "next/link"
import { downloadResume } from "@/lib/utils"

export default function Contact() {
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
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/timothy-jerald/",
      color: "hover:text-blue-500"
    },
    {
      icon: Globe,
      label: "Behance",
      href: "https://behance.net/timothyjerald",
      color: "hover:text-blue-600"
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start a project or just want to chat? I&apos;d love to hear from you.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold font-space-grotesk">
                    Send a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="border-muted-foreground/30 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-muted-foreground/30 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="border-muted-foreground/30 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="border-muted-foreground/30 focus:border-blue-500 resize-none"
                    />
                  </div>
                  
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Unified Profile & Contact Card */}
              <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm overflow-hidden relative">
                <CardContent className="p-0">
                  <div className="h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 w-full" />
                  <div className="px-8 pb-8 -mt-16 flex flex-col items-center">
                    <div className="p-1 bg-background rounded-full shadow-lg">
                      <img 
                        src="/profile.JPG" 
                        alt="Timothy Jerald Xavier" 
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background bg-muted"
                      />
                    </div>
                    <h3 className="text-2xl font-bold font-space-grotesk mt-4">Timothy Jerald Xavier</h3>
                    <p className="text-sm font-medium text-blue-500 mt-1">Product Designer & Developer</p>
                    
                    <div className="flex items-center space-x-3 mt-4 text-sm text-muted-foreground">
                      <div className="flex items-center"><MapPin className="w-4 h-4 mr-1"/> India</div>
                      <span>•</span>
                      <div className="flex items-center text-green-500"><div className="w-2 h-2 bg-green-500 rounded-full mr-2" /> Available for work</div>
                    </div>

                    <div className="w-full h-px bg-border my-6" />

                    <div className="w-full space-y-4">
                      {contactInfo.map((contact) => (
                        <div key={contact.label} className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center mr-4">
                            <contact.icon className="w-5 h-5 text-blue-500" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">{contact.label}</p>
                            {contact.href ? (
                              <Link href={contact.href} className="text-sm font-medium hover:text-blue-500 transition-colors">
                                {contact.value}
                              </Link>
                            ) : (
                              <p className="text-sm font-medium">{contact.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="w-full h-px bg-border my-6" />

                    <div className="w-full flex justify-between items-center">
                      <div className="flex space-x-2">
                        {socialLinks.map((social) => (
                          <Link
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-muted`}
                          >
                            <social.icon className="w-5 h-5" />
                          </Link>
                        ))}
                      </div>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={downloadResume}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Resume CV
                      </Button>
                    </div>
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