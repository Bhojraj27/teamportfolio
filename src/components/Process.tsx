import { ButtonLink } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="section-shell section-pad relative">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="How We Work"
            subtitle="A clear path from conversation to production, without ceremony that slows delivery."
          />
        </Reveal>

        <ol className="relative mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <span
            className="pointer-events-none absolute left-8 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[color:color-mix(in_srgb,var(--accent)_40%,transparent)] to-transparent md:hidden"
            aria-hidden="true"
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 70}>
              <li className="glass-interactive card-accent-edge relative h-full rounded-3xl p-6">
                <div className="mb-6 h-px w-16 bg-gradient-to-r from-[color:color-mix(in_srgb,var(--accent)_55%,transparent)] to-transparent" />
                <p className="font-mono text-xs text-accent">{step.number}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10">
          <ButtonLink href="/#contact" arrow>
            Have an idea? Let&apos;s discuss it.
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
