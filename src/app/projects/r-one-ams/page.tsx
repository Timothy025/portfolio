"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Activity, ShieldCheck, Bot } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RoneAmsCaseStudy() {
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
            
            <div className="flex items-center -ml-4 h-16 sm:h-20 lg:h-24">
              <img
                src="/logos/r-one.svg"
                alt="R One logo"
                className="block max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px] object-contain dark:hidden"
              />
              <img
                src="/logos/r-one.svg"
                alt="R One logo"
                className="hidden max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px] object-contain dark:block"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              End to end EV charger lifecycle platform connecting central operations and field technicians into one cohesive system.
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              EV charging reliability is an operations problem defined by installation quality, proactive maintenance, and field resolution speed. Iris R One was designed as a unified lifecycle management platform connecting central web operations and mobile field technicians into a cohesive, real time ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/30">
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Timeline</h4>
              <p className="text-sm font-medium">4 Months (Winter 2025)</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Role</h4>
              <p className="text-sm font-medium">Lead Product Designer</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Platform</h4>
              <p className="text-sm font-medium">Web Console & Field Mobile</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Framer Motion</Badge>
                <Badge variant="secondary">TailWind</Badge>
                <Badge variant="secondary">Expo</Badge>
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
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#F76258" }}>35%</div>
              <h4 className="font-bold text-foreground">Reduced Repeat Visits</h4>
              <p className="text-sm text-muted-foreground">Improved diagnostic context for field teams significantly decreased revisits and lowered operational costs.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#F76258" }}>2x</div>
              <h4 className="font-bold text-foreground">Faster Triage & Resolution</h4>
              <p className="text-sm text-muted-foreground">Earlier intervention protocols and predictive R score models reduced system downtime windows.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#F76258" }}>100%</div>
              <h4 className="font-bold text-foreground">Lifecycle Standardization</h4>
              <p className="text-sm text-muted-foreground">Enforced guided checklists with audit evidence to standardize installation quality and reduce rework.</p>
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
            As EV networks scale, each charger becomes a live asset with unique failure patterns. The primary failure mode was the lack of a single operating model to connect monitoring, decision making, and field execution.
          </p>
          
          <div className="grid gap-4 mt-8">
            
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Disconnected Operational Truth
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Critical health signals, maintenance history, and inventory ledgers existed in disparate, fragmented systems.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Reactive Maintenance Cycles
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Faults were handled entirely after failure, which extended downtime and reduced network reliability.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Planning & Execution Gaps
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Technicians arrived without diagnostic context, leading to extended fixes and repeated site visits.
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
            The platform establishes a shared operational state across two user groups working under different constraints. Assets, alerts, and work orders map back to a single lifecycle timeline.
          </p>
          
          
          <Tabs defaultValue="role1" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-muted/50">
              <TabsTrigger value="role1" className="py-3 text-sm font-bold data-[state=active]:bg-[#F76258] data-[state=active]:text-black transition-all">
                Central Ops Planner (Web)
              </TabsTrigger>
              <TabsTrigger value="role2" className="py-3 text-sm font-bold data-[state=active]:bg-[#F76258] data-[state=active]:text-black transition-all">
                Field Technician (Mobile)
              </TabsTrigger>
            </TabsList>
            <TabsContent value="role1" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">Optimizing Decision Speed</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">The web experience accelerates triage and coordination. It reduces decision friction, allowing planners to assign work based on real capacity and risk:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Structures workflows around a detect, prioritize, assign, and track operational loop.</li>
                    <li>Calculates predictive R scores to rank operational risk and assign field capacity.</li>
                    <li>Provides a ranked view of critical alerts to prevent failures before downtime occurs.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="role2" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">Optimizing Execution Quality</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">The mobile experience ensures execution quality under time pressure. It lowers cognitive load on site and standardizes execution across all technicians:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Delivers guided execution pathways with clear task intent and asset history.</li>
                    <li>Integrates fast evidence capture and mandatory audit checklists for validated closure.</li>
                    <li>Standardizes installation workflows to reduce downstream chaos and repeat visits.</li>
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

          <div className="space-y-12 mt-8">
            
            <div className="space-y-6">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F76258]"></span> Central Operations (Web)
              </h4>
              <Card className="border-l-4 bg-card/40" style={{ borderLeftColor: "#F76258" }}>
                <CardContent className="p-6 grid gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                    <p className="font-medium mt-1 leading-relaxed">Reducing cognitive load before commitment</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-border/20">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Predictive Maintenance & R Score</h4>
                    <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Implemented a unified health layer using R score to combine telemetry and operational signals into an actionable metric, enabling ops teams to allocate field capacity before failures occur.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 bg-card/40" style={{ borderLeftColor: "#F76258" }}>
                <CardContent className="p-6 grid gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                    <p className="font-medium mt-1 leading-relaxed">Designing for evaluation, not just browsing</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-border/20">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Bot className="w-4 h-4"/> Lifecycle Standardization</h4>
                    <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Standardized installation workflows into explicit checklists with audit evidence. This created a shared operational truth where both platforms stay synchronized in real time.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3EBAF4]"></span> Field Technician (Mobile)
              </h4>
              <Card className="border-l-4 border-l-[#3EBAF4] bg-card/40">
                <CardContent className="p-6 grid gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                    <p className="font-medium mt-1 leading-relaxed">Reducing hesitation through predictable pathways</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-border/20">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Activity className="w-4 h-4"/> Guided Field Execution</h4>
                    <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Designed the mobile app as a guided execution tool providing clear task intent, asset history, and fast evidence capture to standardize execution quality and improve first time fix rates.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-7xl mx-auto">
            <div className="w-full flex justify-center">
              <img src="/r-one/cs.png" alt="R-One System Architecture" className="w-full h-auto object-contain" />
            </div>
            <div className="w-full flex justify-center">
              <img src="/r-one/dashboard.png" alt="R-One Web Dashboard" className="w-full h-auto object-contain" />
            </div>
            <div className="w-full flex justify-center">
              <img src="/r-one/in.png" alt="R-One Mobile Application" className="w-full h-auto object-contain" />
            </div>
            <div className="w-full flex justify-center">
              <img src="/r-one/project.png" alt="R-One Project Detail View" className="w-full h-auto object-contain" />
            </div>
          </div>

          <div className="w-full mt-12 flex justify-center">
            <img src="/r-one/r-one_mob.png" alt="R-One Mobile Showcase" className="w-full max-w-2xl h-auto object-contain" />
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
              "Operational UX is Systems UX: coherence comes from shared objects and states, not just screens."
            </p>
            
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              This project reinforced that adoption is a confidence problem. Users need clearer signals at the exact moments of commitment to execute effectively across distributed environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Explainability Drives Action</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Predictive systems only work when users intuitively understand the actionable reasoning behind the data.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">European Accessibility Compliance</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Designed according to stringent WCAG European standards (W2AG), guaranteeing high contrast and readability for field workers in harsh outdoor environments.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Design for Decision Moments</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Trust cues must appear exactly where critical commitment and dispatch decisions happen.</p>
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
