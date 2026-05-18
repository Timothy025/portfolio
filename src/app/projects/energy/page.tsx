"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Zap, Sun, Database, ShieldCheck, Settings, Users, ArrowRight, CheckCircle, AlertTriangle, Monitor, Smartphone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectArchitectureMap } from "@/components/project-architecture-map"

export default function EnergyCaseStudy() {
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
      title: "Grid Load Monitor",
      description: "Real-time transformer capability and power indicators",
      icon: Zap,
      features: ["Active KW Load Streams", "Grid Threshold Guardrails", "Coincident Peak Monitors", "Feeder Phase Balancers"]
    },
    {
      title: "Load Shifting Manager",
      description: "Automated peak-shaving scheduling interface",
      icon: ShieldCheck,
      features: ["Dynamic Pricing Trackers", "Peak Shaving Rules", "Auto-Throttle Control Sets", "Emergency Power Triggers"]
    },
    {
      title: "Solar & Battery Integrator",
      description: "Renewable storage status and performance data",
      icon: Sun,
      features: ["Solar Generation Trackers", "BESS SOC Indicators", "Discharge Schedulers", "Net Metering Dashboards"]
    },
    {
      title: "Forecast & Analytics Hub",
      description: "Machine learning power forecasting maps",
      icon: Database,
      features: ["ML Load Forecast Lines", "Historical Demand Exporters", "Carbon Impact Scorecards", "Anomalous Load Trackers"]
    }
  ]

  const stakeholders = [
    {
      role: "Business Leaders",
      title: "Utility Partnerships Director & Sustainability VP",
      focus: "Securing carbon reduction incentives, avoiding grid overloading penalties, and maintaining utility provider relationships."
    },
    {
      role: "Operations Operators",
      title: "Facility Energy Managers & Hub Operators",
      focus: "Need clear dashboards to track energy savings, load reduction success, and local solar battery reserves easily."
    },
    {
      role: "Engineering Team",
      title: "Grid Algorithm Engineers & Frontend Devs",
      focus: "Need intuitive, standardized dashboard design tokens to represent real-time energy flow values visually."
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent_50%)]" />

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
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm border border-[#FACC15]/30">
                Smart Energy Optimization
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-[#FACC15] via-[#F59E0B] to-[#F97316] bg-clip-text text-transparent">
                Iris Energy
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            >
              Intelligent load balancing, distributed energy resource tracking, and smart grid optimization across Web and Mobile.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Energy Management</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Grid Optimization</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">CPO Web Console</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Mobile Alerts UX</Badge>
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
                      <Zap className="w-8 h-8 text-[#FACC15]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Iris Energy (historically Aatral) is an advanced enterprise energy management platform designed to help operations managers optimize EV charging station grid power. It balances distributed energy assets—such as local solar production and battery storage systems (BESS)—to shift charging loads dynamically.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      By designing intuitive, high-resolution line charts and threshold controls, we enabled utility and energy managers to monitor feeder capacities, prevent peak demand surcharges, maintain localized solar reserves, and run massive vehicle charging grids cleanly and stably.
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
                  <Card className="border border-white/5 bg-background/50 relative overflow-hidden group hover:border-[#FACC15]/30 transition-all shadow-md">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#FACC15]/10 rounded-bl-full flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-[#FACC15]" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">Grid Optimizer Web Console</CardTitle>
                      <CardDescription>Focused on complex forecasting grids, solar arrays, and high-volume demand management.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Desktop energy managers monitor global site loads. The web console delivers real-time feeder balancing widgets, coincident peak monitors, solar generation telemetry, and dynamic scheduling triggers.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#FACC15]" />
                          Dynamic peak-shaving scheduling and automated price shifting
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#FACC15]" />
                          Detailed BESS State of Charge dials and carbon impact metrics
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#FACC15]" />
                          Historical capacity curves with ML-powered forecast estimators
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Mobile Panel */}
                  <Card className="border border-white/5 bg-background/50 relative overflow-hidden group hover:border-[#F97316]/30 transition-all shadow-md">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#F97316]/10 rounded-bl-full flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-[#F97316]" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">Dispatcher Mobile Alert App</CardTitle>
                      <CardDescription>Created for immediate on-the-go notifications, alerts, and remote load overrides.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        The mobile app prioritizes urgent status visibility. On-duty site coordinators receive push notifications of imminent peak threshold violations and trigger emergency battery discharge overrides.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#F97316]" />
                          Push warnings of coincident peak violations and transformer alarms
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#F97316]" />
                          One-tap emergency BESS power discharge buttons
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#F97316]" />
                          Quick, thumb-friendly threshold sliders for mobile load shifting
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
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
                      I was the sole product designer for Iris Energy, leading user research cycles with industrial site energy coordinators, mapping load curves, and designing the high-fidelity smart load balancing interface.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Key Contributions:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#FACC15] rounded-full mt-2" />
                            Designed intuitive grid capacity indicators displaying transformer loads.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#FACC15] rounded-full mt-2" />
                            Simplified distributed energy resource storage displays (BESS charging states).
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#FACC15] rounded-full mt-2" />
                            Optimized the machine learning load prediction charts to be readable at a glance.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#FACC15] rounded-full mt-2" />
                            Conducted 10 contextual interviews at active charging hub hubs.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Design Deliverables:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2" />
                            High-fidelity interactive layout prototypes featuring dynamic load lines.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2" />
                            Energy UI library components (solar generators, battery dials, threshold sliders).
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2" />
                            Detailed grid-load dispatcher personas and visual hierarchy guidelines.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2" />
                            Figma variables sheet and developer asset specs.
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
                    <Card key={i} className="border border-white/5 bg-background/50 hover:border-[#FACC15]/40 transition-all shadow-md">
                      <CardHeader>
                        <Badge variant="outline" className="w-max mb-2 border-[#FACC15]/30 text-[#FACC15]">{stakeholder.role}</Badge>
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
                      Grid Spikes (The Problem)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Charging hubs frequently suffered extreme grid overload spikes when multiple EV buses or trucks plugged in at once. Site managers were blindsided by massive &quot;demand charges&quot; on their utility bills.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      This lack of visual power metrics led to complete site blackouts, expensive utility fees, and zero utilization of local solar battery reserves.
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
                      We created an intelligent load balancing system. The interface automatically shifts charging parameters based on grid capacities, discharges battery reserves during spikes, and tracks peak utility pricing levels.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      By presenting power flows cleanly and automating load shaving rules, we eliminated grid-spike site blackouts and saved operators over 40% on monthly electric bills.
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
                <h3 className="text-2xl font-bold text-center text-white">Iris Energy Optimization Hub & App</h3>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative lg:h-[500px]"
                  >
                    <img
                      src="/Aatral_iamge_2.svg"
                      alt="Iris Energy Web Dashboard"
                      className="w-full lg:w-auto h-auto lg:h-full object-contain rounded-xl border border-white/10"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative lg:h-[500px]"
                  >
                    <img
                      src="/Aatral_app.svg"
                      alt="Iris Energy Mobile App"
                      className="w-full lg:w-auto h-auto lg:h-full object-contain rounded-xl border border-white/10"
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
                      <Zap className="w-8 h-8 text-[#FACC15]" />
                      UI/UX Information Architecture
                    </CardTitle>
                    <CardDescription>
                      A designer-led screen structure for grid status, load decisions, renewable context, and forecast review.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <ProjectArchitectureMap
                      rootLabel="Iris Energy"
                      rootDescription="Grid monitoring, load shifting, renewable storage, and forecasting"
                      sections={infoArchitecture}
                      primaryColor="#FACC15"
                      secondaryColor="#F97316"
                    />

                    {/* Operational Flow */}
                    <div className="p-8 bg-muted/10 border border-white/5 rounded-xl text-center space-y-6">
                      <h4 className="text-xl font-bold text-white">Smart Load Balancing Process</h4>
                      <div className="flex flex-wrap justify-center items-center gap-3">
                        <div className="px-4 py-2 bg-[#FACC15]/20 rounded-lg text-sm text-white border border-[#FACC15]/30">Load Spike Detected</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#FACC15]/20 rounded-lg text-sm text-white border border-[#FACC15]/30">BESS Storage Discharges Power</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#FACC15]/20 rounded-lg text-sm text-white border border-[#FACC15]/30">Dynamic Load Shifting Activated</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#F97316]/20 rounded-lg text-sm text-white border border-[#F97316]/30">Load Stabilized below Surcharge Limit</div>
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
                      <Settings className="w-8 h-8 text-[#FACC15]" />
                      Design & Collaboration Process
                    </CardTitle>
                    <CardDescription>
                      How we turned raw transformer variables and load factors into a gorgeous energy console.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Research */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#FACC15] flex items-center gap-2">
                          <Badge className="bg-[#FACC15]/20 text-[#FACC15]">Phase 1</Badge>
                          Research & Discovery
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          We started by interviewing facility coordinators at industrial charging hubs. We discovered that site operators spent too much time manually tracking utility billing tables rather than active charging grids.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#FACC15]" />
                            Conducted operator workflow shadowing sessions.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#FACC15]" />
                            Analyzed historical grid logs to map peak demand spikes.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#FACC15]" />
                            Identified efficiency losses in battery integration interfaces.
                          </li>
                        </ul>
                      </div>

                      {/* Design */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#F97316] flex items-center gap-2">
                          <Badge className="bg-[#F97316]/20 text-[#F97316]">Phase 2</Badge>
                          Design & Prototyping
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Using the feedback insights, we designed clean modular charts, solar generation tables, and cell status indicators. We prioritized high-contrast yellow status tags so energy dispatchers could check reserve limits instantly.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F97316]" />
                            Built high-density custom state tables with dark theme aesthetics.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F97316]" />
                            Mocked interactive diagnostics charts in Figma with energy site managers.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F97316]" />
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
                        To guarantee high fidelity implementation of dynamic load lines, I prepared precise layout templates in Figma Dev Mode. I sat down with frontend engineers to construct a reusable grid component structure, defining how live values refresh visually and mapping custom SVG vectors directly to websocket events.
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
