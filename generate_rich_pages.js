const fs = require('fs');
const path = require('path');

const projectsDir = process.env.OUT_DIR || path.join(__dirname, 'src/app/projects');

const projectsData = {
  "feedzaa": {
    logoLight: "/logos/Feedzaa.svg",
    logoDark: "/logos/Feedzaa.svg",
    safeName: "Feedzaa",
    displayTitle: "Feedzaa",
    color: "#DB3D1A",
    logoClasses: "max-h-14 sm:max-h-16 lg:max-h-20 w-auto max-w-[200px] sm:max-w-[260px] lg:max-w-[300px]",
    timeline: "3 Months (Spring 2025)",
    roleName: "Product Designer",
    platform: "Mobile Web & Kitchen App",
    techStack: "React Native, Expo, Tailwind CSS, Stripe API",
    tagline: "Helping home chefs spend 60% less time managing orders, and more time crafting authentic culinary experiences.",
    overview1: "Feedzaa helps home chefs run their entire food commerce operation without juggling multiple apps. Previously, chefs relied on disconnected tools like WhatsApp, spreadsheets, and standalone payment apps.",
    overview2: "This project was designed as a unified commerce system connecting customer ordering with direct kitchen execution and automated local rider dispatching.",
    stats: [
      { metric: "60%", label: "Faster Order Prep Time", desc: "Consolidated WhatsApp orders into a single live kitchen dashboard, reducing errors." },
      { metric: "42%", label: "Reduced Checkout Friction", desc: "Simplified customer payments through integrated one click UPI checkouts." },
      { metric: "3x", label: "Increase in Weekly Orders", desc: "Automated recurring orders let customers subscribe to their favorite chefs easily." }
    ],
    challengeTitle: "The Chaos of Backyard Kitchen Operations",
    challengeDesc: "Home chefs are talented cooks but poor logistical coordinators. Managing active customer chats, menu planning, payment verification, and courier handoffs broke their day to day culinary focus.",
    breakdowns: [
      { num: "01 / Manual Order Trapping", desc: "WhatsApp orders were manually transcribed to paper or spreadsheets, causing delayed orders during rush hours." },
      { num: "02 / Reconciling Bank Payments", desc: "Chefs had to stop cooking to manually check bank apps for incoming transfers, causing delays and food spoilage." },
      { num: "03 / Delivery Rider Disconnect", desc: "No unified delivery integration meant chefs spent hours call triage coordinating local couriers." }
    ],
    roleSubtitle: "Two Roles, One Local Food Marketplace",
    roleDesc: "We designed the Feedzaa marketplace around two distinct user groups who participate in the same local food network but operate under opposite time constraints.",
    role1Name: "buyer",
    role1Label: "The Hungry Customer",
    role1Archetype: "Discovery & Instant Checkout",
    role1Desc: "The Buyer wants to discover local home chefs and order food instantly without dealing with messy group chats or unverified links. The design optimizes for absolute checkout speed:",
    role1Items: [
      "Replaces confusing text broadcast menus with a visually stunning, image first local chef feed.",
      "Displays active chef kitchen status (e.g. 'Cooking Now', 'Pre order for dinner').",
      "Streamlines order creation into a sliding double confirmation checkout drawer."
    ],
    role1ScreenTitle: "🍕 Discover Fresh Local Chefs",
    role1ScreenFilter: "Filter: Near Me • Veg Only • Active Kitchen",
    role1ScreenItems: [
      { name: "🍝 Maria's Italian Kitchen", slot: "Status: Cooking Now • 1.2 miles", rate: "Rs. 180 / plate", info: "8 portions left" },
      { name: "🥟 The Himalayan Dumpling", slot: "Status: Pre order for Dinner", rate: "Rs. 120 / plate", info: "20 portions left" }
    ],
    role1ScreenCta: "Swipe to Place Order [══►]",
    role2Name: "seller",
    role2Label: "The Home Chef",
    role2Archetype: "Fulfillment & Yield Focus",
    role2Desc: "The Chef wants to track incoming orders, schedule menus, and manage delivery riders with zero technical overhead. The design optimizes for cognitive simplicity during busy kitchen hours:",
    role2Items: [
      "Presents a dense, scannable kitchen queue (New, Preparing, Ready, Out) to prevent order mix ups.",
      "Integrates an automated local rider dispatch engine that triggers when food state is marked 'Ready'.",
      "Features real time earnings analytics showing today's margins and portion sales."
    ],
    role2ScreenTitle: "👩‍🍳 Kitchen Control Center",
    role2ScreenFilter: "Session Status: Kitchen Active",
    role2ScreenItems: [
      { name: "Order #1043 - Veg Lasagna", slot: "State: Preparing • Time: 12 min", rate: "Rider: Assigned", info: "Prep now" },
      { name: "Order #1042 - Garlic Bread", slot: "State: Ready • Time: 2 min", rate: "Rider: Arrived", info: "Fulfillment pending" }
    ],
    role2ScreenCta: "Mark Order Ready (↑)",
    designEvolutionDesc: "To ensure Feedzaa could scale to non tech savvy home chefs, the interface went through extensive gray box user testing, followed by structural Figma design token mapping.",
    wireframeDesc: "Decoupled the kitchen dashboard into a cardless, high density order tracking view. Gray box prototyping identified that complex nested settings confused chefs during busy hours, prompting us to elevate status buttons to main workspace.",
    designSystemDesc: "Designed high contrast, scalable Figma layout variables. Mapped status tokens directly from design to CSS variables, enabling rapid onboarding theme transitions.",
    designMove1Title: "Unified Kitchen Dashboard",
    designMove1Sub: "Eliminating spreadsheeting",
    designMove1Desc: "We consolidated WhatsApp chats, spreadsheets, and bank alerts into a single, scannable Kanban style kitchen control center. Order status updates trigger automated user push notifications and rider dispatch alerts.",
    designMove1GraphTitle: "📊 Delivery Time Distribution",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#DB3E19] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 25 Q 15 5, 30 10 T 60 20 T 90 5 T 100 25" />
                    <circle cx="30" cy="10" r="3" className="fill-[#DB3E19] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Fulfillment Curve",
    designMove2Title: "Frictionless Checkout",
    designMove2Sub: "Replacing fragmented transfers",
    designMove2Desc: "Designed a secure checkout sheet that automatically verifies bank deposits via instant webhooks. Customers get a verified order confirmation badge within seconds, without manual chef verification.",
    designMove3Title: "Conversational AI Helper",
    designMove3Sub: "Assisting menu planning",
    designMove3Desc: "Integrated a conversational AI bot directly inside the chef dashboard to assist with daily menu pricing. Chefs can ask 'How much did I earn today?' and get a breakdown of top-selling dishes and dynamic margins.",
    designMove3GraphTitle: "📈 Weekly Revenue Trend",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#DB3E19] rounded-t-sm" style={{ height: "45%" }} />
                  <div className="w-8 bg-[#E55734] rounded-t-sm" style={{ height: "70%" }} />
                  <div className="w-8 bg-[#F07A5A] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "35%" }} />
                </div>`,
    learningQuote: "This project taught me that unifying tools isn't enough; you must unify how people think and talk about their business.",
    learningDesc: "Home chefs didn't think in terms of 'inventory APIs' or 'payment corridors'. They thought in terms of 'plates prepared' and 'getting paid'. Aligning our design language with their mental models was the single biggest driver of adoption.",
    checkpoints: [
      { title: "Speaks the user's language", desc: "Renamed complex payment terms to everyday home cooking metaphors." },
      { title: "Inclusive UX bridges gaps", desc: "Designed simplified touch targets for chefs who manage screens while cooking." }
    ]
  },
  "r-one-ams": {
    logoLight: "/logos/r-one.svg",
    logoDark: "/logos/r-one.svg",
    safeName: "RoneAms",
    displayTitle: "R One",
    color: "#F76258",
    logoClasses: "max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px]",
    timeline: "4 Months (Winter 2025)",
    roleName: "Lead Product Designer",
    platform: "Web Console & Field Mobile",
    techStack: "React, Next.js, Framer Motion, TailWind, Expo",
    tagline: "End to end EV charger lifecycle platform connecting central operations and field technicians into one cohesive system.",
    overview1: "EV charging reliability is an operations problem defined by installation quality, proactive maintenance, and field resolution speed.",
    overview2: "Iris R One was designed as a unified lifecycle management platform connecting central web operations and mobile field technicians into a cohesive, real time ecosystem.",
    stats: [
      { metric: "35%", label: "Reduced Repeat Visits", desc: "Improved diagnostic context for field teams significantly decreased revisits and lowered operational costs." },
      { metric: "2x", label: "Faster Triage & Resolution", desc: "Earlier intervention protocols and predictive R score models reduced system downtime windows." },
      { metric: "100%", label: "Lifecycle Standardization", desc: "Enforced guided checklists with audit evidence to standardize installation quality and reduce rework." }
    ],
    challengeTitle: "The Friction of Fragmented Fleet Operations",
    challengeDesc: "As EV networks scale, each charger becomes a live asset with unique failure patterns. The primary failure mode was the lack of a single operating model to connect monitoring, decision making, and field execution.",
    breakdowns: [
      { num: "01 / Disconnected Operational Truth", desc: "Critical health signals, maintenance history, and inventory ledgers existed in disparate, fragmented systems." },
      { num: "02 / Reactive Maintenance Cycles", desc: "Faults were handled entirely after failure, which extended downtime and reduced network reliability." },
      { num: "03 / Planning & Execution Gaps", desc: "Technicians arrived without diagnostic context, leading to extended fixes and repeated site visits." }
    ],
    roleSubtitle: "Two Teams, One Unified Operating Model",
    roleDesc: "The platform establishes a shared operational state across two user groups working under different constraints. Assets, alerts, and work orders map back to a single lifecycle timeline.",
    role1Name: "buyer",
    role1Label: "Central Ops Planner (Web)",
    role1Archetype: "Optimizing Decision Speed",
    role1Desc: "The web experience accelerates triage and coordination. It reduces decision friction, allowing planners to assign work based on real capacity and risk:",
    role1Items: [
      "Structures workflows around a detect, prioritize, assign, and track operational loop.",
      "Calculates predictive R scores to rank operational risk and assign field capacity.",
      "Provides a ranked view of critical alerts to prevent failures before downtime occurs."
    ],
    role1ScreenTitle: "⚡ Central Ops Command Dashboard",
    role1ScreenFilter: "Filter: High Priority • Proximity • Active",
    role1ScreenItems: [
      { name: "⚠️ Priority Alert: Generator 4", slot: "Status: Critical Temp • Zone B", rate: "Action: Acknowledge", info: "Impact: High" },
      { name: "📋 Project Setup: Site Alpha", slot: "Status: Draft Saved • 80% Complete", rate: "Action: Resume Setup", info: "Due: Tomorrow" }
    ],
    role1ScreenCta: "Review Operations Map",
    role2Name: "seller",
    role2Label: "Field Technician (Mobile)",
    role2Archetype: "Optimizing Execution Quality",
    role2Desc: "The mobile experience ensures execution quality under time pressure. It lowers cognitive load on site and standardizes execution across all technicians:",
    role2Items: [
      "Delivers guided execution pathways with clear task intent and asset history.",
      "Integrates fast evidence capture and mandatory audit checklists for validated closure.",
      "Standardizes installation workflows to reduce downstream chaos and repeat visits."
    ],
    role2ScreenTitle: "📱 Tech Mobile Execution App",
    role2ScreenFilter: "Session Status: On Site Verified",
    role2ScreenItems: [
      { name: "Workpack #431 - Repl Fan", slot: "Asset ID: CHG-2321 • Slot: A2", rate: "Action: Diagnostic Run", info: "Evid: Photo req" },
      { name: "Workpack #430 - KYC Inspect", slot: "Asset ID: CHG-2319 • Slot: C1", rate: "Action: Grounding Test", info: "Evid: Signed form" }
    ],
    role2ScreenCta: "Complete Checklist (↑)",
    designEvolutionDesc: "To bridge the gap between heavy enterprise data and fast field execution, we established a shared operational model so both platforms reference the same lifecycle timeline.",
    wireframeDesc: "Laid out dense web dashboards and mobile task cards. Usability testing revealed that designing for early stage products requires balancing optimism with credibility during critical decision moments.",
    designSystemDesc: "Created a unified visual language with Figma tokens in strict accordance with WCAG (W2AG) European Accessibility Standards. We ensured that contrast ratios, status colors, and interactive elements felt identical across both the high density web app and the high contrast mobile app.",
    designMove1Title: "Predictive Maintenance & R Score (Web)",
    designMove1Sub: "Reducing cognitive load before commitment",
    designMove1Desc: "Implemented a unified health layer using R score to combine telemetry and operational signals into an actionable metric, enabling ops teams to allocate field capacity before failures occur.",
    designMove1GraphTitle: "📊 Alert Response Time",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#F76258] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 10 Q 30 25, 50 5 T 90 20 T 100 10" />
                    <circle cx="50" cy="5" r="3" className="fill-[#F76258] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Resolution Curve",
    designMove2Title: "Guided Field Execution (Mobile)",
    designMove2Sub: "Reducing hesitation through predictable pathways",
    designMove2Desc: "Designed the mobile app as a guided execution tool providing clear task intent, asset history, and fast evidence capture to standardize execution quality and improve first time fix rates.",
    designMove3Title: "Lifecycle Standardization (Unified)",
    designMove3Sub: "Designing for evaluation, not just browsing",
    designMove3Desc: "Standardized installation workflows into explicit checklists with audit evidence. This created a shared operational truth where both platforms stay synchronized in real time.",
    designMove3GraphTitle: "📈 Field Data Accuracy",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#F76258] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#FA8A82] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-[#FCA59E] rounded-t-sm" style={{ height: "95%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "45%" }} />
                </div>`,
    learningQuote: "Operational UX is Systems UX: coherence comes from shared objects and states, not just screens.",
    learningDesc: "This project reinforced that adoption is a confidence problem. Users need clearer signals at the exact moments of commitment to execute effectively across distributed environments.",
    checkpoints: [
      { title: "Explainability Drives Action", desc: "Predictive systems only work when users intuitively understand the actionable reasoning behind the data." },
      { title: "European Accessibility Compliance", desc: "Designed according to stringent WCAG European standards (W2AG), guaranteeing high contrast and readability for field workers in harsh outdoor environments." },
      { title: "Design for Decision Moments", desc: "Trust cues must appear exactly where critical commitment and dispatch decisions happen." }
    ]
  },
  "witnesschain": {
    logoLight: "/logos/witnesschain.svg",
    logoDark: "/logos/witnesschain.svg",
    safeName: "Witnesschain",
    displayTitle: "Witnesschain",
    color: "#7CFF92",
    timeline: "3 Months (Fall 2025)",
    roleName: "Product Designer & IA Researcher",
    platform: "DePIN Node Console & Mobile",
    techStack: "React, TypeScript, Web3, tailwind, Node.js",
    tagline: "Securing decentralized physical infrastructure networks (DePIN) through cryptographic verification tools.",
    overview1: "Decentralized networks rely on operators proving physical resource allocation (e.g. location, bandwidth). Current verification methods are opaque and complex, causing operator churn.",
    overview2: "Witnesschain simplifies DePIN verification, packaging cryptographic location proofs and node telemetry into an intuitive, high performance monitoring dashboard.",
    stats: [
      { metric: "99.8%", label: "Proof Success Rate", desc: "Automated cryptographic handshakes simplified operator confirmation." },
      { metric: "35%", label: "Setup Friction Reduction", desc: "Bypassed complex CLI script configurations with a single click install." },
      { metric: "4x", label: "Active Operator Count", desc: "Clean visual feedback prompted rural grid operators to maintain active nodes." }
    ],
    challengeTitle: "The Opaque World of Cryptographic Validation",
    challengeDesc: "Node operators keep DePIN networks alive, but current tools offer no visual clarity. Running scripts, checking epoch syncs, and diagnosing packet drops felt like operating blindfolded.",
    breakdowns: [
      { num: "01 / High Scripting Barriers", desc: "Operators were required to execute complex terminal CLI commands, causing huge setup drop offs." },
      { num: "02 / Zero Fault Visualization", desc: "When a node went offline, operators received no clear telemetry, leading to long outages." },
      { num: "03 / Complex Epoch Tracking", desc: "Checking whether location proof claims were accepted required manual transaction lookup." }
    ],
    roleSubtitle: "Two Roles, One Infrastructure Layer",
    roleDesc: "Witnesschain serves both institutional validators auditing global physical nodes, and backyard operators running micro nodes.",
    role1Name: "buyer",
    role1Label: "The Node Operator",
    role1Archetype: "Telemetry & Status Focus",
    role1Desc: "The Operator wants to ensure their hardware node stays online and records valid proof chains. The design optimizes for immediate visual feedback:",
    role1Items: [
      "Replaces dry CLI scripts with a dashboard showing CPU, RAM, and proof status.",
      "Integrates dynamic state indicators (Online, Synced, Verification Pending).",
      "Features a simple earnings dashboard to track daily validation yields."
    ],
    role1ScreenTitle: "🖥️ Operator Verification Dashboard",
    role1ScreenFilter: "Filter: Active Node • Delhi Area • Epoch 43",
    role1ScreenItems: [
      { name: "🛡️ Node Witness A1", slot: "Status: Validation Synced • Noida", rate: "CPU: 42% • RAM: 4.2GB", info: "Uptime: 99.8%" },
      { name: "🛡️ Node Witness A2", slot: "Status: Epoch Proof Pending • Gurugram", rate: "CPU: 88% • RAM: 7.9GB", info: "Uptime: 94.2%" }
    ],
    role1ScreenCta: "Claim Verification Payout",
    role2Name: "seller",
    role2Label: "The Auditor",
    role2Archetype: "Network Auditing Focus",
    role2Desc: "The Auditor (often a protocol developer or compliance officer) inspects network integrity. The interface simplifies trace data into interactive spatial grids:",
    role2Items: [
      "Aggregates regional proof of location logs into a single spatial map layer.",
      "Visualizes network consensus states through clean color indicators.",
      "Enables deep dive inspections into cryptographic validation packets."
    ],
    role2ScreenTitle: "📊 Protocol Audit Dashboard",
    role2ScreenFilter: "Session Status: Grid Synced",
    role2ScreenItems: [
      { name: "Epoch #4321 - Location Proofs", slot: "State: Consensus Formed • 120 Nodes", rate: "Claims: 1,024 Verified", info: "Audit status: Passed" },
      { name: "Epoch #4320 - Bandwidth Proofs", slot: "State: Consensus Failed • 4 Nodes Alert", rate: "Claims: 980 Verified", info: "Audit status: Warned" }
    ],
    role2ScreenCta: "Audit Selected Epoch (↑)",
    designEvolutionDesc: "To bring Witnesschain to non technical operators, we mapped structural DePIN entities into highly intuitive visual components.",
    wireframeDesc: "Laid out the core telemetry board with cardless layouts. Grey box testing proved that nested diagnostic menus confused hobbyist operators, prompting us to integrate direct push logs.",
    designSystemDesc: "Created color coded Figma design variables representing DePIN status levels. Kept spacing variables strict to avoid cluttering rich telemetry views.",
    designMove1Title: "Proof of Location Dashboard",
    designMove1Sub: "Visualizing spatial validation",
    designMove1Desc: "We replaced terminal logs with a clean spatial dashboard. Operators can see when their physical location claim is being queried, validated, and signed by surrounding witness nodes.",
    designMove1GraphTitle: "📊 Node Validation Frequency",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#A855F7] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 20 Q 20 5, 45 25 T 80 15 T 100 5" />
                    <circle cx="45" cy="25" r="3" className="fill-[#A855F7] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Validation Curve",
    designMove2Title: "One Click Installer console",
    designMove2Sub: "Replacing shell scripting",
    designMove2Desc: "Designed an interactive installer widget that replaces complex CLI command execution. Users tap a single button to pull local Docker images and deploy their node validator.",
    designMove3Title: "Conversational Triage AI",
    designMove3Sub: "Assisting node diagnostics",
    designMove3Desc: "Integrated an assistive chat module inside the operator dashboard. When a node experiences a drop, the assistant analyzes local logs and suggest exact command actions (e.g. 'Reset Port 8080').",
    designMove3GraphTitle: "📈 Validator Rewards Growth",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#A855F7] rounded-t-sm" style={{ height: "40%" }} />
                  <div className="w-8 bg-[#B865F7] rounded-t-sm" style={{ height: "60%" }} />
                  <div className="w-8 bg-[#C875F7] rounded-t-sm" style={{ height: "80%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "25%" }} />
                </div>`,
    learningQuote: "Security is only secure if the humans executing the protocol understand what they are confirming.",
    learningDesc: "Cryptographic validators are highly complex, but the humans keeping them online require absolute clarity. High fidelity visual status feedback turned a highly abstract task into a clear, daily habit.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated technical cryptographic hashes into clear spatial indicators." },
      { title: "Design for decision moments", desc: "Grouped diagnostic logs directly next to active rewards metrics." }
    ]
  },
  "iris-sense": {
    logoLight: "/logos/sense.svg",
    logoDark: "/logos/sense.svg",
    safeName: "IrisSense",
    displayTitle: "Iris Sense",
    color: "#F7CF58",
    logoClasses: "max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px]",
    timeline: "3 Months (Summer 2025)",
    roleName: "Product Designer",
    platform: "IoT Portal & Tablet Inspector",
    techStack: "React, Vite, CSS, MQTT Telemetry, Canvas",
    tagline: "Industrial IoT monitoring console translating dense ambient sensor readings into active site operations.",
    overview1: "Industrial facilities operate hundreds of environmental sensors (temperature, pressure, leak detection). Planners are overwhelmed by constant noise and false alarms, causing delayed emergency responses.",
    overview2: "Iris Sense organizes complex spatial data into a high fidelity visual dashboard. Planners can triage incidents and verify hardware alerts immediately on an interactive floor map.",
    stats: [
      { metric: "50%", label: "Faster Emergency Triage", desc: "Floor plan integration enabled operators to instantly isolate alarm locations." },
      { metric: "35%", label: "Fewer Alarm False Positives", desc: "Implemented ambient threshold sliders to filter background noise." },
      { metric: "99.9%", label: "MQTT Socket Sync", desc: "Telemetry events streamed directly with sub second canvas rendering." }
    ],
    challengeTitle: "The Danger of Industrial Alarm Fatigue",
    challengeDesc: "When a critical pressure valve alerts, every second counts. However, because ambient sensor alarms were presented in dry spreadsheets, technicians spent critical minutes searching for the physical hardware location.",
    breakdowns: [
      { num: "01 / Zero Spatial Reference", desc: "Alarms listed room numbers but lacked spatial routing maps, forcing manual navigation during crises." },
      { num: "02 / Noisy Threshold Caps", desc: "Static alarm values triggered alarms for harmless ambient humidity shifts, driving alarm fatigue." },
      { num: "03 / Fragmented Hardware Logs", desc: "Historical calibration data lived in distinct cabinets, hiding wear and tear trends." }
    ],
    roleSubtitle: "Unified Operational Control",
    roleDesc: "We designed Iris Sense to serve central dispatchers and planners, providing a single source of truth for monitoring multiple multi story warehouses and floor plans.",
    role1Name: "operator",
    role1Label: "Control Room Operator",
    role1Archetype: "High Density Spatial Triage",
    role1Desc: "The Operator monitors ambient safety levels across hundreds of rooms. The design optimizes for fast hazard isolation:",
    role1Items: [
      "Presents an interactive vector floor plan showing active sensor hotspots.",
      "Aggregates ambient humidity, pressure, and telemetry metrics into clean card modules.",
      "Triggers high visibility red flashing warning sheets when levels breach safe caps."
    ],
    role1ScreenTitle: "🏭 Spatial Control Console",
    role1ScreenFilter: "Filter: High Temp • Room 204 • Warehouse North",
    role1ScreenItems: [
      { name: "🔥 Valve Sensor S-12", slot: "Status: High Pressure • Delhi Wing", rate: "Level: 8.5 bar • 82°C", info: "Action: Auto Purge Trigger" },
      { name: "💧 Ambient Humidity H-04", slot: "Status: Normal • Noida Wing", rate: "Level: 45% • 22°C", info: "Action: None Required" }
    ],
    role1ScreenCta: "Initiate Emergency Pressure Purge",
    designEvolutionDesc: "To ensure safety planners could coordinate crises, the spatial UI underwent multiple gray box feedback sessions followed by rigorous design token mapping.",
    wireframeDesc: "Laid out floor plans into vector grid paths. Grey box testing revealed that overlay panels blocked map paths, prompting us to implement slide out sidebar drawers.",
    designSystemDesc: "Created Figma variables maps for hazard states (Alert, Critical, Safe). Mapped variables directly to class layouts, keeping UI themes highly responsive.",
    designMove1Title: "Spatial Hotspot Mapping",
    designMove1Sub: "Contextualizing industrial alerts",
    designMove1Desc: "We built an interactive, lightweight vector map engine. When an MQTT alarm triggers, the floor plan focuses and highlights the exact room with zero lag.",
    designMove1GraphTitle: "📊 Ambient Temp Peak Trends",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#f59e0b] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 20 Q 25 5, 50 15 T 75 5 T 100 20" />
                    <circle cx="50" cy="15" r="3" className="fill-[#f59e0b] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Telemetry Curve",
    designMove2Title: "Interactive Thresholds",
    designMove2Sub: "Filtering alarm fatigue",
    designMove2Desc: "Designed interactive sliders that let operators adjust alert points based on daily ambient temperature shifts, reducing false alarms.",
    designMove3Title: "Conversational Repair AI",
    designMove3Sub: "Assisting field diagnostics",
    designMove3Desc: "Integrated an assistive chat module inside the field app. When a sensor fails calibration, the bot processes ambient metrics and suggests the exact replacement part required.",
    designMove3GraphTitle: "📈 Site Inspection Compliance",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#f59e0b] rounded-t-sm" style={{ height: "55%" }} />
                  <div className="w-8 bg-[#f5ae0b] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#f5be0b] rounded-t-sm" style={{ height: "88%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "35%" }} />
                </div>`,
    learningQuote: "Industrial ambient UX is safety UX. Interface clarity determines field response times.",
    learningDesc: "By placing MQTT alerts directly onto spatial floor coordinates and designing intuitive sliders, we helped control room operators focus on real issues.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated complex telemetry feeds into direct hazards floor mappings." },
      { title: "Design for decision moments", desc: "Positioned emergency purge triggers directly below pressure graphs." }
    ]
  },
  "iris-network": {
    logoLight: "/logos/network.svg",
    logoDark: "/logos/network.svg",
    safeName: "IrisNetwork",
    displayTitle: "Iris Network",
    color: "#32B34F",
    timeline: "3 Months (Spring 2025)",
    roleName: "Product Designer",
    platform: "Web Network Console",
    techStack: "React, D3.js, WebSockets, Tailwind, TypeScript",
    tagline: "Enterprise network diagnostics dashboard mapping live packet routes and isolating failure points.",
    overview1: "Network administrators struggle to identify silent outages and routing anomalies in cloud setups. Sifting through millions of text logs takes precious hours while customers experience sluggish speeds.",
    overview2: "Iris Network visualizes live node connections, utilizing custom spatial telemetry D3 charts to spot latency spikes and packet loss instantly on a high fidelity dashboard.",
    stats: [
      { metric: "75%", label: "Faster Incident Triage", desc: "Unified routing maps visualised bottlenecks immediately, avoiding text log crawls." },
      { metric: "2x", label: "Root Cause Isolation Speed", desc: "Automated traceroute logs grouped related drops into single event logs." },
      { metric: "100%", label: "Real time Socket Update", desc: "WebSocket telemetry feeds updated node states with zero browser lag." }
    ],
    challengeTitle: "The Danger of Blind Network Failures",
    challengeDesc: "When a multi region network gateway drops packets, users notice instantly. But for operators, finding the exact broken hop required tracing hops manually using repetitive terminal inputs.",
    breakdowns: [
      { num: "01 / Text-Log Overwhelm", desc: "Millions of dry terminal logs hidden latency patterns, making diagnostics highly reactive." },
      { num: "02 / Isolated Topology Maps", desc: "Static node graphs lacked real time latency indicators, hiding traffic spikes." },
      { num: "03 / Disconnected Triage Loops", desc: "Identifying a broken port required operators to exit the diagnostic panel and check asset lists." }
    ],
    roleSubtitle: "Two Roles, One Reliability Standard",
    roleDesc: "We designed Iris Network to serve control room operators auditing real time regional packet flows, and network architects planning cloud node topologies.",
    role1Name: "buyer",
    role1Label: "Control Room Operator",
    role1Archetype: "High Information Diagnostic Triage",
    role1Desc: "The Operator triages immediate connection alarms and redirects traffic nodes. The design optimizes for fast spatial context:",
    role1Items: [
      "Aggregates multi region telemetry feeds into a single live connection grid.",
      "Highlights packet drop percentages using warning color indicator cards.",
      "Enables fast node restarts through sliding utility control sheets."
    ],
    role1ScreenTitle: "🖥️ Live Packet Telemetry Console",
    role1ScreenFilter: "Filter: High Latency • Delhi Node • Packet Loss > 2%",
    role1ScreenItems: [
      { name: "⚡ Gateway Delhi Hub-1", slot: "Status: Packet Drop 4.5% • East Wing", rate: "Latency: 280ms • active", info: "Action: Route Triage Req" },
      { name: "⚡ Node Noida Edge-3", slot: "Status: Healthy • North Wing", rate: "Latency: 12ms • active", info: "Action: None Required" }
    ],
    role1ScreenCta: "Restart Selected Gateway",
    role2Name: "seller",
    role2Label: "Network Architect",
    role2Archetype: "Topology & Capacity Planning",
    role2Desc: "The Architect plans hardware configurations and analyzes historical capacity metrics. The dashboard provides complex trend graphs and sandbox modeling tools:",
    role2Items: [
      "Provides drag and drop spatial model panels to test node configurations.",
      "Generates historical latency trends using custom native D3 chart overlays.",
      "Visualizes packet size distribution curves across multiple network regions."
    ],
    role2ScreenTitle: "📊 Network Architecture Sandbox",
    role2ScreenFilter: "Session Status: Topology Synced",
    role2ScreenItems: [
      { name: "Simulation #23 - Load Balancing", slot: "State: Capacity Verified • 24 Nodes", rate: "Throughput: 1.2 Tbps", info: "Outcome: Stable" },
      { name: "Simulation #22 - Failover Test", slot: "State: Failed Hop Isolated • 2 Nodes", rate: "Throughput: 800 Gbps", info: "Outcome: Warning" }
    ],
    role2ScreenCta: "Deploy Simulation to Staging (↑)",
    designEvolutionDesc: "To ensure network administrators could route heavy traffic during spikes, the console interface went through extensive grey box layout testing.",
    wireframeDesc: "Drafted high density routing tables and nested map views. User testing revealed that hovering node topologies triggered excessive details, prompting us to design clean slide out detail drawers.",
    designSystemDesc: "Created Figma styling variables for latency metrics (Red: >100ms, Amber: 50-100ms, Green: <50ms). Mapped classes directly to styled layouts, keeping the console highly responsive.",
    designMove1Title: "Interactive Route Mapping",
    designMove1Sub: "Visualizing packet flow spatial paths",
    designMove1Desc: "We consolidated raw CLI traceroute strings into interactive, real time node path visualization. Users can click any hop to view live hardware temperatures and drop rates.",
    designMove1GraphTitle: "📊 Multi-Region Throughput Peak",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#10b981] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 25 Q 20 10, 40 20 T 70 5 T 100 15" />
                    <circle cx="70" cy="5" r="3" className="fill-[#10b981] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Bandwidth Curve",
    designMove2Title: "Interactive Port Sliders",
    designMove2Sub: "Adjusting bandwidth caps",
    designMove2Desc: "Designed interactive sliders that let architects scale node capacity limits dynamically, avoiding overload during massive traffic events.",
    designMove3Title: "Conversational Architect AI",
    designMove3Sub: "Assisting node failure diagnostics",
    designMove3Desc: "Integrated an intelligent chat module inside the architect workspace. Architects can ask 'Why is node Delhi-4 slow?' and get a breakdown of hardware performance.",
    designMove3GraphTitle: "📈 Packet Loss Reduction",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#10b981] rounded-t-sm" style={{ height: "45%" }} />
                  <div className="w-8 bg-[#15c981] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#20d981] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "20%" }} />
                </div>`,
    learningQuote: "Network diagnostics is a clarity problem, not a log volume problem.",
    learningDesc: "By placing raw logs onto spatial node hops and building high performance socket charts, we helped operators keep major cloud services online.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated dry traceroute terminal dumps into intuitive connection routes." },
      { title: "Design for decision moments", desc: "Positioned gateway restart triggers directly next to latency alerts." }
    ]
  },
  "fleet": {
    logoLight: "/logos/fleet.svg",
    logoDark: "/logos/fleet.svg",
    safeName: "Fleet",
    displayTitle: "Iris Fleet",
    color: "#429AE7",
    logoClasses: "max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px]",
    timeline: "3 Months (Summer 2025)",
    roleName: "Product Designer",
    platform: "Web Manager & Driver Mobile",
    techStack: "React, Expo, Mapbox API, Zustand, WebSocket",
    tagline: "Enterprise fleet tracking and route optimization console reducing fuel usage and dispatch latency.",
    overview1: "Fleet dispatchers juggle route mapping, driver capacity, and vehicle maintenance schedules across different tabs, causing delayed deliveries.",
    overview2: "Iris Fleet unifies operations, placing real time delivery tracking, Mapbox routing maps, and instant driver chat logs into one high performance dashboard.",
    stats: [
      { metric: "22%", label: "Lower Fuel Usage", desc: "Mapbox route optimization reduced delivery miles." },
      { metric: "15 min", label: "Faster Dispatch Handoff", desc: "Direct route pushing avoided manual address text messages." },
      { metric: "98.9%", label: "Uptime Sync Rate", desc: "Driver coordinates updated on central maps with sub second latency." }
    ],
    challengeTitle: "The Friction of Manual Route Dispatching",
    challengeDesc: "Coordinating deliveries requires continuous route adjustment. But when dispatchers manage routes, drivers, and inventory in separate spreadsheets, delays become the norm.",
    breakdowns: [
      { num: "01 / Broken Route Pipelines", desc: "Dispatchers had to copy destination logs to Google Maps and send directions to drivers." },
      { num: "02 / Zero Telemetry Sync", desc: "No real time truck diagnostics meant drivers broke down mid route without warning." },
      { num: "03 / Multi-App Swapping Fatigue", desc: "Coordinating delays required dispatchers to switch between phone calls, maps, and schedules." }
    ],
    roleSubtitle: "Two Roles, One Optimized Highway",
    roleDesc: "We designed Iris Fleet to serve logistics planners coordinating thousands of shipments, and drivers navigating heavy city traffic.",
    role1Name: "buyer",
    role1Label: "Logistics Dispatcher",
    role1Archetype: "High Density Dispatch Console",
    role1Desc: "The Dispatcher monitors active trucks, schedules routes, and triages vehicle alerts. The design optimizes for fast multi tasking:",
    role1Items: [
      "Integrates a dynamic Mapbox GIS layout showing active vehicle markers.",
      "Aggregates truck diagnostics (e.g. Engine heat, Tire psi) into styled cards.",
      "Enables fast route adjustments through drag and drop shipment cards."
    ],
    role1ScreenTitle: "🚚 Active Logistics Dispatch Console",
    role1ScreenFilter: "Filter: Active Trucks • Delhi Loop • Speed > 60km/h",
    role1ScreenItems: [
      { name: "🚛 Truck Hub Delhi West", slot: "Status: Route Delayed • 12 miles near", rate: "Cargo: Electronics • active", info: "Action: Re route Push" },
      { name: "🚛 Truck Hub Noida South", slot: "Status: On Time • 4.8 miles near", rate: "Cargo: Grocery • active", info: "Action: None Required" }
    ],
    role1ScreenCta: "Push Route Optimization to Driver",
    role2Name: "seller",
    role2Label: "Delivery Driver",
    role2Archetype: "Guided Route Navigation",
    role2Desc: "The Driver needs an experience that presents clear directions with zero distractions. The mobile app acts as a secure route assistant:",
    role2Items: [
      "Features big, clear navigation cards designed for truck mounts.",
      "Integrates one tap customer calling and signature proof of delivery capture.",
      "Utilizes offline cache mapping to prevent signal drops in rural tunnels."
    ],
    role2ScreenTitle: "📱 Driver Mobile Assistant",
    role2ScreenFilter: "Session Status: Route Active",
    role2ScreenItems: [
      { name: "Stop #4 - Delhi Hub Center", slot: "Cargo: Box 2A • Due in 12 min", rate: "Action: Proof of delivery", info: "Status: Pending" },
      { name: "Stop #3 - Noida Sector 62", slot: "Cargo: Box 1C • Delivered", rate: "Action: Complete Signature", info: "Status: Finished" }
    ],
    role2ScreenCta: "Mark Stop Completed (↑)",
    designEvolutionDesc: "To ensure fleet dispatchers could coordinate rapid deliveries, the console went through extensive grey box layout testing.",
    wireframeDesc: "Drafted high density logistics tables and map views. Gray box interactive testing verified that modal details blocked route paths, prompting us to design expanding detail drawers.",
    designSystemDesc: "Created Figma color tokens representing truck safety thresholds (Alert: Red, Normal: Teal). Standardized layout grid tokens to keep maps scalable across desktop and tablets.",
    designMove1Title: "Interactive Route Map",
    designMove1Sub: "Contextualizing driver paths spatial layout",
    designMove1Desc: "We integrated a real time Mapbox GIS map engine. When a delivery delay triggers, the console highlights the exact vehicle coordinates and suggests alternative paths.",
    designMove1GraphTitle: "📊 Fuel Efficiency Distribution",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#06b6d4] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 25 Q 15 10, 35 20 T 70 5 T 100 25" />
                    <circle cx="70" cy="5" r="3" className="fill-[#06b6d4] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Fulfillment Curve",
    designMove2Title: "Interactive Route Sliders",
    designMove2Sub: "Adjusting load distribution",
    designMove2Desc: "Designed interactive sliders that let dispatchers balance load weights across available trucks, preventing engine wear.",
    designMove3Title: "Conversational Driver Assistant AI",
    designMove3Sub: "Assisting route diagnostics",
    designMove3Desc: "Integrated an assistive chat module inside the driver workspace. Drivers can ask 'What is my next route?' and get a clear voice-guided breakdown.",
    designMove3GraphTitle: "📈 Safe Driver Compliance Rate",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#06b6d4] rounded-t-sm" style={{ height: "45%" }} />
                  <div className="w-8 bg-[#16c6d4] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#26d6d4] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "35%" }} />
                </div>`,
    learningQuote: "Logistics UX is safety UX. Direct routing paths prevent road distractions.",
    learningDesc: "By placing truck diagnostics directly onto spatial map markers and designing offline first navigation steps, we helped logistics drivers execute their daily rounds safely.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated complex route options into clean spatial markers." },
      { title: "Design for decision moments", desc: "Positioned optimized route pushes directly below loading alerts." }
    ]
  },
  "payez": {
    logoLight: "/logos/PayEz.svg",
    logoDark: "/logos/PayEz.svg",
    safeName: "Payez",
    displayTitle: "PayEZ",
    color: "#4A69D8",
    timeline: "3 Months (Spring 2025)",
    roleName: "Product Designer",
    platform: "Consumer App & Merchant Web",
    techStack: "React Native, Tailwind CSS, Stripe API, Node.js",
    tagline: "Sleek P2P microfinance and payment gateway simplifying everyday transactions and cash transfers.",
    overview1: "Micro merchants and casual users experience high payment drop offs when trying to transfer cash through slow, data heavy banking portals.",
    overview2: "PayEZ streamlines P2P payments, utilizing modern layout transitions, wallet management tabs, and one swipe checkout sheets to secure cash flows.",
    stats: [
      { metric: "0.2s", label: "Sub Second P2P Sync", desc: "Optimized payment routes enabled instant cash transfers." },
      { metric: "38%", label: "Fewer Checkout Drops", desc: "Simplified form inputs into a single swipe double confirmation checkout drawer." },
      { metric: "100%", label: "Fraud Score Validation", desc: "Integrated biometric fraud checks directly on checkout flow." }
    ],
    challengeTitle: "The Pain of Sluggish Payment Pipelines",
    challengeDesc: "Sending money should feel like sending a text. But when users face multi step verification pages, complex routing codes, and dry tables, transaction drop offs skyrocket.",
    breakdowns: [
      { num: "01 / Opaque Verification Loops", desc: "Multiple verification pages delayed checkout times, driving user frustration." },
      { num: "02 / Zero Balance Visualization", desc: "Static ledgers hid daily spending trends, preventing easy cash flow monitoring." },
      { num: "03 / Scattered Cash Tools", desc: "Invoicing, sending, and receiving required users to navigate disjointed menus." }
    ],
    roleSubtitle: "Two Roles, One Frictionless Ledger",
    roleDesc: "We designed PayEZ to serve casual consumers sending instant P2P payments, and merchants tracking incoming cash flows.",
    role1Name: "buyer",
    role1Label: "P2P Sender",
    role1Archetype: "Transfer & Savings Focus",
    role1Desc: "The Sender wants to transfer cash instantly with zero friction. The design optimizes for fast transaction execution:",
    role1Items: [
      "Replaces dry ledger lists with a sleek, interactive spending history feed.",
      "Integrates one swipe checkout sheets to bypass slow routing checks.",
      "Highlights dynamic wallet balance indicators on the main screen."
    ],
    role1ScreenTitle: "📱 P2P Wallet Dashboard",
    role1ScreenFilter: "Filter: Active Cards • Delhi Loop • Balance: Rs. 12.4k",
    role1ScreenItems: [
      { name: "👤 Payee Maria", slot: "Status: Active • Noida Area", rate: "Transfer: Rs. 500", info: "Action: Send Instant Cash" },
      { name: "👤 Payee Tim", slot: "Status: Active • Gurugram Area", rate: "Transfer: Rs. 1,200", info: "Action: Send Instant Cash" }
    ],
    role1ScreenCta: "Swipe to Transfer Cash [══►]",
    role2Name: "seller",
    role2Label: "Retail Merchant",
    role2Archetype: "Sales & Invoicing Focus",
    role2Desc: "The Merchant coordinates incoming payments and tracks invoice compliance. The interface optimizes for clear status auditing:",
    role2Items: [
      "Provides rapid invoice creators to collect customer payments.",
      "Visualizes daily sales margins through clean native SVG graphs.",
      "Enables fast transaction refunds through sliding checkout sheets."
    ],
    role2ScreenTitle: "📊 Merchant Ledger Console",
    role2ScreenFilter: "Session Status: Ledger Synced",
    role2ScreenItems: [
      { name: "Invoice #4321 - Maria", slot: "State: Paid • Date: Today", rate: "Amount: Rs. 2,400", info: "Status: Complete" },
      { name: "Invoice #4320 - Tim", slot: "State: Refunded • Date: Yesterday", rate: "Amount: Rs. 1,200", info: "Status: Returned" }
    ],
    role2ScreenCta: "Issue Custom Invoicing Sheet (↑)",
    designEvolutionDesc: "To ensure PayEZ could scale to retail merchants, the interface underwent multiple grey box layout validation sessions.",
    wireframeDesc: "Laid out payment tables and invoice inputs. Grey box testing verified that modal checkout inputs caused user errors, prompting us to design expanding sliding drawer sheets.",
    designSystemDesc: "Standardized color tokens representing payment status levels (Success: Emerald, Warning: Red). Kept layout grid tokens clean to maintain readability.",
    designMove1Title: "Sleek Transaction Feed",
    designMove1Sub: "Eliminating table clutter",
    designMove1Desc: "We replaced dry transaction tables with a beautiful, interactive spending feed showing daily cash flows and category tags.",
    designMove1GraphTitle: "📊 Daily Spending Peak",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#e11d48] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 25 Q 20 5, 40 20 T 80 5 T 100 15" />
                    <circle cx="40" cy="20" r="3" className="fill-[#e11d48] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Savings Curve",
    designMove2Title: "One Swipe Checkout",
    designMove2Sub: "Streamlining transaction loops",
    designMove2Desc: "Designed an interactive payment sliding sheet that executes P2P transfers within sub seconds, avoiding sluggish page reloads.",
    designMove3Title: "Conversational Financial AI",
    designMove3Sub: "Assisting budgeting diagnostics",
    designMove3Desc: "Integrated an assistive chat helper inside the wallet app. Senders can ask 'How much did I save this week?' and receive instant spending feedback.",
    designMove3GraphTitle: "📈 Merchant Volume Growth",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#e11d48] rounded-t-sm" style={{ height: "45%" }} />
                  <div className="w-8 bg-[#f12d58] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#f93d68] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "35%" }} />
                </div>`,
    learningQuote: "Microfinance UX is trust UX. Frictionless loops convey transaction reliability.",
    learningDesc: "By placing balance trends directly onto the home screen and designing one swipe checkout drawer sheets, we helped users manage cash flows confidently.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated technical banking codes into clear transaction status tags." },
      { title: "Design for decision moments", desc: "Positioned transfer triggers directly next to active wallet balances." }
    ]
  },
  "oms-order-management": {
    logoLight: "/logos/sodexo.svg",
    logoDark: "/logos/sodexo.svg",
    logoClasses: "max-h-12 sm:max-h-14 lg:max-h-16 w-auto max-w-[180px] sm:max-w-[220px] lg:max-w-[260px]",
    safeName: "OmsOrderManagement",
    displayTitle: "OMS — Sodexo",
    color: "#00229E",
    timeline: "3 Months (Fall 2025)",
    roleName: "Product Designer",
    platform: "Web Dashboard & Mobile Scanner",
    techStack: "React, Next.js, tailwind CSS, GraphQL, Postgres",
    tagline: "Enterprise order management console tracking global retail stock, automated invoicing, and fulfillment.",
    overview1: "Warehouse teams struggle to fulfill wholesale orders because stock data, invoices, and shipment tracking are fragmented across different tools.",
    overview2: "OMS — Sodexo unifies retail supply pipelines, placing stock tracking, automated supplier orders, and real time shipment updates into a single dashboard.",
    stats: [
      { metric: "40%", label: "Faster Stock Dispatch", desc: "Consolidated incoming orders into a unified warehouse queue." },
      { metric: "2x", label: "Fulfillment Precision", desc: "Integrated live barcode scanning sheets, avoiding manual typing mistakes." },
      { metric: "99.9%", label: "Inventory Sync Rate", desc: "Fulfillment logs updated retail storefronts with zero data delay." }
    ],
    challengeTitle: "The Friction of Fragmented Retail Fulfillment",
    challengeDesc: "Processing hundreds of bulk orders requires absolute logistical synchronization. But when warehouse teams manage inventory, shipping labels, and billing separately, fulfillment loops fail.",
    breakdowns: [
      { num: "01 / Disjointed Order Records", desc: "Storefront orders were manually copy pasted to inventory logs, causing shipping delays." },
      { num: "02 / Manual Stock Re-orders", desc: "Restocking items required manual review of spreadsheets, causing stockouts." },
      { num: "03 / Fragmented Carrier Chats", desc: "Coordinating logistics partners required staff to exit the app and call carriers." }
    ],
    roleSubtitle: "Two Roles, One Cohesive Warehouse",
    roleDesc: "We designed OMS — Sodexo to serve logistics operators planning bulk regional restocks, and warehouse workers picking items on the floor.",
    role1Name: "buyer",
    role1Label: "Warehouse Operator",
    role1Archetype: "High Information Order Triage",
    role1Desc: "The Operator schedules regional shipments and monitors bulk product demands. The design optimizes for fast searchability:",
    role1Items: [
      "Aggregates store orders into a single, ranked fulfillment pipeline.",
      "Calculates live stock health metrics to trigger automated supplier re orders.",
      "Enables fast cargo dispatcher assignments through styled control sheets."
    ],
    role1ScreenTitle: "🖥️ Fulfillment Operations Panel",
    role1ScreenFilter: "Filter: Active Shipments • Noida Depot • High Priority",
    role1ScreenItems: [
      { name: "📦 Order #4312 - Wholesale", slot: "Fulfill: Critical • Delhi Area", rate: "Stock: 4,000 units • active", info: "Action: Dispatch Courier" },
      { name: "📦 Order #4311 - Bulk Retail", slot: "Fulfill: Normal • Gurugram Area", rate: "Stock: 1,200 units • active", info: "Action: None Required" }
    ],
    role1ScreenCta: "Commit Bulk Shipment Release",
    role2Name: "seller",
    role2Label: "Floor Picker",
    role2Archetype: "Guided Stock Picking",
    role2Desc: "The Picker traverses warehouse aisles locating items. The mobile tablet experience provides clear navigation and offline inventory validation:",
    role2Items: [
      "Provides structured checklist templates detailing aisle layout coordinates.",
      "Integrates barcode camera scanners directly on active picking screens.",
      "Enables offline logging to queue stock checks in thick steel depots."
    ],
    role2ScreenTitle: "📋 Mobile Floor Picker App",
    role2ScreenFilter: "Session Status: Offline Sync Active",
    role2ScreenItems: [
      { name: "Item #204 - Copper Pipes", slot: "Aisle: B2 • Shelf: 4 • Depot North", rate: "Action: Scan Item Barcode", info: "Status: 12 units req" },
      { name: "Item #203 - Steel Valves", slot: "Aisle: C1 • Shelf: 2 • Depot South", rate: "Action: Complete Inspection", info: "Status: Verified" }
    ],
    role2ScreenCta: "Commit Picking Checklist (↑)",
    designEvolutionDesc: "To ensure warehouse operators could coordinate fast orders, the console interface underwent multiple grey box user testing loops.",
    wireframeDesc: "Laid out high density order lists and product tables. User testing proved that overlay popups blocked warehouse timelines, prompting us to design sliding detail drawers.",
    designSystemDesc: "Created Figma styling variables representing stock alert states (Safe: Teal, Warning: Indigo). Standardized card elements to maintain visual structure.",
    designMove1Title: "Unified Fulfillment Feed",
    designMove1Sub: "Replacing spreadsheet triage loops",
    designMove1Desc: "We consolidated storefront orders, ledger logs, and invoice states into a single, scannable warehouse feed with clear status tags.",
    designMove1GraphTitle: "📊 Fulfill Time Peak Distribution",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#4f46e5] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 25 Q 20 5, 40 20 T 80 5 T 100 15" />
                    <circle cx="40" cy="20" r="3" className="fill-[#4f46e5] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Fulfillment Curve",
    designMove2Title: "Interactive Stock Sliders",
    designMove2Sub: "Adjusting automatic restock caps",
    designMove2Desc: "Designed interactive sliders that let operators balance minimum product volumes, avoiding expensive manual warehouse inventory checks.",
    designMove3Title: "Conversational Logistics AI",
    designMove3Sub: "Assisting carrier diagnostics",
    designMove3Desc: "Integrated an intelligent chat helper inside the picker app. Senders can ask 'Where is shipment 104?' and receive real-time GPS details.",
    designMove3GraphTitle: "📈 Monthly Stock Accuracy",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#4f46e5] rounded-t-sm" style={{ height: "45%" }} />
                  <div className="w-8 bg-[#5f56e5] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#6f66e5] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "35%" }} />
                </div>`,
    learningQuote: "Operations UX is systems UX. Smooth fulfillment comes from shared state coherence.",
    learningDesc: "By placing stock diagnostics directly onto picking routes and designing high performance scanner sliders, we helped logistics operators dispatch cargo safely.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated complex SKU parameters into clear inventory routes." },
      { title: "Design for decision moments", desc: "Positioned bulk shipment releases directly below warehouse alerts." }
    ]
  },
  "rms": {
    logoLight: "/logos/Planet 3_light.svg",
    logoDark: "/logos/Planet 3_dark.svg",
    safeName: "Rms",
    displayTitle: "Iris RMS",
    color: "#EC008C",
    timeline: "3 Months (Fall 2025)",
    roleName: "Product Designer",
    platform: "Web Auditor Console & Mobile App",
    techStack: "React, tailwind CSS, chart.js, Postgres, Express",
    tagline: "Enterprise risk management and compliance console triaging operational hazards and policy audits.",
    overview1: "Compliance officers and risk managers struggle to keep track of site safety reviews and hazard logs across multiple disconnected systems.",
    overview2: "Iris RMS consolidates regional safety checks, dynamic threat level analysis, and compliance checklists into a single, secure control console.",
    stats: [
      { metric: "45%", label: "Faster Policy Triaging", desc: "Unified incoming complaints and audits into a single prioritized queue." },
      { metric: "30%", label: "Fewer Audit Delays", desc: "Simplified audit check sheets with drag and drop report builders." },
      { metric: "99.8%", label: "System Compliance Sync", desc: "Policy updates synced across site tablets with zero data loss." }
    ],
    challengeTitle: "The Friction of Manual Safety Compliance",
    challengeDesc: "Maintaining site safety requires constant vigilance. But when compliance checks, incident logs, and facility audits live in separate folders, critical hazards go unnoticed.",
    breakdowns: [
      { num: "01 / Scattered Threat Indicators", desc: "Telemetry alarms, safety reviews, and site logs lived in disjointed legacy folders." },
      { num: "02 / Reactive Safety Models", desc: "Hazards were reported only after accident occurrence, delaying preventive maintenance." },
      { num: "03 / Slow Auditing Handoffs", desc: "Safety officers had to print out forms, fill them manually, and scan them back to databases." }
    ],
    roleSubtitle: "Two Roles, One Compliance Layer",
    roleDesc: "We designed Iris RMS to serve central risk planners coordinating multi facility regulations, and site auditors inspecting hardware on the floor.",
    role1Name: "buyer",
    role1Label: "Operations Risk Planner",
    role1Archetype: "High Density Policy Auditing",
    role1Desc: "The Planner monitors facility hazard alerts and schedules policy updates. The design dashboard optimizes for fast hazard triage:",
    role1Items: [
      "Aggregates regional safety logs into a single, ranked incident control board.",
      "Calculates live facility risk scores using historical compliance records.",
      "Enables fast dispatcher assignments through styled control sheets."
    ],
    role1ScreenTitle: "🖥️ Safety Risk Operations Console",
    role1ScreenFilter: "Filter: Active Warnings • Delhi Depot • High Hazard",
    role1ScreenItems: [
      { name: "🔥 Hazard Depot North-2", slot: "Risk: Critical (Score: 12) • Delhi", rate: "Alarm: Fire Valve Seal Leak", info: "Action: Dispatch Auditor" },
      { name: "💧 Hazard Depot South-1", slot: "Risk: Normal (Score: 82) • Noida", rate: "Alarm: Ambient Humidity Rise", info: "Action: None Required" }
    ],
    role1ScreenCta: "Initiate Emergency Audit Ticket",
    role2Name: "seller",
    role2Label: "Site Auditor",
    role2Archetype: "Guided Site Inspection",
    role2Desc: "The Auditor traverses local depots checking hardware compliance. The tablet experience provides offline diagnostic checklists and photo evidence tools:",
    role2Items: [
      "Provides structured compliance templates detailing safety check items.",
      "Integrates instant barcode scanning to pull facility log records.",
      "Enables offline data caching to record logs in thick concrete vaults."
    ],
    role2ScreenTitle: "📋 Mobile Site Auditor App",
    role2ScreenFilter: "Session Status: Database Synced",
    role2ScreenItems: [
      { name: "Aisle #204 - Emergency Exit", slot: "Facility ID: DEP-2041 • Delhi Area", rate: "Action: Blockage Inspection", info: "Evid: Photo req" },
      { name: "Aisle #203 - Fire Extinguisher", slot: "Facility ID: DEP-2038 • Noida Area", rate: "Action: Pressure Gauge Test", info: "Evid: Date verified" }
    ],
    role2ScreenCta: "Commit Inspection Checklist (↑)",
    designEvolutionDesc: "To ensure safety planners could coordinate crises, the interface underwent multiple grey box feedback sessions followed by rigorous design token mapping.",
    wireframeDesc: "Laid out safety tables and audit lists. Grey box testing verified that nested dialogs blocked dispatcher workflows, prompting us to design expanding sliding drawer sheets.",
    designSystemDesc: "Standardized color variables representing threat levels (Danger: Red, Normal: Teal). Kept layout grid tokens clean to maintain readability.",
    designMove1Title: "Spatial Triage Feed",
    designMove1Sub: "Contextualizing incident routes",
    designMove1Desc: "We consolidated dry spreadsheets into an interactive spatial dashboard, enabling operators to locate site incidents immediately.",
    designMove1GraphTitle: "📊 Site Hazard Peak Trends",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#dc2626] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 20 Q 25 5, 50 15 T 75 5 T 100 20" />
                    <circle cx="50" cy="15" r="3" className="fill-[#dc2626] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Hazard Curve",
    designMove2Title: "Interactive Safety Sliders",
    designMove2Sub: "Filtering alarm fatigue",
    designMove2Desc: "Designed interactive sliders that let operators adjust threat thresholds based on ambient facility conditions, reducing false alerts.",
    designMove3Title: "Conversational Compliance AI",
    designMove3Sub: "Assisting audit diagnostics",
    designMove3Desc: "Integrated an assistive chat module inside the operator app. Safety officers can ask 'Why did depot North-2 fail?' and receive instant breakdowns.",
    designMove3GraphTitle: "📈 Annual Audit Completion",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#dc2626] rounded-t-sm" style={{ height: "45%" }} />
                  <div className="w-8 bg-[#ec3636] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#fc4646] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "35%" }} />
                </div>`,
    learningQuote: "Operations UX is safety UX. Interface clarity determines field emergency response times.",
    learningDesc: "By placing incidents directly onto spatial facility maps and designing highly intuitive checklist tablet systems, we helped compliance managers keep workers safe.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated complex legal policies into clear site hazard levels." },
      { title: "Design for decision moments", desc: "Positioned emergency audit triggers directly below active alarm charts." }
    ]
  },
  "analytics-dashboard": {
    safeName: "AnalyticsDashboard",
    displayTitle: "Analytics Dashboard",
    color: "#2563eb",
    timeline: "3 Months (Spring 2025)",
    roleName: "Product Designer",
    platform: "Enterprise Web Console",
    techStack: "React, Vite, D3.js, tailwind CSS, GraphQL",
    tagline: "Enterprise analytics console consolidating scattered business data, customer trends, and query modeling.",
    overview1: "Data analysts and operations planners are overwhelmed trying to query and analyze business intelligence across disjointed metrics software.",
    overview2: "This project aggregates multi source database telemetry, query execution progress, and spatial demographic charts into a single workspace.",
    stats: [
      { metric: "55%", label: "Faster Query Execution", desc: "Consolidated multi database streams into a single local cache engine." },
      { metric: "40%", label: "Fewer Dashboard Crashes", desc: "Designed lazy loaded widgets that prioritize active route viewport charts." },
      { metric: "99.9%", label: "Real time Metrics Sync", desc: "GraphQL subscriptions updated metrics trends with sub second latency." }
    ],
    challengeTitle: "The Danger of Cluttered Metrics Dashboards",
    challengeDesc: "Formulating business decisions requires instant analytical clarity. But when planners are forced to traverse multiple dry widgets, latency and cognitive load spike.",
    breakdowns: [
      { num: "01 / Broken Data Pipelines", desc: "Customer metrics and database telemetry lived in separate systems, requiring manual imports." },
      { num: "02 / Heavy Widget Lag", desc: "Loading massive time series plots concurrently blocked browser render routines, causing freezing." },
      { num: "03 / Disjointed Query Tools", desc: "Building dynamic metrics reports required analysts to swap between terminal and graphs." }
    ],
    roleSubtitle: "Two Roles, One Analytical Ground Truth",
    roleDesc: "We designed this console to serve business executives monitoring regional margins, and data scientists running heavy analytical queries.",
    role1Name: "buyer",
    role1Label: "Business Executive",
    role1Archetype: "High Level Financial Review",
    role1Desc: "The Executive monitors global revenue metrics and schedules regional targets. The design dashboard optimizes for instant visual scanning:",
    role1Items: [
      "Replaces dense database logs with a clean, high contrast revenue status feed.",
      "Calculates live regional target indicators with clear trend markers.",
      "Enables fast report exports through a sliding double confirmation drawer."
    ],
    role1ScreenTitle: "📈 Executive Margin Console",
    role1ScreenFilter: "Filter: Active Regions • Delhi Loop • Margin Target: 42%",
    role1ScreenItems: [
      { name: "🏢 Region Delhi NCR", slot: "Status: Target Exceeded • Noida Wing", rate: "Revenue: $120k • Active", info: "Action: Approve Bonus" },
      { name: "🏢 Region Gurgaon West", slot: "Status: Warning Level • South Wing", rate: "Revenue: $80k • Active", info: "Action: View Breakdown" }
    ],
    role1ScreenCta: "Approve Regional Financial Release",
    role2Name: "seller",
    role2Label: "Data Scientist",
    role2Archetype: "Complex Query Modeling",
    role2Desc: "The Scientist designs custom query structures and monitors database telemetry. The workspace provides deep code editing and performance monitoring tools:",
    role2Items: [
      "Features a rich code editor panel with syntax auto completion.",
      "Visualizes query loading time distributions using native D3 graphs.",
      "Enables drag and drop layout configuration to position telemetry blocks."
    ],
    role2ScreenTitle: "🖥️ Data Science Sandbox",
    role2ScreenFilter: "Session Status: Query Engine Synced",
    role2ScreenItems: [
      { name: "Query #431 - Margin Forecast", slot: "DB: PostgreSQL • Delhi Depot", rate: "Execute: 0.12s • Passed", info: "Status: Active" },
      { name: "Query #430 - Retention Trend", slot: "DB: MongoDB • Noida Depot", rate: "Execute: 2.3s • Timeout", info: "Status: Failed" }
    ],
    role2ScreenCta: "Run Selected SQL Query (↑)",
    designEvolutionDesc: "To ensure analysts could formulate fast insights, the dashboard interface went through multiple grey box user testing loops.",
    wireframeDesc: "Laid out high density grid cards and table lists. Grey box testing verified that overlapping modals blocked dashboard data paths, prompting us to design sliding detail drawers.",
    designSystemDesc: "Created Figma variables maps for metrics status levels (Safe: Blue, Warning: Red). Kept layout grid tokens clean to maintain readability.",
    designMove1Title: "Unified Analytics Feed",
    designMove1Sub: "Contextualizing metrics paths",
    designMove1Desc: "We consolidated multiple database telemetry logs and metrics trends into a single, clean workspace with clear status indicators.",
    designMove1GraphTitle: "📊 Query Loading Distribution",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#2563eb] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 25 Q 20 5, 40 20 T 80 5 T 100 15" />
                    <circle cx="40" cy="20" r="3" className="fill-[#2563eb] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Fulfillment Curve",
    designMove2Title: "Interactive Chart Sliders",
    designMove2Sub: "Adjusting dynamic thresholds",
    designMove2Desc: "Designed interactive sliders that let analysts adjust target margins, avoiding slow database query re runs.",
    designMove3Title: "Conversational Metrics AI",
    designMove3Sub: "Assisting queries diagnostics",
    designMove3Desc: "Integrated an assistive chat module inside the workspace. Scientists can ask 'Why is PostgreSQL query 430 slow?' and receive diagnostic suggestions.",
    designMove3GraphTitle: "📈 Monthly Query Success",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#2563eb] rounded-t-sm" style={{ height: "45%" }} />
                  <div className="w-8 bg-[#3573eb] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#4583eb] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "35%" }} />
                </div>`,
    learningQuote: "Analytics UX is performance UX. Fluid charts build operational confidence.",
    learningDesc: "By placing database performance diagnostics directly onto spatial map views and designing one swipe checkout drawer sheets, we helped executives audit metrics safely.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated dry database metrics into intuitive regional target levels." },
      { title: "Design for decision moments", desc: "Positioned financial approve buttons directly below margins charts." }
    ]
  },
  "ecommerce-platform": {
    safeName: "EcommercePlatform",
    displayTitle: "E Commerce Platform",
    color: "#db2777",
    timeline: "3 Months (Summer 2025)",
    roleName: "Product Designer",
    platform: "Web Shopper Portal & Admin Panel",
    techStack: "React, tailwind CSS, GraphQL, Postgres, Node.js",
    tagline: "High scale e commerce portal and merchant console streamlining dynamic inventory, checkouts, and sales metrics.",
    overview1: "Online shoppers experience high cart abandonments when facing sluggish checkouts and disorienting catalog grids.",
    overview2: "This project optimizes consumer discovery, utilizing smooth transitions, dynamic cart previews, and interactive sales trend graphs to drive conversions.",
    stats: [
      { metric: "35%", label: "Lower Cart Abandonment", desc: "Simplified form inputs into a single swipe double confirmation checkout drawer." },
      { metric: "1.2s", label: "Faster Catalog Search", desc: "Implemented fuzzy search logic and local cache query loaders." },
      { metric: "100%", label: "Real time Stock Updates", desc: "GraphQL metrics synced storefront product availability with zero latency." }
    ],
    challengeTitle: "The Pain of Fragmented E Commerce Pipelines",
    challengeDesc: "Shopping should feel delightful and fast. But when users face multi step verification forms, dry product tables, and slow pages, merchant revenues drop.",
    breakdowns: [
      { num: "01 / Slow Payment Gateways", desc: "Multiple redirect pages delayed checkouts, causing cart abandonments." },
      { num: "02 / Cluttered Product Lists", desc: "Unstructured catalog grids blocked product comparisons, driving user churn." },
      { num: "03 / Scattered Vendor Tools", desc: "Invoicing, inventory, and analytics required merchants to navigate disjointed menus." }
    ],
    roleSubtitle: "Two Roles, One Connected Storefront",
    roleDesc: "We designed this platform to serve casual shoppers exploring the catalog, and vendor admins coordinating dynamic inventories.",
    role1Name: "buyer",
    role1Label: "Consumer Shopper",
    role1Archetype: "Discovery & Rapid Checkout",
    role1Desc: "The Shopper wants to locate products and buy them with absolute ease. The design optimizes for fast transaction execution:",
    role1Items: [
      "Replaces dense tables with a sleek, card based dynamic catalog feed.",
      "Integrates one swipe checkout sheets to bypass slow routing checks.",
      "Highlights dynamic cart balance indicators on the main screen."
    ],
    role1ScreenTitle: "🛒 Dynamic Product Catalog",
    role1ScreenFilter: "Filter: Near Me • Tech Deals • Wallet Balance: Rs. 14.5k",
    role1ScreenItems: [
      { name: "🎧 Wireless Headphones Pro", slot: "Status: In Stock • Noida Depot", rate: "Price: Rs. 2,400", info: "Action: Add to Cart" },
      { name: "⌚ Smartwatch Series 6", slot: "Status: 3 Left • Gurugram Depot", rate: "Price: Rs. 4,800", info: "Action: Add to Cart" }
    ],
    role1ScreenCta: "Swipe to Purchase Items [══►]",
    role2Name: "seller",
    role2Label: "Vendor Admin",
    role2Archetype: "Sales & Stock Operations",
    role2Desc: "The Admin coordinates store metrics and inventory compliance. The interface optimizes for clear status auditing:",
    role2Items: [
      "Provides dynamic product catalog managers to publish stock updates.",
      "Visualizes sales margins through clean native SVG graphs.",
      "Enables fast transaction refunds through sliding checkout sheets."
    ],
    role2ScreenTitle: "📊 Vendor Metrics Console",
    role2ScreenFilter: "Session Status: Ledger Synced",
    role2ScreenItems: [
      { name: "Order #4321 - Headphones", slot: "State: Paid • Date: Today", rate: "Margin: Rs. 800", info: "Status: Fufilled" },
      { name: "Order #4320 - Smartwatch", slot: "State: Refunded • Date: Yesterday", rate: "Margin: Rs. 1,200", info: "Status: Returned" }
    ],
    role2ScreenCta: "Issue Custom Stock Sheet (↑)",
    designEvolutionDesc: "To ensure the catalog could scale to retail merchants, the interface underwent multiple grey box layout validation sessions.",
    wireframeDesc: "Laid out product grids and catalog lists. Grey box testing verified that modal checkout inputs caused user errors, prompting us to design expanding sliding drawer sheets.",
    designSystemDesc: "Standardized color tokens representing payment status levels (Success: Emerald, Warning: Pink). Kept layout grid tokens clean to maintain readability.",
    designMove1Title: "Sleek Catalog Feed",
    designMove1Sub: "Eliminating grid clutter",
    designMove1Desc: "We replaced dry transaction tables with a beautiful, interactive spending feed showing daily cash flows and category tags.",
    designMove1GraphTitle: "📊 Sales Volume Peak",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#db2777] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 25 Q 20 5, 40 20 T 80 5 T 100 15" />
                    <circle cx="40" cy="20" r="3" className="fill-[#db2777] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Purchase Curve",
    designMove2Title: "One Swipe Checkout",
    designMove2Sub: "Streamlining checkout loops",
    designMove2Desc: "Designed an interactive payment sliding sheet that executes product checkouts within sub seconds, avoiding sluggish page reloads.",
    designMove3Title: "Conversational Catalog AI",
    designMove3Sub: "Assisting product diagnostics",
    designMove3Desc: "Integrated an assistive chat helper inside the shopper app. Shoppers can ask 'What are the top tech deals today?' and receive instant feedback.",
    designMove3GraphTitle: "📈 Merchant Sales Growth",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#db2777] rounded-t-sm" style={{ height: "45%" }} />
                  <div className="w-8 bg-[#eb3787] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#f34d98] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "35%" }} />
                </div>`,
    learningQuote: "Commerce UX is confidence UX. Fluid checkout loops build buyer trust.",
    learningDesc: "By placing catalog filters directly onto the home screen and designing one swipe checkout drawer sheets, we helped users manage shopping baskets confidently.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated dry catalog codes into clear shipping status tags." },
      { title: "Design for decision moments", desc: "Positioned buy buttons directly next to active wallet balances." }
    ]
  },
  "mobile-banking": {
    safeName: "MobileBanking",
    displayTitle: "Mobile Banking",
    color: "#059669",
    timeline: "3 Months (Spring 2025)",
    roleName: "Product Designer",
    platform: "Mobile iOS & Android",
    techStack: "React Native, Expo, Zustand, LocalAuthentication",
    tagline: "Premium biometric mobile banking application simplifying daily deposits, transfers, and asset tracking.",
    overview1: "Banking clients experience high friction when trying to send transfers and check financial statements through slow legacy portals.",
    overview2: "This project streamlines mobile finance, utilizing biometric security indicators, dynamic transaction grids, and one swipe checkout drawer sheets.",
    stats: [
      { metric: "0.5s", label: "Biometric Auth Sync", desc: "Optimized FaceID handshakes enabled instant safe app logins." },
      { metric: "40%", label: "Fewer Transfer Drops", desc: "Simplified form inputs into a single swipe double confirmation checkout drawer." },
      { metric: "100%", label: "Account Balance Sync", desc: "GraphQL subscriptions updated financial statements with zero data delay." }
    ],
    challengeTitle: "The Pain of Sluggish Banking Pipelines",
    challengeDesc: "Managing assets should feel secure and fast. But when users face multi step verification pages, complex routing codes, and dry tables, transaction drop offs skyrocket.",
    breakdowns: [
      { num: "01 / Opaque Verification Loops", desc: "Multiple verification pages delayed checkout times, driving user frustration." },
      { num: "02 / Zero Balance Visualization", desc: "Static ledgers hid daily spending trends, preventing easy cash flow monitoring." },
      { num: "03 / Scattered Cash Tools", desc: "Invoicing, sending, and receiving required users to navigate disjointed menus." }
    ],
    roleSubtitle: "Two Roles, One Seamless Vault",
    roleDesc: "We designed this mobile application to serve casual retail customers sending instant P2P payments, and wealth managers auditing investment pools.",
    role1Name: "buyer",
    role1Label: "Retail Customer",
    role1Archetype: "Transfer & Savings Focus",
    role1Desc: "The Customer wants to transfer cash instantly with zero friction. The design optimizes for fast transaction execution:",
    role1Items: [
      "Replaces dry ledger lists with a sleek, interactive spending history feed.",
      "Integrates one swipe checkout sheets to bypass slow routing checks.",
      "Highlights dynamic wallet balance indicators on the main screen."
    ],
    role1ScreenTitle: "📱 Retail Banking Home",
    role1ScreenFilter: "Filter: Active Cards • Delhi Loop • Balance: Rs. 14,200",
    role1ScreenItems: [
      { name: "👤 Payee Maria", slot: "Status: Active • Noida Area", rate: "Transfer: Rs. 500", info: "Action: Send Instant Cash" },
      { name: "👤 Payee Tim", slot: "Status: Active • Gurugram Area", rate: "Transfer: Rs. 1,200", info: "Action: Send Instant Cash" }
    ],
    role1ScreenCta: "Swipe to Transfer Cash [══►]",
    role2Name: "seller",
    role2Label: "Wealth Manager",
    role2Archetype: "Sales & Invoicing Focus",
    role2Desc: "The Manager coordinates incoming payments and tracks invoice compliance. The interface optimizes for clear status auditing:",
    role2Items: [
      "Provides rapid invoice creators to collect customer payments.",
      "Visualizes daily sales margins through clean native SVG graphs.",
      "Enables fast transaction refunds through sliding checkout sheets."
    ],
    role2ScreenTitle: "📊 Wealth Ledger Console",
    role2ScreenFilter: "Session Status: Ledger Synced",
    role2ScreenItems: [
      { name: "Invoice #4321 - Maria", slot: "State: Paid • Date: Today", rate: "Amount: Rs. 2,400", info: "Status: Complete" },
      { name: "Invoice #4320 - Tim", slot: "State: Refunded • Date: Yesterday", rate: "Amount: Rs. 1,200", info: "Status: Returned" }
    ],
    role2ScreenCta: "Issue Custom Invoicing Sheet (↑)",
    designEvolutionDesc: "To ensure the app could scale to wealth managers, the interface underwent multiple grey box layout validation sessions.",
    wireframeDesc: "Laid out payment tables and invoice inputs. Grey box testing verified that modal checkout inputs caused user errors, prompting us to design expanding sliding drawer sheets.",
    designSystemDesc: "Standardized color tokens representing payment status levels (Success: Emerald, Warning: Emerald). Kept layout grid tokens clean to maintain readability.",
    designMove1Title: "Sleek Spending Feed",
    designMove1Sub: "Eliminating ledger clutter",
    designMove1Desc: "We replaced dry transaction tables with a beautiful, interactive spending feed showing daily cash flows and category tags.",
    designMove1GraphTitle: "📊 Daily Savings Peak",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#059669] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 25 Q 20 5, 40 20 T 80 5 T 100 15" />
                    <circle cx="40" cy="20" r="3" className="fill-[#059669] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Savings Curve",
    designMove2Title: "One Swipe Checkout",
    designMove2Sub: "Streamlining transaction loops",
    designMove2Desc: "Designed an interactive payment sliding sheet that executes P2P transfers within sub seconds, avoiding sluggish page reloads.",
    designMove3Title: "Conversational Financial AI",
    designMove3Sub: "Assisting wealth diagnostics",
    designMove3Desc: "Integrated an assistive chat helper inside the wallet app. Senders can ask 'How much did I save this week?' and receive instant spending feedback.",
    designMove3GraphTitle: "📈 Investment Asset Growth",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#059669] rounded-t-sm" style={{ height: "45%" }} />
                  <div className="w-8 bg-[#15a669] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#25b669] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "35%" }} />
                </div>`,
    learningQuote: "Banking UX is trust UX. Frictionless loops convey transaction reliability.",
    learningDesc: "By placing balance trends directly onto the home screen and designing one swipe checkout drawer sheets, we helped users manage asset flows confidently.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated technical banking codes into clear transaction status tags." },
      { title: "Design for decision moments", desc: "Positioned transfer triggers directly next to active wallet balances." }
    ]
  },
  "network-cms": {
    safeName: "NetworkCms",
    displayTitle: "Network CMS",
    color: "#ea580c",
    timeline: "3 Months (Spring 2025)",
    roleName: "Product Designer",
    platform: "Web Editor & Mobile Reviewer",
    techStack: "React, tailwind CSS, GraphQL, Node.js, Slate.js",
    tagline: "Enterprise content management system consolidating scattered draft routes, editorial reviews, and publication assets.",
    overview1: "Content editors and marketing coordinators struggle to format, review, and publish media assets across disjointed publishing systems.",
    overview2: "This project aggregates scattered draft folders, real time revision histories, and custom publication pipelines into a single, high performance editor console.",
    stats: [
      { metric: "50%", label: "Faster Article Drafting", desc: "Consolidated editing tools into a single live markdown canvas workspace." },
      { metric: "35%", label: "Fewer Publishing Drops", desc: "Designed lazy loaded widgets that prioritize active draft viewports." },
      { metric: "99.9%", label: "Real time Editor Sync", desc: "GraphQL subscriptions updated editor states with sub second latency." }
    ],
    challengeTitle: "The Friction of Cluttered Editing Systems",
    challengeDesc: "Publishing creative drafts requires focus and speed. But when users are forced to swap between text editors, layout checkers, and asset drives, latency and errors grow.",
    breakdowns: [
      { num: "01 / Isolated File Folders", desc: "Written drafts and layout assets lived in disjointed folders, requiring manual uploads." },
      { num: "02 / Heavy Layout Easing Lag", desc: "Loading dynamic rich media previews concurrently blocked browser render loops, causing crashes." },
      { num: "03 / Disconnected Revision Tools", desc: "Comparing dynamic draft histories required editors to swap between terminal and editor." }
    ],
    roleSubtitle: "Two Roles, One Content Core",
    roleDesc: "We designed this console to serve creative writers drafting dynamic articles, and senior editors auditing brand compliance.",
    role1Name: "buyer",
    role1Label: "Creative Writer",
    role1Archetype: "Focused Markdown Drafting",
    role1Desc: "The Writer drafts high quality copy and inserts layout elements. The design dashboard optimizes for absolute visual clarity:",
    role1Items: [
      "Replaces dry settings panels with a sleek, cardless live editor canvas.",
      "Integrates instant auto saving modules to eliminate file drops.",
      "Highlights dynamic word count progress trackers on the main screen."
    ],
    role1ScreenTitle: "📝 Slate Markdown Editor",
    role1ScreenFilter: "Filter: Active Drafts • Delhi Team • Target: 1,200 words",
    role1ScreenItems: [
      { name: "📄 Article: Green Energy P2P", slot: "Status: Drafting • 820 words • Noida", rate: "Category: Clean Tech", info: "Action: Complete Draft" },
      { name: "📄 Article: DePIN Validators", slot: "Status: Finished • 1,400 words • Delhi", rate: "Category: Web3 Finance", info: "Action: Submit to Editor" }
    ],
    role1ScreenCta: "Submit Article for Brand Review",
    role2Name: "seller",
    role2Label: "Editorial Auditor",
    role2Archetype: "Compliance & Layout Review",
    role2Desc: "The Editor coordinates draft approvals and checks compliance. The interface optimizes for clear layout auditing:",
    role2Items: [
      "Provides dynamic preview panels to audit responsive mobile layouts.",
      "Visualizes editorial speed metrics through clean native SVG graphs.",
      "Enables fast draft modifications through sliding checkout sheets."
    ],
    role2ScreenTitle: "📊 Editorial Review Dashboard",
    role2ScreenFilter: "Session Status: Database Synced",
    role2ScreenItems: [
      { name: "Draft #4321 - Green Solar", slot: "State: In Review • Time: 12 min", rate: "Auditor: Assigned", info: "Action: Inspect Assets" },
      { name: "Draft #4320 - DePIN Node", slot: "State: Approved • Time: 2 min", rate: "Auditor: Finished", info: "Action: Publish Live" }
    ],
    role2ScreenCta: "Publish Selected Draft Live (↑)",
    designEvolutionDesc: "To ensure writers could publish fast copy, the console went through multiple grey box user testing loops.",
    wireframeDesc: "Laid out high density draft queues and canvas panels. Grey box interactive testing verified that nested dialogs blocked writer focus, prompting us to design expanding sliding drawer sheets.",
    designSystemDesc: "Standardized color variables representing editorial status levels (Draft: Orange, Approved: Teal). Kept layout grid tokens clean to maintain readability.",
    designMove1Title: "Spatial Editor Canvas",
    designMove1Sub: "Contextualizing writer pathways",
    designMove1Desc: "We consolidated multiple editor settings and media databases into a single, clean workspace with clear status indicators.",
    designMove1GraphTitle: "📊 Monthly Published Peak",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#ea580c] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 25 Q 20 5, 40 20 T 80 5 T 100 15" />
                    <circle cx="40" cy="20" r="3" className="fill-[#ea580c] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Fulfillment Curve",
    designMove2Title: "Interactive Editor Sliders",
    designMove2Sub: "Adjusting dynamic previews",
    designMove2Desc: "Designed interactive sliders that let editors scale viewport previews instantly, avoiding sluggish browser reloads.",
    designMove3Title: "Conversational Drafting AI",
    designMove3Sub: "Assisting grammar diagnostics",
    designMove3Desc: "Integrated an assistive chat module inside the writer app. Writers can ask 'Suggest synonyms for transaction' and receive instant vocabulary feedback.",
    designMove3GraphTitle: "📈 Annual Article Production",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#ea580c] rounded-t-sm" style={{ height: "45%" }} />
                  <div className="w-8 bg-[#fa680c] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#ff780c] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "35%" }} />
                </div>`,
    learningQuote: "Operations UX is clarity UX. Fluid drafts build publication confidence.",
    learningDesc: "By placing editor diagnostics directly onto dynamic canvas panels and designing one swipe checkout drawer sheets, we helped writers deploy articles safely.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated complex editorial policies into clear layout status levels." },
      { title: "Design for decision moments", desc: "Positioned publish buttons directly next to active editor canvases." }
    ]
  },
  "web3-wallet": {
    safeName: "Web3Wallet",
    displayTitle: "Web3 Wallet",
    color: "#6366f1",
    timeline: "3 Months (Spring 2025)",
    roleName: "Product Designer",
    platform: "Mobile App & Web Bridge",
    techStack: "React Native, Expo, Zustand, ethers.js, Web3",
    tagline: "Decentralized crypto wallet and DeFi bridge simplifying multi chain staking, swap routes, and gas tracking.",
    overview1: "DeFi yield farmers and everyday crypto users experience high transaction failures when trying to bridge assets through slow legacy wallets.",
    overview2: "This project simplifies multi chain staking, utilizing biometric security hooks, smart transaction speed sliders, and native SVG asset graphs.",
    stats: [
      { metric: "0.3s", label: "Node Connection Sync", desc: "Optimized RPC socket routes enabled instant balance updates." },
      { metric: "35%", label: "Fewer Swap Failures", desc: "Designed dynamic slippage alert widgets that react to gas spikes." },
      { metric: "100%", label: "Secure Biometric Auth", desc: "Integrated local device security directly into the transaction slider." }
    ],
    challengeTitle: "The Danger of Blind Web3 Transactions",
    challengeDesc: "Staking assets should feel secure and clear. But when users face dry hex strings, raw gas inputs, and opaque bridge routes, transaction errors grow.",
    breakdowns: [
      { num: "01 / Opaque Smart Contracts", desc: "Raw contract bytecodes confused non technical users, causing security slips." },
      { num: "02 / Zero Gas Forecasting", desc: "No real time gas price charts meant transactions failed due to minor spikes." },
      { num: "03 / Disconnected Bridge Logs", desc: "Tracking cross chain balances required users to search transaction scanners manually." }
    ],
    roleSubtitle: "Two Roles, One Unified Ledger",
    roleDesc: "We designed this wallet to serve casual token swappers seeking simplicity, and yield farmers managing complex DeFi portfolios.",
    role1Name: "buyer",
    role1Label: "DeFi Swapper",
    role1Archetype: "Yield & Asset Optimization",
    role1Desc: "The Swapper wants to exchange assets and monitor daily rewards. The design optimizes for fast transaction execution:",
    role1Items: [
      "Replaces dry ledger lists with a sleek, card based dynamic portfolio feed.",
      "Integrates one swipe swap confirmation sheets to bypass slow routing checks.",
      "Highlights dynamic yield metrics on the main screen."
    ],
    role1ScreenTitle: "🪙 Multi Chain Staking Feed",
    role1ScreenFilter: "Filter: High APY • Polygon Grid • Wallet Balance: $4.2k",
    role1ScreenItems: [
      { name: "💧 USDC ETH Yield Pool", slot: "Status: APY 12.5% • active", rate: "Rate: $1.02 / unit", info: "Action: Stake Assets" },
      { name: "⚡ MATIC Staking Node", slot: "Status: APY 6.2% • active", rate: "Rate: $0.85 / unit", info: "Action: Stake Assets" }
    ],
    role1ScreenCta: "Swipe to Stake Selected Assets [══►]",
    role2Name: "seller",
    role2Label: "Asset Auditor",
    role2Archetype: "Compliance & Gas Planning",
    role2Desc: "The Auditor (often a protocol developer or compliance officer) inspects pool transactions and gas history. The workspace provides deep auditing tools:",
    role2Items: [
      "Provides dynamic invoice builders to request customer payouts.",
      "Visualizes transaction margins through clean native SVG graphs.",
      "Enables fast refund sheets through sliding checkout drawers."
    ],
    role2ScreenTitle: "📊 Gas Telemetry Dashboard",
    role2ScreenFilter: "Session Status: RPC Synced",
    role2ScreenItems: [
      { name: "Tx #4321 - Yield Swap", slot: "State: Mined • Time: 12 sec", rate: "Gas: 42 Gwei • Passed", info: "Status: Complete" },
      { name: "Tx #4320 - Token Bridge", slot: "State: Dropped • Time: 2 min", rate: "Gas: 12 Gwei • Timeout", info: "Status: Failed" }
    ],
    role2ScreenCta: "Deploy Simulation to Mainnet (↑)",
    designEvolutionDesc: "To ensure the wallet could scale to yield farmers, the interface underwent multiple grey box layout validation sessions.",
    wireframeDesc: "Laid out portfolio cards and coin grids. Grey box testing verified that overlapping dialog blocks caused transaction drop offs, prompting us to design expanding sliding drawer sheets.",
    designSystemDesc: "Standardized color variables representing wallet status levels (Success: Indigo, Warning: Red). Kept layout grid tokens clean to maintain readability.",
    designMove1Title: "Sleek Portfolio Feed",
    designMove1Sub: "Contextualizing coin histories spatial layout",
    designMove1Desc: "We consolidated raw hex logs and bridge states into a single, clean workspace with clear status indicators.",
    designMove1GraphTitle: "📊 Daily Portfolio Peak",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#6366f1] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 25 Q 20 5, 40 20 T 80 5 T 100 15" />
                    <circle cx="40" cy="20" r="3" className="fill-[#6366f1] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Yield Curve",
    designMove2Title: "One Swipe Swap",
    designMove2Sub: "Streamlining transaction loops",
    designMove2Desc: "Designed an interactive payment sliding sheet that executes coin swaps within sub seconds, avoiding sluggish browser reloads.",
    designMove3Title: "Conversational Gas Assistant AI",
    designMove3Sub: "Assisting gas diagnostics",
    designMove3Desc: "Integrated an assistive chat helper inside the wallet app. Senders can ask 'Suggest lowest gas times' and receive instant historical feedback.",
    designMove3GraphTitle: "📈 Protocol Volume Growth",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#6366f1] rounded-t-sm" style={{ height: "45%" }} />
                  <div className="w-8 bg-[#7376f1] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#8386f1] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "35%" }} />
                </div>`,
    learningQuote: "Web3 UX is trust UX. Frictionless loops convey transaction reliability.",
    learningDesc: "By placing portfolio trends directly onto the home screen and designing one swipe checkout drawer sheets, we helped users manage DeFi assets confidently.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated technical smart contracts into clear transaction status tags." },
      { title: "Design for decision moments", desc: "Positioned stake triggers directly next to active wallet balances." }
    ]
  },
  "product-casestudy": {
    safeName: "ProductCasestudy",
    displayTitle: "UX Research Study",
    color: "#4b5563",
    timeline: "3 Months (Spring 2025)",
    roleName: "Product Researcher",
    platform: "UX Case Study Presentation",
    techStack: "Figma, Notion, Miro, Affinity Mapping, Interviews",
    tagline: "Comprehensive product research and design strategy isolating user pain points and outlining visual solutions.",
    overview1: "Product owners and development teams struggle to validate user requirements and feature priorities due to disjointed research logs.",
    overview2: "This project aggregates qualitative user interview data, interactive affinity maps, and early grey box wireframes into a single presentation case study.",
    stats: [
      { metric: "50+", label: "User Interviews Logged", desc: "Conducted semi structured sessions to understand deep user friction points." },
      { metric: "12", label: "User Personas Modeled", desc: "Grouped overlapping user behaviors into clear behavioral archetypes." },
      { metric: "98%", label: "Stakeholder Alignment", desc: "Interactive wireframe galleries successfully aligned design teams." }
    ],
    challengeTitle: "The Opaque World of Raw User Research",
    challengeDesc: "Analyzing human behavior requires structure and clarity. But when research logs, interview transcripts, and user flows live in disorganized documents, insights are lost.",
    breakdowns: [
      { num: "01 / Dry Text Logs", desc: "Hours of audio transcripts lacked visual affinity groupings, making data analysis sluggish." },
      { num: "02 / Isolated Customer Journeys", desc: "User personas lacked interactive routing timelines, hiding friction hot spots." },
      { num: "03 / Scattered Feedback Files", desc: "Stakeholder comments and iteration logs were scattered across separate files." }
    ],
    roleSubtitle: "Two Roles, One Research Vault",
    roleDesc: "We designed this case study presentation to serve visual design directors auditing user interface flows, and protocol engineers validating requirements.",
    role1Name: "buyer",
    role1Label: "Visual Designer",
    role1Archetype: "UI Flow & Layout Triage",
    role1Desc: "The Designer reviews interactive layout components and dynamic state models. The presentation dashboard optimizes for clean spatial scans:",
    role1Items: [
      "Replaces dry settings lists with an interactive gray box layout preview feed.",
      "Highlights dynamic user click maps across multiple mobile screen frames.",
      "Streamlines design audits through a sliding feedback drawer."
    ],
    role1ScreenTitle: "🎨 Grey Box Prototype Review",
    role1ScreenFilter: "Filter: Active Screens • Delhi Team • User Rating: 4.8/5",
    role1ScreenItems: [
      { name: "📱 Onboarding Gate Screen", slot: "Friction: High (VC Upload) • Delhi Area", rate: "Click Rate: 23% • active", info: "Action: Review Iteration" },
      { name: "📱 Home Discovery Screen", slot: "Friction: Low (Feed Plan) • Noida Area", rate: "Click Rate: 88% • active", info: "Action: Approve Layout" }
    ],
    role1ScreenCta: "Approve Selected Screen Flow Layout",
    role2Name: "seller",
    role2Label: "Research Analyst",
    role2Archetype: "Qualitative Data Analysis",
    role2Desc: "The Analyst structures user feedback and reviews compliance metrics. The workspace provides deep research databases and affinity boards:",
    role2Items: [
      "Features a rich qualitative tag builder to group interview records.",
      "Visualizes user task completion speeds using native SVG graphs.",
      "Enables drag and drop feedback columns to categorize paint points."
    ],
    role2ScreenTitle: "📊 User Affinity Data Vault",
    role2ScreenFilter: "Session Status: Database Synced",
    role2ScreenItems: [
      { name: "Interview #42 - Delhi User", slot: "Role: Micro Prosumer • Delhi Wing", rate: "Time: 42 min • Synced", info: "Status: Analysed" },
      { name: "Interview #41 - Noida User", slot: "Role: Home Consumer • Noida Wing", rate: "Time: 23 min • Pending", info: "Status: Draft" }
    ],
    role2ScreenCta: "Audit Selected Interview Transcript (↑)",
    designEvolutionDesc: "To ensure development teams could act on user research, the presentation interface underwent multiple interactive reviews.",
    wireframeDesc: "Laid out research columns and affinity board matrices. Gray box interactive testing verified that dense texts blocked stakeholder alignment, prompting us to group quotes into structured cards.",
    designSystemDesc: "Standardized color variables representing research tags (Insight: Slate, Critical Pain Point: Red). Kept layout grid tokens clean to maintain readability.",
    designMove1Title: "Spatial Affinity Mapping",
    designMove1Sub: "Contextualizing user quotes",
    designMove1Desc: "We consolidated dry spreadsheets into a clean, card based affinity mapping layout, enabling team directors to locate insights instantly.",
    designMove1GraphTitle: "📊 User Task Speed Curve",
    designMove1Svg: `<svg className="w-full h-[70%] stroke-[#4b5563] fill-none stroke-[2]" viewBox="0 0 100 30">
                    <path d="M 0 25 Q 20 5, 40 20 T 80 5 T 100 15" />
                    <circle cx="40" cy="20" r="3" className="fill-[#4b5563] stroke-white stroke-[1]" />
                  </svg>`,
    designMove1GraphFooter: "Completion Curve",
    designMove2Title: "Interactive Flow Sliders",
    designMove2Sub: "Filtering user variables",
    designMove2Desc: "Designed interactive sliders that let designers test how different regional constraints alter the onboarding flow parameters.",
    designMove3Title: "Conversational Research AI",
    designMove3Sub: "Assisting analysis diagnostics",
    designMove3Desc: "Integrated an assistive chat helper inside the research panel. Analysts can ask 'Suggest design moves for VC friction' and receive instant guidelines.",
    designMove3GraphTitle: "📈 Actionable Insights Rate",
    designMove3GraphSvg: `<div className="h-28 flex items-end justify-between gap-2 px-4 py-2 border border-border/20 rounded-lg bg-card/30">
                  <div className="w-8 bg-[#4b5563] rounded-t-sm" style={{ height: "45%" }} />
                  <div className="w-8 bg-[#5b6573] rounded-t-sm" style={{ height: "65%" }} />
                  <div className="w-8 bg-[#6b7583] rounded-t-sm" style={{ height: "85%" }} />
                  <div className="w-8 bg-muted rounded-t-sm" style={{ height: "35%" }} />
                </div>`,
    learningQuote: "Product UX is human UX. True insights are discovered at the moments of user friction.",
    learningDesc: "By placing user interviews directly onto dynamic affinity cards and designing one swipe inspection views, we helped product teams deploy visual solutions confidently.",
    checkpoints: [
      { title: "Explainability drives action", desc: "Translated complex research metrics into clear visual user personas." },
      { title: "Design for decision moments", desc: "Positioned approval buttons directly below task speed charts." }
    ]
  }
};

const makePageContent = (key, data) => {
  const defaultLogoClasses = "max-h-10 sm:max-h-12 lg:max-h-14 w-auto max-w-[140px] sm:max-w-[180px] lg:max-w-[200px]";
  const logoClasses = data.logoClasses || defaultLogoClasses;

  const logoHtml = data.logoLight ? `
            <div className="flex items-center -ml-4 h-16 sm:h-20 lg:h-24">
              <img
                src="${data.logoLight}"
                alt="${data.displayTitle} logo"
                className="block ${logoClasses} object-contain dark:hidden"
              />
              <img
                src="${data.logoDark || data.logoLight}"
                alt="${data.displayTitle} logo"
                className="hidden ${logoClasses} object-contain dark:block"
              />
            </div>
  ` : `
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-space-grotesk tracking-tight uppercase flex items-center h-10 sm:h-12 lg:h-14" style={{ color: "${data.color}" }}>
              ${data.displayTitle}
            </h1>
  `;

  // Pre-calculate all maps and dynamic HTML to avoid nested backtick and variable evaluation bugs inside the template
  const statsHtml = data.stats.map((stat, idx) => `
              <motion.div 
                key={${idx}} 
                variants={fadeInUp} 
                className="p-6 rounded-2xl bg-card/30 border border-border/30 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[${data.color}]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-black font-space-grotesk bg-gradient-to-r from-[${data.color}] to-foreground bg-clip-text text-transparent">
                    ${stat.metric}
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      ${stat.label}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify font-inter">
                      ${stat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
  `).join('\n');

  const breakdownsHtml = data.breakdowns.map((item, idx) => `
                <div key={${idx}} className="space-y-1 pt-4 first:pt-0 border-t first:border-t-0 border-border/10">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
                    ${item.num}
                  </h4>
                  <p className="text-sm pl-3.5 text-justify font-inter">${item.desc}</p>
                </div>
  `).join('\n');

  const role1ItemsHtml = data.role1Items.map((item, idx) => `
                      <li key={${idx}} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[${data.color}] flex-shrink-0 mt-0.5" />
                        <span>${item}</span>
                      </li>
  `).join('\n');

  const role1ScreenItemsHtml = data.role1ScreenItems.map((item, idx) => `
                      <div key={${idx}} className="p-3 rounded-lg bg-card/60 border border-border/40 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-foreground">${item.name}</div>
                          <div className="text-[10px]">${item.slot}</div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="font-bold text-[${data.color}] text-xs">${item.rate}</div>
                          <div>${item.info}</div>
                        </div>
                      </div>
  `).join('\n');

  const role2ItemsHtml = (data.role2Items || []).map((item, idx) => `
                      <li key={${idx}} className="flex gap-3 text-sm text-muted-foreground text-justify font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[${data.color}] flex-shrink-0 mt-0.5" />
                        <span>${item}</span>
                      </li>
  `).join('\n');

  const role2ScreenItemsHtml = (data.role2ScreenItems || []).map((item, idx) => `
                      <div key={${idx}} className="p-2.5 rounded-lg bg-card/60 border border-border/30 text-[10px]">
                        <span className="font-bold text-foreground block mb-0.5">${item.name}</span>
                        ${item.slot} • ${item.rate}
                      </div>
  `).join('\n');

  const designMove1SvgHtml = data.designMove1Svg ? `
                  <div className="h-28 border border-border/20 rounded-lg bg-card/30 p-2 flex items-end relative overflow-hidden">
                    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(data.designMove1Svg)} }} className="w-full" />
                  </div>
  ` : '';

  const designMove3GraphSvgHtml = data.designMove3GraphSvg ? `
                <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(data.designMove3GraphSvg)} }} />
  ` : '';

  const checkpointsHtml = data.checkpoints.map((item, idx) => `
                <div key={${idx}} className="space-y-2 text-justify font-inter">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">0${idx+1} / ${item.title}</h4>
                  <p className="text-sm text-justify font-inter">${item.desc}</p>
                </div>
  `).join('\n');

  const roleSwitchHtml = data.role2Name ? `
          {/* Interactive Role Switcher Selector Tabs */}
          <motion.div variants={fadeInUp} className="flex justify-center w-full">
            <div className="bg-[#0B0B0C]/80 backdrop-blur-md border border-border/40 p-1.5 rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center max-w-md w-full shadow-2xl gap-1">
              <Button
                onClick={() => setSelectedRole("${data.role1Name}")}
                variant="ghost"
                className={"flex-1 rounded-xl sm:rounded-full py-3.5 sm:py-5.5 cursor-pointer font-space-grotesk transition-all duration-300 " + (
                  selectedRole === "${data.role1Name}" 
                    ? "bg-[${data.color}] text-black font-semibold shadow-[0_4px_15px_rgba(0,230,115,0.25)] hover:bg-[${data.color}]" 
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
              >
                <Smartphone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">${data.role1Label}</span>
              </Button>
              <Button
                onClick={() => setSelectedRole("${data.role2Name}")}
                variant="ghost"
                className={"flex-1 rounded-xl sm:rounded-full py-3.5 sm:py-5.5 cursor-pointer font-space-grotesk transition-all duration-300 " + (
                  selectedRole === "${data.role2Name}" 
                    ? "bg-[${data.color}] text-black font-semibold shadow-[0_4px_15px_rgba(31,208,180,0.25)] hover:bg-[${data.color}]" 
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
              >
                <Bot className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">${data.role2Label}</span>
              </Button>
            </div>
          </motion.div>
  ` : "";

  const roleContentHtml = data.role2Name ? `
            {selectedRole === "${data.role1Name}" ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-inter">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="p-3.5 rounded-full bg-[${data.color}]/10 text-[${data.color}]">
                      <Zap className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground">
                        ${data.role1Label} (${data.role1Archetype})
                      </h4>
                      <p className="text-xs text-[${data.color}] font-mono tracking-wider uppercase">Archetype: "High-Confidence"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed font-inter text-justify font-light">
                    ${data.role1Desc}
                  </p>
                  <ul className="space-y-3.5">
                    ${role1ItemsHtml}
                  </ul>
                </div>
                <div className="md:col-span-5 p-4 bg-[#0B0B0C] border border-border/30 rounded-2xl flex flex-col gap-4 font-mono text-[11px] text-muted-foreground shadow-2xl relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[${data.color}]/10 border border-[${data.color}]/30 text-[${data.color}] text-[9px] uppercase tracking-widest font-mono">
                    Overview Screen
                  </div>
                  <div className="border-b border-border/30 pb-3">
                    <div className="font-bold text-foreground text-xs font-space-grotesk uppercase tracking-wider mb-1">{${JSON.stringify(data.role1ScreenTitle)}}</div>
                    <div className="text-[10px]">{${JSON.stringify(data.role1ScreenFilter)}}</div>
                  </div>
                  ${role1ScreenItemsHtml}
                  <div className="p-2.5 rounded-lg bg-[${data.color}]/10 border border-[${data.color}]/20 flex items-center justify-between text-foreground">
                    <span>Double Confirmation</span>
                    <span className="font-bold text-xs uppercase tracking-wider">{${JSON.stringify(data.role1ScreenCta)}}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-inter">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="p-3.5 rounded-full bg-[${data.color}]/10 text-[${data.color}]">
                      <Bot className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground">
                        ${data.role2Label} (${data.role2Archetype})
                      </h4>
                      <p className="text-xs text-[${data.color}] font-mono tracking-wider uppercase">Archetype: "Action-Oriented"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed font-inter text-justify font-light">
                    ${data.role2Desc}
                  </p>
                  <ul className="space-y-3.5">
                    ${role2ItemsHtml}
                  </ul>
                </div>
                <div className="md:col-span-5 p-4 bg-[#0B0B0C] border border-border/30 rounded-2xl flex flex-col gap-4 font-mono text-[11px] text-muted-foreground shadow-2xl relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[${data.color}]/10 border border-[${data.color}]/30 text-[${data.color}] text-[9px] uppercase tracking-widest font-mono">
                    Action Panel
                  </div>
                  <div className="border-b border-border/30 pb-3">
                    <div className="font-bold text-foreground text-xs font-space-grotesk uppercase tracking-wider mb-1">{${JSON.stringify(data.role2ScreenTitle)}}</div>
                    <div className="text-[10px]">{${JSON.stringify(data.role2ScreenFilter)}}</div>
                  </div>
                  ${role2ScreenItemsHtml}
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1.5 rounded-full border border-border/30 bg-card text-[9px] cursor-pointer">{${JSON.stringify(data.role2ScreenCta)}}</span>
                  </div>
                </div>
              </div>
            )}
  ` : `
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-inter">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="p-3.5 rounded-full bg-[${data.color}]/10 text-[${data.color}]">
                      <Zap className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold font-space-grotesk tracking-wide text-foreground">
                        ${data.role1Label} (${data.role1Archetype})
                      </h4>
                      <p className="text-xs text-[${data.color}] font-mono tracking-wider uppercase">Archetype: "High-Confidence"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed font-inter text-justify font-light">
                    ${data.role1Desc}
                  </p>
                  <ul className="space-y-3.5">
                    ${role1ItemsHtml}
                  </ul>
                </div>
                <div className="md:col-span-5 p-4 bg-[#0B0B0C] border border-border/30 rounded-2xl flex flex-col gap-4 font-mono text-[11px] text-muted-foreground shadow-2xl relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[${data.color}]/10 border border-[${data.color}]/30 text-[${data.color}] text-[9px] uppercase tracking-widest font-mono">
                    Overview Screen
                  </div>
                  <div className="border-b border-border/30 pb-3">
                    <div className="font-bold text-foreground text-xs font-space-grotesk uppercase tracking-wider mb-1">{${JSON.stringify(data.role1ScreenTitle)}}</div>
                    <div className="text-[10px]">{${JSON.stringify(data.role1ScreenFilter)}}</div>
                  </div>
                  ${role1ScreenItemsHtml}
                  <div className="p-2.5 rounded-lg bg-[${data.color}]/10 border border-[${data.color}]/20 flex items-center justify-between text-foreground">
                    <span>Double Confirmation</span>
                    <span className="font-bold text-xs uppercase tracking-wider">{${JSON.stringify(data.role1ScreenCta)}}</span>
                  </div>
                </div>
              </div>
  `;

  return `"use client"

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

export default function ${data.safeName}CaseStudy() {
  const [selectedRole, setSelectedRole] = useState<"${data.role1Name}" | "${data.role2Name}">("${data.role1Name}")

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
    <div className="min-h-screen bg-background text-foreground pb-8 transition-colors duration-500 selection:bg-[${data.color}]/20">
      {/* Global Page Tint Accent */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.15]" style={{ backgroundColor: "${data.color}" }} />
      
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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[${data.color}]/10 via-transparent to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[${data.color}]/5 to-transparent blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            ${logoHtml}
          </motion.div>

          {/* Immersive Overview & Detailed Metadata Grid */}
          <div className="mt-12 pt-8 border-t border-border/20 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full text-lg md:text-[20px] font-light leading-relaxed text-foreground/90 font-inter space-y-4"
            >
              <span className="text-[${data.color}] text-xs font-semibold tracking-widest uppercase block">Overview</span>
              <p className="border-l-4 border-[${data.color}] pl-6 md:pl-8 italic text-justify font-inter leading-relaxed">
                ${data.overview1} ${data.overview2}
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
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">${data.timeline}</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Role</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">${data.roleName}</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Platform</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">${data.platform}</span>
              </div>
              <div className="space-y-1.5">
                <span className="text-muted-foreground uppercase text-[10px] tracking-widest block font-bold">Tech Stack</span>
                <span className="text-foreground/90 font-medium block pt-0.5 leading-relaxed">${data.techStack}</span>
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
            <span className="text-[${data.color}] text-xs font-semibold tracking-widest uppercase block">Operational Model / The Challenge</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight leading-tight">
              ${data.challengeTitle}
            </h3>
            <p className="text-lg md:text-[20px] text-muted-foreground/80 leading-relaxed w-full text-justify font-inter">
              ${data.challengeDesc}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6 w-full pt-2">
            <div className="space-y-6 text-base md:text-[20px] leading-relaxed text-muted-foreground/80 font-inter">
              ${breakdownsHtml}
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
            <span className="text-[${data.color}] text-xs font-semibold tracking-widest uppercase block">Operational Model / Reality</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight md:whitespace-nowrap">
              ${data.roleSubtitle}
            </h3>
            <p className="text-lg md:text-[20px] text-muted-foreground w-full text-justify font-inter">
              ${data.roleDesc}
            </p>
          </motion.div>

          ${roleSwitchHtml}

          {/* Role Showcase Display */}
          <motion.div 
            variants={fadeInUp} 
            className="p-8 rounded-3xl bg-card/30 border border-border/30 backdrop-blur-md"
          >
            ${roleContentHtml}
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
              ${data.safeName === "Energy" ? "From Low Fidelity Blueprints to Figma Tokens" : "The Design Evolution"}
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
                  src="${data.figmaWireframeImg}" 
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
                  src="${data.figmaVisualImg}" 
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
            <span className="text-[${data.color}] text-xs font-semibold tracking-widest uppercase block">Key Solution</span>
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
                <div className="w-11 h-11 rounded-full bg-[${data.color}]/10 text-[${data.color}] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[${data.color}]/20">01</div>
                <div>
                  <h4 className="text-[22px] font-semibold font-space-grotesk tracking-wide text-foreground">
                    ${data.designMove1Title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">${data.designMove1Subtitle}</p>
                </div>
              </div>
              <ShieldCheck className="w-6 h-6 text-[${data.color}]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center">
              <div className="lg:col-span-7 space-y-5 font-inter text-[18px] text-muted-foreground/90">
                <p className="text-justify font-inter">
                  ${data.designMove1Desc}
                </p>
              </div>
              
              <div className="lg:col-span-5 flex items-center justify-center w-full">
                ${designMove1SvgHtml}
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
                    ${data.designMove2Title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">${data.designMove2Subtitle}</p>
                </div>
              </div>
              <Activity className="w-6 h-6 text-[#3EBAF4]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center font-inter">
              {/* Image Left */}
              <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card max-w-[220px]">
                  <img 
                    src="${data.designMove2Img}" 
                    alt="${data.designMove2Title}" 
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 space-y-5 font-inter text-base md:text-[18px] text-muted-foreground/90 order-1 lg:order-2">
                <p className="text-justify font-inter">
                  ${data.designMove2Desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* DESIGN MOVE 3 */}
          <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-card/30 border border-border/30 backdrop-blur-md space-y-8 font-inter">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/20 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[${data.color}]/10 text-[${data.color}] flex items-center justify-center font-bold font-space-grotesk text-lg border border-[${data.color}]/20">03</div>
                <div>
                  <h4 className="text-[22px] font-semibold font-space-grotesk tracking-wide text-foreground">
                    ${data.designMove3Title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">${data.designMove3Subtitle}</p>
                </div>
              </div>
              <Bot className="w-6 h-6 text-[${data.color}]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 leading-relaxed items-center">
              <div className="lg:col-span-7 space-y-5 font-inter text-[18px] text-muted-foreground/90">
                <p className="text-justify font-inter">
                  ${data.designMove3Desc}
                </p>
              </div>
              
              <div className="lg:col-span-5 p-5 bg-[#0B0B0C] border border-border/30 rounded-2xl font-mono text-[10px] text-muted-foreground flex flex-col gap-3">
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground border-b border-border/20 pb-2">${data.designMove3GraphTitle}</span>
                ${designMove3GraphSvgHtml}
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
            <span className="text-[${data.color}] text-xs font-semibold tracking-widest uppercase block">Impact</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">What Changed Operationally</h3>
            <p className="text-lg md:text-[20px] text-muted-foreground/80 w-full leading-relaxed text-justify font-inter">
              These outcomes represent the real-world operational changes and UX transformations achieved during our iterative product cycles. By putting user choice, accessibility, and smooth performance first, we converted a highly technical console into a self-serve portal.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            ${statsHtml}
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
            <span className="text-[${data.color}] text-xs font-semibold tracking-widest uppercase block">Reflections</span>
            <h3 className="text-[22px] font-semibold font-space-grotesk tracking-tight">
              What This Project Changed For Me
            </h3>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="space-y-8 text-lg md:text-[20px] leading-relaxed text-muted-foreground/90 font-inter w-full"
          >
            <p className="text-lg md:text-[20px] font-light text-foreground leading-relaxed border-l-4 border-[${data.color}] pl-6 italic text-justify w-full font-inter font-light">
              "${data.learningQuote}"
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-light pl-6 text-justify font-inter">
              ${data.learningDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 w-full pl-6">
              ${checkpointsHtml}
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
`;
};
// Write files
Object.entries(projectsData).forEach(([key, value]) => {
  const filePath = path.join(projectsDir, key + '.tsx');
  
  // Ensure base directory exists
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  
  const content = makePageContent(key, value);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully generated premium page: ' + filePath);
});
