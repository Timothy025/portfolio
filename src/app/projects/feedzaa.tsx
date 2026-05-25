"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Activity, ShieldCheck, Bot } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeedzaaCaseStudy() {
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
                src="/logos/Feedzaa.svg"
                alt="Feedzaa logo"
                className="block max-h-14 sm:max-h-16 lg:max-h-20 w-auto max-w-[200px] sm:max-w-[260px] lg:max-w-[300px] object-contain dark:hidden"
              />
              <img
                src="/logos/Feedzaa.svg"
                alt="Feedzaa logo"
                className="hidden max-h-14 sm:max-h-16 lg:max-h-20 w-auto max-w-[200px] sm:max-w-[260px] lg:max-w-[300px] object-contain dark:block"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Helping home chefs spend 60% less time managing orders, and more time crafting authentic culinary experiences.
            </h2>
          </div>

          <div className="w-full mt-4 flex justify-center">
            <img 
              src="/chef_app.png" 
              alt="Feedzaa App Mockup" 
              className="w-full max-w-4xl h-auto object-contain rounded-2xl border border-border/20 shadow-2xl"
            />
          </div>

          <div className="space-y-4 mt-8">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              Feedzaa helps home chefs run their entire food commerce operation without juggling multiple apps. Previously, chefs relied on disconnected tools like WhatsApp, spreadsheets, and standalone payment apps. This project was designed as a unified commerce system connecting customer ordering with direct kitchen execution and automated local rider dispatching.
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
              <p className="text-sm font-medium">Mobile Web & Kitchen App</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React Native</Badge>
                <Badge variant="secondary">Expo</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Stripe API</Badge>
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
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#DB3D1A" }}>60%</div>
              <h4 className="font-bold text-foreground">Faster Order Prep Time</h4>
              <p className="text-sm text-muted-foreground">Consolidated WhatsApp orders into a single live kitchen dashboard, reducing errors.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#DB3D1A" }}>42%</div>
              <h4 className="font-bold text-foreground">Reduced Checkout Friction</h4>
              <p className="text-sm text-muted-foreground">Simplified customer payments through integrated one click UPI checkouts.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "#DB3D1A" }}>3x</div>
              <h4 className="font-bold text-foreground">Increase in Weekly Orders</h4>
              <p className="text-sm text-muted-foreground">Automated recurring orders let customers subscribe to their favorite chefs easily.</p>
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
            Home chefs are talented cooks but poor logistical coordinators. Managing active customer chats, menu planning, payment verification, and courier handoffs broke their day to day culinary focus.
          </p>
          
          <div className="grid gap-4 mt-8">
            
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Manual Order Trapping
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                WhatsApp orders were manually transcribed to paper or spreadsheets, causing delayed orders during rush hours.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Reconciling Bank Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Chefs had to stop cooking to manually check bank apps for incoming transfers, causing delays and food spoilage.
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Delivery Rider Disconnect
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                No unified delivery integration meant chefs spent hours call triage coordinating local couriers.
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
            We designed the Feedzaa marketplace around two distinct user groups who participate in the same local food network but operate under opposite time constraints.
          </p>
          
          
          <Tabs defaultValue="role1" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-muted/50">
              <TabsTrigger value="role1" className="py-3 text-sm font-bold data-[state=active]:bg-[#DB3D1A] data-[state=active]:text-black transition-all">
                The Hungry Customer
              </TabsTrigger>
              <TabsTrigger value="role2" className="py-3 text-sm font-bold data-[state=active]:bg-[#DB3D1A] data-[state=active]:text-black transition-all">
                The Home Chef
              </TabsTrigger>
            </TabsList>
            <TabsContent value="role1" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">Discovery & Instant Checkout</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">The Buyer wants to discover local home chefs and order food instantly without dealing with messy group chats or unverified links. The design optimizes for absolute checkout speed:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Replaces confusing text broadcast menus with a visually stunning, image first local chef feed.</li>
                    <li>Displays active chef kitchen status (e.g. 'Cooking Now', 'Pre order for dinner').</li>
                    <li>Streamlines order creation into a sliding double confirmation checkout drawer.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="role2" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">Fulfillment & Yield Focus</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">The Chef wants to track incoming orders, schedule menus, and manage delivery riders with zero technical overhead. The design optimizes for cognitive simplicity during busy kitchen hours:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Presents a dense, scannable kitchen queue (New, Preparing, Ready, Out) to prevent order mix ups.</li>
                    <li>Integrates an automated local rider dispatch engine that triggers when food state is marked 'Ready'.</li>
                    <li>Features real time earnings analytics showing today's margins and portion sales.</li>
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
            
            <Card className="border-l-4 bg-card/40" style={{ borderLeftColor: "#DB3D1A" }}>
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Eliminating spreadsheeting</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Unified Kitchen Dashboard</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">We consolidated WhatsApp chats, spreadsheets, and bank alerts into a single, scannable Kanban style kitchen control center. Order status updates trigger automated user push notifications and rider dispatch alerts.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#3EBAF4] bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Replacing fragmented transfers</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Activity className="w-4 h-4"/> Frictionless Checkout</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Designed a secure checkout sheet that automatically verifies bank deposits via instant webhooks. Customers get a verified order confirmation badge within seconds, without manual chef verification.</p>
                </div>
              </CardContent>
            </Card>

            
            <Card className="border-l-4 border-l-purple-500 bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">Assisting menu planning</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Bot className="w-4 h-4"/> Conversational AI Helper</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">Integrated a conversational AI bot directly inside the chef dashboard to assist with daily menu pricing. Chefs can ask 'How much did I earn today?' and get a breakdown of top-selling dishes and dynamic margins.</p>
                </div>
              </CardContent>
            </Card>
            
          </div>

          <div className="w-full mt-16 flex justify-center">
            <img src="/feedzaa_mock.png" alt="Feedzaa App Showcase" className="w-full max-w-5xl h-auto object-contain rounded-2xl border border-border/20 shadow-2xl" />
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
              "This project taught me that unifying tools isn't enough; you must unify how people think and talk about their business."
            </p>
            
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              Home chefs didn't think in terms of 'inventory APIs' or 'payment corridors'. They thought in terms of 'plates prepared' and 'getting paid'. Aligning our design language with their mental models was the single biggest driver of adoption.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Speaks the user's language</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Renamed complex payment terms to everyday home cooking metaphors.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Inclusive UX bridges gaps</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Designed simplified touch targets for chefs who manage screens while cooking.</p>
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
