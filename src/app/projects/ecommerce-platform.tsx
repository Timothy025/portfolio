"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Activity, ShieldCheck, Bot } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EcommercePlatformCaseStudy() {
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
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk tracking-tight uppercase">E Commerce Platform</h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              High scale e commerce portal and merchant console streamlining dynamic inventory, checkouts, and sales metrics.
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              Online shoppers experience high cart abandonments when facing sluggish checkouts and disorienting catalog grids. This project optimizes consumer discovery, utilizing smooth transitions, dynamic cart previews, and interactive sales trend graphs to drive conversions.
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
              <p className="text-sm font-medium">Web Shopper Portal & Admin Panel</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">tailwind CSS</Badge>
                <Badge variant="secondary">GraphQL</Badge>
                <Badge variant="secondary">Postgres</Badge>
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
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#db2777" }}>35%</div>
              <h4 className="font-bold text-foreground">Lower Cart Abandonment</h4>
              <p className="text-sm text-muted-foreground">Simplified form inputs into a single swipe double confirmation checkout drawer.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#db2777" }}>1.2s</div>
              <h4 className="font-bold text-foreground">Faster Catalog Search</h4>
              <p className="text-sm text-muted-foreground">Implemented fuzzy search logic and local cache query loaders.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#db2777" }}>100%</div>
              <h4 className="font-bold text-foreground">Real time Stock Updates</h4>
              <p className="text-sm text-muted-foreground">GraphQL metrics synced storefront product availability with zero latency.</p>
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
            Shopping should feel delightful and fast. But when users face multi step verification forms, dry product tables, and slow pages, merchant revenues drop.
          </p>
          
          <div className="grid gap-4 mt-8">
            
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Slow Payment Gateways
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Multiple redirect pages delayed checkouts, causing cart abandonments.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Cluttered Product Lists
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Unstructured catalog grids blocked product comparisons, driving user churn.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Scattered Vendor Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Invoicing, inventory, and analytics required merchants to navigate disjointed menus.
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
            We designed this platform to serve casual shoppers exploring the catalog, and vendor admins coordinating dynamic inventories.
          </p>
          
          
          <Tabs defaultValue="role1" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-muted/50">
              <TabsTrigger value="role1" className="py-3 text-sm font-bold data-[state=active]:bg-[#db2777] data-[state=active]:text-black transition-all">
                Consumer Shopper
              </TabsTrigger>
              <TabsTrigger value="role2" className="py-3 text-sm font-bold data-[state=active]:bg-[#db2777] data-[state=active]:text-black transition-all">
                Vendor Admin
              </TabsTrigger>
            </TabsList>
            <TabsContent value="role1" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">Discovery & Rapid Checkout</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">The Shopper wants to locate products and buy them with absolute ease. The design optimizes for fast transaction execution:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Replaces dense tables with a sleek, card based dynamic catalog feed.</li>
                    <li>Integrates one swipe checkout sheets to bypass slow routing checks.</li>
                    <li>Highlights dynamic cart balance indicators on the main screen.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="role2" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">Sales & Stock Operations</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">The Admin coordinates store metrics and inventory compliance. The interface optimizes for clear status auditing:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Provides dynamic product catalog managers to publish stock updates.</li>
                    <li>Visualizes sales margins through clean native SVG graphs.</li>
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
            
            <Card className="border-l-4 bg-card/40" style={{ borderLeftColor: "#db2777" }}>
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Eliminating grid clutter</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Sleek Catalog Feed</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">We replaced dry transaction tables with a beautiful, interactive spending feed showing daily cash flows and category tags.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#3EBAF4] bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Streamlining checkout loops</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Activity className="w-4 h-4"/> One Swipe Checkout</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Designed an interactive payment sliding sheet that executes product checkouts within sub seconds, avoiding sluggish page reloads.</p>
                </div>
              </CardContent>
            </Card>

            
            <Card className="border-l-4 border-l-purple-500 bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Assisting product diagnostics</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Bot className="w-4 h-4"/> Conversational Catalog AI</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Integrated an assistive chat helper inside the shopper app. Shoppers can ask 'What are the top tech deals today?' and receive instant feedback.</p>
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
              "Commerce UX is confidence UX. Fluid checkout loops build buyer trust."
            </p>
            
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              By placing catalog filters directly onto the home screen and designing one swipe checkout drawer sheets, we helped users manage shopping baskets confidently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Explainability drives action</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Translated dry catalog codes into clear shipping status tags.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Design for decision moments</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Positioned buy buttons directly next to active wallet balances.</p>
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
