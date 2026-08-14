import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { techCategories } from "@/data/technologies";

export function TechStack() {
  return (
    <section id="expertise" className="section-shell section-accent-wash section-pad relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[color:var(--glass-border)] to-transparent" />
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Expertise"
            title="Our Engineering Stack"
            subtitle="Modern technologies. Production-ready architecture."
          />
        </Reveal>

        <div className="mt-14 space-y-10">
          {techCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 50}>
              <div className="grid gap-4 lg:grid-cols-[200px_minmax(0,1fr)] lg:items-start">
                <h3 className="pt-1 text-sm font-medium uppercase tracking-[0.18em] text-faint">
                  {category.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="chip-interactive inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm backdrop-blur-md"
                    >
                      <span className="size-1.5 rounded-full bg-accent" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
