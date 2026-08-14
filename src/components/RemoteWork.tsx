import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { remotePoints } from "@/data/whyUs";

export function RemoteWork() {
  return (
    <section className="section-shell section-alt section-pad relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(143,163,188,0.08),transparent_55%)]" />
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10">
          <Reveal>
            <SectionHeading
              title="Engineering Support, Wherever You Are."
              subtitle="We work remotely with founders, startups, agencies and businesses around the world."
            />
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {remotePoints.map((point) => (
                <li
                  key={point}
                  className="glass-interactive rounded-2xl px-4 py-3 text-sm text-muted"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <GlobeVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function GlobeVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden sm:max-w-[380px] lg:max-w-[400px]">
      <svg viewBox="0 0 420 420" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="globe" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="var(--surface-2)" />
            <stop offset="70%" stopColor="var(--surface)" />
            <stop offset="100%" stopColor="var(--background)" />
          </radialGradient>
        </defs>
        <circle
          cx="210"
          cy="210"
          r="150"
          fill="url(#globe)"
          stroke="color-mix(in srgb, var(--accent) 45%, transparent)"
          strokeWidth="1.2"
        />
        <g
          fill="none"
          stroke="color-mix(in srgb, var(--foreground) 12%, transparent)"
          strokeWidth="1"
        >
          <ellipse cx="210" cy="210" rx="150" ry="52" />
          <ellipse cx="210" cy="210" rx="150" ry="100" />
          <ellipse cx="210" cy="210" rx="52" ry="150" />
          <ellipse cx="210" cy="210" rx="100" ry="150" />
          <line x1="60" y1="210" x2="360" y2="210" />
        </g>
        <path
          d="M80 170 C 140 120, 220 110, 280 150"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.2"
          className="animate-dash"
          opacity="0.8"
        />
        <path
          d="M120 280 C 180 240, 260 230, 330 250"
          fill="none"
          stroke="var(--violet)"
          strokeWidth="1.2"
          className="animate-dash"
          opacity="0.8"
        />
        <path
          d="M150 120 C 200 180, 240 250, 250 320"
          fill="none"
          stroke="var(--cyan)"
          strokeWidth="1.1"
          className="animate-dash"
          opacity="0.7"
        />
        {[
          [140, 150],
          [250, 130],
          [300, 200],
          [180, 250],
          [260, 280],
          [120, 220],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill="var(--accent)" />
            <circle
              cx={x}
              cy={y}
              r="9"
              fill="none"
              stroke="var(--accent)"
              opacity="0.35"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
