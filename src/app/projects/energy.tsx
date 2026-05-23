"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Languages, 
  Cpu, 
  Coins, 
  TrendingUp, 
  Bot, 
  Sparkles, 
  Smartphone, 
  Layers, 
  Activity, 
  ShieldCheck,
  Zap,
  MousePointerClick
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AatralCaseStudy() {
  const [selectedRole, setSelectedRole] = useState<"buyer" | "seller">("buyer")
  const [activeStep, setActiveStep] = useState(0)

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
    <div className="min-h-screen bg-background text-foreground pb-8 transition-colors duration-500 selection:bg-[#00E673]/20">
      {/* Global Page Tint Accent */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.15]" style={{ backgroundColor: "#00E673" }} />
      
      {/* 1. TOP NAV / FLOATING BACK BUTTON */}
      <div className="fixed top-6 left-6 z-50">
        <Button variant="ghost" size="icon" asChild className="rounded-full bg-background/40 backdrop-blur-md border border-border/40 hover:bg-foreground/5 shadow-lg w-12 h-12 flex items-center justify-center cursor-pointer transition-colors duration-300">
          <Link href="/#work">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
        </Button>
      </div>

      {/* 2. PREMIUM HERO SECTION */}
      <div className="relative overflow-hidden pt-16 pb-8 border-b border-border/10">
        {/* Brand Background Signature Gradients */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#00E673]/10 via-[#1FD0B4]/5 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#3EBAF4]/10 to-transparent blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >


            <div className="flex items-center -ml-4 h-16 sm:h-20 lg:h-24">
              <img
                src="/logos/aatral_light.svg"
                alt="Aatral logo"
                className="block max-h-14 sm:max-h-16 lg:max-h-20 w-auto max-w-[200px] sm:max-w-[260px] lg:max-w-[320px] object-contain dark:hidden"
              />
              <img
                src="/logos/aatral_dark.svg"
                alt="Aatral logo"
                className="hidden max-h-14 sm:max-h-16 lg:max-h-20 w-auto max-w-[200px] sm:max-w-[260px] lg:max-w-[320px] object-contain dark:block"
              />
            </div>

            <div className="w-full mt-4 flex justify-center">
              <img 
                src="/Aatral_app.svg" 
                alt="Aatral Mobile App Mockup" 
                className="w-full max-w-4xl h-auto object-contain rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Immersive Overview & Detailed Metadata Grid (Stacked Layout) */}
          <div className="mt-4 pt-4 border-t border-border/20 space-y-8">
            {/* Top Row: Immersive full-width introduction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full text-[20px] font-light leading-relaxed text-foreground/90 font-inter space-y-4"
            >
              <span className="text-[#00E673] text-xs font-semibold tracking-widest uppercase block">Overview</span>
              <p className="border-l-4 border-[#00E673] pl-6 md:pl-8 italic text-justify">
                <strong>Aatral Mobile</strong> is a local clean energy marketplace that connects everyday homeowners who generate solar power directly with neighbors who want to buy clean, affordable energy. It makes buying and selling green power as easy as sending a message, converting complex utility data and charts into simple daily-life choices that anyone can understand.
              </p>
            </motion.div>

            {/* Bottom Row: Horizontal Metadata Row (Tarun Venkatesan Monospaced Style but Horizontal) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/10 text-sm font-mono tracking-tight"
            >
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Timeline</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">November 2025 – February 2026 (4 Months)</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Role</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">Lead UI/UX Designer & Mobile Systems Architect</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Platform</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">Figma, Expo / React Native (iOS & Android)</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Tech Stack</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">React Native, Expo Router, Zustand, NativeWind (Tailwind CSS), react-i18next, react-native-svg</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl mt-8">
        
        {/* 3. METRICS / WHAT CHANGED */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <span className="text-[#1FD0B4] text-xs font-semibold tracking-widest uppercase block">Impact</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">What Changed Operationally</h3>
            <p className="text-lg md:text-[20px] text-muted-foreground/80 w-full leading-relaxed text-justify">
              These outcomes represent the real-world operational changes and UX transformations achieved during our iterative product cycles. By putting user choice, accessibility, and smooth performance first, we converted a highly technical trading console into a self-serve mobile portal.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[
              { metric: "100%", label: "Self-Serve Verification Handoff", desc: "Users fetch credentials directly from utilities via themed overlay browsers." },
              { metric: "40%", label: "Onboarding Drop-off Reduction", desc: "Introduced 'Skip VC Upload' escape hatch, allowing instant dummy data sandbox preview." },
              { metric: "6 Regional", label: "Languages Integrated", desc: "Supports dynamic mid-flow translation switching for rural prosumers (Hindi, Tamil, etc.)." }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                className="p-6 rounded-2xl bg-card/30 border border-border/30 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E673]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-black font-space-grotesk bg-gradient-to-r from-[#00E673] to-[#1FD0B4] bg-clip-text text-transparent">
                    {stat.metric}
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      {stat.label}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>


        {/* 4. THE OPERATIONAL BREAKDOWN (THE PROBLEM) */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-8 space-y-8"
        >
          <motion.div variants={fadeInUp} className="space-y-3">
            <span className="text-[#3EBAF4] text-xs font-semibold tracking-widest uppercase block">Operational Model / The Challenge</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight leading-tight">
              The Friction of Cryptographic Complexity
            </h3>
            <p className="text-lg md:text-[20px] text-muted-foreground/80 leading-relaxed w-full text-justify">
              Everyday homeowners are asked to act like professional energy traders, managing utility meter records, verifying solar assets, and navigating complex networks.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6 w-full pt-2">
            <div className="space-y-6 text-base md:text-[20px] leading-relaxed text-muted-foreground/80 font-inter">
              <div className="space-y-1">
                <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                  01 / High Cryptographic Barriers
                </h4>
                <p className="text-sm pl-3.5">Forcing users to upload complex cryptographic credentials on step one caused 80%+ drop-off.</p>
              </div>
              <div className="space-y-1 pt-4 border-t border-border/10">
                <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                  02 / Disconnected Utilities
                </h4>
                <p className="text-sm pl-3.5">Consumers had to manually exit the app, fetch utility bills from government sites, and copy hashes.</p>
              </div>
              <div className="space-y-1 pt-4 border-t border-border/10">
                <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                  03 / Dashboard Clutter
                </h4>
                <p className="text-sm pl-3.5">Sellers (solar prosumers) and everyday buyers were forced into identical, confusing, data-heavy views.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* 6. THE DESIGN EVOLUTION (GRAY-BOX TO HIGH-FI MOCKUP) */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-8 space-y-8"
        >
          <motion.div variants={fadeInUp} className="w-full space-y-4">
            <span className="text-[#3EBAF4] text-xs font-semibold tracking-widest uppercase block">Key Solution / Design Evolution</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">
              From Low-Fidelity Blueprints to Figma Tokens
            </h3>
            <p className="text-[20px] text-muted-foreground/80 leading-relaxed text-justify">
              Before pushing any pixels or writing a single line of React Native code, the product went through a rigorous, two-phase architectural and visual design translation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Step 1: Wireframes */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-6 p-8 rounded-3xl bg-card/30 border border-border/30 hover:border-foreground/10 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-border/40 text-foreground flex items-center justify-center font-bold font-space-grotesk text-sm border border-border/20">1</div>
                  <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground uppercase">
                    Gray-Box Prototyping
                  </h4>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[190px]">
                  <img 
                    src="/Aatral/figma_grey.png" 
                    alt="Aatral Gray-Box Wireframe spec" 
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>

            {/* Step 2: High-Fi Design System */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-6 p-8 rounded-3xl bg-card/30 border border-border/30 hover:border-foreground/10 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#3EBAF4]/20 text-[#3EBAF4] flex items-center justify-center font-bold font-space-grotesk text-sm border border-[#3EBAF4]/30">2</div>
                  <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground uppercase">
                    Figma Tokens & Brand System
                  </h4>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[190px]">
                  <img 
                    src="/Aatral/Sell_1.png" 
                    alt="Aatral Figma Tokens and Brand System" 
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>


        {/* 5. INTERACTIVE ROLE SWITCHER SECTION */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-8 space-y-8"
        >
          <motion.div variants={fadeInUp} className="space-y-3 w-full">
            <span className="text-[#00E673] text-xs font-semibold tracking-widest uppercase block">Operational Model / Reality</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight md:whitespace-nowrap">
              Two Roles, One Unified Marketplace
            </h3>
            <p className="text-lg md:text-[20px] text-muted-foreground w-full text-justify">
              I structured Aatral Mobile around two distinct user archetypes who participate in the same local grid but operate under entirely opposite environmental constraints and goals.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center w-full">
            <div className="bg-[#0B0B0C]/80 backdrop-blur-md border border-border/40 p-1.5 rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center max-w-md w-full shadow-2xl gap-1">
              <Button
                onClick={() => setSelectedRole("buyer")}
                variant="ghost"
                className={`flex-1 rounded-xl sm:rounded-full py-3.5 sm:py-5.5 cursor-pointer font-space-grotesk transition-all duration-300 ${
                  selectedRole === "buyer" 
                    ? "bg-[#00E673] text-black font-semibold shadow-[0_4px_15px_rgba(0,230,115,0.25)] hover:bg-[#00E673]" 
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                <Smartphone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">The P2P Buyer</span>
              </Button>
              <Button
                onClick={() => setSelectedRole("seller")}
                variant="ghost"
                className={`flex-1 rounded-xl sm:rounded-full py-3.5 sm:py-5.5 cursor-pointer font-space-grotesk transition-all duration-300 ${
                  selectedRole === "seller" 
                    ? "bg-[#1FD0B4] text-black font-semibold shadow-[0_4px_15px_rgba(31,208,180,0.25)] hover:bg-[#1FD0B4]" 
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                <Bot className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">The Renewable Seller</span>
              </Button>
            </div>
          </motion.div>

          {/* Role Showcase Display */}
          <motion.div 
            variants={fadeInUp} 
            className="p-8 rounded-3xl bg-card/30 border border-border/30 backdrop-blur-md"
          >
            {selectedRole === "buyer" ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="p-3.5 rounded-full bg-[#00E673]/10 text-[#00E673]">
                      <Zap className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground">
                        The P2P Buyer (Consumption & Savings Focus)
                      </h4>
                      <p className="text-xs text-[#00E673] font-mono tracking-wider uppercase">Archetype: "Low-Cognitive Load"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed font-inter text-justify">
                    The Buyer wants cheap, reliable, and clean energy without needing to understand kilowatt-hours (kWh) vs. megawatt-hours (MWh). The design optimizes for **decision speed** and **simplified messaging**:
                  </p>
                  <ul className="space-y-3.5">
                    {[
                      { icon: CheckCircle2, text: "Replaces complex trading charts with everyday time slots (e.g., 'Morning: 6 AM - 12 PM')." },
                      { icon: CheckCircle2, text: "Highlights green energy source tags clearly (e.g., 'Solar Power', 'Wind Energy')." },
                      { icon: CheckCircle2, text: "Streamlines purchasing into a Double-Confirmation Sliding Sheet Modal featuring clear cost breakdowns." }
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                        <item.icon className="w-4 h-4 text-[#00E673] flex-shrink-0 mt-0.5" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-5 flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[160px]">
                    <img 
                      src="/Aatral/Buy_1.png" 
                      alt="Aatral Buyer Screen 1" 
                      className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[160px]">
                    <img 
                      src="/Aatral/Buy_2.png" 
                      alt="Aatral Buyer Screen 2" 
                      className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="p-3.5 rounded-full bg-[#1FD0B4]/10 text-[#1FD0B4]">
                      <Bot className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground">
                        The Renewable Seller (Production & Yield Focus)
                      </h4>
                      <p className="text-xs text-[#1FD0B4] font-mono tracking-wider uppercase">Archetype: "Action-Oriented"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed font-inter text-justify">
                    The Seller (often a rural or residential solar prosumer) wants to track generation yield, publish excess energy slots, and monitor earnings. The design optimizes for **action execution** and **assistive automation**:
                  </p>
                  <ul className="space-y-3.5">
                    {[
                      { icon: CheckCircle2, text: "Presents an AI Chat Assistant Interface as the central hub to answer complex questions." },
                      { icon: CheckCircle2, text: "Provides Quick Action Sheets (Sell, Earnings, Grid Demand) to bypass repetitive forms." },
                      { icon: CheckCircle2, text: "Visualizes real-time peak solar generation trends through customized, high-contrast native SVG graphs." }
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                        <item.icon className="w-4 h-4 text-[#1FD0B4] flex-shrink-0 mt-0.5" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-5 flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[160px]">
                    <img 
                      src="/Aatral/Sell_1.png" 
                      alt="Aatral Seller Screen 1" 
                      className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[160px]">
                    <img 
                      src="/Aatral/Sell_2.png" 
                      alt="Aatral Seller Screen 2" 
                      className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>


        {/* 7. DETAILED DESIGN MOVES */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-8 space-y-8"
        >
          <motion.div variants={fadeInUp} className="w-full space-y-4">
            <span className="text-[#00E673] text-xs font-semibold tracking-widest uppercase block">Key Solution</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">
              Core Design Moves
            </h3>
            <p className="text-[20px] text-muted-foreground/80 leading-relaxed">
              A comprehensive deep dive into the operational breakthroughs engineered to bring low-cognitive friction, verified security, and conversational ease to Aatral Mobile.
            </p>
          </motion.div>



          {/* DESIGN MOVE 1 */}
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-card/30 border border-border/30 backdrop-blur-md space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/20 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#1FD0B4]/10 text-[#1FD0B4] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[#1FD0B4]/20">01</div>
                <div>
                  <h4 className="text-[22px] font-semibold font-space-grotesk tracking-wide text-foreground">
                    Friction-Free Utility & VC Verification
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">Redesigning Cryptographic Upload into a Self-Serve Bottom Sheet</p>
                </div>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#1FD0B4]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center">
              <div className="lg:col-span-7 space-y-5 font-inter text-[18px] text-muted-foreground/90">
                <p className="text-justify">
                  Verifiable Credentials (VCs) are secure, cryptographic files that prove a consumer’s identity and utility meter connection. However, users shouldn't have to be cryptography experts to complete registration.
                </p>
                <ul className="space-y-3.5 font-inter">
                  <li className="flex gap-2">
                    <span className="text-[#1FD0B4] font-bold">•</span>
                    <span><strong>Trigger-Based Bottom Sheet:</strong> Redesigned verification bottom sheet to open only when the user clicks <strong>"Complete Setup"</strong>, eliminating disorienting automated delays.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1FD0B4] font-bold">•</span>
                    <span><strong>Themed In-App Browser Integration:</strong> Integrated `expo-web-browser` to launch state utilities. Browser header toolbar styled to match Aatral dark background (`#071514`) with custom brand colors.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1FD0B4] font-bold">•</span>
                    <span><strong>Skip VC Escape Hatch:</strong> For prospective buyers, added a high-contrast underline hyperlink to bypass VC upload, instantly seeding sandbox mock profiles.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1FD0B4] font-bold">•</span>
                    <span><strong>Spring Physics Deceleration:</strong> Sheet uses customized spring physics (`damping: 20`, `mass: 0.8`) rather than linear, mechanical easing transitions.</span>
                  </li>
                </ul>
              </div>
              
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[220px]">
                  <img 
                    src="/Aatral/Onboard.png" 
                    alt="Aatral Onboarding Screen" 
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
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
                    Publish Energy Intent & Scheduling
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">Listing Excess Solar Energy inside a Seamless 1-Hour Delivery Window</p>
                </div>
              </div>
              <Activity className="w-6 h-6 text-[#3EBAF4]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center font-inter">
              {/* Image Left */}
              <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[220px]">
                  <img 
                    src="/Aatral/Sell_1.png" 
                    alt="Aatral Seller Publishing Screen" 
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 space-y-5 font-inter text-base md:text-[18px] text-muted-foreground/90 order-1 lg:order-2">
                <p className="text-justify">
                  Sellers are empowered to list precise energy slots in real-time, eliminating friction from residential green grid distribution:
                </p>
                <ul className="space-y-3.5">
                  <li className="flex gap-2">
                    <span className="text-[#3EBAF4] font-bold">•</span>
                    <span><strong>1-Hour Window Commitment:</strong> Sellers can easily publish and commit exact excess generation intents to local grids in clean, flexible 1-hour slots.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#3EBAF4] font-bold">•</span>
                    <span><strong>Instant Market Listing:</strong> Intent listings immediately populate the local P2P discovery marketplace, matching buyers instantly.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#3EBAF4] font-bold">•</span>
                    <span><strong>Dynamic Yield Suggestions:</strong> Automated price recommendations help home solar producers maximize profits based on active load demands.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* DESIGN MOVE 3 */}
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-card/30 border border-border/30 backdrop-blur-md space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/20 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#00E673]/10 text-[#00E673] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[#00E673]/20">03</div>
                <div>
                  <h4 className="text-[22px] font-semibold font-space-grotesk tracking-wide text-foreground">
                    Wallet Ledger & Account Withdrawals
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">Direct Conversion of Green Grid Earnings into Spendable User Accounts</p>
                </div>
              </div>
              <Coins className="w-6 h-6 text-[#00E673]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center">
              <div className="lg:col-span-7 space-y-5 font-inter text-[18px] text-muted-foreground/90">
                <p className="text-justify">
                  A cohesive financial dashboard built to bridge peer-to-peer micro-grid earnings straight to the user's primary bank account:
                </p>
                <ul className="space-y-3.5">
                  <li className="flex gap-2">
                    <span className="text-[#00E673] font-bold">•</span>
                    <span><strong>Earned Green Rewards Ledger:</strong> Comprehensive financial statement tracking green energy earnings directly within the wallet dashboard.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00E673] font-bold">•</span>
                    <span><strong>Seamless Balance Transfer:</strong> Sellers can transfer accumulated peer-to-peer energy revenues to linked bank accounts or main utilities.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00E673] font-bold">•</span>
                    <span><strong>Verifiable Proof Ledger:</strong> Cryptographically signed transaction history blocks showing secure deposits and cashouts instantly.</span>
                  </li>
                </ul>
              </div>
              
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[220px]">
                  <img 
                    src="/Aatral/Wallet.png" 
                    alt="Aatral Order Ledger & Wallet Screen" 
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>


        </motion.div>





        {/* 9. LEARNINGS & REFLECTION */}
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-8 space-y-8"
        >
          <motion.div variants={fadeInUp} className="space-y-3">
            <span className="text-[#3EBAF4] text-xs font-semibold tracking-widest uppercase block">Learning</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">
              What This Project Changed For Me
            </h3>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="space-y-8 text-lg md:text-[20px] leading-relaxed text-muted-foreground/90 font-inter w-full"
          >
            <p className="text-lg md:text-[20px] font-light text-foreground leading-relaxed border-l-4 border-[#1FD0B4] pl-6 italic text-justify w-full">
              "This project reinforced that adoption is rarely a feature problem—it is a confidence problem. High-contrast colors, premium animations, and simple regional translations are not cosmetic; they build structural credibility that makes users feel secure."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 w-full">
              <div className="space-y-2 text-justify">
                <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">01 / Explainability over Jargon</h4>
                <p className="text-sm">Cryptographic credentials and local grids are highly intimidating. True design means hiding the technical overhead behind friendly, everyday metaphors and self-serve utility logins.</p>
              </div>
              <div className="space-y-2 text-justify">
                <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">02 / Dynamic Design Builds Trust</h4>
                <p className="text-sm">In peer-to-peer energy systems, premium micro-animations and seamless dark-mode themes are not just visually pleasing; they convey professional operational security.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/10 text-justify">
                <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">03 / Regional Inclusivity is Mandatory</h4>
                <p className="text-sm">Designing native support for 6 regional languages from day one showed me that true accessibility means designing for cultural and linguistic diversity in local grids.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/10 text-justify">
                <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">04 / Cohesive UX Architecture</h4>
                <p className="text-sm">A great design system connects code and aesthetics. Having our Zustand states, Expo routes, and Figma variables perfectly mapped is what made this project highly reliable.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 10. CALL TO ACTION / LINK BACK TO OTHER WORK */}
        <motion.div 
          variants={fadeInUp} 
          initial="initial" 
          whileInView="whileInView"
          className="mt-8 text-center space-y-6"
        >
          <h4 className="text-xl font-bold font-space-grotesk">Interested in checking out other works?</h4>
          <Button asChild variant="outline" className="rounded-full px-8 py-6 font-space-grotesk border-border/30 hover:bg-foreground/5 cursor-pointer">
            <Link href="/#work" className="flex items-center gap-2">
              Back to Portfolio Grid
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </div>
  )
}
