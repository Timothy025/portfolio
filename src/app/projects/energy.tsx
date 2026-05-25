"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Activity, ShieldCheck, Coins, Bot, Zap, Smartphone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AatralCaseStudy() {
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
                src="/logos/aatral_light.svg"
                alt="Aatral Mobile logo"
                className="block h-12 sm:h-16 lg:h-20 w-auto max-w-none object-contain dark:hidden"
              />
              <img
                src="/logos/aatral_dark.svg"
                alt="Aatral Mobile logo"
                className="hidden h-12 sm:h-16 lg:h-20 w-auto max-w-none object-contain dark:block"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              A local clean energy marketplace connecting everyday homeowners to buy and sell solar power.
            </h2>
          </div>

          <div className="w-full mt-4 flex justify-center">
            <img 
              src="/Aatral_app.svg" 
              alt="Aatral Mobile App Mockup" 
              className="w-full max-w-4xl h-auto object-contain rounded-2xl border border-border/20 shadow-2xl"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              Aatral Mobile makes buying and selling green power as easy as sending a message, converting complex utility data and charts into simple daily-life choices that anyone can understand.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/30">
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Timeline</h4>
              <p className="text-sm font-medium">November 2025 – February 2026</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Role</h4>
              <p className="text-sm font-medium">Lead UI/UX & Mobile Architect</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Platform</h4>
              <p className="text-sm font-medium">Figma, React Native</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React Native</Badge>
                <Badge variant="secondary">Expo Router</Badge>
                <Badge variant="secondary">Zustand</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
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
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#00E673" }}>100%</div>
              <h4 className="font-bold text-foreground">Self-Serve Verification</h4>
              <p className="text-sm text-muted-foreground">Users fetch credentials directly from utilities via themed overlay browsers.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#00E673" }}>40%</div>
              <h4 className="font-bold text-foreground">Drop-off Reduction</h4>
              <p className="text-sm text-muted-foreground">Introduced 'Skip VC Upload' escape hatch, allowing instant dummy data sandbox preview.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#00E673" }}>6</div>
              <h4 className="font-bold text-foreground">Languages Integrated</h4>
              <p className="text-sm text-muted-foreground">Supports dynamic mid-flow translation switching for rural prosumers.</p>
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
            Everyday homeowners are asked to act like professional energy traders, managing utility meter records, verifying solar assets, and navigating complex networks.
          </p>
          
          <div className="grid gap-4 mt-8">
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  High Cryptographic Barriers
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Forcing users to upload complex cryptographic credentials on step one caused 80%+ drop-off.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Disconnected Utilities
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Consumers had to manually exit the app, fetch utility bills from government sites, and copy hashes.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Dashboard Clutter
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Sellers and everyday buyers were forced into identical, confusing, data-heavy views.
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* DESIGN EVOLUTION */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          className="space-y-8"
        >
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase border-b border-border/30 pb-4">Design Evolution</h3>
          <p className="text-lg leading-relaxed text-foreground/90">
            Before pushing any pixels, the product went through a rigorous, two-phase architectural and visual design translation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="bg-card/40 border-border/30 shadow-xl overflow-hidden flex flex-col justify-between items-center text-center p-8">
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center font-bold font-space-grotesk text-lg border border-border/30 mb-6">1</div>
              <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground uppercase mb-8">Gray-Box Prototyping</h4>
              <img src="/Aatral/figma_grey.png" alt="Gray-Box Prototyping" className="max-w-[180px] rounded-2xl shadow-2xl border border-border/20 transition-transform hover:scale-105" />
            </Card>
            <Card className="bg-card/40 border-border/30 shadow-xl overflow-hidden flex flex-col justify-between items-center text-center p-8">
              <div className="w-12 h-12 rounded-full bg-[#3EBAF4]/20 text-[#3EBAF4] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[#3EBAF4]/30 mb-6">2</div>
              <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground uppercase mb-8">Figma Tokens</h4>
              <img src="/Aatral/Sell_1.png" alt="Figma Tokens System" className="max-w-[180px] rounded-2xl shadow-2xl border border-border/20 transition-transform hover:scale-105" />
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
            Structured around two distinct user archetypes who participate in the same local grid but operate under entirely opposite environmental constraints.
          </p>
          
          <Tabs defaultValue="buyer" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-muted/50">
              <TabsTrigger value="buyer" className="py-3 text-sm font-bold data-[state=active]:bg-[#00E673] data-[state=active]:text-black transition-all">
                The P2P Buyer
              </TabsTrigger>
              <TabsTrigger value="seller" className="py-3 text-sm font-bold data-[state=active]:bg-[#1FD0B4] data-[state=active]:text-black transition-all">
                The Renewable Seller
              </TabsTrigger>
            </TabsList>
            <TabsContent value="buyer" className="mt-6">
              <Card>
                <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h4 className="font-bold text-lg">Consumption & Savings Focus</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">The Buyer wants cheap, reliable, and clean energy without needing to understand kilowatt-hours (kWh) vs. megawatt-hours (MWh). The design optimizes for decision speed.</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      <li>Replaces complex trading charts with everyday time slots (e.g., 'Morning: 6 AM - 12 PM').</li>
                      <li>Highlights green energy source tags clearly (e.g., 'Solar Power', 'Wind Energy').</li>
                      <li>Streamlines purchasing into a Double-Confirmation Sliding Sheet Modal featuring clear cost breakdowns.</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[160px]">
                      <img src="/Aatral/Buy_1.png" alt="Aatral Buyer Screen 1" className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[160px]">
                      <img src="/Aatral/Buy_2.png" alt="Aatral Buyer Screen 2" className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="seller" className="mt-6">
              <Card>
                <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h4 className="font-bold text-lg">Production & Yield Focus</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">The Seller (often a rural or residential solar prosumer) wants to track generation yield, publish excess energy slots, and monitor earnings. The design optimizes for action execution.</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      <li>Presents an AI Chat Assistant Interface as the central hub to answer complex questions.</li>
                      <li>Provides Quick Action Sheets (Sell, Earnings, Grid Demand) to bypass repetitive forms.</li>
                      <li>Visualizes real-time peak solar generation trends through customized native SVG graphs.</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[160px]">
                      <img src="/Aatral/Sell_1.png" alt="Aatral Seller Screen 1" className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[160px]">
                      <img src="/Aatral/Sell_2.png" alt="Aatral Seller Screen 2" className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105" />
                    </div>
                  </div>
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
            A comprehensive deep dive into the operational breakthroughs engineered to bring low-cognitive friction, verified security, and conversational ease.
          </p>

          <div className="space-y-6 mt-8">
            <Card className="border-l-4 border-l-[#1FD0B4] bg-card/40">
              <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                    <p className="font-medium mt-1 leading-relaxed">Redesigning Cryptographic Upload into a Self-Serve Bottom Sheet</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-border/20">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Friction-Free Utility & VC Verification</h4>
                    <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Verifiable Credentials (VCs) are secure, cryptographic files that prove a consumer’s identity. We integrated a trigger-based bottom sheet, themed in-app browsers, and a 'Skip VC' escape hatch to streamline onboarding.</p>
                  </div>
                </div>
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[220px]">
                    <img src="/Aatral/Onboard.png" alt="Aatral Onboarding Screen" className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#3EBAF4] bg-card/40 mt-6">
              <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
                  <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[220px]">
                    <img src="/Aatral/Sell_1.png" alt="Aatral Seller Publishing Screen" className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105" />
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                    <p className="font-medium mt-1 leading-relaxed">Listing Excess Solar Energy inside a Seamless 1-Hour Delivery Window</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-border/20">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Activity className="w-4 h-4"/> Publish Energy Intent & Scheduling</h4>
                    <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Sellers are empowered to list precise energy slots in real-time, eliminating friction from residential green grid distribution with instant market listings and dynamic yield suggestions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#00E673] bg-card/40 mt-6">
              <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                    <p className="font-medium mt-1 leading-relaxed">Direct Conversion of Green Grid Earnings into Spendable User Accounts</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-border/20">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Coins className="w-4 h-4"/> Wallet Ledger & Account Withdrawals</h4>
                    <p className="text-sm mt-2 leading-relaxed text-muted-foreground">A cohesive financial dashboard built to bridge peer-to-peer micro-grid earnings straight to the user's primary bank account with verifiable proof ledgers and seamless balance transfers.</p>
                  </div>
                </div>
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[220px]">
                    <img src="/Aatral/Wallet.png" alt="Aatral Order Ledger & Wallet Screen" className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105" />
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
            <p className="text-2xl font-light text-foreground leading-relaxed italic text-center mb-12">
              "This project reinforced that adoption is rarely a feature problem—it is a confidence problem. High-contrast colors, premium animations, and simple translations build structural credibility that makes users feel secure."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Explainability over Jargon</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Cryptographic credentials and local grids are highly intimidating. True design means hiding the technical overhead behind friendly, everyday metaphors and self-serve utility logins.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Dynamic Design Builds Trust</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">In peer-to-peer energy systems, premium micro-animations and seamless dark-mode themes are not just visually pleasing; they convey professional operational security.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Regional Inclusivity is Mandatory</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Designing native support for 6 regional languages from day one showed me that true accessibility means designing for cultural and linguistic diversity in local grids.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Cohesive UX Architecture</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">A great design system connects code and aesthetics. Having our Zustand states, Expo routes, and Figma variables perfectly mapped is what made this project highly reliable.</p>
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
