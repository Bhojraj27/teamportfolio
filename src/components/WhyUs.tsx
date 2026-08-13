import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { whyUs } from "@/data/whyUs";

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why us"
            title="Why Work With Us?"
            subtitle="Credibility through craft, communication, and production-ready engineering — not inflated claims."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whyUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="h-full rounded-3xl border border-white/8 bg-surface p-6">
                <p className="font-mono text-[11px] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
