"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Monitor, ShieldAlert, Cpu, Activity, Settings, Users, Star, ArrowRight, Play, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectArchitectureMap } from "@/components/project-architecture-map"

export default function RMSCaseStudy() {
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
      title: "Real-time Telemetry Grid",
      description: "Live station connectivity and status streams",
      icon: Activity,
      features: ["Active Telemetry Feeds", "Connector Power Streams", "Latency Trackers", "Heartbeat Indicators"]
    },
    {
      title: "Alert Threshold Manager",
      description: "Configurable alert limits and trigger warnings",
      icon: ShieldAlert,
      features: ["Custom Rule Builder", "Severity Classification", "Push Notification Channels", "Auto-Escalation Paths"]
    },
    {
      title: "Remote Firmware Controller",
      description: "Over-the-air firmware updates and controls",
      icon: Cpu,
      features: ["Version Deployment", "Rollback Trigger Logs", "Hardware Compatibility Checks", "Silent Mode Scheduling"]
    },
    {
      title: "Operations Log & Auditing",
      description: "Complete historical operator action logs",
      icon: Monitor,
      features: ["Operator Action Logs", "Audit Trail Exporters", "Fault Resolution Records", "Remote Commands History"]
    }
  ]

  const stakeholders = [
    {
      role: "Business Leaders",
      title: "Operations Director & Fleet Partnerships Lead",
      focus: "Maximizing charger uptime (SLA contracts) and reducing field technician dispatch costs through automated remote recoveries."
    },
    {
      role: "Operations Operators",
      title: "Charge Point Operators & Field Support",
      focus: "Requiring real-time fault alerts with clear diagnostic instructions to solve charger issues remotely in under 3 minutes."
    },
    {
      role: "Engineering Team",
      title: "IoT System Architects & Frontend Developers",
      focus: "Needing standardized dashboard component UI variables and simple visual representations of complex OCPP websocket payloads."
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />

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
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm border border-[#4F46E5]/30">
                Enterprise Remote Monitoring
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-[#4F46E5] via-[#3b82f6] to-[#06B6D4] bg-clip-text text-transparent">
                Iris RMS
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            >
              Empowering CPOs with real-time diagnostic grids, alerts, and live telemetry widgets to achieve 99.9% uptime.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Remote Monitoring</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">IoT Operations</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Telemetry Visualization</Badge>
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
              {/* Project Narrative */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold flex items-center gap-3">
                      <Monitor className="w-8 h-8 text-[#4F46E5]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Iris RMS is a state-of-the-art Remote Monitoring System designed to manage and monitor EV charging infrastructure. The product was built from the ground up to solve critical friction between real-time Internet of Things telemetry and operator diagnostic dashboard workflows.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      By designing intuitive telemetry charts, clear warning hierarchies, and a robust remote command center, we enabled operations teams to immediately pinpoint charging anomalies, check hardware levels, deploy firmware over-the-air, and diagnose faults remotely without requiring on-site engineers.
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
                      I was the lead product designer for Iris RMS, managing user discovery cycles with CPOs, mapping complex alert rules, and designing the high-fidelity operations control dashboard.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Key Contributions:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-2" />
                            Designed a high-density, real-time diagnostic grid displaying 1,000+ connectors.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-2" />
                            Optimized the alert manager workflow to categorize severity rules cleanly.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-2" />
                            Constructed secure, multi-stage over-the-air firmware deployment modals.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-2" />
                            Conducted operator feedback wireframing sprints to align user needs.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Design Deliverables:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#06B6D4] rounded-full mt-2" />
                            Interactive dashboard Figma prototype with simulated telemetry updates.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#06B6D4] rounded-full mt-2" />
                            Telemetry card and alert UI component library (design tokens, states).
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#06B6D4] rounded-full mt-2" />
                            Detailed operator persona maps and visual hierarchy style guides.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#06B6D4] rounded-full mt-2" />
                            Figma Developer Mode specs and custom SVG asset handoff documentation.
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
                    <Card key={i} className="border border-white/5 bg-background/50 hover:border-[#4F46E5]/40 transition-all shadow-md">
                      <CardHeader>
                        <Badge variant="outline" className="w-max mb-2 border-[#4F46E5]/30 text-[#4F46E5]">{stakeholder.role}</Badge>
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
                      Operational Friction (The Problem)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      EV chargers frequently suffered from silent network failures or OCPP websocket disconnects. Operations personnel had no centralized view to distinguish between a hardware breakdown, a firmware fault, or a basic internet glitch.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      This lack of diagnostic visibility led to high station downtime, delayed alert reaction times, and excessive manual dispatch fees for basic configuration issues.
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
                      We designed a real-time diagnostics control dashboard mapping all IoT charger states. Operators can view status changes instantly, build custom alert rules to trigger on sensor variances, and update system levels.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      By presenting telemetry inputs visually and building direct remote controls inside the UI, we reduced operator diagnostic resolution times from over 4 hours to just 3 minutes.
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
                <h3 className="text-2xl font-bold text-center text-white">Iris RMS Enterprise Layout</h3>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-5xl"
                  >
                    <img
                      src="/rms.svg"
                      alt="Iris RMS Enterprise Layout Interface"
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
                      <Activity className="w-8 h-8 text-[#4F46E5]" />
                      UI/UX Information Architecture
                    </CardTitle>
                    <CardDescription>
                      A designer-led screen structure for live monitoring, alert triage, remote action, and audit clarity.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <ProjectArchitectureMap
                      rootLabel="Iris RMS"
                      rootDescription="Telemetry, alerts, firmware control, and audit history"
                      sections={infoArchitecture}
                      primaryColor="#4F46E5"
                      secondaryColor="#06B6D4"
                    />

                    {/* Operational Flow */}
                    <div className="p-8 bg-muted/10 border border-white/5 rounded-xl text-center space-y-6">
                      <h4 className="text-xl font-bold text-white">CPO Remote Troubleshooting Journey</h4>
                      <div className="flex flex-wrap justify-center items-center gap-3">
                        <div className="px-4 py-2 bg-[#4F46E5]/20 rounded-lg text-sm text-white border border-[#4F46E5]/30">Heartbeat Drop Alert</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#4F46E5]/20 rounded-lg text-sm text-white border border-[#4F46E5]/30">Examine Live Telemetry Grid</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#4F46E5]/20 rounded-lg text-sm text-white border border-[#4F46E5]/30">Diagnose OCPP Error Payload</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#06B6D4]/20 rounded-lg text-sm text-white border border-[#06B6D4]/30">Deploy Remote Reset Command</div>
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
                      <Settings className="w-8 h-8 text-[#4F46E5]" />
                      Design & Collaboration Process
                    </CardTitle>
                    <CardDescription>
                      How we turned raw IoT datastreams into a gorgeous, highly actionable operations product.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Research */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#4F46E5] flex items-center gap-2">
                          <Badge className="bg-[#4F46E5]/20 text-[#4F46E5]">Phase 1</Badge>
                          Research & Discovery
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          We started by interviewing 8 Charge Point Operators during their shifts to watch how they responded to system failures. We noticed they spent 80% of their time cross-referencing CSV logs in notepad programs with slack reports.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#4F46E5]" />
                            Conducted operator workflow shadowing sessions.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#4F46E5]" />
                            Analyzed OCPP logs to map all critical IoT payloads.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#4F46E5]" />
                            Identified latency issues in websocket diagnostic loops.
                          </li>
                        </ul>
                      </div>

                      {/* Design */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#06B6D4] flex items-center gap-2">
                          <Badge className="bg-[#06B6D4]/20 text-[#06B6D4]">Phase 2</Badge>
                          Design & Prototyping
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Using the feedback insights, we designed high-density modular cards, custom visual charting widgets, and real-time state change badges. We prioritized low-fatigue dark modes to support night shift operators.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06B6D4]" />
                            Built high-density custom state tables with dark theme aesthetics.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06B6D4]" />
                            Mocked interactive diagnostics charts in Figma with CPOs.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06B6D4]" />
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
                        To guarantee high fidelity implementation of dynamic data triggers, I prepared precise layout templates in Figma Dev Mode. I sat down with frontend engineers to construct a reusable grid component structure, defining how live values refresh visually and mapping custom SVG vectors directly to websocket events.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-muted/10 border border-white/5 rounded-lg text-center">
                          <h5 className="font-semibold text-white text-sm">Figma Spec Sync</h5>
                          <p className="text-xs text-muted-foreground mt-1">Clean grid layouts matching CSS flex/grid rules perfectly.</p>
                        </div>
                        <div className="p-4 bg-muted/10 border border-white/5 rounded-lg text-center">
                          <h5 className="font-semibold text-white text-sm">Telemetry Token Library</h5>
                          <p className="text-xs text-muted-foreground mt-1">Color, spacing, and transition constants for components.</p>
                        </div>
                        <div className="p-4 bg-muted/10 border border-white/5 rounded-lg text-center">
                          <h5 className="font-semibold text-white text-sm">OCPP Data Mapping</h5>
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
