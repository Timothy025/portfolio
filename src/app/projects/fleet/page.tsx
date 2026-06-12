"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Activity, ShieldCheck, Bot } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FleetCaseStudy() {
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
                src="/logos/fleet.svg"
                alt="Iris Fleet logo"
                className="block max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px] object-contain dark:hidden"
              />
              <img
                src="/logos/fleet.svg"
                alt="Iris Fleet logo"
                className="hidden max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px] object-contain dark:block"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Fleet Charging Management is an experience designed for teams who manage electric vehicle fleets, depot charging, and daily trip schedules.
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              Fleet charging operations involve many moving parts. Managers must track battery levels, trip readiness, depot availability, and charging delays without becoming overwhelmed. The improved UX was shaped as a fleet control workspace around one core question: 'What needs attention right now, and what should I do next?'
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/30">
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Timeline</h4>
              <p className="text-sm font-medium">3 Months (Summer 2025)</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Role</h4>
              <p className="text-sm font-medium">Product Designer</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Platform</h4>
              <p className="text-sm font-medium">Web Manager & Driver Mobile</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Expo</Badge>
                <Badge variant="secondary">Mapbox API</Badge>
                <Badge variant="secondary">Zustand</Badge>
                <Badge variant="secondary">WebSocket</Badge>
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
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#429AE7" }}>100%</div>
              <h4 className="font-bold text-foreground">Priority Vehicle Visibility</h4>
              <p className="text-sm text-muted-foreground">Urgent vehicles and charging issues are surfaced with clear priority and context.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#429AE7" }}>3x</div>
              <h4 className="font-bold text-foreground">Faster Decision Making</h4>
              <p className="text-sm text-muted-foreground">A clear timeline schedule connected past activity, today's plan, and future charging sessions.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#429AE7" }}>0</div>
              <h4 className="font-bold text-foreground">Decision Fatigue</h4>
              <p className="text-sm text-muted-foreground">Separated operational needs into connected, guided workflows from overview to detail.</p>
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
            If everything is shown with the same priority, the user spends too much time figuring out what is actually important. The challenge was transitioning from a data heavy tool into a clear decision making workspace.
          </p>
          
          <div className="grid gap-4 mt-8">
            
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Slow Fleet Readiness
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Managers needed a faster way to understand fleet readiness and identify urgent vehicles without scanning rows manually.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Hidden Charging Delays
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Charging issues lacked priority context, making it hard to know if a vehicle was safe for its next trip.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Disconnected Planning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Depot and charging information felt disconnected from the overall fleet plan, hindering quick decisions.
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
            The experience was designed as a workspace where the most important decisions are visible first, focusing on clarity, urgency, and quick comparison.
          </p>
          
          
          <Card className="mt-8">
            <CardContent className="p-6 space-y-4">
              <h4 className="font-bold text-lg">High Level Fleet Health & Decision Making</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">The manager focuses on readiness, risk, and planning. The design prioritizes actionable intelligence:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Highlights urgent vehicles, at risk trips, and expected costs at the top of the dashboard.</li>
                <li>Organizes vehicles by urgency (battery condition, next trip readiness).</li>
                <li>Provides a charging schedule timeline to understand the day at a glance.</li>
              </ul>
            </CardContent>
          </Card>
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
            
            <Card className="border-l-4 bg-card/40" style={{ borderLeftColor: "#429AE7" }}>
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Instant understanding over statistics</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Priority Based Dashboard</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground mb-6">Redesigned the top area to highlight urgent daily signals: vehicles needing charge, at risk trips, and expected downtime costs. Vehicles are organized by urgency rather than raw lists.</p>
                  
                  <div className="">
                    <img src="/Fleet/dash_1.png" alt="Priority Based Dashboard Interface" className="w-full h-auto object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#3EBAF4] bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Organizing vehicles by urgency</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Activity className="w-4 h-4"/> Scheduled Charging Based on Priority</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground mb-6">Vehicles are organized by charging urgency, making it easier to see which ones need attention first based on battery condition and next trip readiness.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="">
                      <img src="/Fleet/depots.png" alt="Depots Urgency View" className="w-full h-auto object-cover" />
                    </div>
                    <div className="">
                      <img src="/Fleet/sessions.png" alt="Active Charging Sessions View" className="w-full h-auto object-cover" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            
            <Card className="border-l-4 border-l-purple-500 bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Planning across past, present, and future</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Bot className="w-4 h-4"/> Visual Charging Schedule</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground mb-6">Shaped the charging schedule as a visual timeline, highlighting past activity, today's active plan, and future sessions. Conflict handling provides guided practical options.</p>
                  
                  <div className="">
                    <img src="/Fleet/Charging_sche.png" alt="Visual Charging Schedule Timeline" className="w-full h-auto object-cover" />
                  </div>
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
              "Operational products need more than clean layouts. They need strong information priority."
            </p>
            
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              UX improvement in fleet operations is about helping users trust the information, understand the priority, and take the next step with confidence, rather than just adding more information.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Guided Conflict Handling</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Alerts become far more useful when they are connected to clear, practical actions.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Visual Urgency</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Helps users act faster, but must be used carefully to avoid unnecessary stress or alarm fatigue.</p>
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
