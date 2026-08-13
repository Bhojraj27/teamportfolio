import Link from "next/link";
import { ProjectMockup } from "@/components/ProjectMockup";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import type { Project } from "@/data/projects";
import { siteConfig } from "@/data/site";

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="pb-24 pt-28">
      <Container>
        <p className="text-[11px] uppercase tracking-[0.22em] text-accent">
          Case study · {project.category}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/8 px-3 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/8">
          <ProjectMockup variant={project.mockup} className="min-h-[320px]" />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <SectionBlock title="Project Overview" body={project.overview} />
          <SectionBlock title="Challenge" body={project.challenge} />
          <SectionBlock title="Our Approach" body={project.approach} />
          <SectionBlock title="Team Contribution" body={project.contribution} />
        </div>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold">Architecture</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <ul className="space-y-3">
              {project.architecture.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/8 bg-surface px-4 py-3 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ArchitectureDiagram />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold">Technology Stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/4 px-3 py-1.5 text-sm text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold">Key Features</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-2xl border border-white/8 bg-surface px-4 py-4 text-sm text-muted"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold">
            Development Process
          </h2>
          <ol className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {project.process.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-white/8 bg-surface p-4"
              >
                <p className="font-mono text-[11px] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm text-muted">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-2">
          <SectionBlock title="Deployment" body={project.deployment} />
          <SectionBlock title="Results" body={project.results} />
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold">Screenshots</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <ProjectMockup variant={project.mockup} />
            <ProjectMockup
              variant={project.mockup === "ios" ? "saas" : "dashboard"}
            />
          </div>
        </section>

        <div className="mt-20 rounded-[2rem] border border-accent/25 bg-gradient-to-br from-accent/10 to-violet/5 p-8 text-center sm:p-12">
          <h2 className="font-display text-3xl font-semibold">
            Have a similar project? Let&apos;s build it.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
            {siteConfig.name} can take a comparable product from idea through
            production. Tell us what you&apos;re shipping.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/#contact" arrow>
              Let&apos;s Work Together
            </ButtonLink>
            <Link
              href="/#projects"
              className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm text-muted hover:text-foreground"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}

function SectionBlock({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted">{body}</p>
    </section>
  );
}

function ArchitectureDiagram() {
  const layers = ["Client", "API", "Data", "Cloud"];
  return (
    <div className="rounded-[1.6rem] border border-white/8 bg-surface p-5">
      <p className="text-[11px] uppercase tracking-[0.2em] text-faint">
        Architecture diagram
      </p>
      <div className="mt-5 space-y-3">
        {layers.map((layer, index) => (
          <div key={layer} className="text-center">
            <div className="rounded-xl border border-white/10 bg-white/4 py-3 text-sm text-foreground">
              {layer}
            </div>
            {index < layers.length - 1 ? (
              <div className="mx-auto h-4 w-px bg-gradient-to-b from-accent to-violet" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
