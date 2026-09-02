import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { SiThreedotjs } from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Live Demo / Store
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            GitHub Repository
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

export const PROJECT_SKILLS = {
  reactNative: brand("React Native", "react.svg"),
  expo: brand("Expo", "react.svg"),
  flutter: brand("Flutter", "flutter.svg"),
  dart: brand("Dart", "dart.svg"),
  ts: brand("TypeScript", "typescript.svg"),
  js: brand("JavaScript", "javascript.svg"),
  firebase: brand("Firebase", "firebase.svg"),
  gemini: brand("Gemini AI", "gemini.svg"),
  voiceAi: brand("Real-Time Voice AI", "openai.svg"),
  websockets: brand("WebSockets", "socketio.svg"),
  callkit: brand("iOS CallKit & PushKit", "apple.svg"),
  healthkit: brand("Apple HealthKit", "apple.svg"),
  postgres: brand("PostgreSQL", "postgresql.svg"),
  docker: brand("Docker", "docker.svg"),
  gcp: brand("Google Cloud", "gcp.svg"),
  git: brand("Git", "git.svg"),
  github: brand("GitHub", "github.svg"),
  go: brand("Go", "go.svg"),
  rust: brand("Rust", "rust-mono.svg"),
  tailwind: brand("Tailwind CSS", "tailwind-css-mono.svg"),
  next: brand("Next.js", "nextdotjs-mono.svg"),
  react: brand("React", "react-mono.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
  pinned?: boolean;
};

const projects: Project[] = [
  {
    id: "izem-ai-fitness",
    category: "AI Mobile Fitness Companion",
    title: "IZEM — AI Fitness Coach",
    src: "/assets/projects-screenshots/izem/landing.png",
    screenshots: ["landing.png", "coach.png", "meals.png"],
    pinned: true,
    skills: {
      frontend: [
        PROJECT_SKILLS.reactNative,
        PROJECT_SKILLS.expo,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.callkit,
        PROJECT_SKILLS.healthkit,
      ],
      backend: [
        PROJECT_SKILLS.voiceAi,
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.websockets,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.gcp,
      ],
    },
    live: "https://youraicoach.life/",
    github: "https://github.com/jebbari-mohammed",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Autonomous Voice AI mobile coach that initiates and receives live calls before and after workouts.
          </TypographyP>
          <TypographyP className="font-mono">
            Designed and engineered an AI-powered fitness coaching application using React Native, Expo, TypeScript, and Firebase. The core breakthrough is an autonomous voice AI agent that calls users directly using native CallKit and PushKit, streaming real-time audio over WebSockets with barge-in support and conversational memory.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Real-Time Voice AI Calls &amp; Live Conversational Adaptation
          </TypographyH3>
          <p className="font-mono mb-2">
            Integrated a low-latency real-time voice AI agent powered by Gemini 1.5 Pro / Flash API and WebSockets audio streaming. The AI coach interacts with the application dynamically during live calls — replacing exercises, adjusting nutrition targets, modifying workout volume, and adapting training plans based on real-time voice requests and injury feedback.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/izem/coach.png`,
              `${BASE_PATH}/izem/meals.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Native iOS &amp; Android System Integration
          </TypographyH3>
          <p className="font-mono mb-2">
            Implemented native incoming and outgoing voice calls utilizing iOS CallKit, Apple PushKit, background audio streaming, and bidirectional barge-in handling. Integrated Apple HealthKit and Google Fit for biometric tracking (heart rate, active calories, sleep) to ground AI recommendations in hard physical data.
          </p>
          <SlideShow images={[`${BASE_PATH}/izem/landing.png`]} />

          <TypographyH3 className="my-4 mt-8">
            Serverless Scalable Backend Architecture
          </TypographyH3>
          <p className="font-mono mb-2">
            Engineered a reactive, serverless backend using Firebase Authentication, Firestore real-time listeners, and Cloud Functions. Designed for strict latency optimization, bulletproof state synchronization, and enterprise security.
          </p>
        </div>
      );
    },
  },
  {
    id: "sky-map",
    category: "Flutter Sensor-Fusion Mobile App",
    title: "Interactive Sky Map & Celestial Tracker",
    src: "/assets/projects-screenshots/skymap/landing.png",
    screenshots: ["landing.png", "map.png"],
    pinned: true,
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.git,
      ],
    },
    live: "https://github.com/jebbari-mohammed",
    github: "https://github.com/jebbari-mohammed",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-time celestial observation app rendering constellations and planets at 10+ updates per second.
          </TypographyP>
          <TypographyP className="font-mono">
            Built an interactive Flutter astronomy application leveraging device sensor fusion (GPS, Accelerometer, Magnetometer) to render planets, stars, constellations, and the Moon on a custom 60fps canvas.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            High-Frequency Sensor Fusion &amp; Custom Canvas
          </TypographyH3>
          <p className="font-mono mb-2">
            Continuously computes local horizontal coordinates (Azimuth &amp; Altitude) from sensor telemetry at 10+ frames per second. Features a battery-optimized reactive state pipeline using Flutter Provider with smooth CustomPainter rendering.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/skymap/landing.png`,
              `${BASE_PATH}/skymap/map.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            NASA &amp; Wikipedia API Integration with Offline Fallback
          </TypographyH3>
          <p className="font-mono mb-2">
            Fetches live astronomical imagery and celestial telemetry from NASA Open APIs and Wikipedia REST APIs, backed by an embedded SQLite astronomical catalog ensuring uninterrupted offline stargazing in remote locations.
          </p>
        </div>
      );
    },
  },
  {
    id: "game-2048",
    category: "Cross-Platform Mobile Game",
    title: "2048 Mobile Game — Modular Architecture",
    src: "/assets/projects-screenshots/game2048/landing.png",
    screenshots: ["landing.png", "grid.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.reactNative,
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.dart,
      ],
      backend: [
        PROJECT_SKILLS.git,
      ],
    },
    live: "https://github.com/jebbari-mohammed",
    github: "https://github.com/jebbari-mohammed",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            High-performance puzzle game with decoupled game state, matrix collision algorithms, and fluid touch physics.
          </TypographyP>
          <TypographyP className="font-mono">
            A modular cross-platform 2048 recreation built to demonstrate deep mastery of 2D matrix transformations, responsive gesture responder handling, tile collision math, and 60fps spring animations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            State Machine &amp; Gesture Physics
          </TypographyH3>
          <p className="font-mono mb-2">
            Complete separation of concerns between the deterministic mathematical game engine and the UI rendering layer. Includes persistent high-score tracking, move undo/redo history, and zero layout shifts across phone and tablet screens.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/game2048/landing.png`,
              `${BASE_PATH}/game2048/grid.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "google-play-publisher",
    category: "Store Ecosystem & Growth",
    title: "Google Play App Publishing & Monetization",
    src: "/assets/projects-screenshots/googleplay/landing.png",
    screenshots: ["landing.png", "dashboard.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.reactNative,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.gcp,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://github.com/jebbari-mohammed",
    github: "https://github.com/jebbari-mohammed",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Published and managed multiple mobile applications and games on Google Play, optimizing store listings and generating digital revenue.
          </TypographyP>
          <TypographyP className="font-mono">
            Hands-on entrepreneurial experience managing the full production lifecycle of consumer mobile apps and games on Google Play. Gained expertise in Play Store guidelines, visual asset design, ASO keyword ranking, release pipelines, updates, and monetization through digital products.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Monetization &amp; Store Performance Optimization
          </TypographyH3>
          <p className="font-mono mb-2">
            Conducted A/B testing on store graphics and conversion funnels, scaled organic user acquisition, and maintained 99.2%+ crash-free session rates across diverse global Android devices.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/googleplay/landing.png`,
              `${BASE_PATH}/googleplay/dashboard.png`,
            ]}
          />
        </div>
      );
    },
  },
];

export default projects;
