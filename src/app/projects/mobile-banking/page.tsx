"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CreditCard, Shield, Send, ArrowDownToLine, Activity, Lock, Eye, Smartphone, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MobileBankingCaseStudy() {
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

  const infoArchitecture = [
    {
      title: "Account Overview",
      description: "Main dashboard with account balances and quick actions",
      icon: CreditCard,
      features: ["Account balances", "Quick transfers", "Recent activity", "Security status"]
    },
    {
      title: "Transfer & Payments",
      description: "Send money and manage recurring payments",
      icon: Send,
      features: ["Bank transfers", "Bill payments", "Recurring payments", "Payment history"]
    },
    {
      title: "Security Center",
      description: "Advanced security features and fraud protection",
      icon: Shield,
      features: ["Biometric auth", "2FA setup", "Fraud alerts", "Security settings"]
    },
    {
      title: "Transaction History",
      description: "Complete financial records and analytics",
      icon: Activity,
      features: ["Transaction log", "Search & filter", "Export data", "Spending insights"]
    },
    {
      title: "Profile & Settings",
      description: "Account management and preferences",
      icon: Check,
      features: ["Personal info", "Notification settings", "Privacy controls", "Account limits"]
    }
  ]

  const securityFeatures = [
    { feature: "Biometric Authentication", icon: Lock, status: "Enabled" },
    { feature: "Two-Factor Authentication", icon: Shield, status: "Enabled" },
    { feature: "Fraud Detection", icon: Eye, status: "Active" },
    { feature: "Encrypted Transactions", icon: CreditCard, status: "Secure" }
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
        
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
                Mobile Banking App
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Mobile Banking
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Redesigned a mobile banking application with focus on security, accessibility, 
              and user trust. Implemented modern mobile design patterns and micro-interactions.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1">
                Mobile Design
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Fintech
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Security
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Accessibility
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Prototyping
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
                      <Smartphone className="w-8 h-8 text-green-500" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Redesigned a mobile banking application with focus on security, accessibility, 
                      and user trust. Implemented modern mobile design patterns and micro-interactions.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The app prioritizes user security while maintaining an intuitive and accessible 
                      experience, ensuring that financial management is both safe and straightforward 
                      for all users.
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
                    <CardTitle className="text-3xl font-bold">My UI/UX Role</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Led the complete redesign of a mobile banking application, focusing on 
                      security-first design principles while ensuring accessibility and user trust. 
                      Created intuitive financial management experiences for diverse user groups.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Key Responsibilities:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            Security-focused UX design
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            Accessibility compliance
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            Mobile-first interface design
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            User trust building
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Deliverables:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            High-fidelity prototypes
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            Security flow documentation
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            Accessibility audit report
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            User testing insights
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Image Placeholders */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-center">App Screenshots</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Mobile App */}
                  <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="w-3 h-6 bg-gray-800 rounded-sm" />
                        Mobile Banking App
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative mx-auto w-64 h-96 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10" />
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
                        <div className="absolute inset-4 bg-white rounded-2xl flex flex-col">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-t-2xl">
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold">Bank App</h4>
                              <Shield className="w-5 h-5" />
                            </div>
                          </div>
                          {/* Content */}
                          <div className="flex-1 p-4 space-y-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-800">$24,567.89</div>
                              <div className="text-sm text-gray-600">Available Balance</div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-green-100 rounded-lg p-3 text-center">
                                <Send className="w-6 h-6 text-green-500 mx-auto mb-2" />
                                <div className="text-sm font-medium">Send</div>
                              </div>
                              <div className="bg-blue-100 rounded-lg p-3 text-center">
                                <ArrowDownToLine className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm font-medium">Receive</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-3 bg-gray-200 rounded w-full" />
                              <div className="h-3 bg-gray-200 rounded w-3/4" />
                              <div className="h-3 bg-gray-200 rounded w-1/2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Security Features */}
                  <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Security Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {securityFeatures.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50"
                          >
                            <div className="flex items-center gap-3">
                              <feature.icon className="w-5 h-5 text-green-500" />
                              <span className="font-medium">{feature.feature}</span>
                            </div>
                            <Badge variant="secondary" className="text-green-600 bg-green-100">
                              {feature.status}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
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
                    <CardTitle className="text-3xl font-bold">Information Architecture</CardTitle>
                    <CardDescription>
                      The core navigation structure designed for secure banking operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {infoArchitecture.map((section, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-center gap-3">
                              <section.icon className="w-5 h-5 text-green-500" />
                              <div>
                                <div className="font-semibold">{section.title}</div>
                                <div className="text-sm text-muted-foreground font-normal">
                                  {section.description}
                                </div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              {section.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
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
                    <CardTitle className="text-3xl font-bold">Design Process</CardTitle>
                    <CardDescription>
                      The methodology behind creating secure and accessible banking experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          phase: "Research",
                          description: "Understanding user security needs and accessibility requirements",
                          icon: "🔍"
                        },
                        {
                          phase: "Design",
                          description: "Creating secure and accessible mobile interfaces",
                          icon: "📱"
                        },
                        {
                          phase: "Test",
                          description: "Security testing and accessibility validation",
                          icon: "🔒"
                        },
                        {
                          phase: "Launch",
                          description: "Implementation and continuous monitoring",
                          icon: "🚀"
                        }
                      ].map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center p-6 rounded-lg bg-background/50 border border-border/50"
                        >
                          <div className="text-4xl mb-4">{step.icon}</div>
                          <h4 className="font-semibold mb-2">{step.phase}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </motion.div>
                      ))}
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