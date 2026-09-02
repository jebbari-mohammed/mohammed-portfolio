import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin, Download } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-none text-transparent text-slate-800 text-left",
                          "font-bold text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default text-edge-outline font-display "
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br className="md:block hiidden" />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Mobile Developer | React Native &amp; Flutter
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-4 w-full max-w-lg">
                <div className="flex flex-wrap items-center gap-3">
                  <Button asChild size="default" className="flex items-center gap-2 cursor-pointer shadow-md shadow-primary/20">
                    <a
                      href="/api/download-cv"
                      download="Mohammed_Jebbari_Resume.pdf"
                      className="flex items-center gap-2 font-semibold"
                    >
                      <Download size={16} />
                      <span>Download CV</span>
                    </a>
                  </Button>
                  <Button asChild variant={"outline"} size="default" className="cursor-pointer">
                    <Link
                      href={"/resume"}
                      className="flex items-center gap-2"
                    >
                      <File size={16} />
                      <span>View CV</span>
                    </Link>
                  </Button>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"secondary"}
                          size="default"
                          className="cursor-pointer"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Let&apos;s build something great 🚀</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={config.social.twitter}
                    target="_blank"
                    aria-label="X (Twitter)"
                  >
                    <Button variant={"outline"} size="icon" className="h-9 w-9">
                      <SiX size={18} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.github}
                    target="_blank"
                    className="cursor-can-hover"
                    aria-label="GitHub"
                  >
                    <Button variant={"outline"} size="icon" className="h-9 w-9">
                      <SiGithub size={18} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                    className="cursor-can-hover"
                    aria-label="LinkedIn"
                  >
                    <Button variant={"outline"} size="icon" className="h-9 w-9">
                      <SiLinkedin size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
