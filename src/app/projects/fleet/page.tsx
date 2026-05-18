"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Truck, Calendar, Battery, Compass, Settings, Users, Star, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectArchitectureMap } from "@/components/project-architecture-map"

export default function FleetCaseStudy() {
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
      title: "SOC & Vehicle Monitor",
      description: "Real-time battery level and state of charge dashboard",
      icon: Battery,
      features: ["Active State of Charge (SOC)", "Battery Temperature Alerts", "Plug Status Monitors", "Vehicle Location Sprints"]
    },
    {
      title: "Smart Charging Planner",
      description: "Depot schedules and load shifting planner",
      icon: Calendar,
      features: ["Drag-and-Drop Scheduler", "Depot Energy Allocators", "Load Shifting Reminders", "Peak Hour Warnings"]
    },
    {
      title: "Route & Dispatch Engine",
      description: "Efficient navigation routing for drivers",
      icon: Compass,
      features: ["Driver Handoff Cards", "Route Charger Maps", "Range Estimators", "Traffic Bypass Plans"]
    },
    {
      title: "Battery Health Analytics",
      description: "Degradation curves and metrics tracking",
      icon: Truck,
      features: ["Degradation Curves", "Cell Balancing Gauges", "Warranty Trackers", "Historical Performance Exporter"]
    }
  ]

  const stakeholders = [
    {
      role: "Business Leaders",
      title: "Fleet Logistics VP & Fleet Operators Director",
      focus: "Maximizing fleet run-time, minimizing charging utility bills via smart scheduling, and extending battery warranty lifespans."
    },
    {
      role: "Operations Operators",
      title: "Fleet Dispatchers & Depot Managers",
      focus: "Need an easy-to-use charging scheduler to ensure vehicles are 100% charged before morning shifts start."
    },
    {
      role: "Engineering Team",
      title: "Smart Grid Engineers & Route Developers",
      focus: "Need a unified UI design component library to easily represent charging state algorithms and driver routes in dashboards."
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,122,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(121,40,202,0.1),transparent_50%)]" />

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
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm border border-[#FF007A]/30">
                EV Fleet Operations Platform
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-[#FF007A] via-[#B800B8] to-[#7928CA] bg-clip-text text-transparent">
                Iris Fleet
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            >
              Streamlining commercial depot charging, optimizing EV battery lifespans, and scheduling smart power shifts in a beautiful visual interface.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Fleet Management</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Smart Schedules</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Battery Tracking</Badge>
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
                      <Truck className="w-8 h-8 text-[#FF007A]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Iris Fleet is an enterprise-grade commercial electric vehicle fleet management platform. Designed explicitly for depot managers and logistics operators, it provides total operational clarity over battery lifespans, vehicle assignments, charging schedules, and energy usage metrics.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      By designing intuitive timelines and drag-and-drop charging calendars, we enabled depot coordinators to manage charger loads easily, avoid peak-hour utility penalties, monitor battery degradation curves, and ensure logistics vehicles are fully powered for their morning shifts.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Designer's Impact & Deliverables */}
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
                      I led the end-to-end UX/UI design of Iris Fleet, mapping out the multi-vehicle charging scheduler UI, creating the visual styling for battery levels, and designing the responsive dispatcher dashboards.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Key Contributions:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#FF007A] rounded-full mt-2" />
                            Designed a gorgeous drag-and-drop charger reservation timeline UI.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#FF007A] rounded-full mt-2" />
                            Simplified battery health telemetry into simple degradation curve graphs.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#FF007A] rounded-full mt-2" />
                            Optimized the fleet charging planner with clear peak-energy warning panels.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#FF007A] rounded-full mt-2" />
                            Conducted 12 UX research interviews with commercial vehicle dispatchers.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Design Deliverables:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#7928CA] rounded-full mt-2" />
                            High-fidelity interactive scheduler prototypes with layout specs.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#7928CA] rounded-full mt-2" />
                            UI components library (battery gauges, charger ports status, time pickers).
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#7928CA] rounded-full mt-2" />
                            Depot operational flow blueprints and visual hierarchy style tokens.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#7928CA] rounded-full mt-2" />
                            Figma specs for responsive web, tablet, and mobile driver layouts.
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
                    <Card key={i} className="border border-white/5 bg-background/50 hover:border-[#FF007A]/40 transition-all shadow-md">
                      <CardHeader>
                        <Badge variant="outline" className="w-max mb-2 border-[#FF007A]/30 text-[#FF007A]">{stakeholder.role}</Badge>
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
                      Depot Friction (The Problem)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Depot managers were scheduling charging manually on paper grids or massive spreadsheets. When several logistics vans plugged in simultaneously at 6:00 PM, the local utility grid faced extreme peak-load surcharges.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      This lack of charging structure caused expensive electricity bills, vehicle charging bottlenecks, and rapid battery capacity degradation.
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
                      We developed an automated charging timeline dashboard. The interface intelligently schedules charging to shift grid usage to night-time off-peak hours, balances power distribution across chargers, and monitors cell metrics.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      By shifting peak charging loads and displaying simple visual indicators of battery state, we saved logistics managers 35% on depot utility costs and extended overall battery health by 2.5 years.
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
                <h3 className="text-2xl font-bold text-center text-white">Iris Fleet Management Ecosystem</h3>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-5xl"
                  >
                    <img
                      src="/fleet.svg"
                      alt="Iris Fleet Telemetry Interface"
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
                      <Battery className="w-8 h-8 text-[#FF007A]" />
                      UI/UX Information Architecture
                    </CardTitle>
                    <CardDescription>
                      A designer-led screen structure for vehicle readiness, depot scheduling, dispatch, and battery confidence.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <ProjectArchitectureMap
                      rootLabel="Iris Fleet"
                      rootDescription="Vehicle charge state, smart scheduling, dispatch, and battery health"
                      sections={infoArchitecture}
                      primaryColor="#FF007A"
                      secondaryColor="#7928CA"
                    />

                    {/* Operational Flow */}
                    <div className="p-8 bg-muted/10 border border-white/5 rounded-xl text-center space-y-6">
                      <h4 className="text-xl font-bold text-white">Depot Smart Scheduling Workflow</h4>
                      <div className="flex flex-wrap justify-center items-center gap-3">
                        <div className="px-4 py-2 bg-[#FF007A]/20 rounded-lg text-sm text-white border border-[#FF007A]/30">Vans Arrive & Plug In</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#FF007A]/20 rounded-lg text-sm text-white border border-[#FF007A]/30">Intelligent Load Allocator Queues</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#FF007A]/20 rounded-lg text-sm text-white border border-[#FF007A]/30">Load Shift to Off-Peak Window</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#7928CA]/20 rounded-lg text-sm text-white border border-[#7928CA]/30">Vans Fully Powered by 6:00 AM</div>
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
                      <Settings className="w-8 h-8 text-[#FF007A]" />
                      Design & Collaboration Process
                    </CardTitle>
                    <CardDescription>
                      How we turned raw utility load limits and charging metrics into an intuitive experience.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Research */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#FF007A] flex items-center gap-2">
                          <Badge className="bg-[#FF007A]/20 text-[#FF007A]">Phase 1</Badge>
                          Research & Discovery
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          We began by shadowing commercial logistics coordinators at active shipping hubs. We discovered that depot dispatchers did not understand raw energy values like kilowatts, but cared intensely about &quot;vehicle delivery range&quot; and &quot;plug status.&quot;
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#FF007A]" />
                            Conducted operator workflow shadowing sessions.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#FF007A]" />
                            Analyzed fleet route logs to map daily range demands.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#FF007A]" />
                            Identified peaks in grid congestion at depot sites.
                          </li>
                        </ul>
                      </div>

                      {/* Design */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#7928CA] flex items-center gap-2">
                          <Badge className="bg-[#7928CA]/20 text-[#7928CA]">Phase 2</Badge>
                          Design & Prototyping
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Using the feedback insights, we designed high-density modular cards, visual charging scheduler calendars, and cell health indicators. We prioritized clean, high-contrast pink status badges so operators could identify disconnected vans instantly from across the depot room.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#7928CA]" />
                            Built high-density custom state tables with dark theme aesthetics.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#7928CA]" />
                            Mocked interactive diagnostics charts in Figma with depot managers.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#7928CA]" />
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
                        To guarantee high fidelity implementation of the dynamic reservation calendar, I prepared precise layout templates in Figma Dev Mode. I sat down with frontend engineers to construct a reusable grid component structure, defining how live values refresh visually and mapping custom SVG vectors directly to websocket events.
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
                          <h5 className="font-semibold text-white text-sm">Charging Algorithms Mock</h5>
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
