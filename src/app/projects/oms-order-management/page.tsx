"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Package, Users, Settings, Activity, Database, ArrowRight, Search, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectArchitectureMap } from "@/components/project-architecture-map"

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
      title: "Order Flow Control",
      description: "End-to-end order processing and status visibility dashboard",
      icon: Package,
      features: ["Active Order Checklists", "Fulfillment Status Indicators", "Dynamic Dispatch Panels", "Return Audit Flows"]
    },
    {
      title: "Inventory Sync Engine",
      description: "Real-time stock level synchronization and management",
      icon: Database,
      features: ["Live Quantity Tracking", "Automated Safety Reorders", "Supplier Integration Feeds", "Warehouse Shelf Locators"]
    },
    {
      title: "Client Profile Console",
      description: "Customer data directories and history trackers",
      icon: Users,
      features: ["Client Order Logs", "B2B Billing Portals", "Direct Complaint Trackers", "Corporate Allowance Profiles"]
    },
    {
      title: "Operations Diagnostics",
      description: "Comprehensive efficiency and revenue metrics console",
      icon: Activity,
      features: ["Daily Dispatch Volumes", "Fulfillment Latency Curves", "Hourly Revenue Dials", "Anomalous Order Alerts"]
    }
  ]

  const stakeholders = [
    {
      role: "Business Leaders",
      title: "Logistics VP & Enterprise Accounts VP",
      focus: "Maximizing B2B account retention rates, reducing order fulfillment delay times, and ensuring accurate invoice auditing cycles."
    },
    {
      role: "Operations Operators",
      title: "Depot Site Dispatchers & Kitchen Admins",
      focus: "Require clean grid dashboards to update meal availabilities quickly, print shipping cards, and edit custom orders."
    },
    {
      role: "Engineering Team",
      title: "Enterprise Systems Integration Team",
      focus: "Need predefined Figma layout sheets, clean typography specs, and standardized CSS variables to bind legacy databases."
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
        {/* Background Glowing Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,34,158,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

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
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm border border-[#00229E]/30">
                Enterprise Order System
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-[#3B82F6] bg-clip-text text-transparent">
                Sodexo OMS
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            >
              Designing comprehensive order processing panels, live stock synchronizers, and operational reports for B2B food services.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Order Workflows</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Stock Management</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Enterprise Dashboards</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Figma</Badge>
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
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-muted/20 border border-white/5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
              </TabsList>
            </motion.div>

            {/* OVERVIEW TAB */}
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
                      <Package className="w-8 h-8 text-[#3B82F6]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Sodexo OMS is a leading B2B order management system engineered to streamline high-volume meal fulfillment, inventory tracking, and warehouse operations. Built explicitly for large corporate client accounts, the platform bridges the gaps in communication between corporate offices and busy kitchen crews.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      By designing intuitive, customizable grid layouts, real-time stock dashboards, and robust role permission matrices, we enabled dispatch operators to fulfill complex orders quickly, prevent menu item stockouts, and compile compliance audit trails.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Designer's Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">Designer&apos;s Impact & Contributions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      I was the primary product designer for Sodexo OMS, conducting field interviews with kitchen dispatchers, refining dense data visual grids in Figma, and constructing a reusable enterprise component library.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Key Contributions:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2" />
                            Designed a gorgeous enterprise console interface with custom asset statuses.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2" />
                            Simplified regulatory tax forms into clean, step-by-step layout wizards.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2" />
                            Optimized deep role management panels with simple drag permissions.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2" />
                            Conducted remote user testing with 12 corporate facilities leads.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Design Deliverables:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#00229E] rounded-full mt-2" />
                            High-fidelity interactive console mockups representing multiple permission states.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#00229E] rounded-full mt-2" />
                            Detailed UI components asset library (asset tags, value cards, report layouts).
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#00229E] rounded-full mt-2" />
                            Comprehensive operator personas and user journey blueprints.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#00229E] rounded-full mt-2" />
                            Figma variables sheet and typography layout parameters.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Stakeholders Matrix */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-center">Collaborative Stakeholder Matrix</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stakeholders.map((stakeholder, i) => (
                    <Card key={i} className="border border-white/5 bg-background/50 hover:border-[#3B82F6]/40 transition-all shadow-md">
                      <CardHeader>
                        <Badge variant="outline" className="w-max mb-2 border-[#3B82F6]/30 text-[#3B82F6]">{stakeholder.role}</Badge>
                        <CardTitle className="text-xl font-bold">{stakeholder.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{stakeholder.focus}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Problem & Solution High-Contrast Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <Card className="border border-red-500/20 bg-red-950/5 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-red-400 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6" />
                      Fulfillment Friction (The Problem)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Kitchen crews and warehouse teams were sorting active orders on fragmented email threads or printed slips. Corporate accounts suffered severe invoicing discrepancies due to inaccurate manual meal calculations.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      This lack of dynamic tracking caused major delivery delays, extensive inventory write-offs, and critical account cancellations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-emerald-500/20 bg-emerald-950/5 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" />
                      Scalable Resolutions (The Solution)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We developed an integrated double-sided order system. Warehouse managers easily check safety stock levels and verify invoices, while culinary crews log meal preparation states in a simple high-density dashboard.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      By designing intuitive layout components and automated PDF invoice builders, we reduced B2B order errors by 80% and saved dispatcher operations hours daily.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Screenshots Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-center text-white">Sodexo OMS Visual Hub</h3>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-5xl"
                  >
                    <img
                      src="/oms.png"
                      alt="Sodexo OMS Interface"
                      className="w-full h-auto object-cover rounded-xl border border-white/10"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            {/* ARCHITECTURE TAB */}
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
                      <Activity className="w-8 h-8 text-[#3B82F6]" />
                      UI/UX Information Architecture
                    </CardTitle>
                    <CardDescription>
                      A designer-led screen structure for order intake, inventory checks, client context, and dispatch review.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <ProjectArchitectureMap
                      rootLabel="Sodexo OMS"
                      rootDescription="Order control, inventory sync, clients, and operational diagnostics"
                      sections={informationArchitecture}
                      primaryColor="#3B82F6"
                      secondaryColor="#00229E"
                    />

                    {/* Operational Flow */}
                    <div className="p-8 bg-muted/10 border border-white/5 rounded-xl text-center space-y-6">
                      <h4 className="text-xl font-bold text-white">Enterprise Order Dispatch Journey</h4>
                      <div className="flex flex-wrap justify-center items-center gap-3">
                        <div className="px-4 py-2 bg-[#3B82F6]/20 rounded-lg text-sm text-white border border-[#3B82F6]/30">Register B2B Account Order</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#3B82F6]/20 rounded-lg text-sm text-white border border-[#3B82F6]/30">Safety Stock Level Check</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#3B82F6]/20 rounded-lg text-sm text-white border border-[#3B82F6]/30">Fulfill Meal Preparation</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#00229E]/20 rounded-lg text-sm text-white border border-[#00229E]/30">Automate Audited Invoice & PDF</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* PROCESS TAB */}
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
                      <Settings className="w-8 h-8 text-[#3B82F6]" />
                      Design & Collaboration Process
                    </CardTitle>
                    <CardDescription>
                      How we turned raw stock inventories and invoicing constraints into a premium console.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Research */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#3B82F6] flex items-center gap-2">
                          <Badge className="bg-[#3B82F6]/20 text-[#3B82F6]">Phase 1</Badge>
                          Research & Discovery
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          We started by shadowing logistics coordinators in active kitchen hubs. We noticed they spent too much time manually checking inventory lists rather than streamlining daily dispatch orders.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#3B82F6]" />
                            Conducted operator workflow shadowing sessions.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#3B82F6]" />
                            Analyzed historical logs to map kitchen bottlenecks.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#3B82F6]" />
                            Identified efficiency losses in role permission managers.
                          </li>
                        </ul>
                      </div>

                      {/* Design */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#00229E] flex items-center gap-2">
                          <Badge className="bg-[#00229E]/20 text-[#00229E]">Phase 2</Badge>
                          Design & Prototyping
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Using the feedback insights, we designed clean asset tables, stock indicators, and valuation charts. We prioritized high-contrast blue status indicators so operators could identify order alerts instantly.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#00229E]" />
                            Built high-density custom state tables in dark theme layouts.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#00229E]" />
                            Mocked interactive diagnostics charts in Figma with site managers.
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="mt-1 w-4 h-4 text-[#00229E] flex-shrink-0" />
                            Refined color severity states for accessible status viewing.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Developer Collaboration */}
                    <div className="space-y-6 pt-6 border-t border-white/5">
                      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        <Badge className="bg-emerald-500/20 text-emerald-400">Phase 3</Badge>
                        Engineering Handoff & Collaboration
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        To guarantee high fidelity implementation of order systems, I prepared precise specs in Figma Dev Mode. I sat down with frontend engineers to construct a reusable grid component structure, defining how live values refresh visually and mapping custom SVG vectors directly to database queries.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-muted/10 border border-white/5 rounded-lg text-center">
                          <h5 className="font-semibold text-white text-sm">Figma Spec Sync</h5>
                          <p className="text-xs text-muted-foreground mt-1">Clean grid layouts matching CSS flex/grid rules perfectly.</p>
                        </div>
                        <div className="p-4 bg-muted/10 border border-white/5 rounded-lg text-center">
                          <h5 className="font-semibold text-white text-sm">Scheduler Token Library</h5>
                          <p className="text-xs text-muted-foreground mt-1">Color, spacing, and transition constants for components.</p>
                        </div>
                        <div className="p-4 bg-muted/10 border border-white/5 rounded-lg text-center">
                          <h5 className="font-semibold text-white text-sm">Real-time Data Map</h5>
                          <p className="text-xs text-muted-foreground mt-1">Direct mockups mapping websocket inputs to UI triggers.</p>
                        </div>
                      </div>
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
