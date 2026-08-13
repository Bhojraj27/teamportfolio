import {
  ArrowUpRight,
  Cloud,
  Database,
  Layers3,
  Server,
  Smartphone,
  AppWindow,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { services, type Service } from "@/data/services";

const icons = {
  web: AppWindow,
  backend: Server,
  saas: Layers3,
  mobile: Smartphone,
  cloud: Cloud,
  database: Database,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What We Build"
            subtitle="End-to-end engineering for modern digital products."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/8 bg-surface p-6 transition duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:p-7">
      <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-accent/10 blur-3xl transition group-hover:bg-accent/20" />
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-faint">{service.number}</span>
        <span className="grid size-9 place-items-center rounded-full border border-white/8 text-muted transition duration-300 group-hover:border-accent/40 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <div className="mt-8 grid size-10 place-items-center rounded-2xl border border-white/8 bg-white/[0.03] text-accent">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[11px] text-faint"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
