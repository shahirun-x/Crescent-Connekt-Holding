import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Users,
} from "lucide-react";
import { publicAssetExists } from "@/lib/assets";

type Pillar = {
  title: string;
  firstLine: string;
  secondLine: string;
  icon: LucideIcon;
};

const pillars: Pillar[] = [
  {
    title: "Education",
    firstLine: "Learning Today.",
    secondLine: "Leading Tomorrow.",
    icon: GraduationCap,
  },
  {
    title: "Alumni",
    firstLine: "Reunite. Engage.",
    secondLine: "Give Back.",
    icon: Users,
  },
  {
    title: "Business",
    firstLine: "Build. Partner.",
    secondLine: "Grow Together.",
    icon: Building2,
  },
  {
    title: "Careers",
    firstLine: "Skills. Mentorship.",
    secondLine: "New Horizons.",
    icon: Briefcase,
  },
  {
    title: "Community",
    firstLine: "Stronger People.",
    secondLine: "Healthier Communities.",
    icon: HeartHandshake,
  },
  {
    title: "Opportunities",
    firstLine: "Ideas. Initiatives.",
    secondLine: "Greater Impact.",
    icon: Lightbulb,
  },
];

function BackgroundArcs() {
  return (
    <svg
      aria-hidden="true"
      className="background-arcs"
      preserveAspectRatio="none"
      viewBox="0 0 1600 1200"
    >
      <defs>
        <filter id="soft-arc" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>
      <path
        d="M-220 1150C70 720 540 620 920 1230"
        fill="none"
        filter="url(#soft-arc)"
        opacity="0.55"
        stroke="var(--brand-wash)"
        strokeWidth="125"
      />
      <path
        d="M1820 1160C1500 700 1090 650 690 1235"
        fill="none"
        filter="url(#soft-arc)"
        opacity="0.55"
        stroke="var(--brand-wash)"
        strokeWidth="125"
      />
      <path
        d="M-180 680C100 420 310 430 535 730"
        fill="none"
        filter="url(#soft-arc)"
        opacity="0.28"
        stroke="var(--brand-wash)"
        strokeWidth="86"
      />
    </svg>
  );
}

function PillarConnector() {
  return (
    <svg
      aria-hidden="true"
      className="pillar-connector"
      preserveAspectRatio="none"
      viewBox="0 0 1200 160"
    >
      <path
        d="M-20 62C145 8 318 120 514 67S900 14 1220 92"
        fill="none"
        opacity="0.75"
        stroke="var(--brand-rail-line)"
        strokeWidth="1"
      />
      <path
        d="M-20 112C170 154 362 34 585 100S920 148 1220 45"
        fill="none"
        opacity="0.75"
        stroke="var(--brand-rail-line)"
        strokeWidth="1"
      />
      <path
        d="M-20 30C218 82 392 64 620 42S976 101 1220 126"
        fill="none"
        opacity="0.75"
        stroke="var(--brand-rail-line)"
        strokeWidth="1"
      />
      <circle cx="80" cy="67" fill="var(--brand-navy)" r="4" />
      <circle cx="155" cy="115" fill="var(--brand-red)" r="4" />
      <circle cx="230" cy="40" fill="var(--brand-rail-dot-muted)" r="3.5" />
      <circle cx="302" cy="86" fill="var(--brand-navy)" r="4" />
      <circle cx="375" cy="128" fill="var(--brand-red)" r="4" />
      <circle cx="447" cy="44" fill="var(--brand-rail-dot-muted)" r="3.5" />
      <circle cx="526" cy="92" fill="var(--brand-navy)" r="4" />
      <circle cx="610" cy="55" fill="var(--brand-red)" r="4" />
      <circle cx="686" cy="118" fill="var(--brand-rail-dot-muted)" r="3.5" />
      <circle cx="760" cy="72" fill="var(--brand-navy)" r="4" />
      <circle cx="842" cy="35" fill="var(--brand-red)" r="4" />
      <circle cx="914" cy="104" fill="var(--brand-rail-dot-muted)" r="3.5" />
      <circle cx="990" cy="59" fill="var(--brand-navy)" r="4" />
      <circle cx="1080" cy="128" fill="var(--brand-red)" r="4" />
      <circle cx="1156" cy="72" fill="var(--brand-rail-dot-muted)" r="3.5" />
    </svg>
  );
}

const LOGO_LOCKUP_CLASS_NAME =
  "logo-lockup fade-up fade-up--brand h-auto w-[200px] sm:w-[240px] lg:w-[340px]";
const LAUNCH_ART_CLASS_NAME =
  "launch-art fade-up fade-up--art mt-5 h-auto w-[220px] lg:absolute lg:right-[8%] lg:top-[12%] lg:mt-0 lg:w-[clamp(260px,19vw,330px)]";

function AssetPlaceholder({ className, label }: { className: string; label: string }) {
  return <div aria-label={label} className={`${className} asset-placeholder`} role="img" />;
}

function VisualPill({ children, filled = false }: { children: React.ReactNode; filled?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`visual-pill ${
        filled
          ? "bg-(--brand-navy) text-(--brand-bg)"
          : "border border-(--brand-navy) bg-(--brand-bg) text-(--brand-navy)"
      }`}
    >
      {children}
    </div>
  );
}

function CrescentDivider() {
  return (
    <div aria-hidden="true" className="crescent-divider fade-up fade-up--divider mt-14">
      <span className="crescent-divider__rule" />
      <svg height="14" viewBox="0 0 28 28" width="14">
        <defs>
          <mask id="divider-crescent-mask">
            <rect fill="black" height="28" width="28" />
            <circle cx="13" cy="14" fill="white" r="8" />
            <circle cx="17.5" cy="10.5" fill="black" r="7" />
          </mask>
        </defs>
        <circle cx="13" cy="14" fill="var(--brand-red)" r="8" mask="url(#divider-crescent-mask)" />
      </svg>
      <span className="crescent-divider__rule" />
    </div>
  );
}

export default function Home() {
  const hasLogoLockup = publicAssetExists("logo-lockup.png");
  const hasLaunchArt = publicAssetExists("launching-soon.png");

  return (
    <main className="relative min-h-svh overflow-hidden bg-(--brand-bg) text-(--brand-navy-deep)">
      <BackgroundArcs />

      <section
        aria-labelledby="page-heading"
        className="relative z-10 mx-auto flex min-h-svh w-full max-w-6xl flex-col items-center px-5 pb-12 pt-[72px] sm:px-8 lg:px-10"
      >
        {hasLogoLockup ? (
          <Image
            priority
            alt="CrescentConneKt — Connect, Collaborate, Empower"
            className={LOGO_LOCKUP_CLASS_NAME}
            height={358}
            src="/logo-lockup.png"
            width={613}
          />
        ) : (
          <AssetPlaceholder
            className={LOGO_LOCKUP_CLASS_NAME}
            label="CrescentConneKt — Connect, Collaborate, Empower"
          />
        )}

        {hasLaunchArt ? (
          <Image
            alt="Launching soon"
            className={LAUNCH_ART_CLASS_NAME}
            height={287}
            src="/launching-soon.png"
            width={541}
          />
        ) : (
          <AssetPlaceholder className={LAUNCH_ART_CLASS_NAME} label="Launching soon" />
        )}

        <p className="fade-up fade-up--tagline mt-[18px] text-center text-[14px] font-semibold leading-[1.45] text-(--brand-navy)">
          One Crescent. Many Institutions. One Connected Network.
        </p>

        <div className="fade-up fade-up--hero mt-9 flex flex-col items-center text-center">
          <h1
            className="max-w-5xl text-[clamp(28px,5vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-(--brand-navy-deep)"
            id="page-heading"
          >
            Connecting the Crescent Ecosystem
          </h1>
          <p className="mt-2 max-w-4xl text-[clamp(16px,2vw,26px)] font-normal leading-[1.35] text-(--brand-subhead)">
            One Crescent. Many Institutions. One Connected Network.
          </p>
        </div>

        <div className="fade-up fade-up--pills mt-9 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <VisualPill filled>
            <span>Explore the Network</span>
            <ArrowRight aria-hidden="true" className="h-4 w-4 text-(--brand-bg)" strokeWidth={1.75} />
          </VisualPill>
          <VisualPill>Get Connected</VisualPill>
        </div>

        <section
          aria-label="Six pillars of the Crescent ecosystem"
          className="fade-up fade-up--rail relative mt-16 w-full"
        >
          <PillarConnector />
          <div className="pillar-grid">
            {pillars.map(({ title, firstLine, secondLine, icon: Icon }) => (
              <article className="pillar-node" key={title}>
                <div className="pillar-circle">
                  <Icon
                    aria-hidden="true"
                    className="h-8 w-8 text-(--brand-navy)"
                    strokeWidth={1.75}
                  />
                </div>
                <h2 className="pillar-title">{title}</h2>
                <p className="pillar-caption">
                  {firstLine}
                  <br />
                  {secondLine}
                </p>
              </article>
            ))}
          </div>
        </section>

        <CrescentDivider />
      </section>
    </main>
  );
}
