"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Zap, Coins, Users, Settings, Activity, Shield, ToggleLeft, Wallet } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WitnessChainCaseStudy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const informationArchitecture = [
    {
      title: "Home Screen",
      description: "Welcome message and mining controls",
      icon: Zap,
      features: ["Welcome Message", "Start Mining Toggle", "Live Mining Status", "Earned Tokens Counter"]
    },
    {
      title: "Rewards",
      description: "Token earnings and wallet integration",
      icon: Coins,
      features: ["Total Earned", "Claim Rewards", "Wallet Connect", "Web3 Integration"]
    },
    {
      title: "Activity",
      description: "Mining history and progression",
      icon: Activity,
      features: ["Mining History", "Reward Logs", "Level Progression", "Performance Stats"]
    },
    {
      title: "Profile",
      description: "User settings and wallet management",
      icon: Users,
      features: ["Wallet Address", "Settings", "Theme Toggle", "Account Info"]
    },
    {
      title: "Notifications",
      description: "Alerts and security notices",
      icon: Shield,
      features: ["Reward Alerts", "Mining Activity", "Security Notices", "Network Updates"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,255,146,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,255,146,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild className="group">
              <Link href="/projects" className="flex items-center gap-2">
                <motion.div
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowLeft className="w-4 h-4" />
                </motion.div>
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
                Web3 Mining Rewards App
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-[#7CFF92] via-emerald-400 to-[#7CFF92] bg-clip-text text-transparent">
                WitnessChain
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Mine. Play. Earn. – Power up with WitnessChain.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed mt-4"
            >
              A Web3 application designed to reward users with crypto tokens for their participation. 
              Users contribute to the network by toggling a mining switch in the app, which activates 
              passive mining based on their data or activity.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1">
                UI/UX Design
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Web3
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Crypto Mining
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Mobile App
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Figma
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="overview" className="space-y-12">
              {/* Project Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold flex items-center gap-3">
                      <Zap className="w-8 h-8 text-[#7CFF92]" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      WitnessChain is a Web3 application designed to reward users with crypto tokens for their participation. 
                      Users contribute to the network by toggling a mining switch in the app, which activates passive mining 
                      based on their data or activity.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The platform gamifies the mining experience while enabling seamless on-chain reward systems, 
                      making Web3 technology accessible to mainstream users through an intuitive and engaging interface.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* My Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">Designer&apos;s Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      I led the UI/UX design for the WitnessChain mobile app, focusing on simplifying Web3 complexity 
                      into a playful and accessible experience. I created an immersive &quot;start mining&quot; interaction using 
                      glow animations and a toggle switch themed with #7CFF92.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Built interactive Figma prototypes, conducted UX interviews, and collaborated with blockchain 
                      developers to ensure token logic and wallet flows aligned with the user journey. The interface 
                      was intentionally minimal, with sci-fi style typography, neobrutalist blocks, and real-time visuals.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Key Contributions:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full" />
                            Web3 complexity simplification
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full" />
                            Mining interaction design
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full" />
                            Glow animations & effects
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full" />
                            Sci-fi typography system
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Deliverables:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                            Interactive Figma prototypes
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                            UX research insights
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                            Design system components
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                            Blockchain integration specs
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Platform Screenshots */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-center">WitnessChain Mobile Interface</h3>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <img
                      src="/witnesschain.png"
                      alt="WitnessChain Mobile Interface"
                      className="max-w-full h-auto rounded-lg shadow-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="architecture" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold flex items-center gap-3">
                      <Activity className="w-8 h-8 text-[#7CFF92]" />
                      Information Architecture
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {informationArchitecture.map((section, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-lg p-6 border border-[#7CFF92]/20 hover:border-[#7CFF92]/40 transition-colors"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-[#7CFF92]/20 rounded-lg flex items-center justify-center">
                              <section.icon className="w-5 h-5 text-[#7CFF92]" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white">{section.title}</h3>
                              <p className="text-sm text-gray-400">{section.description}</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {section.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                                <div className="w-1.5 h-1.5 bg-[#7CFF92] rounded-full" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="process" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold flex items-center gap-3">
                      <Settings className="w-8 h-8 text-[#7CFF92]" />
                      Design Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-[#7CFF92]">Research & Discovery</h3>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2 flex-shrink-0" />
                            <span>Conducted UX interviews with crypto enthusiasts and newcomers</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2 flex-shrink-0" />
                            <span>Analyzed existing Web3 apps to identify pain points</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2 flex-shrink-0" />
                            <span>Researched blockchain integration patterns</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-[#7CFF92]">Design & Prototyping</h3>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2 flex-shrink-0" />
                            <span>Created sci-fi inspired design system with #7CFF92 accent</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2 flex-shrink-0" />
                            <span>Built interactive Figma prototypes with mining animations</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2 flex-shrink-0" />
                            <span>Designed wallet connection and reward claiming flows</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-[#7CFF92]">Development Collaboration</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2 flex-shrink-0" />
                          <span>Worked closely with blockchain developers on token integration</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2 flex-shrink-0" />
                          <span>Ensured wallet flows aligned with user journey requirements</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#7CFF92] rounded-full mt-2 flex-shrink-0" />
                          <span>Provided detailed design specs for mining toggle implementation</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 