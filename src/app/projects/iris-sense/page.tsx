"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Eye, BarChart3, TrendingUp, Users, MapPin, Filter, Download, Settings, Activity, Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IrisSenseCaseStudy() {
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

  const infoArchitecture = [
    {
      title: "Dashboard Overview",
      description: "Real-time analytics and KPI monitoring",
      icon: BarChart3,
      features: ["Revenue Analytics", "Energy Consumption", "Station Overview", "User Engagement"]
    },
    {
      title: "Asset Management",
      description: "Charging station monitoring and control",
      icon: Database,
      features: ["Station Status", "Performance Metrics", "Maintenance Alerts", "Location Tracking"]
    },
    {
      title: "User Analytics",
      description: "Customer behavior and usage patterns",
      icon: Users,
      features: ["Session Data", "User Demographics", "Usage Patterns", "Satisfaction Metrics"]
    },
    {
      title: "Revenue Tracking",
      description: "Financial performance and billing",
      icon: TrendingUp,
      features: ["Revenue Analytics", "Billing Management", "Payment Processing", "Financial Reports"]
    },
    {
      title: "System Monitoring",
      description: "Technical infrastructure oversight",
      icon: Activity,
      features: ["System Health", "Performance Monitoring", "Error Tracking", "Uptime Analytics"]
    }
  ]

  const kpiData = [
    { label: "Total Revenue", value: "$2.4M", change: "+12.5%", icon: TrendingUp, color: "text-[#F7CF58]" },
    { label: "Active Stations", value: "847", change: "+8.2%", icon: MapPin, color: "text-[#F09343]" },
    { label: "Energy Delivered", value: "45.2M kWh", change: "+15.3%", icon: Activity, color: "text-[#EB5851]" },
    { label: "User Satisfaction", value: "4.8/5", change: "+0.3", icon: Users, color: "text-[#F7CF58]" }
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(247,207,88,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(240,147,67,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(235,88,81,0.1),transparent_50%)]" />
        
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
                Analytics Dashboard
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-[#F7CF58] via-[#F09343] to-[#EB5851] bg-clip-text text-transparent">
                Iris Sense
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Analytics dashboard for Charge Point Operators (CPOs) to monitor 
              charging station performance and user behavior.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed mt-4"
            >
              A comprehensive analytics platform that provides real-time insights into 
              charging station operations, revenue tracking, and user engagement metrics 
              for electric vehicle charging networks.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1">
                Analytics Dashboard
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                EV Charging
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Data Visualization
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Real-time Monitoring
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
                      <Eye className="w-8 h-8 text-[#F7CF58]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Iris Sense is a comprehensive analytics dashboard designed specifically for 
                      Charge Point Operators (CPOs) to monitor and optimize their electric vehicle 
                      charging networks.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The platform provides real-time insights into charging station performance, 
                      revenue tracking, energy consumption, and user behavior patterns to help 
                      operators make data-driven decisions.
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
                      I designed the analytics dashboard interface in Figma, focusing on data 
                      visualization and user experience for CPO users. Created wireframes, 
                      interactive prototypes, and component libraries to ensure intuitive 
                      data exploration.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Key Responsibilities:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F7CF58] rounded-full" />
                            Data visualization design
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F09343] rounded-full" />
                            Dashboard layout and navigation
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#EB5851] rounded-full" />
                            Interactive chart components
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F7CF58] rounded-full" />
                            User flow optimization
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Deliverables:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F09343] rounded-full" />
                            High-fidelity mockups
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#EB5851] rounded-full" />
                            Interactive prototypes
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F7CF58] rounded-full" />
                            User flow documentation
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F09343] rounded-full" />
                            Design system components
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Dashboard Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-center">Dashboard Preview</h3>
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                      {/* Dashboard Header */}
                      <div className="absolute top-0 left-0 right-0 h-16 bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 flex items-center justify-between px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#F7CF58] via-[#F09343] to-[#EB5851] rounded-lg flex items-center justify-center">
                            <Eye className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-semibold">Iris Sense Dashboard</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Filter className="w-5 h-5 text-slate-400" />
                          <Download className="w-5 h-5 text-slate-400" />
                          <div className="w-8 h-8 bg-slate-700 rounded-full" />
                        </div>
                      </div>

                      {/* KPI Cards */}
                      <div className="absolute top-20 left-6 right-6">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          {kpiData.map((kpi, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                                <span className="text-xs text-green-400">{kpi.change}</span>
                              </div>
                              <div className="text-2xl font-bold text-white mb-1">{kpi.value}</div>
                              <div className="text-sm text-slate-400">{kpi.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Charts Section */}
                      <div className="absolute top-48 left-6 right-6 bottom-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                          {/* Revenue Chart */}
                          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-white font-semibold">Revenue Analytics</h4>
                              <BarChart3 className="w-5 h-5 text-[#F7CF58]" />
                            </div>
                            <div className="space-y-3">
                              {[80, 65, 90, 75, 85, 70].map((height, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${height}%` }}
                                  transition={{ duration: 1, delay: index * 0.1 }}
                                  className="h-3 bg-gradient-to-r from-[#F7CF58] via-[#F09343] to-[#EB5851] rounded-full"
                                />
                              ))}
                            </div>
                          </div>

                          {/* Energy Usage Chart */}
                          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-white font-semibold">Energy Consumption</h4>
                              <TrendingUp className="w-5 h-5 text-[#F09343]" />
                            </div>
                            <div className="relative h-32">
                              <svg className="w-full h-full" viewBox="0 0 100 40">
                                <motion.path
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 2, delay: 0.5 }}
                                  d="M0,30 L20,25 L40,20 L60,15 L80,10 L100,5"
                                  stroke="url(#gradient)"
                                  strokeWidth="2"
                                  fill="none"
                                />
                                <defs>
                                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#F7CF58" />
                                    <stop offset="50%" stopColor="#F09343" />
                                    <stop offset="100%" stopColor="#EB5851" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>

                          {/* Station Map */}
                          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-white font-semibold">Station Overview</h4>
                              <MapPin className="w-5 h-5 text-[#EB5851]" />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              {Array.from({ length: 9 }).map((_, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.3, delay: index * 0.05 }}
                                  className={`w-full h-8 rounded ${
                                    index % 3 === 0 ? 'bg-[#F7CF58]/30' : 
                                    index % 3 === 1 ? 'bg-[#F09343]/30' : 'bg-[#EB5851]/30'
                                  } border border-slate-600`}
                                />
                              ))}
                            </div>
                          </div>

                          {/* User Metrics */}
                          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-white font-semibold">User Engagement</h4>
                              <Users className="w-5 h-5 text-[#F7CF58]" />
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm">Active Users</span>
                                <span className="text-white font-semibold">2,847</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm">Sessions</span>
                                <span className="text-white font-semibold">8,901</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm">Avg. Session</span>
                                <span className="text-white font-semibold">4m 32s</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                      <Activity className="w-8 h-8 text-[#F7CF58]" />
                      Information Architecture
                    </CardTitle>
                    <CardDescription>
                      The core navigation structure designed for CPO users
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
                          className="bg-gradient-to-r from-[#F7CF58] via-[#F09343] to-[#EB5851] text-white p-4 rounded-lg shadow-lg"
                        >
                          <div className="flex items-center gap-3">
                            <BarChart3 className="w-6 h-6" />
                            <span className="font-bold text-lg">Iris Sense Dashboard</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Navigation Flow */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {infoArchitecture.map((section, index) => (
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
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-[#F7CF58] to-transparent" />
                            )}
                            
                            {/* Section Card */}
                            <div className="bg-background/50 border border-border/50 rounded-lg p-4 hover:border-[#F7CF58] transition-colors">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-[#F7CF58]/20 rounded-lg">
                                  <section.icon className="w-5 h-5 text-[#F7CF58]" />
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
                                    <div className="w-1.5 h-1.5 bg-[#F7CF58] rounded-full" />
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
                        <h4 className="text-xl font-semibold mb-6 text-center">CPO Journey Flow</h4>
                        <div className="flex flex-wrap justify-center items-center gap-4">
                          {infoArchitecture.map((section, index) => (
                            <div key={index} className="flex items-center">
                              <div className="bg-muted/50 border border-border/50 rounded-lg px-4 py-2">
                                <div className="flex items-center gap-2">
                                  <section.icon className="w-4 h-4 text-[#F7CF58]" />
                                  <span className="text-sm font-medium">{section.title}</span>
                                </div>
                              </div>
                              {index < infoArchitecture.length - 1 && (
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
                      <Settings className="w-8 h-8 text-[#F7CF58]" />
                      Design Process
                    </CardTitle>
                    <CardDescription>
                      The methodology behind creating effective analytics experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          phase: "Research",
                          description: "Understanding CPO needs and data requirements",
                          icon: Search
                        },
                        {
                          phase: "Design",
                          description: "Data visualization and dashboard layout",
                          icon: Eye
                        },
                        {
                          phase: "Prototype",
                          description: "Interactive analytics and user testing",
                          icon: BarChart3
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
                            <div className="p-3 bg-[#F7CF58]/20 rounded-lg">
                              <step.icon className="w-8 h-8 text-[#F7CF58]" />
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