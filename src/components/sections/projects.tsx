"use client";
import React, { useState } from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Smartphone, Cpu, Box } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";

type FilterTag = "all" | "mobile" | "realtime" | "ai3d";

const FILTERS: { label: string; tag: FilterTag; icon: React.ReactNode }[] = [
  { label: "All Projects", tag: "all", icon: <Sparkles className="w-3.5 h-3.5" /> },
  { label: "Mobile & Voice AI", tag: "mobile", icon: <Smartphone className="w-3.5 h-3.5" /> },
  { label: "Real-Time & Systems", tag: "realtime", icon: <Cpu className="w-3.5 h-3.5" /> },
  { label: "3D Web & AR", tag: "ai3d", icon: <Box className="w-3.5 h-3.5" /> },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.filterTag === activeFilter;
  });

  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:min-h-[130vh] px-4">
      <SectionHeader id="projects" title="Projects" />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {FILTERS.map(({ label, tag, icon }) => {
          const isActive = activeFilter === tag;
          return (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`relative flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-full transition-all duration-300 ${
                isActive
                  ? "text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                  : "text-muted-foreground hover:text-foreground bg-secondary/40 hover:bg-secondary/70 border border-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterBubble"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {icon}
              <span>{label}</span>
              <span className="ml-1 text-[10px] opacity-70">
                ({tag === "all" ? projects.length : projects.filter((p) => p.filterTag === tag).length})
              </span>
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="bg-transparent flex justify-center w-full">
          <div
            className="group relative w-full h-auto rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-indigo-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] bg-card"
            style={{ aspectRatio: "16/10" }}
          >
            <ScrollingPreview
              src={project.src}
              alt={project.title}
              bg={`/assets/backgrounds/${project.id}.jpg`}
            />

            {/* Glowing Accent Ring */}
            <div className="absolute inset-0 rounded-xl border border-white/5 group-hover:border-indigo-500/30 transition-colors pointer-events-none z-10" />

            {/* Bottom Gradient Metadata */}
            <div className="absolute w-full h-28 bottom-0 left-0 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-10">
              <div className="flex flex-col h-full items-start justify-end p-5">
                <div className="text-base md:text-lg font-semibold text-left text-foreground tracking-tight line-clamp-1 group-hover:text-primary transition-colors [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
                  {project.title}
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-md px-2 py-0.5">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="md:max-w-4xl md:h-[88vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0 border-border/80 bg-background/95 backdrop-blur-xl">
          {/* Sticky Header */}
          <div className="shrink-0 border-b border-border/80 bg-background/80 backdrop-blur-md px-8 py-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <h4 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
                  {project.title}
                </h4>
                <span className="text-[11px] font-mono uppercase tracking-wider text-primary">
                  {project.category}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                {project.github && project.github !== "#" && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors border border-border px-3 py-1.5 rounded-full hover:bg-secondary/60"
                  >
                    Source Code
                  </Link>
                )}
                {project.live && project.live !== "#" && (
                  <Link href={project.live} target="_blank">
                    <button className="group flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-mono px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                      Visit Live
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <ScrollArea className="flex-1" type="always" data-lenis-prevent>
            <div className="px-8 py-8">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8"
              >
                {project.skills.frontend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono font-medium">
                      Frontend &amp; Native
                    </span>
                    <FloatingDock items={project.skills.frontend} />
                  </div>
                )}
                {project.skills.backend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono font-medium">
                      Backend &amp; Cloud
                    </span>
                    <FloatingDock items={project.skills.backend} />
                  </div>
                )}
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

              {/* Project Content */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.content}
              </motion.div>
            </div>
          </ScrollArea>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  );
};

export default ProjectsSection;
