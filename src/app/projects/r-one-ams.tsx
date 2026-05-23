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
                alt="R One logo"
                className="block max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px] object-contain dark:hidden"
              />
              <img
                src="/logos/r-one.svg"
                alt="R One logo"
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
                R One is a comprehensive B2B application designed to centralize and streamline complex operational workflows for large scale organizations. Built specifically to translate a high volume of complex data into actionable insights. By bringing two distinct worlds—central operations (web) and field execution (mobile)—into a single cohesive interface, the application ensures that vital information flows instantly and effortlessly.
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
        
        {/* 4. THE OPERATIONAL BREAKDOWN (THE PROBLEM) */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="space-y-8 animate-fade-in"
        >
          <motion.div variants={fadeInUp} className="space-y-3">
            <span className="text-[#F76258] text-xs font-semibold tracking-widest uppercase block">Operational Model / The Challenge</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight leading-tight">
              The Divide Between Central Office and Field Teams
            </h3>
            <p className="text-lg md:text-[20px] text-muted-foreground/80 leading-relaxed w-full text-justify font-inter">
              Operational efficiency frequently breaks down when the tools used by field teams and central offices are disconnected. Central management teams faced significant hurdles in maintaining visibility across dispersed operations.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6 w-full pt-2">
            <div className="space-y-6 text-base md:text-[20px] leading-relaxed text-muted-foreground/80 font-inter">
              
                <div key={0} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    01 / Fragmented Oversight
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">Information regarding different locations, assets, and teams was scattered across disparate systems.</p>
                </div>
  

                <div key={1} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    02 / Field Context Loss
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">Field teams struggled with clunky interfaces that were hard to read outdoors and use with gloves.</p>
                </div>
  

                <div key={2} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    03 / Reactive Operations
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">Without real time field visibility, central management relied on reactive maintenance and manual status updates.</p>
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
              Two Roles, One Unified Ecosystem
            </h3>
            <p className="text-lg md:text-[20px] text-muted-foreground w-full text-justify font-inter">
              The platform was designed around two distinct yet complementary user experiences tailored to the specific needs of central dispatchers and field technicians.
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
                <span className="truncate">Central Manager (Web)</span>
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
                <span className="truncate">Field Technician (Mobile)</span>
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
                        Central Manager (Web) (High Level Proactive Control)
                      </h4>
                      <p className="text-xs text-[#F76258] font-mono tracking-wider uppercase">Archetype: "High-Confidence"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed font-inter text-justify font-light">
                    For the central user, the solution prioritizes clarity, data density, and immediate visibility. The focus is to translate complex data into clear actionable insights:
                  </p>
                  <ul className="space-y-3.5">
                    
                      <li key={0} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#F76258] flex-shrink-0 mt-0.5" />
                        <span>Streamlines project creation through guided workflows, reducing administrative setup time.</span>
                      </li>
  

                      <li key={1} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#F76258] flex-shrink-0 mt-0.5" />
                        <span>Transforms maintenance from a reactive chore to a proactive strategy via visual calendars.</span>
                      </li>
  

                      <li key={2} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#F76258] flex-shrink-0 mt-0.5" />
                        <span>Combats information overload with a smart, prioritized alert system across operations.</span>
                      </li>
  
                  </ul>
                </div>
                <div className="md:col-span-5 p-4 bg-[#0B0B0C] border border-border/30 rounded-2xl flex flex-col gap-4 font-mono text-[11px] text-muted-foreground shadow-2xl relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#F76258]/10 border border-[#F76258]/30 text-[#F76258] text-[9px] uppercase tracking-widest font-mono">
                    Overview Screen
                  </div>
                  <div className="border-b border-border/30 pb-3">
                    <div className="font-bold text-foreground text-xs font-space-grotesk uppercase tracking-wider mb-1">{"⚡ Central Ops Command Dashboard"}</div>
                    <div className="text-[10px]">{"Filter: High Priority • Proximity • Active"}</div>
                  </div>
                  
                      <div key={0} className="p-3 rounded-lg bg-card/60 border border-border/40 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-foreground">⚠️ Priority Alert: Generator 4</div>
                          <div className="text-[10px]">Status: Critical Temp • Zone B</div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="font-bold text-[#F76258] text-xs">Action: Acknowledge</div>
                          <div>Impact: High</div>
                        </div>
                      </div>
  

                      <div key={1} className="p-3 rounded-lg bg-card/60 border border-border/40 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-foreground">📋 Project Setup: Site Alpha</div>
                          <div className="text-[10px]">Status: Draft Saved • 80% Complete</div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="font-bold text-[#F76258] text-xs">Action: Resume Setup</div>
                          <div>Due: Tomorrow</div>
                        </div>
                      </div>
  
                  <div className="p-2.5 rounded-lg bg-[#F76258]/10 border border-[#F76258]/20 flex items-center justify-between text-foreground">
                    <span>Double Confirmation</span>
                    <span className="font-bold text-xs uppercase tracking-wider">{"Review Operations Map"}</span>
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
                        Field Technician (Mobile) (Contextual Field Execution)
                      </h4>
                      <p className="text-xs text-[#F76258] font-mono tracking-wider uppercase">Archetype: "Action-Oriented"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed font-inter text-justify font-light">
                    For the field user, the solution prioritizes physical context and ease of interaction on the go. The interface feels lightweight and tactile:
                  </p>
                  <ul className="space-y-3.5">
                    
                      <li key={0} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#F76258] flex-shrink-0 mt-0.5" />
                        <span>Roots all tasks in Map First Navigation, eliminating the need to dig through text lists.</span>
                      </li>
  

                      <li key={1} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#F76258] flex-shrink-0 mt-0.5" />
                        <span>Uses Contextual Bottom Sheets to log information without losing spatial context.</span>
                      </li>
  

                      <li key={2} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#F76258] flex-shrink-0 mt-0.5" />
                        <span>Employs thumb friendly interaction and camera scanning to replace manual typing.</span>
                      </li>
  
                  </ul>
                </div>
                <div className="md:col-span-5 p-4 bg-[#0B0B0C] border border-border/30 rounded-2xl flex flex-col gap-4 font-mono text-[11px] text-muted-foreground shadow-2xl relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#F76258]/10 border border-[#F76258]/30 text-[#F76258] text-[9px] uppercase tracking-widest font-mono">
                    Action Panel
                  </div>
                  <div className="border-b border-border/30 pb-3">
                    <div className="font-bold text-foreground text-xs font-space-grotesk uppercase tracking-wider mb-1">{"📱 Tech Mobile Execution App"}</div>
                    <div className="text-[10px]">{"Session Status: On Site Verified"}</div>
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
              From Low Fidelity Blueprints to Figma Tokens
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
                <h4 className="text-xl font-bold font-space-grotesk text-foreground">Gray Box Prototyping</h4>
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
                  alt="Figma High Fidelity UI System" 
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
                    Intelligent Alerts & Command Dashboard (Web)
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">undefined</p>
                </div>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#F76258]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center">
              <div className="lg:col-span-7 space-y-5 font-inter text-[18px] text-muted-foreground/90">
                <p className="text-justify font-inter">
                  The heart of the application is a master dashboard that aggregates data into a clean interface. Notifications are categorized by severity, ensuring critical issues—like safety hazards—are surfaced immediately to the top of the central user's dashboard.
                </p>
              </div>
              
              <div className="lg:col-span-5 flex items-center justify-center w-full">
                
                  <div className="h-28 border border-border/20 rounded-lg bg-card/30 p-2 flex items-end relative overflow-hidden">
                    <div dangerouslySetInnerHTML={{ __html: "<svg className=\"w-full h-[70%] stroke-[#F76258] fill-none stroke-[2]\" viewBox=\"0 0 100 30\">\n                    <path d=\"M 0 10 Q 30 25, 50 5 T 90 20 T 100 10\" />\n                    <circle cx=\"50\" cy=\"5\" r=\"3\" className=\"fill-[#F76258] stroke-white stroke-[1]\" />\n                  </svg>" }} className="w-full" />
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
                    Map First Navigation & Contextual Sheets (Mobile)
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
                    alt="Map First Navigation & Contextual Sheets (Mobile)" 
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 space-y-5 font-inter text-base md:text-[18px] text-muted-foreground/90 order-1 lg:order-2">
                <p className="text-justify font-inter">
                  For field users, the primary view is a geographical map. When executing a task, instructions slide up from the bottom as contextual sheets, allowing users to log information without losing sight of the underlying map or their spatial context.
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
                    Proactive Maintenance & Scanning (Unified)
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">undefined</p>
                </div>
              </div>
              <Bot className="w-6 h-6 text-[#F76258]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center">
              <div className="lg:col-span-7 space-y-5 font-inter text-[18px] text-muted-foreground/90">
                <p className="text-justify font-inter">
                  Web users create automated preventive maintenance schedules via guided workflows. In the field, technicians use thumb friendly interactions and camera scanning to identify equipment, removing the need for error prone manual typing.
                </p>
              </div>
              
              <div className="lg:col-span-5 p-5 bg-[#0B0B0C] border border-border/30 rounded-2xl font-mono text-[10px] text-muted-foreground flex flex-col gap-3">
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground border-b border-border/20 pb-2">📈 Field Data Accuracy</span>
                
                <div dangerouslySetInnerHTML={{ __html: "<div className=\"h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30\">\n                  <div className=\"w-8 bg-[#F76258] rounded-t-sm\" style={{ height: \"65%\" }} />\n                  <div className=\"w-8 bg-[#FA8A82] rounded-t-sm\" style={{ height: \"85%\" }} />\n                  <div className=\"w-8 bg-[#FCA59E] rounded-t-sm\" style={{ height: \"95%\" }} />\n                  <div className=\"w-8 bg-muted rounded-t-sm\" style={{ height: \"45%\" }} />\n                </div>" }} />
  
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

        {/* 8. METRICS / WHAT CHANGED (IMPACT) */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-32 space-y-8"
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
                    60%
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      Faster Task Completion
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      One tap scanning and bottom sheet forms reduced screen time for field workers.
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
                    100%
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      Real Time Visibility
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      Central management stopped relying on end of day reports thanks to unified feeds.
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
                    80%
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      Reduction in Data Errors
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      Replaced manual field typing with camera scanning and large selection toggles.
                    </p>
                  </div>
                </div>
              </motion.div>
  
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
              "Context Over Complexity: Users don't need to see everything; they need to see what is immediately relevant to their role."
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-light pl-6 text-justify font-inter">
              Designing for the Central User reinforced that visual clarity prevents cognitive overload, while designing for the Field User showed that high contrast and thumb friendly targets are essential for environmental usability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 w-full pl-6">
              
                <div key={0} className="space-y-2 text-justify font-inter">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">01 / A Shared Visual Language</h4>
                  <p className="text-sm text-justify font-inter">Using the same modern typography and card styles across platforms fostered a sense of unity.</p>
                </div>
  

                <div key={1} className="space-y-2 text-justify font-inter">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">02 / European Accessibility Compliance</h4>
                  <p className="text-sm text-justify font-inter">Designed according to stringent WCAG European standards (W2AG), guaranteeing high contrast and readability for field workers in harsh outdoor environments.</p>
                </div>
  

                <div key={2} className="space-y-2 text-justify font-inter">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">03 / Prioritization is Key</h4>
                  <p className="text-sm text-justify font-inter">Systems that automatically prioritize urgent tasks are essential for crisis management.</p>
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
