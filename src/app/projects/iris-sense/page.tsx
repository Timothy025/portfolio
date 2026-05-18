"use client"

import { motion } from "framer-motion"
import { ArrowLeft, MessageSquare, BarChart3, Milestone, ShieldAlert, Zap, Layers, Users, ArrowRight, Settings, CheckCircle, AlertTriangle, Monitor, Smartphone, Briefcase, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectArchitectureMap } from "@/components/project-architecture-map"

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
      title: "Conversational Intelligence Engine",
      description: "CXO roadmap query and natural language financial compiler",
      icon: MessageSquare,
      features: ["NLP Network Revenue Queries", "CAPEX & OPEX Quick Summaries", "Dynamic Carbon Credit Estimators", "Predictive Trend Indicators"]
    },
    {
      title: "Executive Strategic Sandbox",
      description: "Interactive roadmap projections and expansion simulators",
      icon: Milestone,
      features: ["Multi-Year Roadmap Timelines", "Geographic Grid Expansion Models", "Coincident Peak Risk Scenarios", "Utility Subsidy Estimators"]
    },
    {
      title: "Business Impact Console",
      description: "High-resolution telemetry graphs and executive scorecards",
      icon: BarChart3,
      features: ["Gross Margin & Yield Trackers", "Total Charger Utilization Metrics", "Net Operating Income Dials", "Real-Time Fleet Uptime Gauges"]
    },
    {
      title: "Compliance & Security Shield",
      description: "Corporate audit tracking and governance indicators",
      icon: ShieldAlert,
      features: ["Secured Enterprise API Channels", "Role-Based Access Logs", "Carbon Credit Tax Certifiers", "SLA Incident Monitors"]
    }
  ]

  const stakeholders = [
    {
      role: "CXO Leaders",
      title: "Chief Executive (CEO), CFO, & VP of Growth",
      focus: "Require instant high-level answers on network revenue yields, regional ROI, carbon offset numbers, and multi-year expansion roadmaps without training."
    },
    {
      role: "Operations Directors",
      title: "Fleet Directors & Charge Point Executives",
      focus: "Need visual business impact models to prioritize equipment upgrades and dispatch grid-load shaving rules."
    },
    {
      role: "Engineering Architects",
      title: "AI Engineers & UI Component Developers",
      focus: "Require clean Figma variables and conversational design tokens to structure quick bullet reports and executive sliders."
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(247,207,88,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(235,88,81,0.12),transparent_50%)]" />

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
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm border border-[#F7CF58]/30 bg-[#F7CF58]/10 text-[#F7CF58]">
                CXO Conversational AI
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
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            >
              The ultimate conversational AI assistant for CXO-level stakeholders to evaluate roadmaps, model business impacts, and track carbon metrics in real time.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Conversational AI Chatbot</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">CXO Executive Panel</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Business Impact Simulator</Badge>
              <Badge variant="outline" className="px-3 py-1 border-white/10 bg-white/5">Roadmap Modeler</Badge>
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
                      <MessageSquare className="w-8 h-8 text-[#F7CF58]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Iris Sense is a state-of-the-art Conversational AI Platform and Decision Support Engine designed specifically for CXO-level executives. Traditional energy telemetry consoles are cluttered with raw transformer logs and engineering curves that are completely unhelpful for top-tier strategic leaders. 
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Sense completely bridges this gap by acting as a highly intelligent strategic chatbot. Leaders can query the system in natural language to instantly isolate geographic station utilization, model multi-year expansion roadmaps, analyze environmental carbon offset impacts, and forecast gross margin yields seamlessly across both Web and Mobile interfaces.
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
                  <Card className="border border-white/5 bg-background/50 relative overflow-hidden group hover:border-[#F7CF58]/30 transition-all shadow-md">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#F7CF58]/10 rounded-bl-full flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-[#F7CF58]" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">Executive Command Console (Web)</CardTitle>
                      <CardDescription>Focused on side-by-side conversation panels, detailed roadmap grids, and investment sandboxes.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        CXO executives utilize the desktop web view during quarterly business reviews. It offers deep conversational threads alongside high-resolution interactive charts, CAPEX simulator sliders, and global impact dials.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#F7CF58]" />
                          Multi-pane layout presenting conversational chat side-by-side with active charts
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#F7CF58]" />
                          Interactive multi-year expansion roadmap trees and project pipelines
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#F7CF58]" />
                          Detailed gross margin tables and downloadable carbon tax-credit logs
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Mobile Panel */}
                  <Card className="border border-white/5 bg-background/50 relative overflow-hidden group hover:border-[#EB5851]/30 transition-all shadow-md">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#EB5851]/10 rounded-bl-full flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-[#EB5851]" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">CXO Strategy Companion (Mobile)</CardTitle>
                      <CardDescription>Created for quick on-the-go queries, voice command integration, and push metrics.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Leaders require rapid answers while traveling or between board meetings. The mobile experience simplifies interactions, focusing on messaging prompts, voice-to-text widgets, and automated visual summary cards.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#EB5851]" />
                          Clean, messaging-first user interface with integrated voice inputs
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#EB5851]" />
                          Thumb-friendly swipe controls to cycle through active impact scorecards
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#EB5851]" />
                          Real-time push notifications containing morning strategic briefs
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
                      I served as the lead product designer for Iris Sense, leading user-testing sessions directly with energy company CEOs and COOs, defining conversational UI patterns, and building high-fidelity interface prototypes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Key Contributions:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#F7CF58] rounded-full mt-2" />
                            Designed a conversational chat flow tailored for executive decision-making.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#F7CF58] rounded-full mt-2" />
                            Transformed complex energy equations into simple visual impact dials.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#F7CF58] rounded-full mt-2" />
                            Optimized layout configurations to toggle between chat and simulation models.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#F7CF58] rounded-full mt-2" />
                            Conducted active workflow shadowing with 8 energy corporate stakeholders.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-white">Design Deliverables:</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#EB5851] rounded-full mt-2" />
                            High-fidelity Figma interactive wireframes presenting the dashboard split-screens.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#EB5851] rounded-full mt-2" />
                            Conversational asset kit containing chat balloons, bullet lists, and summary cards.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#EB5851] rounded-full mt-2" />
                            Bespoke vector graphics illustrating carbon credits and grid assets.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#EB5851] rounded-full mt-2" />
                            Comprehensive corporate stakeholder persona maps and usability logs.
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
                    <Card key={i} className="border border-white/5 bg-background/50 hover:border-[#F7CF58]/40 transition-all shadow-md">
                      <CardHeader>
                        <Badge variant="outline" className="w-max mb-2 border-[#F7CF58]/30 text-[#F7CF58]">{stakeholder.role}</Badge>
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
                      Executive Isolation (The Problem)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      CXO leaders and board members struggled to identify clear business roadmaps, carbon yields, or ROI rates from engineering-heavy charging logs, leading to massive friction when making fleet investments.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      Without a high-level conversational interface, executives spent days requesting custom reports from data analyst teams to answer simple strategy questions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-emerald-500/20 bg-emerald-950/5 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" />
                      Conversational Solution (The Solution)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We developed an integrated conversational chatbot tailored for CXO needs. Leaders type natural language queries and immediately receive roadmap visualizations, environmental impact dials, and margin projections.
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      By prioritizing direct executive conversational flows, we eliminated report requesting backlogs and speeded corporate board decision cycles by over 70%.
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
                <h3 className="text-2xl font-bold text-center text-white">Iris Sense Executive Platform</h3>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-5xl"
                  >
                    <img
                      src="/sense.png"
                      alt="Iris Sense Interface"
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
                      <Layers className="w-8 h-8 text-[#F7CF58]" />
                      UI/UX Information Architecture
                    </CardTitle>
                    <CardDescription>
                      A designer-led screen structure for executive questions, analytics scanning, modeling, and governance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <ProjectArchitectureMap
                      rootLabel="Iris Sense"
                      rootDescription="Executive intelligence, analytics, strategy modeling, and compliance"
                      sections={infoArchitecture}
                      primaryColor="#F7CF58"
                      secondaryColor="#EB5851"
                    />

                    {/* Operational Flow */}
                    <div className="p-8 bg-muted/10 border border-white/5 rounded-xl text-center space-y-6">
                      <h4 className="text-xl font-bold text-white">CXO Decision Journey Flow</h4>
                      <div className="flex flex-wrap justify-center items-center gap-3">
                        <div className="px-4 py-2 bg-[#F7CF58]/20 rounded-lg text-sm text-white border border-[#F7CF58]/30">Ask: &quot;Show Q3 Revenue & Impact&quot;</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#F7CF58]/20 rounded-lg text-sm text-white border border-[#F7CF58]/30">AI Generates Live Financial Charts</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#F7CF58]/20 rounded-lg text-sm text-white border border-[#F7CF58]/30">Tweak Roadmap Investment Sliders</div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="px-4 py-2 bg-[#EB5851]/20 rounded-lg text-sm text-white border border-[#EB5851]/30">Export ROI Briefing directly to Board</div>
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
                      <Settings className="w-8 h-8 text-[#F7CF58]" />
                      Design & Collaboration Process
                    </CardTitle>
                    <CardDescription>
                      How we turned multi-layered business plans and telemetry data into a streamlined chatbot console.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Research */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#F7CF58] flex items-center gap-2">
                          <Badge className="bg-[#F7CF58]/20 text-[#F7CF58]">Phase 1</Badge>
                          Research & Discovery
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          We started by interviewing key corporate officers (CEOs and CFOs) in active energy firms. We learned that these leaders rarely look at micro-level charger logs, but frequently require instant projections of quarterly network returns.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F7CF58]" />
                            Conducted executive shadowing and workflow research.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F7CF58]" />
                            Identified critical business decision roadmaps.
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F7CF58]" />
                            Mapped standard carbon-offset calculation frameworks.
                          </li>
                        </ul>
                      </div>

                      {/* Design */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#EB5851] flex items-center gap-2">
                          <Badge className="bg-[#EB5851]/20 text-[#EB5851]">Phase 2</Badge>
                          Design & Prototyping
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Using the feedback insights, we designed clean conversational inputs, visual roadmap cards, and interactive yield curves. We prioritized bright yellow UI accents to highlight carbon-credit savings points clearly.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#EB5851]" />
                            Built high-density custom state tables in dark mode layouts.
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#EB5851] mt-1 shrink-0" />
                            Mocked interactive diagnostics charts in Figma with energy site managers.
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#EB5851] mt-1 shrink-0" />
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
                        To guarantee high fidelity implementation of chatbot panels, I prepared precise layout templates in Figma Dev Mode. I sat down with frontend engineers to construct a reusable grid component structure, defining how live values refresh visually and mapping custom SVG vectors directly to websocket events.
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
