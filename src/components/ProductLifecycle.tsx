import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { lifecycleSteps } from "@/data/lifecycle";

export function ProductLifecycle() {
  return (
    <section className="section-shell section-alt relative py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capability"
            title="From First Commit to Production"
            subtitle="One team covering the full product lifecycle, from discovery through deployment and ongoing scale."
          />
        </Reveal>

        <Reveal className="mt-14">
          <ol className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <span
              className="pointer-events-none absolute left-[1.15rem] top-4 bottom-4 w-px bg-gradient-to-b from-white/25 to-transparent sm:hidden"
              aria-hidden="true"
            />
            {lifecycleSteps.map((step, index) => (
              <li
                key={step.number}
                className="glass-interactive relative rounded-2xl px-4 py-4 pl-12 sm:pl-4"
              >
                <span className="absolute left-4 top-5 size-2 rounded-full bg-accent sm:hidden" />
                <p className="font-mono text-[11px] text-accent">{step.number}</p>
                <p className="mt-2 text-sm font-medium leading-5 text-foreground">
                  {step.title}
                </p>
                {index < lifecycleSteps.length - 1 ? (
                  <span className="mt-3 hidden h-px w-full bg-gradient-to-r from-white/16 to-transparent lg:block" />
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
