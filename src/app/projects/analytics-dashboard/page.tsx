"use client"

import { motion } from "framer-motion"
import { ArrowLeft, BarChart3, TrendingUp, PieChart, Activity, Users, DollarSign, Settings, Download, Filter, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnalyticsDashboardCaseStudy() {
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
      title: "Executive Dashboard",
      description: "High-level KPIs and business overview",
      icon: BarChart3,
      features: ["Revenue metrics", "Growth indicators", "Performance alerts", "Executive summary"]
    },
    {
      title: "Data Analytics",
      description: "Advanced data visualization and insights",
      icon: TrendingUp,
      features: ["Custom charts", "Data filtering", "Trend analysis", "Predictive insights"]
    },
    {
      title: "User Management",
      description: "User analytics and behavior tracking",
      icon: Users,
      features: ["User segmentation", "Behavior analysis", "Engagement metrics", "Retention data"]
    },
    {
      title: "Reporting Center",
      description: "Automated and custom report generation",
      icon: Download,
      features: ["Scheduled reports", "Custom exports", "Data visualization", "Share insights"]
    },
    {
      title: "System Settings",
      description: "Dashboard configuration and preferences",
      icon: Settings,
      features: ["User permissions", "Data sources", "Customization", "Integration setup"]
    }
  ]

  const kpiData = [
    { label: "Total Revenue", value: "$2.4M", change: "+15.2%", icon: DollarSign, color: "text-green-500" },
    { label: "Active Users", value: "12,847", change: "+8.7%", icon: Users, color: "text-blue-500" },
    { label: "Conversion Rate", value: "3.2%", change: "+12.1%", icon: TrendingUp, color: "text-purple-500" },
    { label: "Avg. Session", value: "8m 32s", change: "+5.4%", icon: Activity, color: "text-orange-500" }
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
        
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
                Enterprise Analytics Dashboard
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Analytics Dashboard
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Designed a comprehensive analytics dashboard for enterprise clients, featuring 
              advanced data visualization and customizable reporting tools.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1">
                Analytics
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Enterprise
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Data Viz
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Design Systems
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Dashboard
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
                      <BarChart3 className="w-8 h-8 text-blue-500" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Designed a comprehensive analytics dashboard for enterprise clients, featuring 
                      advanced data visualization and customizable reporting tools.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The dashboard transforms complex enterprise data into actionable insights, 
                      enabling data-driven decision making across all levels of the organization 
                      with intuitive visualizations and real-time analytics.
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
                      Led the design of enterprise-grade analytics interfaces, focusing on 
                      data visualization, user experience, and scalability. Created comprehensive 
                      design systems and interactive dashboards for complex business intelligence needs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Key Responsibilities:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            Data visualization design
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            Enterprise UX strategy
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            Design system creation
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            Stakeholder collaboration
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Deliverables:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                            Interactive prototypes
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                            Design system documentation
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                            User flow diagrams
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                            Component library
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
                    <div className="relative w-full h-[700px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                      {/* Dashboard Header */}
                      <div className="absolute top-0 left-0 right-0 h-16 bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 flex items-center justify-between px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <BarChart3 className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-semibold">Enterprise Analytics</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Calendar className="w-5 h-5 text-slate-400" />
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
                              <BarChart3 className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="space-y-3">
                              {[85, 72, 90, 78, 88, 95, 82, 89].map((height, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${height}%` }}
                                  transition={{ duration: 1, delay: index * 0.1 }}
                                  className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                />
                              ))}
                            </div>
                          </div>

                          {/* User Analytics */}
                          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-white font-semibold">User Growth</h4>
                              <TrendingUp className="w-5 h-5 text-green-400" />
                            </div>
                            <div className="relative h-32">
                              <svg className="w-full h-full" viewBox="0 0 100 40">
                                <motion.path
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 2, delay: 0.5 }}
                                  d="M0,35 L15,30 L30,25 L45,20 L60,15 L75,10 L90,8 L100,5"
                                  stroke="url(#gradient)"
                                  strokeWidth="2"
                                  fill="none"
                                />
                                <defs>
                                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#10b981" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>

                          {/* Conversion Funnel */}
                          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-white font-semibold">Conversion Funnel</h4>
                              <PieChart className="w-5 h-5 text-orange-400" />
                            </div>
                            <div className="space-y-3">
                              {[
                                { label: "Visitors", value: "100%", color: "bg-blue-500" },
                                { label: "Engaged", value: "65%", color: "bg-green-500" },
                                { label: "Converted", value: "32%", color: "bg-purple-500" },
                                { label: "Retained", value: "18%", color: "bg-orange-500" }
                              ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between">
                                  <span className="text-sm text-slate-400">{item.label}</span>
                                  <div className="flex items-center gap-2">
                                    <div className={`w-3 h-3 ${item.color} rounded-full`} />
                                    <span className="text-white font-medium">{item.value}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Real-time Activity */}
                          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-white font-semibold">Real-time Activity</h4>
                              <Activity className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="space-y-3">
                              {[
                                "New user registration",
                                "Purchase completed",
                                "Support ticket created",
                                "Feature usage increased"
                              ].map((activity, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.2 }}
                                  className="flex items-center gap-3 text-sm"
                                >
                                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                  <span className="text-slate-300">{activity}</span>
                                </motion.div>
                              ))}
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
                    <CardTitle className="text-3xl font-bold">Information Architecture</CardTitle>
                    <CardDescription>
                      The core navigation structure designed for enterprise analytics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {infoArchitecture.map((section, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-center gap-3">
                              <section.icon className="w-5 h-5 text-blue-500" />
                              <div>
                                <div className="font-semibold">{section.title}</div>
                                <div className="text-sm text-muted-foreground font-normal">
                                  {section.description}
                                </div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              {section.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                  {feature}
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

            <TabsContent value="process" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">Design Process</CardTitle>
                    <CardDescription>
                      The methodology behind creating enterprise-grade analytics interfaces
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          phase: "Research",
                          description: "Understanding enterprise data needs",
                          icon: "🔍"
                        },
                        {
                          phase: "Design",
                          description: "Creating scalable data visualizations",
                          icon: "📊"
                        },
                        {
                          phase: "Build",
                          description: "Developing design system components",
                          icon: "⚙️"
                        },
                        {
                          phase: "Deploy",
                          description: "Implementation and optimization",
                          icon: "🚀"
                        }
                      ].map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center p-6 rounded-lg bg-background/50 border border-border/50"
                        >
                          <div className="text-4xl mb-4">{step.icon}</div>
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