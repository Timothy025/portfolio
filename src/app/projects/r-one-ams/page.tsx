"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Building2, Users, Settings, TrendingUp, Search, ArrowRight, FileText, Activity, CheckCircle, AlertTriangle, Monitor, Smartphone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectArchitectureMap } from "@/components/project-architecture-map"

export default function ROneAMS() {
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
      title: "Asset Lifecycle Tracker",
      description: "Lifecycle tracking and operational diagnostics dashboards",
      icon: Building2,
      features: ["Active Asset Registration", "Geographical Spot Maps", "Maintenance Alarm Panel", "Service Log Exporters"]
    },
    {
      title: "Valuation & ROI Planner",
      description: "Depreciation curves and tax analytics center",
      icon: TrendingUp,
      features: ["Interactive Valuation Curves", "Dynamic Cost Calculators", "Tax Break Indicators", "Asset Salvage Forecasts"]
    },
    {
      title: "Role Permission Console",
      description: "Role-based access levels and security monitoring",
      icon: Users,
      features: ["Multi-Tenant Assignment", "Direct Action Permission Cards", "Security Audit Trail Maps", "SSO Active Sync Logs"]
    },
    {
      title: "Custom Report Builder",
      description: "Detailed regulatory reporting templates",
      icon: FileText,
      features: ["Modular PDF Generators", "KPI Metric Widgets", "CSV Batch Downloaders", "Shareable Client Portals"]
    }
  ]

  const stakeholders = [
    {
      role: "Business Leaders",
      title: "Chief Financial Officer & Asset VP",
      focus: "Maximizing depreciation tax benefits, reducing capital expenditure costs, and guaranteeing accurate valuation reporting."
    },
    {
      role: "Operations Operators",
      title: "Maintenance Leads & Facility Admins",
      focus: "Require simple layouts to check daily inspections, upload repairs, and check warranty terms."
    },
    {
      role: "Engineering Team",
      title: "Enterprise Backend Architects",
      focus: "Need standard wireframes, detailed state models, and reusable tokens to map telemetry data tables directly."
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(247,98,88,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(231,151,3,0.1),transparent_50%)]" />

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
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm border border-[#F76258]/30">
                Asset Management System
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-[#F76258] via-[#E74803] to-[#E79703] bg-clip-text text-transparent">
                Iris R-one
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            >
              Designing comprehensive lifecycle consoles, detailed valuation charts, and clear audits for enterprise organizations across Web and Mobile.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Web Console</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Mobile Field App</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">ROI Valuation</Badge>
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
                      <Building2 className="w-8 h-8 text-[#F76258]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Iris R-one is a leading enterprise Asset Management System (AMS) designed to track charger networks, coordinate field maintenance schedules, and forecast capital asset depreciations. 
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To optimize efficiency, we designed a unified dual-platform experience. Operations managers coordinate deployments and financial compliance via a highly granular **Web Console**, while field engineers resolve hardware faults using a sat-nav guided **Mobile Scanner Application**.
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
                  <Card className="border border-white/5 bg-background/50 relative overflow-hidden group hover:border-[#F76258]/30 transition-all shadow-md">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#F76258]/10 rounded-bl-full flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-[#F76258]" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">CPO Desktop Web Console</CardTitle>
                      <CardDescription>Engineered for high-density diagnostic oversight and financial analytics.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        The desktop dashboard focuses on presenting thousands of chargers cleanly in a robust search grid. CPOs view depreciation curves, build custom audit PDFs, and configure dynamic alert thresholds.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#F76258]" />
                          Multi-column search grids with dynamic filters
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#F76258]" />
                          Interactive SVG depreciation charts
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#F76258]" />
                          Granular multi-role team permission screens
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Mobile Panel */}
                  <Card className="border border-white/5 bg-background/50 relative overflow-hidden group hover:border-[#E79703]/30 transition-all shadow-md">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#E79703]/10 rounded-bl-full flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-[#E79703]" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">Technician Mobile Field App</CardTitle>
                      <CardDescription>Optimized for rapid physical inspections and ticket resolution under direct sunlight.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        The mobile application prioritizes on-site speed. Field teams easily scan charger hardware barcodes, take instant photographs of physical damages, and submit maintenance logs in under 15 seconds.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#E79703]" />
                          Tactile barcode and QR camera scanner controls
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#E79703]" />
                          One-tap damage photologs and speech-to-text logging
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#E79703]" />
                          Offline caching for remote underground sites
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
                      I led the complete visual redesign of the R-one ecosystem in Figma, translating massive databases into responsive layouts, building an extensive modular component library, and shadowing site technicians.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Key Contributions:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#F76258] rounded-full mt-2" />
                            Designed a high-density web control panel with nested tables.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#F76258] rounded-full mt-2" />
                            Created a satisfying mobile ticket-completion flow for field teams.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#F76258] rounded-full mt-2" />
                            Optimized permission matrix grids with drag-and-drop features.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#F76258] rounded-full mt-2" />
                            Conducted remote user testing with 12 corporate facilities leads.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Design Deliverables:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#E74803] rounded-full mt-2" />
                            Interactive high-fidelity prototypes (Web Console & Mobile App).
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#E74803] rounded-full mt-2" />
                            Standardized design system token library for React and Flutter platforms.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#E74803] rounded-full mt-2" />
                            Comprehensive operator personas and user journey blueprints.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#E74803] rounded-full mt-2" />
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
                    <Card key={i} className="border border-white/5 bg-background/50 hover:border-[#F76258]/40 transition-all shadow-md">
                      <CardHeader>
                        <Badge variant="outline" className="w-max mb-2 border-[#F76258]/30 text-[#F76258]">{stakeholder.role}</Badge>
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
                      Auditing Friction (The Problem)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Organizations were managing expensive physical equipment via siloed spreadsheets and paper checklists. Corporate finance teams struggled to calculate asset depreciations accurately, leading to compliance failures.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      This lack of integrated data models led to missed maintenance schedules, asset write-off penalties, and severe audit delays.
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
                      We developed an integrated double-sided asset platform. Financial coordinators easily track depreciation metrics and compile regulatory audits, while operators log inspections and verify asset conditions.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      By designing intuitive diagnostic dials and automated PDF builders, we reduced auditing cycles by 70% and increased overall asset utilization rates.
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
                <h3 className="text-2xl font-bold text-center text-white">Iris R-one Dashboard Console & Field App</h3>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full lg:w-2/3 max-w-4xl"
                  >
                    <img
                      src="/r-one_web.png"
                      alt="Iris R-one Web Console"
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
                      src="/r-one_mobile.png"
                      alt="Iris R-one Mobile App"
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
                      <Activity className="w-8 h-8 text-[#F76258]" />
                      UI/UX Information Architecture
                    </CardTitle>
                    <CardDescription>
                      A designer-led screen structure for asset status, valuation context, permissions, and reporting tasks.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <ProjectArchitectureMap
                      rootLabel="Iris R-One"
                      rootDescription="Asset lifecycle, valuation, permissions, and reporting"
                      sections={informationArchitecture}
                      primaryColor="#F76258"
                      secondaryColor="#E79703"
                    />

                    {/* Operational Flow */}
                    <div className="p-8 bg-muted/10 border border-white/5 rounded-xl text-center space-y-6">
                      <h4 className="text-xl font-bold text-white">Asset Deployment Workflow Flow</h4>
                      <div className="flex flex-wrap justify-center items-center gap-3">
                        <div className="px-4 py-2 bg-[#F76258]/20 rounded-lg text-sm text-white border border-[#F76258]/30">Register Capital Asset</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#F76258]/20 rounded-lg text-sm text-white border border-[#F76258]/30">Monitor Depreciation curves</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#F76258]/20 rounded-lg text-sm text-white border border-[#F76258]/30">Log Inspection Checklist</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#E79703]/20 rounded-lg text-sm text-white border border-[#E79703]/30">Automate Audits & Tax File</div>
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
                      <Settings className="w-8 h-8 text-[#F76258]" />
                      Design & Collaboration Process
                    </CardTitle>
                    <CardDescription>
                      How we turned raw database parameters and auditing constraints into a premium console.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Research */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#F76258] flex items-center gap-2">
                          <Badge className="bg-[#F76258]/20 text-[#F76258]">Phase 1</Badge>
                          Research & Discovery
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          We started by interviewing asset managers in active facility centers and shadowing field technician crews as they inspected chargers.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F76258]" />
                            Conducted operator workflow shadowing sessions.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F76258]" />
                            Shadowed field maintenance crews scanning QR codes.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F76258]" />
                            Identified efficiency losses in role permission managers.
                          </li>
                        </ul>
                      </div>

                      {/* Design */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#E79703] flex items-center gap-2">
                          <Badge className="bg-[#E79703]/20 text-[#E79703]">Phase 2</Badge>
                          Design & Prototyping
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Using the feedback insights, we designed clean desktop management tables alongside optimized mobile scanner utility views, prioritizing color severe status indicators.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#E79703]" />
                            Built high-density custom state tables in dark theme layouts.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#E79703]" />
                            Mocked the physical mobile scanner flow with big, friendly touch buttons.
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="mt-1 w-4 h-4 text-[#E79703] flex-shrink-0" />
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
                        To guarantee high fidelity implementation of valuation modules, I prepared precise layout templates in Figma Dev Mode. I sat down with frontend engineers to construct a reusable grid component structure, defining how live values refresh visually and mapping custom SVG vectors directly to websocket events.
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
