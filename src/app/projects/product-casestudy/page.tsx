"use client"

import React, { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowLeft, Cpu, BarChart3, 
  Truck, Zap, Utensils, ClipboardList, Eye, Hammer, 
  CheckCircle2, ZapOff, Play
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectArchitectureMap } from "@/components/project-architecture-map"

// Product detailed data interface
interface ProductCaseStudy {
  id: string
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  overview: string
  problem: string[]
  solution: string[]
  keyContributions: string[]
  aiWorkflow: string[]
  theme: {
    primary: string
    secondary: string
    gradient: string
    glow: string
    radial: string
  }
  ia: {
    root: {
      label: string
      description: string
    }
    nodes: {
      label: string
      description: string
      features?: string[]
      children?: string[]
    }[]
  }
}

// Full product database mapped from product_casestudy file
const productDatabase: Record<string, ProductCaseStudy> = {
  rms: {
    id: "rms",
    title: "Iris RMS",
    subtitle: "Remote Monitoring System",
    icon: Cpu,
    overview: "RMS is an enterprise-grade remote monitoring platform designed to monitor and manage EV charging infrastructure operations in real time. It delivers critical diagnostics and rapid alerts directly to operators.",
    problem: [
      "No centralized monitoring system for diverse station types.",
      "Delayed fault detection leading to severe system downtime.",
      "Lack of real-time charger operational visibility.",
      "Difficulty managing charger uptime across dispersed geographies.",
      "Complex operational workflows with manual diagnostics.",
      "Poor visibility into charge point health alerts and fault statuses."
    ],
    solution: [
      "Real-time charger monitoring with live status diagnostics.",
      "Live operational dashboards summarizing network-wide telemetry.",
      "Instant fault and alert management with automated notifications.",
      "High visibility charger health metrics and telemetry charts.",
      "Centralized operational control center with remote commands.",
      "Scalable enterprise workflows optimized for support teams."
    ],
    keyContributions: [
      "Enterprise dashboard UI/UX and wireframe design.",
      "Telemetry monitoring flows and custom chart systems.",
      "High-contrast alert and fault management workflow layouts.",
      "End-to-end charger operational visibility controls.",
      "Scalable hierarchical information architecture design.",
      "Real-time data visualization components for operations."
    ],
    aiWorkflow: [
      "Rapidly prototyped multiple complex layout configurations using AI-guided mockups.",
      "Generated detailed interactive flow mockups validating critical operator journeys.",
      "Explored responsive dashboard prototypes under simulated high-density data.",
      "Accelerated UX iteration cycles based on live interaction testing feedback."
    ],
    theme: {
      primary: "#ec008c", // Magenta/Pink from Planet 3 logo
      secondary: "#6366f1", // Indigo
      gradient: "from-[#ec008c] to-[#6366f1]",
      glow: "rgba(236, 0, 140, 0.4)",
      radial: "radial-gradient(circle at 50% 50%, rgba(236, 0, 140, 0.12), transparent 60%)"
    },
    ia: {
      root: {
        label: "RMS Portal",
        description: "Centralized Remote Monitoring Dashboard Entry"
      },
      nodes: [
        {
          label: "Dashboard",
          description: "Real-time metrics, active session counts, and network status summary.",
          features: ["Total Uptime %", "Live Sessions Count", "Active Grid Demand", "Friction Index Tracker"]
        },
        {
          label: "Charger Monitoring",
          description: "Operational status and real-time alerts filterable by site location.",
          features: ["Live Status", "Charger Health", "Faults", "Alerts"],
          children: ["Live Status", "Charger Health", "Faults", "Alerts"]
        },
        {
          label: "Operations",
          description: "Support tools enabling manual overrides and system checks.",
          features: ["Monitoring Logs", "Diagnostics Tool", "Remote Actions"],
          children: ["Monitoring", "Diagnostics", "Remote Actions"]
        },
        {
          label: "Reports",
          description: "Downloadable operational exports showing station utilization and error frequencies.",
          features: ["Uptime Recaps", "Utilization Analysis", "Fault Recurrence Export"]
        },
        {
          label: "Notifications",
          description: "Custom threshold rules triggering SMS, Email, or Slack integrations.",
          features: ["Severity Rules", "Alert Recipient Lists", "Trigger Logic"]
        },
        {
          label: "Settings",
          description: "Account parameters, hardware specifications, and API client keys."
        }
      ]
    }
  },
  "r-one": {
    id: "r-one",
    title: "Iris R-One",
    subtitle: "Asset Management Platform",
    icon: Hammer,
    overview: "R-One is an asset management platform focused on charger lifecycle management, operational maintenance schedules, and robust infrastructure inventory tracking.",
    problem: [
      "Decentralized charger asset tracking leading to duplicate records.",
      "Maintenance workflow inefficiencies with high resolution times.",
      "Limited historical visibility into charger status history.",
      "Poor firmware version tracking and dynamic dispatch tracking.",
      "High operational downtime due to unscheduled maintenance delays."
    ],
    solution: [
      "Centralized charger lifecycle monitoring database.",
      "Comprehensive asset health score tracking and trends.",
      "Automated preventative maintenance scheduling workflows.",
      "Structured firmware management tracking and batch dispatcher.",
      "Interactive operational reporting showing resource deployment.",
      "Real-time infrastructure visibility and field operator layouts."
    ],
    keyContributions: [
      "Design of intuitive asset management layout grids.",
      "Dynamic interactive dashboard structures with key parameters.",
      "Maintenance ticket generation and tracking workflows.",
      "High-density data table layouts with column sorting and filtering.",
      "Detailed operational reporting layouts for enterprise executives.",
      "Multi-level enterprise navigation schemas."
    ],
    aiWorkflow: [
      "Built interactive high-fidelity table structures validating dense layout spacing.",
      "Developed design-to-code components with instant filters for testing.",
      "Simulated workflow triggers for automated ticketing systems.",
      "Iterated rapidly on layout structures to compress information density."
    ],
    theme: {
      primary: "#3b82f6", // Blue
      secondary: "#6366f1", // Indigo
      gradient: "from-[#3b82f6] to-[#6366f1]",
      glow: "rgba(59, 130, 246, 0.4)",
      radial: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.12), transparent 60%)"
    },
    ia: {
      root: {
        label: "R-One Hub",
        description: "Enterprise Asset Management Entrance"
      },
      nodes: [
        {
          label: "Dashboard",
          description: "Summary of asset lifespan stages, active tickets, and deployment stats.",
          features: ["Active Lifespan Ratio", "Maintenance Backlog", "Firmware Drift Index"]
        },
        {
          label: "Assets",
          description: "Granular details of chargers and connector components.",
          features: ["Chargers", "Connectors", "Firmware", "Asset Health"],
          children: ["Chargers", "Connectors", "Firmware", "Asset Health"]
        },
        {
          label: "Maintenance",
          description: "Work order management, engineer scheduling, and ticket resolutions.",
          features: ["Active Work Orders", "Preventative Schedules", "Resolution Logs"]
        },
        {
          label: "Alerts",
          description: "Critical notifications indicating hardware failure or firmware exceptions."
        },
        {
          label: "Logs",
          description: "Audit trail tracking user logins, system adjustments, and asset modifications."
        },
        {
          label: "Reports",
          description: "Exportable spreadsheets detailing asset depreciation and maintenance expenses."
        },
        {
          label: "Settings",
          description: "Profile specifications, database sync preferences, and integration permissions."
        }
      ]
    }
  },
  network: {
    id: "network",
    title: "Iris Network",
    subtitle: "Charge Management System",
    icon: Zap,
    overview: "Network is a Charge Management System (CMS) designed for Charge Point Operators to manage EV charging infrastructure, set dynamic pricing structures, and track sessions.",
    problem: [
      "Real-time charging station visibility was highly fragmented.",
      "Clunky session monitoring and pricing setups.",
      "Rigid charger management workflows that delayed configurations.",
      "Manual and complex user and tariff pricing structures.",
      "Scalability issues under expanding public charging demands.",
      "EV users experienced bad charger discovery and range anxiety."
    ],
    solution: [
      "Designed a highly scalable, real-time CMS platform.",
      "Instant session monitoring with live billing estimation.",
      "Highly responsive operational dashboards for active monitoring.",
      "Custom user management and pricing rules engines.",
      "Flexible pricing setups and transparent payment gateway integrations.",
      "Greatly improved map layouts for user charging discoverability."
    ],
    keyContributions: [
      "Full CMS interface dashboard creation.",
      "Optimized charger connection and session activation flows.",
      "Interactive session tracking charts showing active utilization.",
      "Polished information hierarchy to display multiple rates.",
      "High-performance operational UI layouts for heavy loads.",
      "Seamless and highly responsive portal navigation systems."
    ],
    aiWorkflow: [
      "Used AI components to outline dynamic UPI and Crypto pricing matrices.",
      "Explored complex user discovery workflows on mobile layouts.",
      "Tested visual responsiveness for multi-charger grids dynamically.",
      "Generated prototype assets to illustrate charging curve progressions."
    ],
    theme: {
      primary: "#10b981", // Emerald
      secondary: "#059669", // Green
      gradient: "from-[#10b981] to-[#059669]",
      glow: "rgba(16, 185, 129, 0.4)",
      radial: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.12), transparent 60%)"
    },
    ia: {
      root: {
        label: "Network CMS",
        description: "Charge Management System Entry Point"
      },
      nodes: [
        {
          label: "Dashboard",
          description: "Session load metrics, real-time revenue collection, and network active ratios.",
          features: ["Live Grid Power Draw", "Total Daily Billing", "Station Utilization %"]
        },
        {
          label: "Charging Stations",
          description: "Logical groupings of charging sites, stations, and connector plugs.",
          features: ["Stations Directory", "Charger Hubs", "Connectors", "Availability Status"],
          children: ["Stations", "Chargers", "Connectors", "Availability"]
        },
        {
          label: "Sessions",
          description: "Historical and live logs of active sessions, vehicle states, and energy supplied."
        },
        {
          label: "Users",
          description: "Customer database displaying charging subscription plans, wallet assets, and logs."
        },
        {
          label: "Pricing",
          description: "Set charging tariffs, peak hour rates, and premium membership pricing structures."
        },
        {
          label: "Payments",
          description: "Gateway parameters, payout setups, billing details, and receipt generation."
        },
        {
          label: "Reports",
          description: "Analytics builder summarizing station efficiency, peak demand hours, and payments."
        },
        {
          label: "Settings",
          description: "General CPO configuration, active plugins, webhook URLs, and system security."
        }
      ]
    }
  },
  sense: {
    id: "sense",
    title: "Iris Sense",
    subtitle: "Analytics & Visualization Platform",
    icon: BarChart3,
    overview: "Sense is a data visualization and analytics platform providing CPOs deep operational insights, billing analytics, and grid performance reports via high-density dashboards.",
    problem: [
      "CPOs struggled to analyze massive logs of charging telemetry.",
      "Difficulty identifying charger usage and revenue trends.",
      "Ineffective grid energy monitoring and forecasting metrics.",
      "Lack of quick, actionable business insights from raw data.",
      "Fragmented, rigid reporting platforms with slow exports."
    ],
    solution: [
      "Created highly interactive dashboard components.",
      "Simplified complex telemetry into clean graphs.",
      "Comprehensive system metrics and energy monitoring tools.",
      "Interactive grids analyzing utilization and revenue peaks.",
      "Custom analytics report generator with rapid export."
    ],
    keyContributions: [
      "Interactive data storytelling dashboard layout design.",
      "Fully responsive charts, analytics filters, and parameters.",
      "Polished information visualization grids.",
      "Intuitive multi-step analytics filter configuration flow.",
      "Premium layout systems for heavy analytics reporting.",
      "Scalable analytics database schemas and navigation."
    ],
    aiWorkflow: [
      "Accelerated complex data chart structure prototypes with custom UI logic.",
      "Generated and tested dynamic filtering combinations on massive datasets.",
      "Designed interaction models highlighting outliers and threshold alert states.",
      "Iterated rapidly on card densities for maximum scannability."
    ],
    theme: {
      primary: "#f97316", // Orange
      secondary: "#ef4444", // Red
      gradient: "from-[#f97316] to-[#ef4444]",
      glow: "rgba(249, 115, 22, 0.4)",
      radial: "radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.12), transparent 60%)"
    },
    ia: {
      root: {
        label: "Sense Analytics",
        description: "Analytics & Business Insights Portal"
      },
      nodes: [
        {
          label: "Dashboard",
          description: "Top-level KPI highlights, peak revenue hours, and average session times.",
          features: ["Executive Revenue Card", "Uptime & Efficiency Gauge", "Fault Breakdown Pie"]
        },
        {
          label: "Analytics",
          description: "Deep dive sections mapping user patterns and energy metrics.",
          features: ["Charging Trends", "Revenue Growth", "Energy Usage", "Session Insights"],
          children: ["Charging Trends", "Revenue", "Energy Usage", "Session Insights"]
        },
        {
          label: "Reports",
          description: "Custom report configurations and scheduled email templates."
        },
        {
          label: "Filters",
          description: "Advanced dynamic multi-select filters supporting time range, charger model, and location."
        },
        {
          label: "Export Center",
          description: "Queue for compiling large CSV, XLSX, or PDF report packages."
        },
        {
          label: "Settings",
          description: "API access credentials, scheduled report queues, and alert thresholds."
        }
      ]
    }
  },
  fleet: {
    id: "fleet",
    title: "Iris Fleet",
    subtitle: "EV Fleet Management System",
    icon: Truck,
    overview: "Fleet is an enterprise EV fleet management platform helping logistics companies track vehicle charge, schedule routes around battery ranges, and optimize depot charging tariffs.",
    problem: [
      "No centralized view of fleet vehicle battery levels.",
      "Inefficient dispatcher driver assignment without battery metrics.",
      "Poor route planning causing range anxiety and roadside delays.",
      "Low operational efficiency and fragmented depot logistics.",
      "Extremely high electricity costs due to uncoordinated charging schedules."
    ],
    solution: [
      "Real-time vehicle battery state-of-charge monitoring.",
      "Automated charging session triggers linked to driver schedules.",
      "Driver communication layouts with charging reminders.",
      "Dynamic charging schedules optimized for low-tariff night windows.",
      "Visual operational reports plotting driver efficiency trends.",
      "Aggregated fleet analytics comparing cost per mile profiles."
    ],
    keyContributions: [
      "Design of intuitive fleet dispatcher interfaces.",
      "Interactive map overlays highlighting vehicle charger range.",
      "Depot charging scheduler interfaces.",
      "Driver profile management and routing workflow wireframes.",
      "High-contrast logistics telemetry graphs.",
      "Detailed navigation systems for vehicle fleets."
    ],
    aiWorkflow: [
      "Prototyped highly responsive timeline Gantt charts mapping schedules.",
      "Created functional map layers demonstrating live routing options.",
      "Developed design tokens tailored for low-light operator cabins.",
      "Tested user flows from driver dispatch to charger return."
    ],
    theme: {
      primary: "#429ae7", // Sky Blue from fleet logo
      secondary: "#d34657", // Rose/Red from fleet logo
      gradient: "from-[#429ae7] to-[#d34657]",
      glow: "rgba(66, 154, 231, 0.4)",
      radial: "radial-gradient(circle at 50% 50%, rgba(66, 154, 231, 0.12), transparent 60%)"
    },
    ia: {
      root: {
        label: "Fleet Hub",
        description: "Depot Fleet Control Gateway"
      },
      nodes: [
        {
          label: "Dashboard",
          description: "Summary of active fleet, general battery averages, and depot charging queues.",
          features: ["Depot Queue Status", "Average Vehicle SoC %", "Cost Avoidance Gauge"]
        },
        {
          label: "Vehicles",
          description: "Registry containing battery health records, mileage tracking, and active assignments."
        },
        {
          label: "Drivers",
          description: "Driver dispatch database tracking compliance, routing, and charging patterns."
        },
        {
          label: "Charging Sessions",
          description: "Specific tracking logs indicating depot power draw, charger efficiency, and thermal spikes."
        },
        {
          label: "Schedules",
          description: "Smart charging timeline builder matching charging states to route plans."
        },
        {
          label: "Analytics",
          description: "Energy efficiency scoreboards and total cost of ownership trend analytics."
        },
        {
          label: "Reports",
          description: "Daily depot logs, carbon offset calculations, and operational performance."
        },
        {
          label: "Settings",
          description: "Depot parameters, electricity rate structures, and vehicle limits."
        }
      ]
    }
  },
  energy: {
    id: "energy",
    title: "Iris Energy",
    subtitle: "Energy Management Platform (Aatral)",
    icon: Zap,
    overview: "Energy / Aatral is a grid management platform focusing on grid-level load balancing, peak load reduction, and smart renewable energy distribution to reduce operational costs.",
    problem: [
      "No visibility into sub-station electrical loads.",
      "Grid overload risks during high public EV charging hours.",
      "Lack of smart load shifting mechanisms for localized grids.",
      "Difficulty monitoring peak energy demand limits in real time.",
      "Poor tracking of grid-level green vs carbon-heavy energy usage."
    ],
    solution: [
      "Real-time sub-station load monitoring layouts.",
      "Dynamic load balancing interfaces that scale rate distribution.",
      "Smart load scheduling and peak-shaving automation.",
      "Highly responsive sub-station alerts and notification setups.",
      "Green energy utilization scorecards and metrics.",
      "Detailed grid and station level reports and analytics."
    ],
    keyContributions: [
      "Custom clean energy telemetry dashboard layouts.",
      "Sub-station network schematic design models.",
      "Advanced load balancing rule generators.",
      "Actionable grid load-shedding warning interfaces.",
      "Beautiful green-energy visualization grids.",
      "Modular energy management navigation architectures."
    ],
    aiWorkflow: [
      "Used AI tools to quickly conceptualize dynamic sub-station load flow vectors.",
      "Designed and refined high-performance load threshold grids.",
      "Simulated load alerts triggering grid-level rate limit constraints.",
      "Tested and polished high-contrast dashboard systems for clarity."
    ],
    theme: {
      primary: "#00e673", // Emerald Green from aatral logo
      secondary: "#3ebaf4", // Sky Blue from aatral logo
      gradient: "from-[#00e673] to-[#3ebaf4]",
      glow: "rgba(0, 230, 115, 0.4)",
      radial: "radial-gradient(circle at 50% 50%, rgba(0, 230, 115, 0.12), transparent 60%)"
    },
    ia: {
      root: {
        label: "Energy Portal",
        description: "Grid Energy Management Interface"
      },
      nodes: [
        {
          label: "Dashboard",
          description: "Total load monitoring, battery storage statistics, and dynamic grid thresholds.",
          features: ["Active Grid Burden", "Storage Bank Level", "Green Energy Ratio %"]
        },
        {
          label: "Grid Monitoring",
          description: "Sub-station hierarchies and localized load curves mapped geographically."
        },
        {
          label: "Energy Usage",
          description: "High-density metrics graphing energy demand patterns by site location."
        },
        {
          label: "Load Balancing",
          description: "Rule-based dynamic throttling logic configured based on sub-station alerts."
        },
        {
          label: "Smart Scheduling",
          description: "Automated load shifting schedules mapped against peak tariff pricing hours."
        },
        {
          label: "Reports",
          description: "Grid performance recaps, peak shaving savings, and carbon offset audits."
        },
        {
          label: "Alerts",
          description: "Real-time critical alarms denoting system overload warnings or grid errors."
        },
        {
          label: "Settings",
          description: "Grid tariff structures, active alert profiles, and sub-station limits."
        }
      ]
    }
  },
  feedzaa: {
    id: "feedzaa",
    title: "Feedzaa",
    subtitle: "Food Delivery & Ordering Platform",
    icon: Utensils,
    overview: "Feedzaa is a consumer food ordering and merchant management platform designed to streamline culinary discovery, cart purchases, and merchant cooking workflows.",
    problem: [
      "Clunky food discovery and complex checkout stages.",
      "Ineffective menu search filters causing customer bounce.",
      "Poor delivery status tracking and range uncertainty.",
      "Merchants lacked operational tracking for culinary orders.",
      "Highly fragmented restaurant onboarding systems."
    ],
    solution: [
      "Designed highly simplified consumer ordering flows.",
      "Interactive visual menus with dynamic allergen tags.",
      "Frictionless checkout setups with integrated payment portals.",
      "Real-time driver location overlays and status tickers.",
      "Robust, easy-to-use merchant order dashboard interfaces."
    ],
    keyContributions: [
      "Designed mobile-first consumer ordering layouts.",
      "Interactive high-fidelity checkout cart workflows.",
      "Polished merchant interface dashboard systems.",
      "High-scannability food menu catalog designs.",
      "Live order tracking screen interaction maps.",
      "Complete design system with rich culinary token components."
    ],
    aiWorkflow: [
      "Generated clean layouts validating high-density checkout menus.",
      "Iterated rapidly on card transitions from list views to specific dishes.",
      "Simulated ordering timelines from payment authorization to delivery.",
      "Refined typography contrast for mobile viewport readability."
    ],
    theme: {
      primary: "#ef4444", // Red
      secondary: "#f43f5e", // Rose
      gradient: "from-[#ef4444] to-[#f43f5e]",
      glow: "rgba(239, 68, 68, 0.4)",
      radial: "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.12), transparent 60%)"
    },
    ia: {
      root: {
        label: "Feedzaa App",
        description: "Mobile App Entry Screen"
      },
      nodes: [
        {
          label: "Home",
          description: "Curation grids, trending restaurants, and active discount sliders.",
          features: ["Personalized Recommendations", "Active Promos Slider", "Express Delivery Hub"]
        },
        {
          label: "Restaurants",
          description: "Search indexes filterable by cuisine type, star rating, and distance."
        },
        {
          label: "Menu",
          description: "Detail layout showing dish descriptions, dietary preferences, and modifiers."
        },
        {
          label: "Cart",
          description: "Selected dishes list, delivery price counters, and sub-total tallies."
        },
        {
          label: "Checkout",
          description: "Address selectors, secure payment choices, and promo code checkers."
        },
        {
          label: "Orders",
          description: "List of current and previous consumer food orders with receipts."
        },
        {
          label: "Tracking",
          description: "Live interactive tracking page plotting courier delivery routes."
        },
        {
          label: "Profile",
          description: "Contact parameters, payment settings, address cards, and loyalty tiers."
        }
      ]
    }
  },
  oms: {
    id: "oms",
    title: "Sodexo OMS",
    subtitle: "Order Management System",
    icon: ClipboardList,
    overview: "OMS is an enterprise order management platform designed for Sodexo, enabling managers to track massive retail orders, monitor regional revenues, and coordinate kitchen fulfillment operations.",
    problem: [
      "Highly complex, disjointed kitchen order flows.",
      "Poor tracking visibility of bulk ingredients and dishes.",
      "Delayed updates for fulfillment managers about delivery delays.",
      "Extremely manual billing calculations for institutional clients.",
      "Fragmented, outdated legacy reporting architectures."
    ],
    solution: [
      "Designed a highly centralized, high-density order dashboard.",
      "Structured and easy-to-use tracking logs by kitchen queue.",
      "Real-time visual alarms reporting delivery exceptions.",
      "Automated bulk invoice calculator with parameter overrides.",
      "Actionable reporting tools summarizing production times."
    ],
    keyContributions: [
      "Enterprise management hub interface architecture.",
      "High-density kitchen order queue control layouts.",
      "End-to-end institutional delivery tracking systems.",
      "High-performance invoicing configuration tools.",
      "Executive business performance summaries.",
      "Consistent cross-device design patterns for desktop terminals."
    ],
    aiWorkflow: [
      "Used AI to layout high-density operational grid wireframes.",
      "Tested and refined invoice tracking validation states.",
      "Generated detailed interactive timelines showing order states.",
      "Iterated rapidly on sidebar densities to save workspace real estate."
    ],
    theme: {
      primary: "#14b8a6", // Teal
      secondary: "#0d9488", // Dark Teal
      gradient: "from-[#14b8a6] to-[#0d9488]",
      glow: "rgba(20, 184, 166, 0.4)",
      radial: "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.12), transparent 60%)"
    },
    ia: {
      root: {
        label: "OMS Admin",
        description: "Manager Administration Dashboard Entry"
      },
      nodes: [
        {
          label: "Dashboard",
          description: "Live processing metrics, regional order tallies, and active alerts.",
          features: ["Order Velocity Index", "Kitchen Dispatch Load", "SLA Fulfillment Score"]
        },
        {
          label: "Orders",
          description: "Dynamic tracking of all bulk institutional retail meal flows.",
          features: ["Active Orders Queue", "Completed Database", "Fulfillment Pipeline", "Courier Tracker"],
          children: ["Active Orders", "Completed Orders", "Fulfillment", "Tracking"]
        },
        {
          label: "Reports",
          description: "Automated billing reports, ingredient logs, and labor summaries."
        },
        {
          label: "Notifications",
          description: "Alarms warning operators of delayed dispatches or temperature threshold faults."
        },
        {
          label: "Operations",
          description: "Admin parameter configurations to modify kitchen capacity rates."
        },
        {
          label: "Settings",
          description: "Regional hub mappings, institutional billing profiles, and user accounts."
        }
      ]
    }
  }
}

function IAFlowchart({ activeProduct }: { activeProduct: ProductCaseStudy }) {
  const sections = activeProduct.ia.nodes.map((node) => ({
    title: node.label,
    description: node.description,
    icon: activeProduct.icon,
    features: node.children ?? node.features ?? []
  }))

  return (
    <ProjectArchitectureMap
      rootLabel={activeProduct.ia.root.label}
      rootDescription={activeProduct.ia.root.description}
      sections={sections}
      primaryColor={activeProduct.theme.primary}
      secondaryColor={activeProduct.theme.secondary}
    />
  )
}

// Master Client Component
function CaseStudyHubContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<string>("rms")
  
  // Read active query param or default to 'rms'
  useEffect(() => {
    const productParam = searchParams.get("product")
    if (productParam && productDatabase[productParam]) {
      setActiveTab(productParam)
    } else {
      setActiveTab("rms")
    }
  }, [searchParams])

  const activeProduct = productDatabase[activeTab] || productDatabase.rms

  const handleProductSwitch = (id: string) => {
    router.push(`/projects/product-casestudy?product=${id}`)
    setActiveTab(id)
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-muted font-sans relative pb-20">
      {/* Dynamic Background Glowing Mesh */}
      <div className="absolute top-0 inset-x-0 h-[600px] pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[1200px] h-[500px] rounded-full blur-[160px] opacity-15 transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse at center, ${activeProduct.theme.primary}, ${activeProduct.theme.secondary}, transparent)`
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.2)_80%,var(--background))] z-0" />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-24 relative z-10">
        {/* Top Breadcrumb navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="group text-muted-foreground hover:text-foreground">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects Portfolio
            </Link>
          </Button>
        </motion.div>

        {/* Master Double-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column A: Interactive Product Switcher (Sticky Sidebar) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 space-y-4 lg:sticky lg:top-24 z-20"
          >
            <div className="p-1 rounded-xl bg-card/45 border border-border/50 backdrop-blur-md">
              <div className="p-3 mb-2 border-b border-border/40">
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Case Studies Suite</span>
                <h3 className="font-extrabold text-foreground mt-0.5 text-base">Select Product</h3>
              </div>
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-1.5 p-1 no-scrollbar">
                {Object.values(productDatabase).map((prod) => {
                  const isActive = prod.id === activeProduct.id
                  const TabIcon = prod.icon

                  return (
                    <button
                      key={prod.id}
                      onClick={() => handleProductSwitch(prod.id)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-300 text-sm whitespace-nowrap lg:whitespace-normal w-auto lg:w-full shrink-0 relative ${
                        isActive 
                          ? "text-foreground font-bold" 
                          : "text-muted-foreground hover:text-foreground/80 hover:bg-muted/30"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-nav-pill"
                          className="absolute inset-0 rounded-lg bg-muted/60 border border-border/70 -z-10"
                          style={{
                            boxShadow: `0 0 10px ${activeProduct.theme.glow}`
                          }}
                        />
                      )}
                      
                      <div 
                        className="p-1.5 rounded border border-border flex items-center justify-center"
                        style={{
                          backgroundColor: isActive ? `${prod.theme.primary}15` : "rgba(255,255,255,0.02)",
                          borderColor: isActive ? `${prod.theme.primary}45` : "rgba(255,255,255,0.05)"
                        }}
                      >
                        <TabIcon 
                          className="w-4 h-4" 
                          style={{ color: isActive ? prod.theme.primary : "rgba(255,255,255,0.4)" }} 
                        />
                      </div>
                      
                      <div className="hidden lg:block">
                        <span className="block text-xs font-semibold leading-tight">{prod.title}</span>
                        <span className="block text-[10px] text-muted-foreground/75 leading-none mt-0.5">{prod.subtitle}</span>
                      </div>
                      <span className="block lg:hidden text-xs font-semibold">{prod.title}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Column B: Primary Showcase Content Board */}
          <div className="lg:col-span-9 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Hero Header Presentation */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary" className="px-3 py-1 font-mono text-[10px]" style={{ backgroundColor: `${activeProduct.theme.primary}12`, borderColor: `${activeProduct.theme.primary}30`, color: activeProduct.theme.primary }}>
                      IRIS PLATFORM SYSTEM
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1 text-[10px] font-mono border-border">
                      CASE STUDY #{activeProduct.id.toUpperCase()}
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none font-space-grotesk">
                    <span className={`bg-gradient-to-r ${activeProduct.theme.gradient} bg-clip-text text-transparent`}>
                      {activeProduct.title}
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-4xl leading-relaxed">
                    {activeProduct.overview}
                  </p>
                </div>

                {/* Sub-tabs system grouping details */}
                <Tabs defaultValue="overview" className="w-full space-y-6">
                  <div className="flex border-b border-border/40 pb-px">
                    <TabsList className="bg-card/40 border border-border/50 p-1 grid grid-cols-3 max-w-md w-full">
                      <TabsTrigger value="overview" className="text-xs font-bold">Overview & Friction</TabsTrigger>
                      <TabsTrigger value="ia" className="text-xs font-bold">UX Architecture</TabsTrigger>
                      <TabsTrigger value="workflow" className="text-xs font-bold">Contributions & AI Synergy</TabsTrigger>
                    </TabsList>
                  </div>

                  {/* Tab content 1: Problem and Solution */}
                  <TabsContent value="overview" className="space-y-8 mt-0 outline-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Operational Friction Card */}
                      <Card className="border border-border/50 bg-card/25 backdrop-blur-sm relative overflow-hidden group hover:border-red-500/25 transition-all duration-300">
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20" />
                        <CardContent className="p-6 md:p-8 space-y-6">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center shrink-0">
                              <ZapOff className="w-5 h-5 animate-pulse" />
                            </div>
                            <div>
                              <h3 className="font-extrabold text-foreground text-lg tracking-tight">Operational Friction</h3>
                              <p className="text-xs text-muted-foreground">Critical problems operators & users faced</p>
                            </div>
                          </div>
                          <ul className="space-y-3.5">
                            {activeProduct.problem.map((prob, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                <span className="text-sm text-muted-foreground/90 leading-relaxed font-normal">{prob}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Operational Solution Card */}
                      <Card className="border border-border/50 bg-card/25 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/25 transition-all duration-300">
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20" />
                        <CardContent className="p-6 md:p-8 space-y-6">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="font-extrabold text-foreground text-lg tracking-tight">Scalable Resolutions</h3>
                              <p className="text-xs text-muted-foreground">Design mechanisms crafted to solve friction</p>
                            </div>
                          </div>
                          <ul className="space-y-3.5">
                            {activeProduct.solution.map((sol, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span className="text-sm text-muted-foreground/90 leading-relaxed font-normal">{sol}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Tab content 2: Information architecture tree */}
                  <TabsContent value="ia" className="space-y-6 mt-0 outline-none">
                    <div className="space-y-3">
                      <h3 className="font-extrabold text-foreground text-2xl tracking-tight">UI/UX Information Architecture</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                        A top-down design map showing the product entry point, primary screen groups, user goals, and key UX touchpoints.
                      </p>
                    </div>
                    
                    <IAFlowchart activeProduct={activeProduct} />
                  </TabsContent>

                  {/* Tab content 3: Workflow timeline and Contributions */}
                  <TabsContent value="workflow" className="space-y-8 mt-0 outline-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Left: Contributions grid */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Eye className="w-5 h-5 text-muted-foreground" style={{ color: activeProduct.theme.primary }} />
                          <h3 className="font-bold text-foreground text-xl tracking-tight">Key Contributions</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          {activeProduct.keyContributions.map((cont, cIdx) => (
                            <div 
                              key={cIdx} 
                              className="p-3.5 rounded-lg border border-border/50 bg-card/20 hover:border-border hover:bg-card/45 transition-colors flex items-center gap-3 group"
                            >
                              <div className="w-1.5 h-1.5 rounded-full shrink-0 group-hover:scale-125 transition-transform" style={{ backgroundColor: activeProduct.theme.primary }} />
                              <span className="text-sm text-foreground/80 font-normal leading-relaxed">{cont}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: AI workflow timeline */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Play className="w-4 h-4 text-muted-foreground" style={{ color: activeProduct.theme.secondary }} />
                          <h3 className="font-bold text-foreground text-xl tracking-tight">AI-Assisted Workflow</h3>
                        </div>
                        
                        <div className="relative pl-6 border-l border-border/50 space-y-6">
                          {activeProduct.aiWorkflow.map((flow, fIdx) => (
                            <div key={fIdx} className="relative group">
                              {/* Glowing Timeline Marker */}
                              <div 
                                className="absolute -left-[30px] top-1 w-3 h-3 rounded-full border border-background transition-transform duration-300 group-hover:scale-125 bg-muted"
                                style={{
                                  borderColor: activeProduct.theme.primary,
                                  boxShadow: `0 0 8px ${activeProduct.theme.glow}`
                                }}
                              />
                              <div>
                                <span className="block text-xs font-semibold text-muted-foreground uppercase font-mono tracking-wider">Phase 0{fIdx + 1}</span>
                                <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed font-normal">
                                  {flow}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductCaseStudyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Initializing Suite...</span>
        </div>
      </div>
    }>
      <CaseStudyHubContent />
    </Suspense>
  )
}
