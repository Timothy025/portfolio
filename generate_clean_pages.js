const fs = require('fs');
const path = require('path');
const projectsData = require('./projectsData.js');

const projectsDir = path.join(__dirname, 'src/app/projects');

function makePageContent(key, data) {
  const techStackBadges = data.techStack.split(',').map(tech => 
    `<Badge variant="secondary">${tech.trim()}</Badge>`
  ).join('\n                ');

  const statsHtml = data.stats.map(stat => `
            <div className="space-y-2">
              <div className="text-4xl font-black font-space-grotesk" style={{ color: "${data.color}" }}>${stat.metric}</div>
              <h4 className="font-bold text-foreground">${stat.label}</h4>
              <p className="text-sm text-muted-foreground">${stat.desc}</p>
            </div>`).join('');

  const breakdownsHtml = data.breakdowns.map(bd => {
    const title = bd.num.includes('/') ? bd.num.split('/')[1].trim() : bd.num;
    return `
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  ${title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                ${bd.desc}
              </CardContent>
            </Card>`;
  }).join('');

  let rolesTabsHtml = '';
  if (data.rolesInRow) {
    rolesTabsHtml = `
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h4 className="font-bold text-lg">${data.role1Label || ''}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">${data.role1Desc || ''}</p>
                ${data.role1Items ? `<ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  ${data.role1Items.map(item => `<li>${item}</li>`).join('\n                  ')}
                </ul>` : ''}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h4 className="font-bold text-lg">${data.role2Label || ''}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">${data.role2Desc || ''}</p>
                ${data.role2Items ? `<ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  ${data.role2Items.map(item => `<li>${item}</li>`).join('\n                  ')}
                </ul>` : ''}
              </CardContent>
            </Card>
          </div>`;
  } else if (data.role2Name) {
    rolesTabsHtml = `
          <Tabs defaultValue="role1" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-muted/50">
              <TabsTrigger value="role1" className="py-3 text-sm font-bold data-[state=active]:bg-[${data.color}] data-[state=active]:text-black transition-all">
                ${data.role1Label || 'Role 1'}
              </TabsTrigger>
              <TabsTrigger value="role2" className="py-3 text-sm font-bold data-[state=active]:bg-[${data.color}] data-[state=active]:text-black transition-all">
                ${data.role2Label || 'Role 2'}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="role1" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">${data.role1Archetype || ''}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">${data.role1Desc || ''}</p>
                  ${data.role1Items ? `<ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    ${data.role1Items.map(item => `<li>${item}</li>`).join('\n                    ')}
                  </ul>` : ''}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="role2" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">${data.role2Archetype || ''}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">${data.role2Desc || ''}</p>
                  ${data.role2Items ? `<ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    ${data.role2Items.map(item => `<li>${item}</li>`).join('\n                    ')}
                  </ul>` : ''}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>`;
  } else {
    rolesTabsHtml = `
          <Card className="mt-8">
            <CardContent className="p-6 space-y-4">
              <h4 className="font-bold text-lg">${data.role1Archetype || data.role1Label || 'Overview'}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">${data.role1Desc || ''}</p>
              ${data.role1Items ? `<ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                ${data.role1Items.map(item => `<li>${item}</li>`).join('\n                ')}
              </ul>` : ''}
            </CardContent>
          </Card>`;
  }

  const designMovesHtml = `
            <Card className="border-l-4 bg-card/40" style={{ borderLeftColor: "${data.color}" }}>
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">${data.designMove1Sub || data.designMove1Title}</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> ${data.designMove1Title}</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">${data.designMove1Desc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#3EBAF4] bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">${data.designMove2Sub || data.designMove2Title}</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Activity className="w-4 h-4"/> ${data.designMove2Title}</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">${data.designMove2Desc}</p>
                </div>
              </CardContent>
            </Card>

            ${data.designMove3Title ? `
            <Card className="border-l-4 border-l-purple-500 bg-card/40 mt-6">
              <CardContent className="p-6 grid gap-4">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase">Problem Tackled</h4>
                  <p className="font-medium mt-1 leading-relaxed">${data.designMove3Sub || data.designMove3Title}</p>
                </div>
                <div className="mt-2 pt-4 border-t border-border/20">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2"><Bot className="w-4 h-4"/> ${data.designMove3Title}</h4>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">${data.designMove3Desc}</p>
                </div>
              </CardContent>
            </Card>
            ` : ''}`;

  const checkpointsHtml = data.checkpoints && Array.isArray(data.checkpoints) ? data.checkpoints.map(cp => `
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">${cp.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">${cp.desc}</p>
              </div>`).join('\n') : '';

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
            </div>` : `<h1 className="text-4xl md:text-6xl font-bold font-space-grotesk tracking-tight uppercase">${data.displayTitle}</h1>`;

  return `"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Activity, ShieldCheck, Bot } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ${data.safeName}CaseStudy() {
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
            ${logoHtml}
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              ${data.tagline}
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Overview</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              ${data.overview1} ${data.overview2}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/30">
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Timeline</h4>
              <p className="text-sm font-medium">${data.timeline}</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Role</h4>
              <p className="text-sm font-medium">${data.roleName}</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Platform</h4>
              <p className="text-sm font-medium">${data.platform}</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                ${techStackBadges}
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
            ${statsHtml}
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
            ${data.challengeDesc}
          </p>
          
          <div className="grid gap-4 mt-8">
            ${breakdownsHtml}
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
            ${data.roleDesc || 'We designed the system to streamline operations while ensuring high reliability.'}
          </p>
          
          ${rolesTabsHtml}
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
            ${designMovesHtml}
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
              "${data.learningQuote || 'Operational clarity drives product success.'}"
            </p>
            
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              ${data.learningDesc || ''}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              ${checkpointsHtml}
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
`;
}

// Write files
Object.entries(projectsData).forEach(([key, value]) => {
  const filePath = path.join(projectsDir, key + '.tsx');
  
  // Ensure base directory exists
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  
  const content = makePageContent(key, value);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully generated clean page: ' + filePath);
});
