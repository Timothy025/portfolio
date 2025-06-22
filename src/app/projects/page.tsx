"use client"

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
}

const projects: Project[] = [
  {
    id: "1",
    title: "Feedzaa",
    description: "A chef-driven food commerce platform empowering culinary creators to build digital kitchens and manage orders online. Designed intuitive chef-facing UI for food entrepreneurs.",
    tags: ["UI/UX Design", "Food Commerce", "Mobile App", "Figma"],
    image: "/feedzaa-mockup.jpg",
    link: "/projects/feedzaa",
    category: "Mobile Design"
  },
  {
    id: "2",
    title: "Iris Sense",
    description: "Intuitive dashboards for Charge Point Operators to visualize station performance, revenue, and user engagement. Simplifies complex metrics into actionable visual insights.",
    tags: ["UI/UX Design", "Data Visualization", "Dashboard", "Figma"],
    image: "/iris-sense-mockup.jpg",
    link: "/projects/iris-sense",
    category: "Web Design"
  },
  {
    id: "3",
    title: "Iris Network",
    description: "EV smart charging platform enhancing adoption through intuitive design. Redesigned interface for better usability, visual appeal, and scalability.",
    tags: ["UI/UX Design", "EV Charging", "Platform Redesign", "Figma"],
    image: "/iris-network-mockup.jpg",
    link: "/projects/iris-network",
    category: "Web Design"
  },
  {
    id: "4",
    title: "Iris R-one",
    description: "An asset management tool for CPOs to track chargers similar to JIRA, enabling real-time tracking, issue management, maintenance scheduling, and firmware updates.",
    tags: ["Asset Management", "Issue Tracking", "Maintenance", "Prototyping"],
    image: "/r-one-ams-mockup.jpg",
    link: "/projects/r-one-ams",
    category: "Web Design"
  },
  {
    id: "5",
    title: "WitnessChain",
    description: "A Web3 application designed to reward users with crypto tokens for their participation. Users contribute to the network by toggling a mining switch in the app, which activates passive mining based on their data or activity.",
    tags: ["UI/UX Design", "Web3", "Crypto Mining", "Mobile App"],
    image: "/witnesschain-mockup.jpg",
    link: "/projects/witnesschain",
    category: "Mobile Design"
  },
  {
    id: "6",
    title: "OMS",
    description: "B2B platform for Sodexo food retail managers to streamline order tracking, revenue monitoring, and performance analysis with clean, multi-device interfaces.",
    tags: ["B2B Platform", "Order Management", "Sodexo", "Figma"],
    image: "/oms-mockup.jpg",
    link: "/projects/oms-order-management",
    category: "Web Design"
  },
  {
    id: "9",
    title: "PayEZ",
    description: "A unified payment gateway that seamlessly integrates UPI and cryptocurrency payments, providing users with multiple payment options in a single platform.",
    tags: ["UI/UX Design", "Payment Gateway", "Crypto", "Mobile App"],
    image: "/payez-mockup.jpg",
    link: "/projects/payez",
    category: "Mobile Design"
  }
]

export default function Projects() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full border-0 shadow-xl bg-background/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-blue-500/30">Preview</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold font-space-grotesk group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-300"
                  >
                    <Link href={project.link} className="flex items-center justify-center gap-2">
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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