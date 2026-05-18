"use client"

import type { ComponentType } from "react"
import { motion } from "framer-motion"

type ArchitectureSection = {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
  features: string[]
}

type ProjectArchitectureMapProps = {
  rootLabel: string
  rootDescription: string
  sections: ArchitectureSection[]
  primaryColor: string
  secondaryColor: string
}

export function ProjectArchitectureMap({
  rootLabel,
  rootDescription,
  sections,
  primaryColor,
  secondaryColor
}: ProjectArchitectureMapProps) {
  const gridTemplateColumns = `repeat(${sections.length}, minmax(160px, 1fr))`
  const minWidth = `${Math.max(720, sections.length * 190)}px`

  return (
    <div
      className="relative overflow-x-auto rounded-xl border border-white/5 bg-card/30 p-5 md:p-8"
      style={{
        boxShadow: `inset 0 0 36px ${primaryColor}10`
      }}
    >
      <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div
            className="mb-2 inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
            style={{
              borderColor: `${primaryColor}40`,
              backgroundColor: `${primaryColor}10`,
              color: primaryColor
            }}
          >
            UI/UX IA View
          </div>
          <h4 className="text-xl font-black tracking-tight text-foreground font-space-grotesk">
            Screen Hierarchy & User Task Flow
          </h4>
          <p className="mt-1 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            A designer-led map of how users enter the product, scan primary screen groups, and complete the highest-priority tasks.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-[10px] font-semibold text-muted-foreground">
          <span className="rounded-full border border-white/10 bg-background/50 px-2.5 py-1">Entry point</span>
          <span className="rounded-full border border-white/10 bg-background/50 px-2.5 py-1">Screen groups</span>
          <span className="rounded-full border border-white/10 bg-background/50 px-2.5 py-1">UX touchpoints</span>
        </div>
      </div>

      <div
        className="relative mx-auto"
        style={{ gridTemplateColumns, minWidth }}
      >
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative z-10 flex min-h-20 w-72 flex-col items-center justify-center rounded-lg border px-6 py-4 text-center shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
              borderColor: `${primaryColor}70`,
              boxShadow: `0 18px 60px -28px ${primaryColor}`
            }}
          >
            <span className="mb-2 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white/80">
              Entry Screen
            </span>
            <h4 className="text-xl font-black leading-tight text-white font-space-grotesk">
              {rootLabel}
            </h4>
            <p className="mt-1 text-xs font-medium leading-relaxed text-white/75">
              {rootDescription}
            </p>
          </motion.div>
        </div>

        <div className="relative h-12">
          <div
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
            style={{ backgroundColor: `${primaryColor}80` }}
          />
          <div
            className="absolute left-[8%] right-[8%] top-1/2 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${primaryColor}80, ${secondaryColor}80, transparent)`
            }}
          />
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns }}>
          {sections.map((section, index) => {
            const Icon = section.icon

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center"
              >
                <div
                  className="absolute -top-12 h-12 w-px"
                  style={{ backgroundColor: `${primaryColor}65` }}
                />

                <div
                  className="relative z-10 flex min-h-12 w-full flex-row items-center justify-center gap-2 rounded-lg border bg-background/80 px-4 py-3 text-center backdrop-blur-sm transition-colors hover:bg-background"
                  style={{
                    borderColor: `${primaryColor}42`,
                    boxShadow: `0 12px 42px -30px ${primaryColor}`
                  }}
                >
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-md border shrink-0"
                    style={{
                      backgroundColor: `${primaryColor}14`,
                      borderColor: `${primaryColor}42`,
                      color: primaryColor
                    }}
                  >
                    <Icon className="h-3 w-3" />
                  </span>
                  <h5 className="text-sm font-bold leading-tight text-foreground text-left">
                    {section.title}
                  </h5>
                </div>

                <div className="h-7 w-px" style={{ backgroundColor: `${secondaryColor}70` }} />

                <div className="flex w-full flex-col items-center gap-2">
                  {section.features.slice(0, 3).map((feature) => (
                    <div
                      key={feature}
                      className="relative flex min-h-8 w-[92%] items-center justify-center rounded-md border bg-background/60 px-3 py-2 text-center text-[11px] font-medium leading-tight text-foreground/85 backdrop-blur-sm"
                      style={{
                        borderColor: `${secondaryColor}40`,
                        boxShadow: `inset 0 0 18px ${secondaryColor}10`
                      }}
                    >
                      <span>{feature}</span>
                    </div>
                  ))}

                  {section.features.length > 3 && (
                    <div
                      className="rounded-full border px-2.5 py-1 text-[10px] font-semibold text-muted-foreground"
                      style={{
                        borderColor: `${secondaryColor}38`,
                        backgroundColor: `${secondaryColor}10`
                      }}
                    >
                      +{section.features.length - 3} more
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
