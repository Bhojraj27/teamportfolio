import { HeroVisual } from "@/components/HeroVisual";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 mesh" />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-60" />

      <Container className="relative">
        <div className="grid items-center gap-10 pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:pb-8 xl:gap-12">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-cyan opacity-60 animate-pulse-dot" />
                <span className="relative inline-flex size-2 rounded-full bg-cyan" />
              </span>
              {siteConfig.availability}
            </div>

            <h1 className="font-display text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.65rem]">
              {siteConfig.headlineLead}
              <span className="mt-1 block text-gradient">
                {siteConfig.headlineSupport}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              {siteConfig.supportingHeadline}
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-faint">
              {siteConfig.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/#contact" arrow>
                Start a Project
              </ButtonLink>
              <ButtonLink href="/#projects" variant="secondary">
                Explore Our Work ↓
              </ButtonLink>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-faint">
              {siteConfig.microCopy}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[520px] lg:max-w-none">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
