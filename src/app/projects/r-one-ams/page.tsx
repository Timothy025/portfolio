"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Database, AlertTriangle, Wrench, FileText, Settings, MapPin, Check, Search, Palette, Rocket, ArrowRight, Building2, Users, TrendingUp, CheckCircle, Calendar, Target, Activity } from "lucide-react"
import Link from "next/link"

export default function ROneAMS() {
  const informationArchitecture = [
    {
      title: "Dashboard Overview",
      description: "Real-time asset monitoring and analytics",
      icon: Building2,
      features: ["Asset Overview", "Performance Metrics", "Financial Analytics", "Operational Status"]
    },
    {
      title: "Asset Management",
      description: "Comprehensive asset lifecycle management",
      icon: Database,
      features: ["Asset Registry", "Maintenance Tracking", "Depreciation", "Location Management"]
    },
    {
      title: "User Management",
      description: "Role-based access and permissions",
      icon: Users,
      features: ["User Roles", "Access Control", "Permissions", "Audit Trails"]
    },
    {
      title: "Reporting System",
      description: "Comprehensive reporting and analytics",
      icon: FileText,
      features: ["Financial Reports", "Operational Reports", "Custom Dashboards", "Export Functions"]
    },
    {
      title: "System Configuration",
      description: "Platform settings and customization",
      icon: Settings,
      features: ["System Settings", "Workflow Configuration", "Integration Setup", "Backup Management"]
    }
  ]

  const assetMetrics = [
    { metric: "Total Assets", value: "2,847", change: "+5.2%", icon: Building2, color: "text-[#F76258]" },
    { metric: "Asset Value", value: "$45.2M", change: "+8.7%", icon: TrendingUp, color: "text-[#E74803]" },
    { metric: "Active Users", value: "156", change: "+12.3%", icon: Users, color: "text-[#E79703]" },
    { metric: "System Uptime", value: "99.9%", change: "+0.1%", icon: CheckCircle, color: "text-[#F76258]" }
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(247,98,88,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(231,72,3,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(231,151,3,0.1),transparent_50%)]" />
        
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
                Asset Management System
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-[#F76258] via-[#E74803] to-[#E79703] bg-clip-text text-transparent">
                Iris R-one
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive asset management system for enterprise organizations, 
              providing complete lifecycle management and financial tracking.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed mt-4"
            >
              A robust platform that enables organizations to track, manage, and optimize 
              their asset portfolios with advanced analytics, maintenance scheduling, 
              and financial reporting capabilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1">
                Asset Management
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Enterprise Platform
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Financial Tracking
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
                      <Building2 className="w-8 h-8 text-[#F76258]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      R-one is a comprehensive asset management system designed for 
                      enterprise organizations that need to track, manage, and optimize 
                      their asset portfolios effectively.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The platform provides complete lifecycle management capabilities, 
                      including asset registration, maintenance tracking, financial 
                      reporting, and advanced analytics to help organizations make 
                      data-driven decisions about their assets.
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
                      complex data visualization and user experience for asset managers. 
                      Created comprehensive wireframes, interactive prototypes, and 
                      component libraries for scalable enterprise applications.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Key Responsibilities:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F76258] rounded-full" />
                            Enterprise dashboard design
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#E74803] rounded-full" />
                            Complex data visualization
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#E79703] rounded-full" />
                            User role management interface
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F76258] rounded-full" />
                            Financial reporting layouts
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Deliverables:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#E74803] rounded-full" />
                            High-fidelity mockups
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#E79703] rounded-full" />
                            Interactive prototypes
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F76258] rounded-full" />
                            Design system components
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#E74803] rounded-full" />
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
                <h3 className="text-2xl font-bold text-center">R-one AMS Dashboard</h3>
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                      {/* Dashboard Header */}
                      <div className="absolute top-0 left-0 right-0 h-16 bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 flex items-center justify-between px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#F76258] via-[#E74803] to-[#E79703] rounded-lg flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-semibold">R-one Asset Management System</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Calendar className="w-5 h-5 text-slate-400" />
                          <FileText className="w-5 h-5 text-slate-400" />
                          <div className="w-8 h-8 bg-slate-700 rounded-full" />
                        </div>
                      </div>

                      {/* KPI Cards */}
                      <div className="absolute top-20 left-6 right-6">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          {assetMetrics.map((asset, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <asset.icon className={`w-5 h-5 ${asset.color}`} />
                                <span className="text-xs text-green-400">{asset.change}</span>
                              </div>
                              <div className="text-2xl font-bold text-white mb-1">{asset.value}</div>
                              <div className="text-sm text-slate-400">{asset.metric}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Main Content Area */}
                      <div className="absolute top-48 left-6 right-6 bottom-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                          {/* Asset Overview */}
                          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-white font-semibold">Asset Overview</h4>
                              <Target className="w-5 h-5 text-[#F76258]" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-400 text-sm">Equipment</span>
                                  <span className="text-white font-semibold">1,247</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-400 text-sm">Vehicles</span>
                                  <span className="text-white font-semibold">892</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-400 text-sm">Buildings</span>
                                  <span className="text-white font-semibold">156</span>
                                </div>
                              </div>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-400 text-sm">Software</span>
                                  <span className="text-white font-semibold">552</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-400 text-sm">Furniture</span>
                                  <span className="text-white font-semibold">1,089</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-400 text-sm">Other</span>
                                  <span className="text-white font-semibold">234</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Financial Summary */}
                          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-white font-semibold">Financial Summary</h4>
                              <TrendingUp className="w-5 h-5 text-[#E74803]" />
                            </div>
                            <div className="space-y-4">
                              <div className="text-center">
                                <div className="text-3xl font-bold text-white">$45.2M</div>
                                <div className="text-sm text-slate-400">Total Asset Value</div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-400 text-sm">Depreciation</span>
                                  <span className="text-white">$2.1M</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-400 text-sm">Maintenance</span>
                                  <span className="text-white">$890K</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-400 text-sm">ROI</span>
                                  <span className="text-[#E79703]">12.3%</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Recent Activities */}
                          <div className="lg:col-span-3 bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-white font-semibold">Recent Activities</h4>
                              <Activity className="w-5 h-5 text-[#E79703]" />
                            </div>
                            <div className="space-y-3">
                              {[
                                { action: "Asset Added", item: "Server Rack #A-247", time: "2 hours ago" },
                                { action: "Maintenance Due", item: "Vehicle #V-892", time: "4 hours ago" },
                                { action: "Depreciation Updated", item: "Building #B-156", time: "6 hours ago" },
                                { action: "User Access Granted", item: "John Smith", time: "8 hours ago" }
                              ].map((activity, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg"
                                >
                                  <div>
                                    <div className="text-white font-medium">{activity.action}</div>
                                    <div className="text-sm text-slate-400">{activity.item}</div>
                                  </div>
                                  <div className="text-sm text-slate-400">{activity.time}</div>
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
                    <CardTitle className="text-3xl font-bold flex items-center gap-3">
                      <Activity className="w-8 h-8 text-[#F76258]" />
                      Information Architecture
                    </CardTitle>
                    <CardDescription>
                      The core navigation structure designed for asset managers
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
                          className="bg-gradient-to-r from-[#F76258] via-[#E74803] to-[#E79703] text-white p-4 rounded-lg shadow-lg"
                        >
                          <div className="flex items-center gap-3">
                            <Building2 className="w-6 h-6" />
                            <span className="font-bold text-lg">R-one Asset Management System</span>
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
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-[#F76258] to-transparent" />
                            )}
                            
                            {/* Section Card */}
                            <div className="bg-background/50 border border-border/50 rounded-lg p-4 hover:border-[#F76258] transition-colors">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-[#F76258]/20 rounded-lg">
                                  <section.icon className="w-5 h-5 text-[#F76258]" />
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
                                    <div className="w-1.5 h-1.5 bg-[#F76258] rounded-full" />
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
                        <h4 className="text-xl font-semibold mb-6 text-center">Asset Manager Journey Flow</h4>
                        <div className="flex flex-wrap justify-center items-center gap-4">
                          {informationArchitecture.map((section, index) => (
                            <div key={index} className="flex items-center">
                              <div className="bg-muted/50 border border-border/50 rounded-lg px-4 py-2">
                                <div className="flex items-center gap-2">
                                  <section.icon className="w-4 h-4 text-[#F76258]" />
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
                      <Settings className="w-8 h-8 text-[#F76258]" />
                      Design Process
                    </CardTitle>
                    <CardDescription>
                      The methodology behind creating effective asset management experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          phase: "Research",
                          description: "Understanding asset management workflows and user needs",
                          icon: Search
                        },
                        {
                          phase: "Design",
                          description: "Enterprise dashboard and data visualization design",
                          icon: Building2
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
                            <div className="p-3 bg-[#F76258]/20 rounded-lg">
                              <step.icon className="w-8 h-8 text-[#F76258]" />
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