"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Package, Users, Settings, Activity, Database, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OMSOrderManagementCaseStudy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const informationArchitecture = [
    {
      title: "Order Management",
      description: "End-to-end order processing workflow",
      icon: Package,
      features: ["Order Creation", "Status Tracking", "Inventory Management", "Fulfillment"]
    },
    {
      title: "Inventory Control",
      description: "Real-time stock management and tracking",
      icon: Database,
      features: ["Stock Levels", "Reorder Points", "Warehouse Management", "Supplier Integration"]
    },
    {
      title: "Customer Management",
      description: "Customer data and relationship management",
      icon: Users,
      features: ["Customer Profiles", "Order History", "Communication", "Support Tickets"]
    },
    {
      title: "Analytics & Reporting",
      description: "Business intelligence and performance metrics",
      icon: Activity,
      features: ["Sales Reports", "Performance Analytics", "Trend Analysis", "Custom Dashboards"]
    },
    {
      title: "Integration Hub",
      description: "Third-party system integrations",
      icon: Settings,
      features: ["ERP Integration", "Payment Gateways", "Shipping Providers", "Accounting Systems"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,34,158,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild className="group">
              <Link href="/projects" className="flex items-center gap-2">
                <motion.div
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowLeft className="w-4 h-4" />
                </motion.div>
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
                Order Management System
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-[#FFFFFF] to-[#00229E] bg-clip-text text-transparent">
                OMS
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Order Management System for Sodexo, streamlining order processing, 
              inventory management, and fulfillment operations.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed mt-4"
            >
              A comprehensive platform that optimizes order workflows, provides 
              real-time inventory tracking, and enhances operational efficiency 
              for large-scale food service operations.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1">
                Order Management
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Inventory Control
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Enterprise Platform
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Analytics Dashboard
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Figma
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="overview" className="space-y-12">
              {/* Project Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold flex items-center gap-3">
                      <Package className="w-8 h-8 text-[#00229E]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      OMS (Order Management System) is a comprehensive platform designed 
                      for Sodexo to streamline their order processing, inventory management, 
                      and fulfillment operations across multiple locations.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The system provides real-time order tracking, automated inventory 
                      management, and advanced analytics to optimize operational efficiency 
                      and improve customer satisfaction in large-scale food service operations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* My Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">My UI/UX Role</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      I designed the enterprise dashboard interface in Figma, focusing on 
                      order management workflows and inventory control systems. Created 
                      comprehensive wireframes, interactive prototypes, and component 
                      libraries for scalable enterprise applications.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Key Responsibilities:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#00229E] rounded-full" />
                            Order management interface design
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#00229E] rounded-full" />
                            Inventory control dashboards
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#00229E] rounded-full" />
                            Workflow optimization
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#00229E] rounded-full" />
                            User role management
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Deliverables:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#00229E] rounded-full" />
                            High-fidelity mockups
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#00229E] rounded-full" />
                            Interactive prototypes
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#00229E] rounded-full" />
                            Design system components
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#00229E] rounded-full" />
                            User flow documentation
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Dashboard Screenshots */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-center">OMS Dashboard Interface</h3>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <img
                      src="/oms.png"
                      alt="OMS Dashboard Interface"
                      className="max-w-full h-auto rounded-lg shadow-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="architecture" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold flex items-center gap-3">
                      <Activity className="w-8 h-8 text-[#00229E]" />
                      Information Architecture
                    </CardTitle>
                    <CardDescription>
                      The core navigation structure designed for order management users
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Flowchart Container */}
                    <div className="relative p-8 bg-muted/30 rounded-xl border border-border/50">
                      {/* Main App Entry */}
                      <div className="flex justify-center mb-8">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-[#FFFFFF] to-[#00229E] text-white p-4 rounded-lg shadow-lg"
                        >
                          <div className="flex items-center gap-3">
                            <Package className="w-6 h-6" />
                            <span className="font-bold text-lg">OMS Platform</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Navigation Flow */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {informationArchitecture.map((section, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                          >
                            {/* Connection Line */}
                            {index > 0 && (
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-[#00229E] to-transparent" />
                            )}
                            
                            {/* Section Card */}
                            <div className="bg-background/50 border border-border/50 rounded-lg p-4 hover:border-[#00229E] transition-colors">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-[#00229E]/20 rounded-lg">
                                  <section.icon className="w-5 h-5 text-[#00229E]" />
                                </div>
                                <div>
                                  <h4 className="font-semibold">{section.title}</h4>
                                  <p className="text-sm text-muted-foreground">{section.description}</p>
                                </div>
                              </div>
                              
                              {/* Features List */}
                              <div className="space-y-2">
                                {section.features.map((feature, featureIndex) => (
                                  <motion.div
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                  >
                                    <div className="w-1.5 h-1.5 bg-[#00229E] rounded-full" />
                                    {feature}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* User Journey Flow */}
                      <div className="mt-12">
                        <h4 className="text-xl font-semibold mb-6 text-center">Order Management Journey Flow</h4>
                        <div className="flex flex-wrap justify-center items-center gap-4">
                          {informationArchitecture.map((section, index) => (
                            <div key={index} className="flex items-center">
                              <div className="bg-muted/50 border border-border/50 rounded-lg px-4 py-2">
                                <div className="flex items-center gap-2">
                                  <section.icon className="w-4 h-4 text-[#00229E]" />
                                  <span className="text-sm font-medium">{section.title}</span>
                                </div>
                              </div>
                              {index < informationArchitecture.length - 1 && (
                                <ArrowRight className="w-4 h-4 text-muted-foreground mx-2" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="process" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold flex items-center gap-3">
                      <Settings className="w-8 h-8 text-[#00229E]" />
                      Design Process
                    </CardTitle>
                    <CardDescription>
                      The methodology behind creating effective order management experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          phase: "Research",
                          description: "Understanding order management workflows and user needs",
                          icon: Search
                        },
                        {
                          phase: "Design",
                          description: "Enterprise dashboard and workflow design",
                          icon: Package
                        },
                        {
                          phase: "Prototype",
                          description: "Interactive prototypes and user testing",
                          icon: Activity
                        },
                        {
                          phase: "Launch",
                          description: "Implementation and continuous optimization",
                          icon: ArrowRight
                        }
                      ].map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center p-6 rounded-lg bg-muted/50 border border-border/50"
                        >
                          <div className="flex justify-center mb-4">
                            <div className="p-3 bg-[#00229E]/20 rounded-lg">
                              <step.icon className="w-8 h-8 text-[#00229E]" />
                            </div>
                          </div>
                          <h4 className="font-semibold mb-2">{step.phase}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </motion.div>
                      ))}
                    </div>
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