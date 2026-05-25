"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Activity, ShieldCheck, Bot } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnalyticsDashboardCaseStudy() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 font-inter">
      {/* FLOATING BACK BUTTON */}
      <div className="fixed top-6 left-6 z-50">
        <Button variant="ghost" size="icon" asChild className="rounded-full bg-background/40 backdrop-blur-md border border-border/40 hover:bg-foreground/5 shadow-lg w-12 h-12 flex items-center justify-center cursor-pointer transition-colors duration-300">
          <Link href="/#work">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
        </Button>
      </div>

      <main className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 pt-[48px] space-y-[24px]">
        {/* HEADER & OVERVIEW */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk tracking-tight uppercase">Analytics Dashboard</h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Enterprise analytics console consolidating scattered business data, customer trends, and query modeling.
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              Data analysts and operations planners are overwhelmed trying to query and analyze business intelligence across disjointed metrics software. This project aggregates multi source database telemetry, query execution progress, and spatial demographic charts into a single workspace.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/30">
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Timeline</h4>
              <p className="text-sm font-medium">3 Months (Spring 2025)</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Role</h4>
              <p className="text-sm font-medium">Product Designer</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Platform</h4>
              <p className="text-sm font-medium">Enterprise Web Console</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Vite</Badge>
                <Badge variant="secondary">D3.js</Badge>
                <Badge variant="secondary">tailwind CSS</Badge>
                <Badge variant="secondary">GraphQL</Badge>
              </div>
            </div>
          </div>
        </motion.section>

        {/* THE IMPACT */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-8"
        >
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">The Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#2563eb" }}>55%</div>
              <h4 className="font-bold text-foreground">Faster Query Execution</h4>
              <p className="text-sm text-muted-foreground">Consolidated multi database streams into a single local cache engine.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#2563eb" }}>40%</div>
              <h4 className="font-bold text-foreground">Fewer Dashboard Crashes</h4>
              <p className="text-sm text-muted-foreground">Designed lazy loaded widgets that prioritize active route viewport charts.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#2563eb" }}>99.9%</div>
              <h4 className="font-bold text-foreground">Real time Metrics Sync</h4>
              <p className="text-sm text-muted-foreground">GraphQL subscriptions updated metrics trends with sub second latency.</p>
            </div>
          </div>
        </motion.section>

        {/* THE PROBLEM */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-8"
        >
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">The Problem</h3>
          <p className="text-xl text-foreground font-medium leading-relaxed">
            Formulating business decisions requires instant analytical clarity. But when planners are forced to traverse multiple dry widgets, latency and cognitive load spike.
          </p>
          
          <div className="grid gap-4 mt-8">
            
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Broken Data Pipelines
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Customer metrics and database telemetry lived in separate systems, requiring manual imports.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Heavy Widget Lag
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Loading massive time series plots concurrently blocked browser render routines, causing freezing.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Disjointed Query Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Building dynamic metrics reports required analysts to swap between terminal and graphs.
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* THE PROCESS & REALITY */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-8"
        >
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">The Process & Operational Reality</h3>
          <p className="text-lg leading-relaxed text-foreground/90">
            We designed this console to serve business executives monitoring regional margins, and data scientists running heavy analytical queries.
          </p>
          
          
          <Tabs defaultValue="role1" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-muted/50">
              <TabsTrigger value="role1" className="py-3 text-sm font-bold data-[state=active]:bg-[#2563eb] data-[state=active]:text-black transition-all">
                Business Executive
              </TabsTrigger>
              <TabsTrigger value="role2" className="py-3 text-sm font-bold data-[state=active]:bg-[#2563eb] data-[state=active]:text-black transition-all">
                Data Scientist
              </TabsTrigger>
            </TabsList>
            <TabsContent value="role1" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">High Level Financial Review</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">The Executive monitors global revenue metrics and schedules regional targets. The design dashboard optimizes for instant visual scanning:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Replaces dense database logs with a clean, high contrast revenue status feed.</li>
                    <li>Calculates live regional target indicators with clear trend markers.</li>
                    <li>Enables fast report exports through a sliding double confirmation drawer.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="role2" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">Complex Query Modeling</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">The Scientist designs custom query structures and monitors database telemetry. The workspace provides deep code editing and performance monitoring tools:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Features a rich code editor panel with syntax auto completion.</li>
                    <li>Visualizes query loading time distributions using native D3 graphs.</li>
                    <li>Enables drag and drop layout configuration to position telemetry blocks.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* THE SOLUTION */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-8"
        >
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">The Solution</h3>
          <p className="text-lg leading-relaxed text-foreground/90">
            A comprehensive deep dive into the operational breakthroughs engineered to bring low-cognitive friction, verified security, and seamless ease.
          </p>

          <div className="space-y-6 mt-8">
            
            <Card className="border-l-4 bg-card/40" style={{ borderLeftColor: "#2563eb" }}>
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Contextualizing metrics paths</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Unified Analytics Feed</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">We consolidated multiple database telemetry logs and metrics trends into a single, clean workspace with clear status indicators.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#3EBAF4] bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Adjusting dynamic thresholds</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Activity className="w-4 h-4"/> Interactive Chart Sliders</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Designed interactive sliders that let analysts adjust target margins, avoiding slow database query re runs.</p>
                </div>
              </CardContent>
            </Card>

            
            <Card className="border-l-4 border-l-purple-500 bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Assisting queries diagnostics</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Bot className="w-4 h-4"/> Conversational Metrics AI</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Integrated an assistive chat module inside the workspace. Scientists can ask 'Why is PostgreSQL query 430 slow?' and receive diagnostic suggestions.</p>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </motion.section>

        {/* LEARNINGS */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-8"
        >
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">Learnings</h3>
          
          <div className="p-8 bg-muted/30 rounded-2xl border border-border/50">
            <p className="text-2xl font-light text-foreground leading-relaxed italic text-center mb-8">
              "Analytics UX is performance UX. Fluid charts build operational confidence."
            </p>
            
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              By placing database performance diagnostics directly onto spatial map views and designing one swipe checkout drawer sheets, we helped executives audit metrics safely.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Explainability drives action</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Translated dry database metrics into intuitive regional target levels.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Design for decision moments</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Positioned financial approve buttons directly below margins charts.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CALL TO ACTION */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="pt-16 pb-24 text-center space-y-6 border-t border-border/30"
        >
          <h3 className="text-3xl font-bold font-space-grotesk tracking-tight uppercase">Let's craft the next operational breakthrough.</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Have a complex transactional workflow, multi-role portal, or data-dense dashboard to design?</p>
          <div className="pt-4">
            <Button size="lg" className="rounded-full px-8 text-base" asChild>
              <Link href="mailto:timothy.ux@gmail.com">
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.section>

      </main>
    </div>
  )
}
