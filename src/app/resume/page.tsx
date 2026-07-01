"use client"

import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { downloadResume } from "@/lib/utils"

export default function ResumePage() {
  return (
    <div className="fixed inset-0 z-[150] bg-background flex flex-col">
      {/* Header bar */}
      <div className="flex items-center justify-between p-4 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-foreground/5 w-10 h-10">
            <Link href="/">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <span className="font-medium text-foreground hidden sm:inline-block">Resume</span>
        </div>
        
        <Button
          onClick={downloadResume}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-full shadow-lg"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      {/* PDF View */}
      <div className="flex-1 w-full relative bg-muted/10">
        <iframe 
          src="/Timothy_Jerald_Xavier_CV.pdf#toolbar=1" 
          className="w-full h-full border-0 absolute inset-0"
          title="Resume Preview"
        />
      </div>
    </div>
  )
}
