"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Zap, Activity, User, Settings, TrendingUp, Search, ArrowRight, CheckCircle, AlertTriangle, Monitor, Smartphone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectArchitectureMap } from "@/components/project-architecture-map"

export default function IrisNetworkCaseStudy() {
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
      description: "Real-time network map and monitoring logs",
      icon: Activity,
      features: ["Active Hub Status", "Hourly Session Trackers", "Net Revenue Metrics", "Station Utilization Factors"]
    },
    {
      title: "Station Controller",
      description: "Power thresholds and charger controls",
      icon: Zap,
      features: ["Active Connector Monitors", "Dynamic Load Allocators", "Maintenance Alarm Panel", "OCPP Stream Listeners"]
    },
    {
      title: "Driver Mobile App",
      description: "Interactive driver mapping and payment options",
      icon: User,
      features: ["Charger Finder Maps", "RFID/UPI Checkout Panels", "Live Charger Session History", "Driver Preference Settings"]
    },
    {
      title: "Payment Gateway",
      description: "Secure automated charging billing loops",
      icon: TrendingUp,
      features: ["Dynamic Billing Estimators", "CPO Cash Settlements", "Discount Voucher Redeemers", "Financial Report Generators"]
    }
  ]

  const stakeholders = [
    {
      role: "Business Leaders",
      title: "Network Expansion Director",
      focus: "Expanding geographic charging hubs, maximizing driver loyalty metrics, and establishing site partner revenue sharing models."
    },
    {
      role: "Operations Operators",
      title: "Depot Site Owners & CPOs",
      focus: "Require clear dashboard tables to set charging price tiers, view live connector states, and coordinate repair technicians."
    },
    {
      role: "Engineering Team",
      title: "Embeddable OCPP Developers",
      focus: "Need predefined mobile wireframes, clean responsive layouts, and standard design tokens to connect backend socket events."
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(50,179,79,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(83,218,111,0.1),transparent_50%)]" />

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
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm border border-[#32B34F]/30">
                Smart EV Network
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-[#32B34F] via-[#83DA6F] to-[#53ABF8] bg-clip-text text-transparent">
                Iris Network
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            >
              Designing intuitive driver mobile interfaces and clean CPO dashboards to streamline electric vehicle smart grids across Web and Mobile.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">EV Smart Grid</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">CPO Web Console</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Driver Mobile UX</Badge>
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
                      <Zap className="w-8 h-8 text-[#32B34F]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Iris Network is an end-to-end smart charging platform built for charging network operators and EV drivers alike. The platform resolves the disconnect between high-voltage depot operations and clean user experiences, connecting real-time hardware status values with customer search applications.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      By designing intuitive, map-first driver mobile interfaces, seamless checkout portals, and robust CPO management control centers, we built an elegant ecosystem where operators easily configure custom electricity tariffs while drivers locate charging stations effortlessly.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Web vs Mobile Design Blueprint */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-center">Web & Mobile Design Blueprint</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Web Panel */}
                  <Card className="border border-white/5 bg-background/50 relative overflow-hidden group hover:border-[#32B34F]/30 transition-all shadow-md">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#32B34F]/10 rounded-bl-full flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-[#32B34F]" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">CPO Grid Web Console</CardTitle>
                      <CardDescription>Engineered for high-volume energy dispatchers and financial coordinators.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        The desktop dashboard focuses on presenting thousands of chargers cleanly in a robust search grid. CPOs view depreciation curves, build custom audit PDFs, and configure dynamic alert thresholds.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#32B34F]" />
                          Multi-tenant charger configurations and OCCP socket streams
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#32B34F]" />
                          Detailed hourly feeder load forecasts and carbon scorecards
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#32B34F]" />
                          Advanced pricing engines to balance peak electricity schedules
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Mobile Panel */}
                  <Card className="border border-white/5 bg-background/50 relative overflow-hidden group hover:border-[#53ABF8]/30 transition-all shadow-md">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#53ABF8]/10 rounded-bl-full flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-[#53ABF8]" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">EV Driver Mobile App</CardTitle>
                      <CardDescription>Optimized for lightning-fast localized search, reserve, and mobile payment cycles.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        The mobile application prioritizes map responsiveness and instantaneous checkouts. Drivers find open chargers, view accurate pricing, and authenticate slots in three taps.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#53ABF8]" />
                          Map-first charger finder with live slot availability overlays
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#53ABF8]" />
                          Integrated RFID / UPI checkout with live charger session trackers
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#53ABF8]" />
                          Satisfying success micro-animations upon smart charge activation
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
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
                      I served as the lead designer for Iris Network, conducting user testing cycles with both EV drivers and station operators, defining responsive layout rules, and creating the high-fidelity CPO dashboard console.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Key Contributions:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#32B34F] rounded-full mt-2" />
                            Designed map-first driver search dashboards with live plug status overlays.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#32B34F] rounded-full mt-2" />
                            Simplified charger diagnostics parameters for facility operators.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#32B34F] rounded-full mt-2" />
                            Optimized driver checkout systems, reducing payment flow drop-offs.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#32B34F] rounded-full mt-2" />
                            Conducted remote user tests with 15 active EV vehicle drivers.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Design Deliverables:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#53ABF8] rounded-full mt-2" />
                            High-fidelity interactive mobile and web prototypes in Figma.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#53ABF8] rounded-full mt-2" />
                            Reusable component assets library (plug cards, status gauges, pricing matrices).
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#53ABF8] rounded-full mt-2" />
                            Comprehensive driver journey blueprints and visual design style guides.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#53ABF8] rounded-full mt-2" />
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
                    <Card key={i} className="border border-white/5 bg-background/50 hover:border-[#32B34F]/40 transition-all shadow-md">
                      <CardHeader>
                        <Badge variant="outline" className="w-max mb-2 border-[#32B34F]/30 text-[#32B34F]">{stakeholder.role}</Badge>
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
                      Infrastructure Friction (The Problem)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      EV drivers were constantly arriving at broken chargers, experiencing layout confusion at payment terminals, and struggling to coordinate plug reservations. CPOs lacked clean grid visibilities to modify electricity pricing.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      This lack of integrated communication caused significant user frustration, low charger utilization rates, and severe depot downtime.
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
                      We developed an integrated smart network solution. Drivers easily locate operational plugs, check billing estimators, and complete payments, while operators track active charger status values cleanly in a simple dashboard.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      By presenting charger states in a simple visual map, we saved drivers 30% on charging delays and boosted operator charger utilization rates by 50%.
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
                <h3 className="text-2xl font-bold text-center text-white">Iris Network Dashboard Console & App</h3>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full lg:w-2/3 max-w-4xl"
                  >
                    <img
                      src="/network_web.png"
                      alt="Iris Network Web Dashboard"
                      className="w-full h-auto object-cover rounded-xl border border-white/10"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-xs"
                  >
                    <img
                      src="/network_mobile.png"
                      alt="Iris Network Mobile Experience"
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
                      <Activity className="w-8 h-8 text-[#32B34F]" />
                      UI/UX Information Architecture
                    </CardTitle>
                    <CardDescription>
                      A designer-led screen structure for charger discovery, session control, payments, and operator decisions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <ProjectArchitectureMap
                      rootLabel="Iris Network"
                      rootDescription="Charging discovery, connector control, payment, and CMS operations"
                      sections={infoArchitecture}
                      primaryColor="#32B34F"
                      secondaryColor="#53ABF8"
                    />

                    {/* Operational Flow */}
                    <div className="p-8 bg-muted/10 border border-white/5 rounded-xl text-center space-y-6">
                      <h4 className="text-xl font-bold text-white">Driver Charging Journey Map</h4>
                      <div className="flex flex-wrap justify-center items-center gap-3">
                        <div className="px-4 py-2 bg-[#32B34F]/20 rounded-lg text-sm text-white border border-[#32B34F]/30">Open Search Map</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#32B34F]/20 rounded-lg text-sm text-white border border-[#32B34F]/30">Locate Active Connector</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#32B34F]/20 rounded-lg text-sm text-white border border-[#32B34F]/30">RFID / App Tap Checkout</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#53ABF8]/20 rounded-lg text-sm text-white border border-[#53ABF8]/30">Completed Smart Charge Session</div>
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
                      <Settings className="w-8 h-8 text-[#32B34F]" />
                      Design & Collaboration Process
                    </CardTitle>
                    <CardDescription>
                      How we turned raw OCPP charger signals and mobile checkout fields into a unified ecosystem.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Research */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#32B34F] flex items-center gap-2">
                          <Badge className="bg-[#32B34F]/20 text-[#32B34F]">Phase 1</Badge>
                          Research & Discovery
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          We started by interviewing active EV drivers at public charging depots. We discovered they spent too much time dealing with failed layout systems at payment terminals rather than analyzing local plug locations.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#32B34F]" />
                            Conducted operator workflow shadowing sessions.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#32B34F]" />
                            Analyzed historical grid logs to map daily charging demand.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#32B34F]" />
                            Identified efficiency bottlenecks in local charging interfaces.
                          </li>
                        </ul>
                      </div>

                      {/* Design */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#53ABF8] flex items-center gap-2">
                          <Badge className="bg-[#53ABF8]/20 text-[#53ABF8]">Phase 2</Badge>
                          Design & Prototyping
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Using the feedback insights, we designed clean modular charts, energy load indicators, and battery dials. We prioritized high-contrast green indicators so drivers could check operational plugs instantly.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#53ABF8]" />
                            Built high-density custom state tables with dark theme aesthetics.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#53ABF8]" />
                            Mocked interactive diagnostics charts in Figma with energy site managers.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#53ABF8]" />
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
                        To guarantee high fidelity implementation of driver interface parameters, I prepared precise layout templates in Figma Dev Mode. I sat down with frontend engineers to construct a reusable grid component structure, defining how live values refresh visually and mapping custom SVG vectors directly to websocket events.
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
