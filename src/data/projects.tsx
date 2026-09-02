import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

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
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Live Demo / Store
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={repo}
        >
          <Button variant={"outline"} size={"sm"}>
            GitHub Repository
            <ArrowUpRight className="ml-2 w-4 h-4" />
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
  reactNative: brand("React Native", "react-mono.svg"),
  expo: brand("Expo", "react-mono.svg"),
  flutter: brand("Flutter", "flutter-mono.svg"),
  dart: brand("Dart", "dart-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  gemini: brand("Gemini AI", "gemini-mono.svg"),
  voiceAi: brand("Real-Time Voice AI", "gemini-mono.svg"),
  websockets: brand("WebSockets", "websockets-mono.svg"),
  callkit: brand("iOS CallKit & PushKit", "apple-mono.svg"),
  healthkit: brand("Apple HealthKit", "apple-mono.svg"),
  swift: brand("Swift & WidgetKit", "apple-mono.svg"),
  revenueCat: brand("RevenueCat IAP", "apple-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  gcp: brand("Google Cloud", "googlecloud-mono.svg"),
  git: brand("Git", "git-mono.svg"),
  github: brand("GitHub", "github-mono.svg"),
  go: brand("Go", "go-mono.svg"),
  rust: brand("Rust", "rust-mono.svg"),
  tailwind: brand("Tailwind CSS", "tailwind-css-mono.svg"),
  next: brand("Next.js", "nextdotjs-mono.svg"),
  react: brand("React", "react-mono.svg"),
};

export type Project = {
  id: string;
  category: string;
  filterTag: "mobile" | "realtime" | "ai3d";
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  live: string;
  github: string;
  content: ReactNode;
};

const PROJECTS: Project[] = [
  {
    id: "izem",
    category: "Mobile & Autonomous Voice AI",
    filterTag: "mobile",
    title: "IZEM — Autonomous AI Fitness Coach",
    src: "/assets/projects-screenshots/izem/landing.png",
    screenshots: ["landing.png", "coach.png", "meals.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.reactNative,
        PROJECT_SKILLS.expo,
        PROJECT_SKILLS.callkit,
        PROJECT_SKILLS.healthkit,
      ],
      backend: [
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.voiceAi,
        PROJECT_SKILLS.websockets,
        PROJECT_SKILLS.firebase,
      ],
    },
    live: "https://youraicoach.life/",
    github: "https://github.com/jebbari-mohammed/AI-Gym-Coach",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl text-center text-primary">
            The AI coach that calls you. Low-latency bidirectional voice streaming, native iOS CallKit telephony, and adaptive mid-conversation workout modifications.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Telephony</span>
              <p className="text-lg font-bold mt-1 text-foreground">iOS CallKit &amp; PushKit</p>
              <p className="text-xs text-muted-foreground mt-1">Autonomous calls before &amp; after scheduled workouts.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Audio Stream</span>
              <p className="text-lg font-bold mt-1 text-emerald-400">WebSockets &lt; 80ms</p>
              <p className="text-xs text-muted-foreground mt-1">Full-duplex audio with natural speech barge-in interruption.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Intelligence</span>
              <p className="text-lg font-bold mt-1 text-sky-400">Gemini 1.5 Flash</p>
              <p className="text-xs text-muted-foreground mt-1">Dynamic mid-call exercise swaps &amp; 2,100 kcal macro adjustments.</p>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">
            High-Performance Voice Pipeline &amp; Native Bridges
          </TypographyH3>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground mb-4">
            Engineered native system integrations via custom iOS AppDelegate bridges (`CallKit`, `PushKit`) allowing the AI agent to initiate inbound phone calls directly to the device lock screen. Low-latency bidirectional audio streaming handles interruptions gracefully, synchronizing daily biometric telemetry from Apple HealthKit and Google Fit to tailor workout volume on the fly.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/izem/landing.png`,
              `${BASE_PATH}/izem/coach.png`,
              `${BASE_PATH}/izem/meals.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "madrasty",
    category: "Enterprise Mobile & Cloud Run",
    filterTag: "mobile",
    title: "Madrasty (مدرستي) — EdTech & School Platform",
    src: "/assets/projects-screenshots/madrasty/landing.png",
    screenshots: ["landing.png", "dashboard.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.reactNative,
        PROJECT_SKILLS.expo,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.gcp,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://github.com/jebbari-mohammed/madrasty",
    github: "https://github.com/jebbari-mohammed/madrasty",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl text-center text-primary">
            Enterprise multi-tenant EdTech monorepo featuring an offline-first mobile attendance sync engine, Google Cloud Tasks escalation queues, and zero-trust Firebase App Check.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Offline-First</span>
              <p className="text-lg font-bold mt-1 text-emerald-400">Outbox Pattern</p>
              <p className="text-xs text-muted-foreground mt-1">Zero data loss in classrooms with spotty/no connectivity.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Backend Queues</span>
              <p className="text-lg font-bold mt-1 text-indigo-400">GCP Cloud Tasks</p>
              <p className="text-xs text-muted-foreground mt-1">Automated parent notifications &amp; absence escalations.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Attestation</span>
              <p className="text-lg font-bold mt-1 text-sky-400">Firebase App Check</p>
              <p className="text-xs text-muted-foreground mt-1">Hardware DeviceCheck / Play Integrity anti-abuse verification.</p>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">
            Distributed Synchronization &amp; Role Architecture
          </TypographyH3>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground mb-4">
            Architected across three decoupled monorepo packages: a React Native mobile application (`apps/mobile`) with dedicated role-based routes (`/teacher`, `/parent`, `/student`), a Next.js administrative dashboard (`apps/admin`), and a Node.js/TypeScript backend (`apps/api`) deployed on Google Cloud Run. Backed by a 105 KB integration test suite.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/madrasty/landing.png`,
              `${BASE_PATH}/madrasty/dashboard.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "smartmenu-4d",
    category: "WebXR & Augmented Reality",
    filterTag: "ai3d",
    title: "SmartMenu 4D — Interactive 3D & AR Menu",
    src: "/assets/projects-screenshots/smartmenu/landing.png",
    screenshots: ["landing.png", "ar-view.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.git,
        PROJECT_SKILLS.github,
      ],
    },
    live: "https://github.com/jebbari-mohammed/4DWebsitee",
    github: "https://github.com/jebbari-mohammed/4DWebsitee",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl text-center text-primary">
            Next.js 16 &amp; React 19 interactive 3D restaurant experience with mobile Augmented Reality tabletop projection via Google Scene Viewer &amp; Apple USDZ QuickLook.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Graphics Engine</span>
              <p className="text-lg font-bold mt-1 text-amber-400">&lt;model-viewer&gt;</p>
              <p className="text-xs text-muted-foreground mt-1">WebGL PBR materials, cast shadows &amp; 360° touch orbit.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Mobile AR</span>
              <p className="text-lg font-bold mt-1 text-cyan-400">WebXR &amp; USDZ</p>
              <p className="text-xs text-muted-foreground mt-1">Real-scale table plane detection on iOS &amp; Android.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Modern Core</span>
              <p className="text-lg font-bold mt-1 text-purple-400">Next.js 16 &amp; React 19</p>
              <p className="text-xs text-muted-foreground mt-1">Tailwind CSS v4 with custom TypeScript WebXR typings.</p>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">
            Physically Based Rendering &amp; Camera Projection
          </TypographyH3>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground mb-4">
            Allows diners to inspect culinary dishes in high-fidelity 3D with realistic textures, ingredient breakdowns, and accurate proportions before ordering. Built-in WebXR and USDZ bridges allow instant projection directly onto restaurant tables through smartphone cameras with zero app installation required.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/smartmenu/landing.png`,
              `${BASE_PATH}/smartmenu/ar-view.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "multiplayer-chess",
    category: "Cross-Platform Flutter & Go",
    filterTag: "realtime",
    title: "Multiplayer Chess Engine — Real-Time WebSocket FIDE",
    src: "/assets/projects-screenshots/chess/landing.png",
    screenshots: ["landing.png", "board.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
      ],
      backend: [
        PROJECT_SKILLS.go,
        PROJECT_SKILLS.websockets,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://github.com/jebbari-mohammed/chess",
    github: "https://github.com/jebbari-mohammed/chess",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl text-center text-primary">
            Full-stack real-time multiplayer chess platform combining a high-concurrency Go WebSocket backend with a cross-platform Flutter client and full FIDE rule validation.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Game Engine</span>
              <p className="text-lg font-bold mt-1 text-sky-400">Full FIDE Rules</p>
              <p className="text-xs text-muted-foreground mt-1">Castling, en passant, promotion, checkmate &amp; stalemate.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Backend</span>
              <p className="text-lg font-bold mt-1 text-emerald-400">Go WebSockets</p>
              <p className="text-xs text-muted-foreground mt-1">Sub-15ms turn streaming &amp; UUID matchmaking rooms.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Solo Mode</span>
              <p className="text-lg font-bold mt-1 text-amber-400">Offline Bot AI</p>
              <p className="text-xs text-muted-foreground mt-1">Single-player practice against automated engine logic.</p>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">
            State Machine, Matchmaking &amp; Turn Synchronization
          </TypographyH3>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground mb-4">
            Engineered dual-layer move validation in both Go (`backend/chess.go`) and Dart (`game_state.dart`). The Go WebSocket hub handles room provisioning, waiting lobbies, and spectator channels with concurrency-safe state transitions, while Flutter provides fluid 60fps piece drag physics and path indicators.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/chess/landing.png`,
              `${BASE_PATH}/chess/board.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "arm-wrestling-coach",
    category: "React Native & Swift WidgetKit",
    filterTag: "mobile",
    title: "Arm Wrestling Coach — Swift WidgetKit & Ad Mediation",
    src: "/assets/projects-screenshots/armwrestling/landing.png",
    screenshots: ["landing.png", "technique.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.reactNative,
        PROJECT_SKILLS.swift,
        PROJECT_SKILLS.expo,
        PROJECT_SKILLS.revenueCat,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.ts,
      ],
    },
    live: "https://github.com/jebbari-mohammed/arm-wrestling-app",
    github: "https://github.com/jebbari-mohammed/arm-wrestling-app",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl text-center text-primary">
            Cross-platform React Native fitness coaching application featuring native iOS WidgetKit extensions in Swift, App Group data bridges, and multi-network ad mediation.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Native iOS</span>
              <p className="text-lg font-bold mt-1 text-red-400">Swift WidgetKit</p>
              <p className="text-xs text-muted-foreground mt-1">Home screen widgets with App Group shared preference cache.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Biomechanical</span>
              <p className="text-lg font-bold mt-1 text-emerald-400">Recommendation</p>
              <p className="text-xs text-muted-foreground mt-1">Calculates lever mechanics (Toproll, Hook, Press) from user stats.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Monetization</span>
              <p className="text-lg font-bold mt-1 text-violet-400">RevenueCat &amp; Mediation</p>
              <p className="text-xs text-muted-foreground mt-1">In-app subscriptions, AdMob, AppLovin MAX &amp; IronSource.</p>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">
            Custom Expo Config Plugins &amp; Native Architecture
          </TypographyH3>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground mb-4">
            Authored custom Expo Config Plugins (`withIronSourceAdapter.js`, `withMotivationWidget.js`) and a native Swift module (`modules/widget-pin`). Implements complete video exercise modules for pronation, supination, and rising, paired with Firebase Analytics and Crashlytics tracking.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/armwrestling/landing.png`,
              `${BASE_PATH}/armwrestling/technique.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "sky-map",
    category: "Flutter Sensor Fusion & Canvas",
    filterTag: "mobile",
    title: "Interactive Sky Map — Celestial AR Navigator",
    src: "/assets/projects-screenshots/skymap/landing.png",
    screenshots: ["landing.png", "map.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
      ],
      backend: [
        PROJECT_SKILLS.git,
        PROJECT_SKILLS.github,
      ],
    },
    live: "https://github.com/jebbari-mohammed/sky-map",
    github: "https://github.com/jebbari-mohammed/sky-map",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl text-center text-primary">
            Cross-platform Flutter astronomy app with high-frequency sensor fusion (10+ FPS), VSOP87 analytical orbital mechanics, and custom 60 FPS Skia canvas rendering.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Hardware Fusion</span>
              <p className="text-lg font-bold mt-1 text-cyan-400">Accelerometer &amp; Compass</p>
              <p className="text-xs text-muted-foreground mt-1">Real-time Euler angle heading mapping at 10+ FPS.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Astrodynamics</span>
              <p className="text-lg font-bold mt-1 text-amber-400">VSOP87 Theory</p>
              <p className="text-xs text-muted-foreground mt-1">RA/Dec to Az/Alt spherical coordinate math &amp; lunar parallax.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Rendering</span>
              <p className="text-lg font-bold mt-1 text-emerald-400">CustomPainter 60 FPS</p>
              <p className="text-xs text-muted-foreground mt-1">Dynamic magnitude discs, vector constellation lines &amp; stars.</p>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">
            Spherical Astronomy &amp; Hardware Telemetry
          </TypographyH3>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground mb-4">
            Translates real-time device orientation into celestial horizontal coordinates (Azimuth and Altitude) based on observer GPS coordinates and Local Sidereal Time. Features a resilient three-tier data fallback (NASA Open APIs &rarr; Wikipedia REST &rarr; offline SQLite catalog) for remote stargazing.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/skymap/landing.png`,
              `${BASE_PATH}/skymap/map.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "mini-framework",
    category: "Core Systems & Framework Engineering",
    filterTag: "realtime",
    title: "Mini-Framework — Custom Virtual DOM & Hooks",
    src: "/assets/projects-screenshots/framework/landing.png",
    screenshots: ["landing.png", "vdom.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.git,
        PROJECT_SKILLS.github,
      ],
    },
    live: "https://github.com/jebbari-mohammed/mini-framework",
    github: "https://github.com/jebbari-mohammed/mini-framework",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl text-center text-primary">
            Custom zero-dependency frontend runtime engineered from scratch: Virtual DOM hyperscript engine, tree-diffing reconciler, reactive hooks, and client-side SPA router.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Virtual DOM</span>
              <p className="text-lg font-bold mt-1 text-purple-400">Hyperscript jsx()</p>
              <p className="text-xs text-muted-foreground mt-1">Lightweight immutable VNode representations.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Reconciliation</span>
              <p className="text-lg font-bold mt-1 text-teal-400">dom-diff.js</p>
              <p className="text-xs text-muted-foreground mt-1">Minimal patch generation with keyed children diffing.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">State Engine</span>
              <p className="text-lg font-bold mt-1 text-amber-400">useState &amp; useEffect</p>
              <p className="text-xs text-muted-foreground mt-1">Cursor-based lifecycle hooks with cleanup handlers.</p>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">
            First-Principles Frontend Runtime Architecture
          </TypographyH3>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground mb-4">
            Demonstrates deep understanding of browser internals, call stacks, and closures beyond consuming high-level frameworks. Powers a fully functional TodoMVC application with route-based filtering, keyboard shortcuts, and XSS sanitization.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/framework/landing.png`,
              `${BASE_PATH}/framework/vdom.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "game-2048",
    category: "Flutter Algorithmic Game & Tests",
    filterTag: "mobile",
    title: "2048 Mobile — Deterministic Matrix Engine",
    src: "/assets/projects-screenshots/game2048/landing.png",
    screenshots: ["landing.png", "grid.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
      ],
      backend: [
        PROJECT_SKILLS.git,
        PROJECT_SKILLS.github,
      ],
    },
    live: "https://github.com/jebbari-mohammed/twenty-forty-eight",
    github: "https://github.com/jebbari-mohammed/twenty-forty-eight",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl text-center text-primary">
            Zero-dependency Flutter 2048 sliding puzzle game with 4x4 matrix transformation algorithms, swipe physics, and an automated unit test suite.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Game Engine</span>
              <p className="text-lg font-bold mt-1 text-amber-400">Zero Dependencies</p>
              <p className="text-xs text-muted-foreground mt-1">Pure Dart matrix manipulation &amp; collision logic.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Testing</span>
              <p className="text-lg font-bold mt-1 text-emerald-400">Full Test Suite</p>
              <p className="text-xs text-muted-foreground mt-1">6.7 KB unit tests validating merges &amp; victory conditions.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <span className="text-xs text-muted-foreground uppercase font-mono">Animation</span>
              <p className="text-lg font-bold mt-1 text-sky-400">Pop-in &amp; Merge</p>
              <p className="text-xs text-muted-foreground mt-1">Color scaling based on power-of-two values.</p>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">
            Algorithmic Rigor &amp; Test-Driven Development
          </TypographyH3>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground mb-4">
            Decoupled matrix logic in `game_logic.dart` strictly isolated from Flutter UI rendering. Features persistent high-score tracking, board saturation detection, and zero layout shift across iOS, Android, and Desktop.
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
];

export default PROJECTS;
