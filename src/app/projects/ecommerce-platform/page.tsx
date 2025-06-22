"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ShoppingCart, TrendingUp, Users, CreditCard, Package, Check, Search, User, Star, Clock, Grid } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EcommercePlatformCaseStudy() {
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
      title: "Product Discovery",
      description: "Browse and search for products efficiently",
      icon: Search,
      features: ["Product search", "Category browsing", "Filters & sorting", "Wishlist"]
    },
    {
      title: "Product Details",
      description: "Comprehensive product information and reviews",
      icon: Grid,
      features: ["Product images", "Specifications", "Reviews", "Related items"]
    },
    {
      title: "Shopping Cart",
      description: "Manage items and proceed to checkout",
      icon: ShoppingCart,
      features: ["Add/remove items", "Quantity adjustment", "Price calculation", "Save for later"]
    },
    {
      title: "Checkout Process",
      description: "Streamlined payment and delivery setup",
      icon: CreditCard,
      features: ["Address input", "Payment methods", "Order summary", "Confirmation"]
    },
    {
      title: "User Account",
      description: "Personal profile and order management",
      icon: User,
      features: ["Order history", "Profile settings", "Address book", "Preferences"]
    }
  ]

  const ecommerceMetrics = [
    { metric: "Conversion Rate", value: "+23%", icon: TrendingUp, color: "text-green-500" },
    { metric: "Cart Abandonment", value: "-18%", icon: ShoppingCart, color: "text-blue-500" },
    { metric: "User Satisfaction", value: "4.8/5", icon: Star, color: "text-yellow-500" },
    { metric: "Checkout Time", value: "-35%", icon: Clock, color: "text-purple-500" }
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
                E-commerce UX Redesign
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6"
            >
              <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                E-commerce Platform
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Complete user experience redesign for an e-commerce platform, improving 
              conversion rates and user satisfaction through better navigation and checkout flow.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="outline" className="px-3 py-1">
                UX Research
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Conversion
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                User Testing
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                E-commerce
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
                      <ShoppingCart className="w-8 h-8 text-green-500" />
                      Project Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Complete user experience redesign for an e-commerce platform, improving 
                      conversion rates and user satisfaction through better navigation and checkout flow.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The redesign focused on reducing friction in the shopping journey, 
                      optimizing product discovery, and creating a seamless checkout experience 
                      that builds trust and encourages purchases.
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
                      Led comprehensive UX research and redesign efforts, focusing on conversion 
                      optimization and user satisfaction. Conducted extensive user testing and 
                      implemented data-driven design improvements.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Key Responsibilities:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            User research and journey mapping
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            Conversion funnel optimization
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            Checkout flow redesign
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            A/B testing and analytics
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Deliverables:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            User journey maps
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            High-fidelity prototypes
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            Usability test reports
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            Conversion optimization guide
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Conversion Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">Impact & Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                      {ecommerceMetrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center p-6 rounded-lg bg-background/50 border border-border/50"
                        >
                          <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                          <div className="text-2xl font-bold text-foreground mb-2">{metric.value}</div>
                          <div className="text-sm text-muted-foreground">{metric.metric}</div>
                        </motion.div>
                      ))}
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
                <h3 className="text-2xl font-bold text-center">Platform Screenshots</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Product Listing */}
                  <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        Product Discovery
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative w-full h-96 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg border-2 border-gray-300 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10" />
                        {/* Browser Bar */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-200 flex items-center gap-2 px-3">
                          <div className="flex gap-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                          </div>
                          <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-600">
                            ecommerce.com/products
                          </div>
                        </div>
                        {/* Content */}
                        <div className="absolute inset-0 top-8 bg-white">
                          {/* Header */}
                          <div className="bg-gray-50 border-b p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <ShoppingCart className="w-6 h-6 text-green-500" />
                                <span className="font-bold">Shop</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <ShoppingCart className="w-5 h-5 text-gray-600" />
                                <Users className="w-5 h-5 text-gray-600" />
                              </div>
                            </div>
                          </div>
                          {/* Product Grid */}
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="bg-gray-100 rounded-lg p-3">
                                  <div className="h-20 bg-gray-300 rounded mb-2" />
                                  <div className="h-3 bg-gray-300 rounded w-3/4 mb-1" />
                                  <div className="h-3 bg-gray-300 rounded w-1/2" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Checkout Flow */}
                  <Card className="border-0 shadow-lg bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5" />
                        Checkout Process
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { step: "Cart Review", icon: ShoppingCart, status: "Complete" },
                          { step: "Shipping Info", icon: Package, status: "Active" },
                          { step: "Payment", icon: CreditCard, status: "Pending" },
                          { step: "Confirmation", icon: Check, status: "Pending" }
                        ].map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex items-center justify-between p-4 rounded-lg border ${
                              step.status === "Active" 
                                ? "bg-green-50 border-green-200" 
                                : "bg-background/50 border-border/50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <step.icon className="w-5 h-5 text-green-500" />
                              <span className="font-medium">{step.step}</span>
                            </div>
                            <Badge 
                              variant={step.status === "Active" ? "default" : "secondary"}
                              className={step.status === "Active" ? "bg-green-500" : ""}
                            >
                              {step.status}
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
                      The core navigation structure designed for optimal shopping experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {informationArchitecture.map((section, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-center gap-3">
                              <section.icon className="w-5 h-5 text-green-500" />
                              <div>
                                <div className="font-semibold">{section.title}</div>
                                <div className="text-sm text-muted-foreground">{section.description}</div>
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
                      The methodology behind creating conversion-optimized shopping experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          phase: "Research",
                          description: "User research and journey mapping",
                          icon: "🔍"
                        },
                        {
                          phase: "Analyze",
                          description: "Data analysis and pain point identification",
                          icon: "📊"
                        },
                        {
                          phase: "Design",
                          description: "UX redesign and prototyping",
                          icon: "🎨"
                        },
                        {
                          phase: "Test",
                          description: "A/B testing and optimization",
                          icon: "✅"
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