"use client";

import React, { useState } from "react";
import type { CSSProperties } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, SkillNames, Skill } from "@/data/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "../ui/badge";

/**
 * Tech-stack section with interactive 3D keycaps sync & responsive skill dock.
 */
const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<Skill>(
    SKILLS[SkillNames.REACT_NATIVE] || Object.values(SKILLS)[0]
  );

  const handleSelectSkill = (skill: Skill) => {
    setActiveSkill(skill);

    // If spline is active on window, update 3D text and animate keycap
    if (typeof window !== "undefined") {
      const event = new CustomEvent("portfolio:select-skill", { detail: skill });
      window.dispatchEvent(event);
    }
  };

  return (
    <SectionWrapper
      id="skills"
      className="flex w-full min-h-screen flex-col justify-start items-center py-20 relative z-10"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto flex flex-col items-center">
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc="Tap any skill or press keys on your keyboard"
          className="mb-8 mt-0 text-center"
        />

        {/* Live Active Skill Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkill.name}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mb-10 w-full max-w-2xl rounded-2xl border border-border/80 bg-background/80 p-5 shadow-2xl backdrop-blur-md"
            style={{ borderColor: activeSkill.color ? `${activeSkill.color}55` : undefined }}
          >
            <div className="flex items-center gap-4">
              <div
                className="flex size-14 shrink-0 items-center justify-center rounded-xl p-2.5 shadow-inner"
                style={{ backgroundColor: `${activeSkill.color}15` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeSkill.icon}
                  alt={activeSkill.label}
                  className="size-9 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {activeSkill.label}
                  </h3>
                  <Badge variant="outline" className="text-[10px] font-mono uppercase tracking-wider opacity-75">
                    Active
                  </Badge>
                </div>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {activeSkill.shortDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Interactive Skills Grid */}
        <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 pointer-events-auto">
          {Object.values(SKILLS).map((skill) => {
            const isSelected = activeSkill.name === skill.name;
            return (
              <li
                key={skill.name}
                onClick={() => handleSelectSkill(skill)}
                onMouseEnter={() => handleSelectSkill(skill)}
                style={{ "--skill": skill.color } as CSSProperties}
                className={cn(
                  "group relative flex cursor-pointer flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl p-4 text-center select-none",
                  "border bg-card/60 backdrop-blur-md transition-all duration-300",
                  isSelected
                    ? "border-[var(--skill)] bg-secondary/70 shadow-[0_8px_30px_-8px_var(--skill)] -translate-y-1.5 scale-[1.03]"
                    : "border-border/60 hover:-translate-y-1 hover:border-[var(--skill)] hover:bg-secondary/40 hover:shadow-[0_10px_25px_-10px_var(--skill)]"
                )}
              >
                {/* Colored Glow */}
                <span
                  aria-hidden
                  style={{ background: "var(--skill)" }}
                  className={cn(
                    "pointer-events-none absolute -top-6 h-14 w-14 rounded-full blur-2xl transition-opacity duration-300",
                    isSelected ? "opacity-75" : "opacity-20 group-hover:opacity-60"
                  )}
                />

                {/* Skill Icon */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.icon}
                  alt={skill.label}
                  width={40}
                  height={40}
                  loading="lazy"
                  className={cn(
                    "relative size-9 object-contain drop-shadow-sm transition-transform duration-300 md:size-10",
                    isSelected ? "scale-110" : "group-hover:scale-110"
                  )}
                />

                <span
                  className={cn(
                    "relative text-xs font-semibold transition-colors md:text-sm",
                    isSelected ? "text-foreground font-bold" : "text-muted-foreground group-hover:text-foreground"
                  )}
                >
                  {skill.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
