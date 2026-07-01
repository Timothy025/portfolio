"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Download, Mail, Linkedin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { staggerChildren: 0.1 }
  }

  const experience = [
    { role: "Product Designer", company: "Aatral", link: "#" },
    { role: "Product Designer", company: "Tata Elxsi", link: "#" },
    { role: "Product Designer", company: "PixiuAI", link: "#" },
    { role: "Product Designer", company: "PipeIQ", link: "#" },
  ]

  const connect = [
    { label: "LinkedIn", href: "https://linkedin.com/in/timothy-jerald/" },
    { label: "Email", href: "mailto:hello@example.com" },
    { label: "Resume", href: "#", action: "resume" }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#3b82f6]/20 selection:text-foreground pb-24">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Button variant="ghost" size="icon" asChild className="rounded-full bg-background/40 backdrop-blur-md border border-border/40 hover:bg-foreground/5 shadow-lg w-12 h-12">
          <Link href="/">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Button>
      </div>

      <div className="container mx-auto px-6 sm:px-8 pt-32 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-border/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent z-10 pointer-events-none" />
              <img
                src="/tim.png"
                alt="Timothy Jerald Xavier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            animate="animate" 
            className="lg:col-span-7 flex flex-col justify-start pt-4 sm:pt-8"
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <h1 className="text-3xl sm:text-4xl font-normal tracking-tight mb-4 text-foreground">
                Hi, I'm Timothy Jerald Xavier
              </h1>
              <p className="text-base text-muted-foreground mb-8">
                Product Designer ◇ Musician ◇ Engineer
              </p>
              
              <div className="space-y-6 text-lg text-foreground/90 font-light leading-relaxed max-w-2xl">
                <p>
                  I've been a computer science engineer, a musician, and a product designer before this stuck. It's product design, specifically, the slow, careful work of making something complicated feel obvious.
                </p>
                <p>
                  Right now, my focus is on designing B2B SaaS products for energy infrastructure and smart networks, refining complex design systems, and producing music.
                </p>
              </div>
            </motion.div>

            <div className="space-y-16">
              {/* Experience */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-xl font-medium text-foreground mb-6">Experience</h2>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between group">
                    <p className="text-lg text-foreground/90">Product Designer</p>
                    <p className="text-base text-muted-foreground">Steam-a</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between group">
                    <p className="text-lg text-foreground/90">UX Lead (Client)</p>
                    <p className="text-base text-muted-foreground">Sodexo</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between group">
                    <p className="text-lg text-foreground/90">Product Designer</p>
                    <p className="text-base text-muted-foreground">KGX</p>
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-xl font-medium text-foreground mb-6">Education</h2>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between group gap-2">
                    <p className="text-lg text-foreground/90">B.E. Computer Science Engineering</p>
                    <p className="text-base text-muted-foreground">KGiSL Institute of Technology</p>
                  </div>
                </div>
              </motion.div>

              {/* Connect */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-xl font-medium text-foreground mb-6">Connect</h2>
                <div className="flex flex-wrap gap-4">
                  <a href="https://linkedin.com/in/timothy-jerald/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-foreground px-6 py-3 rounded-full border border-border/40 bg-foreground/[0.03] dark:bg-white/5 hover:border-foreground/30 hover:bg-foreground/10 transition-all duration-300 shadow-sm">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a href="mailto:jeraldtimothy@gmail.com" className="inline-flex items-center gap-2 text-sm font-medium text-foreground px-6 py-3 rounded-full border border-border/40 bg-foreground/[0.03] dark:bg-white/5 hover:border-foreground/30 hover:bg-foreground/10 transition-all duration-300 shadow-sm">
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <Link href="/resume" className="inline-flex items-center gap-2 text-sm font-medium text-foreground px-6 py-3 rounded-full border border-border/40 bg-foreground/[0.03] dark:bg-white/5 hover:border-foreground/30 hover:bg-foreground/10 transition-all duration-300 shadow-sm">
                    <Download className="w-4 h-4" />
                    Resume
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}