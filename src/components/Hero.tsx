import { HeroVisual } from "@/components/HeroVisual";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pb-14"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 mesh" />
        <div className="absolute inset-0 grid-fade opacity-50" />
      </div>

      <Container className="relative">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10 xl:gap-12">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--accent-2)_40%,transparent)] bg-[color:var(--accent-2-soft)] px-3 py-1.5 text-xs text-muted backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-accent-2 opacity-50 animate-pulse-dot" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-2" />
              </span>
              {siteConfig.availability}
            </div>

            <h1 className="font-display text-[2.2rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              {siteConfig.headlineLead}
              <span className="mt-1 block text-gradient">
                {siteConfig.headlineSupport}
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {siteConfig.supportingHeadline}
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-faint">
              {siteConfig.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/#contact" arrow>
                Start a Project
              </ButtonLink>
              <ButtonLink href="/#projects" variant="secondary">
                Explore Our Work ↓
              </ButtonLink>
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.22em] text-faint">
              {siteConfig.microCopy}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px]">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
