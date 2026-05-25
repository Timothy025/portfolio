"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Activity, ShieldCheck, Bot } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PayezCaseStudy() {
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
                src="/logos/PayEz.svg"
                alt="PayEZ logo"
                className="block max-h-10 sm:max-h-12 lg:max-h-14 w-auto max-w-[140px] sm:max-w-[180px] lg:max-w-[200px] object-contain dark:hidden"
              />
              <img
                src="/logos/PayEz.svg"
                alt="PayEZ logo"
                className="hidden max-h-10 sm:max-h-12 lg:max-h-14 w-auto max-w-[140px] sm:max-w-[180px] lg:max-w-[200px] object-contain dark:block"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Sleek P2P microfinance and payment gateway simplifying everyday transactions and cash transfers.
            </h2>
          </div>

          <div className="w-full mt-4 flex justify-center">
            <img 
              src="/payez.png" 
              alt="PayEZ Mobile App Mockup" 
              className="w-full max-w-4xl h-auto object-contain rounded-2xl border border-border/20 shadow-2xl"
            />
          </div>

          <div className="space-y-4 mt-8">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              Micro merchants and casual users experience high payment drop offs when trying to transfer cash through slow, data heavy banking portals. PayEZ streamlines P2P payments, utilizing modern layout transitions, wallet management tabs, and one swipe checkout sheets to secure cash flows.
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
              <p className="text-sm font-medium">Consumer App & Merchant Web</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React Native</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Stripe API</Badge>
                <Badge variant="secondary">Node.js</Badge>
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
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#4A69D8" }}>0.2s</div>
              <h4 className="font-bold text-foreground">Sub Second P2P Sync</h4>
              <p className="text-sm text-muted-foreground">Optimized payment routes enabled instant cash transfers.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#4A69D8" }}>38%</div>
              <h4 className="font-bold text-foreground">Fewer Checkout Drops</h4>
              <p className="text-sm text-muted-foreground">Simplified form inputs into a single swipe double confirmation checkout drawer.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#4A69D8" }}>100%</div>
              <h4 className="font-bold text-foreground">Fraud Score Validation</h4>
              <p className="text-sm text-muted-foreground">Integrated biometric fraud checks directly on checkout flow.</p>
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
            Sending money should feel like sending a text. But when users face multi step verification pages, complex routing codes, and dry tables, transaction drop offs skyrocket.
          </p>
          
          <div className="grid gap-4 mt-8">
            
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Opaque Verification Loops
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Multiple verification pages delayed checkout times, driving user frustration.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Zero Balance Visualization
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Static ledgers hid daily spending trends, preventing easy cash flow monitoring.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Scattered Cash Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Invoicing, sending, and receiving required users to navigate disjointed menus.
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
            We designed PayEZ to serve casual consumers sending instant P2P payments, and merchants tracking incoming cash flows.
          </p>
          
          
          <Tabs defaultValue="role1" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-muted/50">
              <TabsTrigger value="role1" className="py-3 text-sm font-bold data-[state=active]:bg-[#4A69D8] data-[state=active]:text-black transition-all">
                P2P Sender
              </TabsTrigger>
              <TabsTrigger value="role2" className="py-3 text-sm font-bold data-[state=active]:bg-[#4A69D8] data-[state=active]:text-black transition-all">
                Retail Merchant
              </TabsTrigger>
            </TabsList>
            <TabsContent value="role1" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">Transfer & Savings Focus</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">The Sender wants to transfer cash instantly with zero friction. The design optimizes for fast transaction execution:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Replaces dry ledger lists with a sleek, interactive spending history feed.</li>
                    <li>Integrates one swipe checkout sheets to bypass slow routing checks.</li>
                    <li>Highlights dynamic wallet balance indicators on the main screen.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="role2" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">Sales & Invoicing Focus</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">The Merchant coordinates incoming payments and tracks invoice compliance. The interface optimizes for clear status auditing:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Provides rapid invoice creators to collect customer payments.</li>
                    <li>Visualizes daily sales margins through clean native SVG graphs.</li>
                    <li>Enables fast transaction refunds through sliding checkout sheets.</li>
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
            
            <Card className="border-l-4 bg-card/40" style={{ borderLeftColor: "#4A69D8" }}>
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Eliminating table clutter</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Sleek Transaction Feed</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">We replaced dry transaction tables with a beautiful, interactive spending feed showing daily cash flows and category tags.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#3EBAF4] bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Streamlining transaction loops</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Activity className="w-4 h-4"/> One Swipe Checkout</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Designed an interactive payment sliding sheet that executes P2P transfers within sub seconds, avoiding sluggish page reloads.</p>
                </div>
              </CardContent>
            </Card>

            
            <Card className="border-l-4 border-l-purple-500 bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Assisting budgeting diagnostics</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Bot className="w-4 h-4"/> Conversational Financial AI</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Integrated an assistive chat helper inside the wallet app. Senders can ask 'How much did I save this week?' and receive instant spending feedback.</p>
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
              "Microfinance UX is trust UX. Frictionless loops convey transaction reliability."
            </p>
            
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              By placing balance trends directly onto the home screen and designing one swipe checkout drawer sheets, we helped users manage cash flows confidently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Explainability drives action</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Translated technical banking codes into clear transaction status tags.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Design for decision moments</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Positioned transfer triggers directly next to active wallet balances.</p>
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
