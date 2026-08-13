import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { techCategories } from "@/data/technologies";
import { cn } from "@/lib/utils";

const accentMap = {
  blue: "hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_24px_rgba(79,140,255,0.18)]",
  indigo:
    "hover:border-indigo/50 hover:bg-indigo/10 hover:text-indigo hover:shadow-[0_0_24px_rgba(109,123,255,0.18)]",
  violet:
    "hover:border-violet/50 hover:bg-violet/10 hover:text-violet hover:shadow-[0_0_24px_rgba(139,125,255,0.18)]",
  cyan: "hover:border-cyan/50 hover:bg-cyan/10 hover:text-cyan hover:shadow-[0_0_24px_rgba(79,209,197,0.18)]",
};

const dotMap = {
  blue: "bg-accent",
  indigo: "bg-indigo",
  violet: "bg-violet",
  cyan: "bg-cyan",
};

export function TechStack() {
  return (
    <section id="expertise" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
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
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border border-white/8 bg-surface px-3.5 py-2 text-sm text-muted transition duration-300",
                        accentMap[category.accent],
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          dotMap[category.accent],
                        )}
                      />
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
