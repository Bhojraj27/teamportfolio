import { ProjectCard } from "@/components/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Work"
              title="Selected Projects"
              subtitle="Real engineering work across web, mobile, SaaS and cloud."
            />
            <ButtonLink href="/#contact" variant="secondary" arrow>
              Start a Project
            </ButtonLink>
          </div>
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.length === 0 ? (
            <Reveal>
              <div className="rounded-[2rem] border border-white/8 bg-surface px-6 py-12 text-center sm:px-10">
                <p className="font-display text-2xl font-semibold tracking-tight">
                  Case studies coming soon
                </p>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted">
                  We publish work we own, or work we have written permission to
                  show. Start a conversation if you have a product to build.
                </p>
              </div>
            </Reveal>
          ) : (
            projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 60}>
                <ProjectCard project={project} reverse={index % 2 === 1} />
              </Reveal>
            ))
          )}
        </div>
      </Container>
    </section>
  );
}
