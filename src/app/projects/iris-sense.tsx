"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Activity, ShieldCheck, Bot } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IrisSenseCaseStudy() {
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
                src="/logos/sense.svg"
                alt="Iris Sense logo"
                className="block max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px] object-contain dark:hidden"
              />
              <img
                src="/logos/sense.svg"
                alt="Iris Sense logo"
                className="hidden max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px] object-contain dark:block"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Industrial IoT monitoring console translating dense ambient sensor readings into active site operations.
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              Industrial facilities operate hundreds of environmental sensors (temperature, pressure, leak detection). Planners are overwhelmed by constant noise and false alarms, causing delayed emergency responses. Iris Sense organizes complex spatial data into a high fidelity visual dashboard. Planners can triage incidents and verify hardware alerts immediately on an interactive floor map.
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
              <p className="text-sm font-medium">IoT Portal & Tablet Inspector</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Vite</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">MQTT Telemetry</Badge>
                <Badge variant="secondary">Canvas</Badge>
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
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#F7CF58" }}>50%</div>
              <h4 className="font-bold text-foreground">Faster Emergency Triage</h4>
              <p className="text-sm text-muted-foreground">Floor plan integration enabled operators to instantly isolate alarm locations.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#F7CF58" }}>35%</div>
              <h4 className="font-bold text-foreground">Fewer Alarm False Positives</h4>
              <p className="text-sm text-muted-foreground">Implemented ambient threshold sliders to filter background noise.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#F7CF58" }}>99.9%</div>
              <h4 className="font-bold text-foreground">MQTT Socket Sync</h4>
              <p className="text-sm text-muted-foreground">Telemetry events streamed directly with sub second canvas rendering.</p>
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
            When a critical pressure valve alerts, every second counts. However, because ambient sensor alarms were presented in dry spreadsheets, technicians spent critical minutes searching for the physical hardware location.
          </p>
          
          <div className="grid gap-4 mt-8">
            
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Zero Spatial Reference
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Alarms listed room numbers but lacked spatial routing maps, forcing manual navigation during crises.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Noisy Threshold Caps
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Static alarm values triggered alarms for harmless ambient humidity shifts, driving alarm fatigue.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Fragmented Hardware Logs
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Historical calibration data lived in distinct cabinets, hiding wear and tear trends.
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
            We designed Iris Sense to serve central dispatchers and planners, providing a single source of truth for monitoring multiple multi story warehouses and floor plans.
          </p>
          
          
          <Card className="mt-8">
            <CardContent className="p-6 space-y-4">
              <h4 className="font-bold text-lg">High Density Spatial Triage</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">The Operator monitors ambient safety levels across hundreds of rooms. The design optimizes for fast hazard isolation:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Presents an interactive vector floor plan showing active sensor hotspots.</li>
                <li>Aggregates ambient humidity, pressure, and telemetry metrics into clean card modules.</li>
                <li>Triggers high visibility red flashing warning sheets when levels breach safe caps.</li>
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
            
            <Card className="border-l-4 bg-card/40" style={{ borderLeftColor: "#F7CF58" }}>
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Contextualizing industrial alerts</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Spatial Hotspot Mapping</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">We built an interactive, lightweight vector map engine. When an MQTT alarm triggers, the floor plan focuses and highlights the exact room with zero lag.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#3EBAF4] bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Filtering alarm fatigue</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Activity className="w-4 h-4"/> Interactive Thresholds</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Designed interactive sliders that let operators adjust alert points based on daily ambient temperature shifts, reducing false alarms.</p>
                </div>
              </CardContent>
            </Card>

            
            <Card className="border-l-4 border-l-purple-500 bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Assisting field diagnostics</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Bot className="w-4 h-4"/> Conversational Repair AI</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Integrated an assistive chat module inside the field app. When a sensor fails calibration, the bot processes ambient metrics and suggests the exact replacement part required.</p>
                </div>
              </CardContent>
            </Card>
            
          </div>

          <div className="w-full mt-12 flex justify-center">
            <img 
              src="/thumnail/Sense-thumnail.png" 
              alt="Iris Sense Dashboard Showcase" 
              className="w-full max-w-5xl h-auto object-contain rounded-2xl border border-border/20 shadow-2xl"
            />
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
              "Industrial ambient UX is safety UX. Interface clarity determines field response times."
            </p>
            
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              By placing MQTT alerts directly onto spatial floor coordinates and designing intuitive sliders, we helped control room operators focus on real issues.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Explainability drives action</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Translated complex telemetry feeds into direct hazards floor mappings.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Design for decision moments</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Positioned emergency purge triggers directly below pressure graphs.</p>
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
