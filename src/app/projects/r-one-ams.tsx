"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  TrendingUp, 
  Bot, 
  Smartphone, 
  Activity, 
  ShieldCheck,
  Zap
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RoneAmsCaseStudy() {
  const [selectedRole, setSelectedRole] = useState<"buyer" | "seller">("buyer")

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-8 transition-colors duration-500 selection:bg-[#F76258]/20">
      {/* Global Page Tint Accent */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.15]" style={{ backgroundColor: "#F76258" }} />
      
      {/* 1. TOP NAV / FLOATING BACK BUTTON */}
      <div className="fixed top-6 left-6 z-50">
        <Button variant="ghost" size="icon" asChild className="rounded-full bg-background/40 backdrop-blur-md border border-border/40 hover:bg-foreground/5 shadow-lg w-12 h-12 flex items-center justify-center cursor-pointer transition-colors duration-300">
          <Link href="/#work">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
        </Button>
      </div>

      {/* 2. PREMIUM HERO SECTION */}
      <div className="relative overflow-hidden pt-32 pb-8 border-b border-border/10">
        {/* Brand Background Signature Gradients */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F76258]/10 via-transparent to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#F76258]/5 to-transparent blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            
            <div className="flex items-center -ml-4 h-16 sm:h-20 lg:h-24">
              <img
                src="/logos/r-one.svg"
                alt="R-One logo"
                className="block max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px] object-contain dark:hidden"
              />
              <img
                src="/logos/r-one.svg"
                alt="R-One logo"
                className="hidden max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px] object-contain dark:block"
              />
            </div>
  
          </motion.div>

          {/* Immersive Overview & Detailed Metadata Grid */}
          <div className="mt-12 pt-8 border-t border-border/20 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full text-lg md:text-[20px] font-light leading-relaxed text-foreground/90 font-inter space-y-4"
            >
              <span className="text-[#F76258] text-xs font-semibold tracking-widest uppercase block">Overview</span>
              <p className="border-l-4 border-[#F76258] pl-6 md:pl-8 italic text-justify font-inter leading-relaxed">
                EV charging reliability is an operations problem: installation quality, proactive maintenance, and fast field resolution. Most CPO teams run these workflows across fragmented tools, which turns downtime into default. Iris R-one was designed as a unified lifecycle management platform connecting central operations (web) and field technicians (mobile) into one operational system.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/10 text-sm font-mono tracking-tight"
            >
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Timeline</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">4 Months (Winter 2025)</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Role</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">Lead Product Designer</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Platform</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">Web Console & Field Mobile</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Tech Stack</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">React, Next.js, Framer Motion, TailWind, Expo</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl mt-16">
        
        {/* 3. METRICS / WHAT CHANGED */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="space-y-8 animate-fade-in"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <span className="text-[#F76258] text-xs font-semibold tracking-widest uppercase block">Impact</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">What Changed Operationally</h3>
            <p className="text-lg md:text-[20px] text-muted-foreground/80 w-full leading-relaxed text-justify font-inter">
              These outcomes represent the real-world operational changes and UX transformations achieved during our iterative product cycles. By putting user choice, accessibility, and smooth performance first, we converted a highly technical console into a self-serve portal.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            
              <motion.div 
                key={0} 
                variants={fadeInUp} 
                className="p-6 rounded-2xl bg-card/30 border border-border/30 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F76258]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-black font-space-grotesk bg-gradient-to-r from-[#F76258] to-foreground bg-clip-text text-transparent">
                    15%
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      Charger Uptime Gain
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      Preventative alerts routed to close technicians avoided system failures.
                    </p>
                  </div>
                </div>
              </motion.div>
  

              <motion.div 
                key={1} 
                variants={fadeInUp} 
                className="p-6 rounded-2xl bg-card/30 border border-border/30 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F76258]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-black font-space-grotesk bg-gradient-to-r from-[#F76258] to-foreground bg-clip-text text-transparent">
                    0%
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      Repeat Fields Trips
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      Ensured technicians dispatched carried exact diagnostic context and parts.
                    </p>
                  </div>
                </div>
              </motion.div>
  

              <motion.div 
                key={2} 
                variants={fadeInUp} 
                className="p-6 rounded-2xl bg-card/30 border border-border/30 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F76258]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-black font-space-grotesk bg-gradient-to-r from-[#F76258] to-foreground bg-clip-text text-transparent">
                    2x
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      Triage Resolution Speed
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      Unified alarm feed and telemetry enabled operators to diagnose issues immediately.
                    </p>
                  </div>
                </div>
              </motion.div>
  
          </motion.div>
        </motion.div>

        {/* 4. THE OPERATIONAL BREAKDOWN (THE PROBLEM) */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-32 space-y-8"
        >
          <motion.div variants={fadeInUp} className="space-y-3">
            <span className="text-[#F76258] text-xs font-semibold tracking-widest uppercase block">Operational Model / The Challenge</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight leading-tight">
              The Friction of Fragmented Fleet Operations
            </h3>
            <p className="text-lg md:text-[20px] text-muted-foreground/80 leading-relaxed w-full text-justify font-inter">
              As EV charging networks grow, each charger becomes a complex telemetry node. Operations teams struggle to maintain reliability because alarms, work records, and field capacity are isolated.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6 w-full pt-2">
            <div className="space-y-6 text-base md:text-[20px] leading-relaxed text-muted-foreground/80 font-inter">
              
                <div key={0} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    01 / Isolated Operations Data
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">Telemetry logs, maintenance history, and inventory ledgers lived in distinct legacy silos.</p>
                </div>
  

                <div key={1} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    02 / Reactive Dispatching Model
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">Field teams were dispatched only after charger failed, causing prolonged offline durations.</p>
                </div>
  

                <div key={2} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    03 / Installation Verification Gaps
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">Sub-par installation audits led to early component failure and repeating repairs.</p>
                </div>
  
            </div>
          </motion.div>
        </motion.div>

        {/* 5. INTERACTIVE ROLE SWITCHER SECTION */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-32 space-y-8"
        >
          <motion.div variants={fadeInUp} className="space-y-3 w-full">
            <span className="text-[#F76258] text-xs font-semibold tracking-widest uppercase block">Operational Model / Reality</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight md:whitespace-nowrap">
              Two Roles, One Shared Telemetry Loop
            </h3>
            <p className="text-lg md:text-[20px] text-muted-foreground w-full text-justify font-inter">
              We structured Iris R-one to serve central operations planners working under complex analytical views, and field technicians executing work under extreme time pressure.
            </p>
          </motion.div>

          {/* Interactive Role Switcher Selector Tabs */}
          <motion.div variants={fadeInUp} className="flex justify-center w-full">
            <div className="bg-[#0B0B0C]/80 backdrop-blur-md border border-border/40 p-1.5 rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center max-w-md w-full shadow-2xl gap-1">
              <Button
                onClick={() => setSelectedRole("buyer")}
                variant="ghost"
                className={"flex-1 rounded-xl sm:rounded-full py-3.5 sm:py-5.5 cursor-pointer font-space-grotesk transition-all duration-300 " + (
                  selectedRole === "buyer" 
                    ? "bg-[#F76258] text-black font-semibold shadow-[0_4px_15px_rgba(0,230,115,0.25)] hover:bg-[#F76258]" 
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
              >
                <Smartphone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">Central Dispatcher</span>
              </Button>
              <Button
                onClick={() => setSelectedRole("seller")}
                variant="ghost"
                className={"flex-1 rounded-xl sm:rounded-full py-3.5 sm:py-5.5 cursor-pointer font-space-grotesk transition-all duration-300 " + (
                  selectedRole === "seller" 
                    ? "bg-[#F76258] text-black font-semibold shadow-[0_4px_15px_rgba(31,208,180,0.25)] hover:bg-[#F76258]" 
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
              >
                <Bot className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">Field Technician</span>
              </Button>
            </div>
          </motion.div>

          {/* Role Showcase Display */}
          <motion.div 
            variants={fadeInUp} 
            className="p-8 rounded-3xl bg-card/30 border border-border/30 backdrop-blur-md"
          >
            {selectedRole === "buyer" ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-inter">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="p-3.5 rounded-full bg-[#F76258]/10 text-[#F76258]">
                      <Zap className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground">
                        Central Dispatcher (High-Information Triage)
                      </h4>
                      <p className="text-xs text-[#F76258] font-mono tracking-wider uppercase">Archetype: "High-Confidence"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed font-inter text-justify font-light">
                    The Dispatcher coordinates network alarms, schedules maintenance workpacks, and tracks team capacity. The design optimizes for fast searchability and action:
                  </p>
                  <ul className="space-y-3.5">
                    
                      <li key={0} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#F76258] flex-shrink-0 mt-0.5" />
                        <span>Aggregates regional telemetry streams into a single, ranked alarm view.</span>
                      </li>
  

                      <li key={1} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#F76258] flex-shrink-0 mt-0.5" />
                        <span>Calculates live R-scores representing charger operational risk and health.</span>
                      </li>
  

                      <li key={2} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#F76258] flex-shrink-0 mt-0.5" />
                        <span>Enables drag-and-drop worker dispatching based on capacity and proximity.</span>
                      </li>
  
                  </ul>
                </div>
                <div className="md:col-span-5 p-4 bg-[#0B0B0C] border border-border/30 rounded-2xl flex flex-col gap-4 font-mono text-[11px] text-muted-foreground shadow-2xl relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#F76258]/10 border border-[#F76258]/30 text-[#F76258] text-[9px] uppercase tracking-widest font-mono">
                    Overview Screen
                  </div>
                  <div className="border-b border-border/30 pb-3">
                    <div className="font-bold text-foreground text-xs font-space-grotesk uppercase tracking-wider mb-1">{"⚡ Central Ops Telemetry Console"}</div>
                    <div className="text-[10px]">{"Filter: Active Alarms • Proximity • High Risk"}</div>
                  </div>
                  
                      <div key={0} className="p-3 rounded-lg bg-card/60 border border-border/40 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-foreground">🔋 Charger Hub North-4</div>
                          <div className="text-[10px]">Risk: Critical (R-Score: 23) • Delhi</div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="font-bold text-[#F76258] text-xs">Alarm: Current Spike</div>
                          <div>Tech: 2.3 miles near</div>
                        </div>
                      </div>
  

                      <div key={1} className="p-3 rounded-lg bg-card/60 border border-border/40 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-foreground">🔌 Fast Charger South-1</div>
                          <div className="text-[10px]">Risk: High (R-Score: 45) • Noida</div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="font-bold text-[#F76258] text-xs">Alarm: Fan Failure</div>
                          <div>Tech: 4.8 miles near</div>
                        </div>
                      </div>
  
                  <div className="p-2.5 rounded-lg bg-[#F76258]/10 border border-[#F76258]/20 flex items-center justify-between text-foreground">
                    <span>Double Confirmation</span>
                    <span className="font-bold text-xs uppercase tracking-wider">{"Drag to Dispatch Technician"}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-inter">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="p-3.5 rounded-full bg-[#F76258]/10 text-[#F76258]">
                      <Bot className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground">
                                                Field Technician (Guided Field Execution)
                      </h4>
                      <p className="text-xs text-[#F76258] font-mono tracking-wider uppercase">Archetype: "Action-Oriented"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed font-inter text-justify font-light">
                    The Technician needs a mobile experience that acts as a secure, predictable guide. The app works offline and provides exact diagnostic context to eliminate guesswork:
                  </p>
                  <ul className="space-y-3.5">
                    
                      <li key={0} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#F76258] flex-shrink-0 mt-0.5" />
                        <span>Presents guided, step-by-step checklists with required audit photo evidence.</span>
                      </li>
  

                      <li key={1} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#F76258] flex-shrink-0 mt-0.5" />
                        <span>Displays live telemetry parameters directly on the workpack screen.</span>
                      </li>
  

                      <li key={2} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#F76258] flex-shrink-0 mt-0.5" />
                        <span>Features a simple parts inventory checkout scanner to record hardware updates.</span>
                      </li>
  
                  </ul>
                </div>
                <div className="md:col-span-5 p-4 bg-[#0B0B0C] border border-border/30 rounded-2xl flex flex-col gap-4 font-mono text-[11px] text-muted-foreground shadow-2xl relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#F76258]/10 border border-[#F76258]/30 text-[#F76258] text-[9px] uppercase tracking-widest font-mono">
                    Action Panel
                  </div>
                  <div className="border-b border-border/30 pb-3">
                    <div className="font-bold text-foreground text-xs font-space-grotesk uppercase tracking-wider mb-1">{"📱 Tech Mobile Execution App"}</div>
                    <div className="text-[10px]">{"Session Status: On-Site Verified"}</div>
                  </div>
                  
                      <div key={0} className="p-2.5 rounded-lg bg-card/60 border border-border/30 text-[10px]">
                        <span className="font-bold text-foreground block mb-0.5">Workpack #431 - Repl Fan</span>
                        Asset ID: CHG-2321 • Slot: A2 • Action: Diagnostic Run
                      </div>
  

                      <div key={1} className="p-2.5 rounded-lg bg-card/60 border border-border/30 text-[10px]">
                        <span className="font-bold text-foreground block mb-0.5">Workpack #430 - KYC Inspect</span>
                        Asset ID: CHG-2319 • Slot: C1 • Action: Grounding Test
                      </div>
  
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1.5 rounded-full border border-border/30 bg-card text-[9px] cursor-pointer">{"Complete Checklist (↑)"}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* 6. THE DESIGN EVOLUTION */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-32 space-y-8 font-inter"
        >
          <motion.div variants={fadeInUp} className="w-full space-y-4">
            <span className="text-[#3EBAF4] text-xs font-semibold tracking-widest uppercase block">Key Solution / Design Evolution</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">
              From Low-Fidelity Blueprints to Figma Tokens
            </h3>
            <p className="text-[20px] text-muted-foreground/80 leading-relaxed text-justify font-inter">
              Our design journey represents a deliberate transition from raw structural layouts to fully realized, production-grade visual systems.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4"
          >
            {/* Design Evolution Block 1 */}
            <div className="p-8 rounded-[2rem] bg-card/30 border border-border/30 backdrop-blur-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest block font-bold">Phase 01 / Wireframe</span>
                <h4 className="text-xl font-bold font-space-grotesk text-foreground">Gray-Box Prototyping</h4>
                <p className="text-sm text-muted-foreground/90 leading-relaxed text-justify font-inter">
                  Establishing primary layout grids, content density hierarchies, and low-cognitive user flows without visual distractions.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-xl bg-card aspect-[4/3] flex items-center justify-center max-h-[300px]">
                <img 
                  src="undefined" 
                  alt="Figma Wireframe Blueprint" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Design Evolution Block 2 */}
            <div className="p-8 rounded-[2rem] bg-card/30 border border-border/30 backdrop-blur-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest block font-bold">Phase 02 / Visual System</span>
                <h4 className="text-xl font-bold font-space-grotesk text-foreground">Figma Tokens & Brand System</h4>
                <p className="text-sm text-muted-foreground/90 leading-relaxed text-justify font-inter">
                  Injecting consistent spacing scales, brand colorways, typographic sub-themes, and interactive states directly into production.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-xl bg-card aspect-[4/3] flex items-center justify-center max-h-[300px]">
                <img 
                  src="undefined" 
                  alt="Figma High-Fidelity UI System" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 7. THE SOLUTION DETAILS (DESIGN MOVES) */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-32 space-y-8 font-inter"
        >
          <motion.div variants={fadeInUp} className="w-full space-y-4">
            <span className="text-[#F76258] text-xs font-semibold tracking-widest uppercase block">Key Solution</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">
              Core Design Moves
            </h3>
            <p className="text-[20px] text-muted-foreground/80 leading-relaxed text-justify font-inter">
              A comprehensive deep dive into the operational breakthroughs engineered to bring low-cognitive friction, verified security, and seamless ease to this case study.
            </p>
          </motion.div>

          {/* DESIGN MOVE 1 */}
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-card/30 border border-border/30 backdrop-blur-md space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/20 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#F76258]/10 text-[#F76258] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[#F76258]/20">01</div>
                <div>
                  <h4 className="text-[22px] font-semibold font-space-grotesk tracking-wide text-foreground">
                    Predictive Telemetry & R-Score
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">undefined</p>
                </div>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#F76258]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center">
              <div className="lg:col-span-7 space-y-5 font-inter text-[18px] text-muted-foreground/90">
                <p className="text-justify font-inter">
                  We designed a unified health indicator (R-score) that evaluates charger temperature, historical faults, and recent usage peaks to assign action items to operators before a physical failure occurs.
                </p>
              </div>
              
              <div className="lg:col-span-5 flex items-center justify-center w-full">
                
                  <div className="h-28 border border-border/20 rounded-lg bg-card/30 p-2 flex items-end relative overflow-hidden">
                    <div dangerouslySetInnerHTML={{ __html: "<svg className=\"w-full h-[70%] stroke-[#3b82f6] fill-none stroke-[2]\" viewBox=\"0 0 100 30\">\n                    <path d=\"M 0 10 Q 30 25, 50 5 T 90 20 T 100 10\" />\n                    <circle cx=\"50\" cy=\"5\" r=\"3\" className=\"fill-[#3b82f6] stroke-white stroke-[1]\" />\n                  </svg>" }} className="w-full" />
                  </div>
  
              </div>
            </div>
          </motion.div>

          {/* DESIGN MOVE 2 */}
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-card/30 border border-border/30 backdrop-blur-md space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/20 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#3EBAF4]/10 text-[#3EBAF4] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[#3EBAF4]/20">02</div>
                <div>
                  <h4 className="text-[22px] font-semibold font-space-grotesk tracking-wide text-foreground">
                    Interactive Dispatch Map
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">undefined</p>
                </div>
              </div>
              <Activity className="w-6 h-6 text-[#3EBAF4]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center font-inter">
              {/* Image Left */}
              <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[220px]">
                  <img 
                    src="undefined" 
                    alt="Interactive Dispatch Map" 
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 space-y-5 font-inter text-base md:text-[18px] text-muted-foreground/90 order-1 lg:order-2">
                <p className="text-justify font-inter">
                  Designed an interactive map interface linking incoming alarms with live field technician coordinates, allowing dispatchers to issue tickets with one click.
                </p>
              </div>
            </div>
          </motion.div>

          {/* DESIGN MOVE 3 */}
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-card/30 border border-border/30 backdrop-blur-md space-y-8 font-inter">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/20 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#F76258]/10 text-[#F76258] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[#F76258]/20">03</div>
                <div>
                  <h4 className="text-[22px] font-semibold font-space-grotesk tracking-wide text-foreground">
                    Guided Workpack Execution
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">undefined</p>
                </div>
              </div>
              <Bot className="w-6 h-6 text-[#F76258]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center">
              <div className="lg:col-span-7 space-y-5 font-inter text-[18px] text-muted-foreground/90">
                <p className="text-justify font-inter">
                  Built a robust mobile workflow that keeps all checklist guides, charger manuals, and wiring schematics cached locally, ensuring uninterrupted work in concrete parking structures.
                </p>
              </div>
              
              <div className="lg:col-span-5 p-5 bg-[#0B0B0C] border border-border/30 rounded-2xl font-mono text-[10px] text-muted-foreground flex flex-col gap-3">
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground border-b border-border/20 pb-2">📈 First-Time Fix Rates</span>
                
                <div dangerouslySetInnerHTML={{ __html: "<div className=\"h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30\">\n                  <div className=\"w-8 bg-[#3b82f6] rounded-t-sm\" style={{ height: \"65%\" }} />\n                  <div className=\"w-8 bg-[#4b92f6] rounded-t-sm\" style={{ height: \"75%\" }} />\n                  <div className=\"w-8 bg-[#5ba2f6] rounded-t-sm\" style={{ height: \"92%\" }} />\n                  <div className=\"w-8 bg-muted rounded-t-sm\" style={{ height: \"45%\" }} />\n                </div>" }} />
  
                <div className="flex justify-between text-[8px] text-muted-foreground font-mono px-2">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 9. LEARNINGS & TAKEAWAYS */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-32 space-y-8 font-inter"
        >
          <motion.div variants={fadeInUp} className="w-full space-y-4">
            <span className="text-[#F76258] text-xs font-semibold tracking-widest uppercase block">Reflections</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">
              What This Project Changed For Me
            </h3>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="space-y-8 text-lg md:text-[20px] leading-relaxed text-muted-foreground/90 font-inter w-full"
          >
            <p className="text-lg md:text-[20px] font-light text-foreground leading-relaxed border-l-4 border-[#F76258] pl-6 italic text-justify w-full font-inter font-light">
              "EV charger reliability is a workflow orchestration problem, not a technical capability limitation."
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-light pl-6 text-justify font-inter">
              Unifying operations meant acknowledging that a system is only as reliable as its most isolated user. By building trust cues into the technician mobile app and high-density maps into web console, we aligned the entire team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 w-full pl-6">
              
                <div key={0} className="space-y-2 text-justify font-inter">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">01 / Explainability drives action</h4>
                  <p className="text-sm text-justify font-inter">Structured dense alarm telemetry into intuitive severity states.</p>
                </div>
  

                <div key={1} className="space-y-2 text-justify font-inter">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">02 / Design for decision moments</h4>
                  <p className="text-sm text-justify font-inter">Positioned diagnostic history next to active checklists, eliminating guesswork.</p>
                </div>
  
            </div>
          </motion.div>
        </motion.div>

        {/* 10. CALL TO ACTION */}
        <motion.div 
          variants={fadeInUp} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-32 border-t border-border/20 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-inter"
        >
          <div>
            <h3 className="text-3xl font-bold font-space-grotesk tracking-tight uppercase">Let's craft the next operational breakthrough.</h3>
            <p className="text-muted-foreground mt-2 font-inter text-lg">Have a complex transactional workflow, multi-role portal, or data-dense dashboard to design?</p>
          </div>
          <Button 
            asChild 
            className="rounded-full px-8 py-6 text-base font-space-grotesk font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-xl cursor-pointer"
          >
            <Link href="mailto:timothy.ux@gmail.com">
              Let's Talk
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </div>
  )
}
