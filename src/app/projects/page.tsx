"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  category: string
  theme: {
    primary: string
    secondary: string
  }
}

const projects: Project[] = [
  {
    id: "1",
    title: "Feedzaa",
    description: "A chef-driven food commerce platform empowering culinary creators to build digital kitchens and manage orders online. Designed intuitive chef-facing UI for food entrepreneurs.",
    tags: ["Food Commerce", "Chef Platform", "Mobile App", "Delivery System"],
    image: "/logos/Feedzaa.png",
    link: "/projects/feedzaa",
    category: "Mobile Design",
    theme: { primary: "#ef4444", secondary: "#f43f5e" }
  },
  {
    id: "2",
    title: "Iris Sense",
    description: "A Conversational AI chatbot for CXO executives to instantly query strategic roadmaps, financial yields, environmental carbon impacts, and regional growth.",
    tags: ["CXO Chatbot", "Conversational AI", "Roadmap & Impacts", "Figma"],
    image: "/logos/Sense.png",
    link: "/projects/iris-sense",
    category: "Web & Mobile Design",
    theme: { primary: "#F7CF58", secondary: "#EB5851" }
  },
  {
    id: "3",
    title: "Iris Network",
    description: "EV smart charging platform enhancing adoption through intuitive design. Redesigned interface for better usability, visual appeal, and scalability.",
    tags: ["EV Smart Charging", "Smart Network", "Platform Redesign", "Figma"],
    image: "/logos/netwrok.png",
    link: "/projects/iris-network",
    category: "Web Design",
    theme: { primary: "#10b981", secondary: "#059669" }
  },
  {
    id: "4",
    title: "Iris R-one",
    description: "An asset management tool for CPOs to track chargers similar to JIRA, enabling real-time tracking, issue management, maintenance scheduling, and firmware updates.",
    tags: ["Asset Management", "Issue Tracking", "Maintenance", "Prototyping"],
    image: "/logos/R-one.png",
    link: "/projects/r-one-ams",
    category: "Web Design",
    theme: { primary: "#3b82f6", secondary: "#6366f1" }
  },
  {
    id: "5",
    title: "WitnessChain",
    description: "A Web3 application designed to reward users with crypto tokens for their participation. Users contribute to the network by toggling a mining switch in the app, which activates passive mining based on their data or activity.",
    tags: ["UI/UX Design", "Web3", "Crypto Mining", "Mobile App"],
    image: "/logos/Witnesschain.png",
    link: "/projects/witnesschain",
    category: "Mobile Design",
    theme: { primary: "#7CFF92", secondary: "#10B981" }
  },
  {
    id: "6",
    title: "OMS",
    description: "B2B platform for Sodexo food retail managers to streamline order tracking, revenue monitoring, and performance analysis with clean, multi-device interfaces.",
    tags: ["B2B Platform", "Order Management", "Sodexo Operations", "Figma"],
    image: "/logos/OMS.png",
    link: "/projects/oms-order-management",
    category: "Web Design",
    theme: { primary: "#14b8a6", secondary: "#0d9488" }
  },
  {
    id: "7",
    title: "Iris RMS",
    description: "An enterprise remote monitoring platform designed to manage and monitor EV charging infrastructure in real time with high operational visibility.",
    tags: ["Remote Monitoring", "IoT Operations", "Alerts & Faults", "Real-time Data"],
    image: "/logos/Planet 3.svg",
    link: "/projects/rms",
    category: "Web Design",
    theme: { primary: "#ec008c", secondary: "#6366f1" }
  },
  {
    id: "8",
    title: "Iris Fleet",
    description: "An EV fleet management platform designed for organizations to manage vehicle charging operations, schedules, and battery health optimization.",
    tags: ["Fleet Management", "Schedules", "Driver Dispatch", "Battery Tracking"],
    image: "/logos/fleet.svg",
    link: "/projects/fleet",
    category: "Web Design",
    theme: { primary: "#429ae7", secondary: "#d34657" }
  },
  {
    id: "9",
    title: "PayEZ",
    description: "A unified payment gateway that seamlessly integrates UPI and cryptocurrency payments, providing users with multiple payment options in a single platform.",
    tags: ["UI/UX Design", "Payment Gateway", "Crypto", "Mobile App"],
    image: "/logos/PayEz.png",
    link: "/projects/payez",
    category: "Mobile Design",
    theme: { primary: "#4a69d8", secondary: "#061753" }
  },
  {
    id: "10",
    title: "Iris Energy",
    description: "An energy management platform focused on smart energy monitoring, load balancing, grid load visibility, and charging optimization.",
    tags: ["Energy Management", "Smart Load Balancing", "Grid Monitoring", "Load Shifting"],
    image: "/logos/aatral.svg",
    link: "/projects/energy",
    category: "Web Design",
    theme: { primary: "#00e673", secondary: "#3ebaf4" }
  }
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my latest work showcasing user-centered design solutions across various industries and platforms.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => {
            const isHovered = hoveredId === project.id
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group h-full gap-0 py-0 border shadow-lg bg-background/50 backdrop-blur-sm transition-all duration-500 overflow-hidden flex flex-col"
                  style={{
                    borderColor: isHovered ? `${project.theme.primary}45` : "rgba(255,255,255,0.05)",
                    boxShadow: isHovered 
                      ? `0 12px 40px -12px ${project.theme.primary}30, inset 0 0 24px -12px ${project.theme.primary}25` 
                      : "none",
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0px)'
                  }}
                >
                  <div className="relative overflow-hidden">
                    <div 
                      className="w-full h-40 flex items-center justify-center p-3 transition-all duration-500 ease-out"
                      style={{
                        background: isHovered 
                          ? `linear-gradient(135deg, ${project.theme.primary}18, ${project.theme.secondary}18)` 
                          : `linear-gradient(135deg, ${project.theme.primary}06, ${project.theme.secondary}06)`
                      }}
                    >
                      <img 
                        src={project.image} 
                        alt={`${project.title} logo`}
                        className="w-full h-full object-contain transition-transform duration-500 ease-out"
                        style={{
                          transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardHeader className="px-4 pt-4 pb-2">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle 
                        className="text-lg font-bold font-space-grotesk transition-colors duration-300"
                        style={{
                          color: isHovered ? project.theme.primary : undefined
                        }}
                      >
                        {project.title}
                      </CardTitle>
                      <span 
                        className="text-[10px] px-2 py-0.5 rounded-full font-medium transition-all duration-300 border whitespace-nowrap"
                        style={{
                          backgroundColor: `${project.theme.primary}12`,
                          borderColor: `${project.theme.primary}35`,
                          color: project.theme.primary
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-4 pb-4 pt-0 flex flex-col justify-between flex-grow">
                    <div>
                      <p className="text-muted-foreground mb-3 leading-5 text-sm line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-1.5 py-0.5 bg-muted/30 text-muted-foreground/80 rounded border border-border/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Button
                      asChild
                      variant="outline"
                      className="w-full h-9 transition-all duration-300 border font-space-grotesk text-sm"
                      style={{
                        backgroundColor: isHovered ? project.theme.primary : 'transparent',
                        borderColor: isHovered ? project.theme.primary : 'rgba(255,255,255,0.1)',
                        color: isHovered 
                          ? (project.theme.primary === '#7CFF92' ? '#000000' : '#ffffff') 
                          : undefined
                      }}
                    >
                      <Link href={project.link} className="flex items-center justify-center gap-2 w-full">
                        View Case Study
                        <ArrowRight className="w-4 h-4 transition-transform duration-300" style={{
                          transform: isHovered ? 'translateX(3px)' : 'translateX(0px)'
                        }} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Let&apos;s discuss your project and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Get in Touch
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                >
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More About Me
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
