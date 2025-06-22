"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Settings, Users, Monitor, Zap, Clock, TrendingUp, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function NetworkCMS() {
  const projectInfo = {
    title: "Network",
    subtitle: "Charging Management System (CMS)",
    description: "A comprehensive platform for Charge Point Operators (CPOs) to monitor and control their charging infrastructure. The system supports session tracking, charger status monitoring, tariff configuration, and detailed analytics.",
    role: "UI/UX Designer",
    duration: "6 months",
    team: "Product Manager, 2 Developers, 1 QA",
    tools: ["Figma", "Prototyping", "User Research", "Design Systems"]
  }

  const informationArchitecture = [
    {
      title: "Dashboard",
      description: "Station status, energy usage, revenue overview",
      icon: Monitor,
      features: ["Real-time station monitoring", "Energy consumption analytics", "Revenue tracking", "Quick status overview"]
    },
    {
      title: "Chargers",
      description: "Map/table view, details, logs",
      icon: Zap,
      features: ["Interactive map view", "Detailed charger information", "Status logs", "Location management"]
    },
    {
      title: "Sessions",
      description: "History, filters, analytics",
      icon: Clock,
      features: ["Session history", "Advanced filtering", "Analytics dashboard", "Performance metrics"]
    },
    {
      title: "Pricing",
      description: "Tariff config, dynamic pricing",
      icon: TrendingUp,
      features: ["Tariff configuration", "Dynamic pricing rules", "Rate management", "Revenue optimization"]
    },
    {
      title: "Users",
      description: "Driver profiles, access control",
      icon: Users,
      features: ["Driver profiles", "Access control", "User management", "Permission settings"]
    },
    {
      title: "Reports",
      description: "Energy, fault, financial",
      icon: BarChart3,
      features: ["Energy reports", "Fault analysis", "Financial summaries", "Custom reporting"]
    },
    {
      title: "Settings",
      description: "Organization setup, roles",
      icon: Settings,
      features: ["Organization setup", "Role management", "System configuration", "Integration settings"]
    }
  ]

  const challenges = [
    "Complex data visualization for multiple charging stations",
    "Real-time status updates across different charger types",
    "Scalable dashboard design for growing infrastructure",
    "Intuitive navigation for technical and non-technical users"
  ]

  const solutions = [
    "Modular UI components for consistent data presentation",
    "Simplified session workflows with clear status indicators",
    "Clean visualization hierarchy for better data clarity",
    "Tested UX flows to reduce cognitive load"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-blue-600/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <Button
              asChild
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <Link href="/projects" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          {/* Project Header */}
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    {projectInfo.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  {projectInfo.subtitle}
                </p>
              </div>

              <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
                {projectInfo.description}
              </p>

              {/* Project Meta */}
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Badge variant="secondary" className="px-4 py-2">
                  {projectInfo.role}
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  {projectInfo.duration}
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  {projectInfo.team}
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="space-y-8">
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center"
            >
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Project Details */}
                <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold font-space-grotesk">
                      Project Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">My Role</h4>
                      <p className="text-muted-foreground">
                        I designed scalable dashboards using modular UI components, simplified session workflows, 
                        and ensured data clarity through clean visualization. I also improved navigation and 
                        reduced cognitive load using tested UX flows.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectInfo.tools.map((tool) => (
                          <Badge key={tool} variant="secondary">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Challenges</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Solutions</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {solutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Image Placeholder */}
                <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold font-space-grotesk">
                      Dashboard Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                        <div className="text-center">
                          <Monitor className="w-12 h-12 text-blue-500/50 mx-auto mb-2" />
                          <p className="text-muted-foreground">Dashboard Screenshot</p>
                        </div>
                      </div>
                      <div className="w-full h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                        <div className="text-center">
                          <Monitor className="w-8 h-8 text-blue-500/50 mx-auto mb-2" />
                          <p className="text-muted-foreground text-sm">Mobile App View</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Architecture Tab */}
            <TabsContent value="architecture" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold font-space-grotesk">
                      Information Architecture
                    </CardTitle>
                    <p className="text-muted-foreground">
                      The system architecture is designed to provide comprehensive charging infrastructure management 
                      with intuitive navigation and clear data hierarchy.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {informationArchitecture.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-center gap-3">
                              <item.icon className="w-5 h-5 text-blue-500" />
                              <div>
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pl-8 space-y-2">
                              {item.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Process Tab */}
            <TabsContent value="process" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold font-space-grotesk flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-blue-500 font-bold">1</span>
                      </div>
                      Research
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Conducted user research with CPOs to understand their workflow, pain points, and requirements 
                      for managing charging infrastructure.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold font-space-grotesk flex items-center gap-2">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-cyan-500 font-bold">2</span>
                      </div>
                      Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Created wireframes and prototypes focusing on data visualization, navigation patterns, 
                      and user workflow optimization.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold font-space-grotesk flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-blue-500 font-bold">3</span>
                      </div>
                      Testing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Conducted usability testing with stakeholders to validate design decisions and iterate 
                      on user flows and interface elements.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 