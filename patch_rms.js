const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'projectsData.js');
let content = fs.readFileSync(filePath, 'utf8');

const newRms = `  "rms": {
    logoLight: "/logos/Planet 3_light.svg",
    logoDark: "/logos/Planet 3_dark.svg",
    safeName: "Rms",
    displayTitle: "Planet3 RMS",
    color: "#EC008C",
    timeline: "2023 - 2024",
    roleName: "Business Analyst & Product Owner",
    platform: "Web Application",
    techStack: "Product Requirements, Jira, UX Strategy, Systems Analysis",
    tagline: "Planet3 RMS Charger Details - UX Case Study: turning complex charger behavior into a simple decision-support screen.",
    overview1: "This case study focuses on the Charger Details experience in the Planet3 Remote Management System, created from scratch to help teams monitor and manage EV chargers with clarity.",
    overview2: "The goal was to create a practical, user-friendly experience for operations teams, service teams, site managers, and business stakeholders. Instead of simply displaying data, the product explains condition and highlights next actions.",
    stats: [
      { metric: "100%", label: "Decision Focus", desc: "Designed the experience around actionable insights rather than raw data." },
      { metric: "1st", label: "Overview Priority", desc: "Placed key health indicators at the top for immediate understanding." },
      { metric: "Clear", label: "Mental Model", desc: "Separated charger-level from connector-level information." }
    ],
    challengeTitle: "Turning Complexity into Actionable Insights",
    challengeDesc: "An EV charger produces live status, connector availability, sessions, alerts, and maintenance needs. The biggest challenge was organizing this into a clear, usable product experience.",
    breakdowns: [
      { num: "01 / Information Overload", desc: "Understanding what charger information matters most to users to avoid data-heavy screens." },
      { num: "02 / Complex Relationships", desc: "Defining how charger status, connector status, alerts, sessions, and maintenance connect." },
      { num: "03 / Varied User Contexts", desc: "Creating a clear structure for users with different levels of responsibility (monitoring vs troubleshooting)." }
    ],
    roleSubtitle: "Translating System Behavior for Users",
    roleDesc: "As a BA and Product Owner, I bridged the gap between how the charger communicates with the system and how users expect to experience that information.",
    role1Name: "ops",
    role1Label: "Operations Teams",
    role1Archetype: "High-Level Monitoring",
    role1Desc: "Operations teams need a quick understanding of whether the charger is working well or needs attention:",
    role1Items: [
      "Requires overview-first experience to assess overall health.",
      "Needs to identify faults, warnings, and service needs immediately.",
      "Benefits from simple status language without deep technical detail."
    ],
    role2Name: "service",
    role2Label: "Service Teams",
    role2Archetype: "Deep Investigation",
    role2Desc: "Service teams need to understand exactly what is failing and why. The experience supports deeper troubleshooting:",
    role2Items: [
      "Separates charger health from connector-level performance.",
      "Groups sessions, alerts, and maintenance to support workflows.",
      "Creates a clear flow from 'What is happening?' to 'What should I check next?'"
    ],
    designEvolutionDesc: "The product needed to support both high-level monitoring and deeper investigation, without making the experience feel complicated. This required careful structuring.",
    designMove1Title: "Overview-First Experience",
    designMove1Sub: "Prioritizing key health indicators",
    designMove1Desc: "The experience starts with the most important information: energy delivered, successful sessions, faulted sessions, charger health, connection status, and service details.",
    designMove2Title: "Visual Health View",
    designMove2Sub: "Contextualizing the physical charger",
    designMove2Desc: "Important details are placed around the charger image. This helps users connect information to the physical charger and makes the experience much easier to scan.",
    designMove3Title: "Separating Contexts",
    designMove3Sub: "Charger vs. Connector Information",
    designMove3Desc: "Separating charger-level information (overall machine) from connector-level information (individual ports) creates a clearer mental model and reduces confusion.",
    learningQuote: "A strong product experience starts with understanding the system, but becomes valuable only when translated into a clear user journey.",
    learningDesc: "By defining the experience from a product owner perspective, the page became more than a data view. It became a decision-support screen that guides meaningful action.",
    checkpoints: [
      { title: "Product clarity begins with system behavior", desc: "Learning how the charger communicates helped define what users should see." },
      { title: "Prioritize user needs over available data", desc: "A Product Owner needs to prioritize what users need first, not just what data is available." }
    ]
  },`;

const regex = /"rms":\s*\{[\s\S]*?(?=\n\s*"analytics-dashboard":)/;
content = content.replace(regex, newRms);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully patched projectsData.js for rms');
