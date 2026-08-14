import { ButtonLink } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { engagementModels } from "@/data/engagement";
import { cn } from "@/lib/utils";

export function EngagementModels() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Engagement"
            title="Ways to Work Together"
            subtitle="Choose the model that matches your product stage. Pricing is scoped after we understand the work, never a fake number on a page."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {engagementModels.map((model, index) => (
            <Reveal key={model.id} delay={index * 80}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-[1.8rem] border p-7",
                  model.featured
                    ? "border-accent/40 bg-gradient-to-b from-accent/12 to-surface shadow-[0_0_40px_rgba(79,140,255,0.12)]"
                    : "border-white/8 bg-surface",
                )}
              >
                {model.featured ? (
                  <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-accent">
                    Most requested
                  </p>
                ) : (
                  <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-faint">
                    Engagement
                  </p>
                )}
                <h3 className="font-display text-2xl font-semibold">{model.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{model.description}</p>
                <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-faint">
                  Best for
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {model.bestFor.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink
                    href="/#contact"
                    variant={model.featured ? "primary" : "secondary"}
                    arrow
                  >
                    {model.cta}
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
