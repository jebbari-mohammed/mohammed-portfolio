"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, ArrowLeft, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumeDoodle from "./resume-doodle";

const RESUME_PATH = "/Mohammed_Jebbari_Resume.pdf";

export default function ResumeView() {
  const [activePage, setActivePage] = useState<"all" | "1" | "2">("all");

  return (
    <div className="flex min-h-screen flex-col font-sans bg-background">
      {/* Top navigation bar */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-3 sm:py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to portfolio</span>
          </Link>

          {/* Page switch tabs (Page 1, Page 2, Both) */}
          <div className="hidden sm:flex items-center gap-1 bg-muted/60 p-1 rounded-full text-xs font-medium">
            <button
              type="button"
              onClick={() => setActivePage("all")}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                activePage === "all"
                  ? "bg-background text-foreground shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Both Pages
            </button>
            <button
              type="button"
              onClick={() => setActivePage("1")}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                activePage === "1"
                  ? "bg-background text-foreground shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Page 1
            </button>
            <button
              type="button"
              onClick={() => setActivePage("2")}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                activePage === "2"
                  ? "bg-background text-foreground shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Page 2
            </button>
          </div>

          {/* Top Download Button */}
          <Button asChild size="sm" className="cursor-pointer shadow-md shadow-primary/20">
            <a
              href="/api/download-cv"
              download="Mohammed_Jebbari_Resume.pdf"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </a>
          </Button>
        </div>
      </header>

      {/* Main Resume Viewer Area */}
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <ResumeDoodle>
            <div className="flex flex-col gap-8 w-full">
              {/* Page 1 */}
              {(activePage === "all" || activePage === "1") && (
                <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-2xl border border-border/50">
                  <div className="absolute top-3 right-3 z-10 bg-black/70 backdrop-blur-md text-white font-mono text-[11px] px-3 py-1 rounded-full shadow-md">
                    Page 1 of 2
                  </div>
                  <img
                    src="/assets/resume/page-1.png"
                    alt="Mohammed Jebbari Resume - Page 1"
                    className="w-full h-auto block select-none"
                    loading="eager"
                  />
                </div>
              )}

              {/* Page 2 */}
              {(activePage === "all" || activePage === "2") && (
                <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-2xl border border-border/50">
                  <div className="absolute top-3 right-3 z-10 bg-black/70 backdrop-blur-md text-white font-mono text-[11px] px-3 py-1 rounded-full shadow-md">
                    Page 2 of 2
                  </div>
                  <img
                    src="/assets/resume/page-2.png"
                    alt="Mohammed Jebbari Resume - Page 2"
                    className="w-full h-auto block select-none"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </ResumeDoodle>

          {/* Bottom Action Section after reviewing resume */}
          <div className="mt-12 mb-20 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-border/40 pt-8">
            <Button asChild size="lg" className="w-full sm:w-auto cursor-pointer shadow-lg shadow-primary/25">
              <a
                href="/api/download-cv"
                download="Mohammed_Jebbari_Resume.pdf"
                className="flex items-center justify-center gap-2 font-semibold text-base px-6 py-3"
              >
                <Download className="h-5 w-5" />
                <span>Download PDF (Mohammed_Jebbari_Resume.pdf)</span>
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto cursor-pointer">
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Open Raw PDF File</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
