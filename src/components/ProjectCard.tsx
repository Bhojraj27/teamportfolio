import Link from "next/link";
import { GitHubIcon } from "@/components/icons";
import { ProjectMockup } from "@/components/ProjectMockup";
import { ButtonLink } from "@/components/ui/Button";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <article className="glass-interactive overflow-hidden rounded-[2rem]">
      <div
        className={cn(
          "grid lg:grid-cols-2",
          reverse && "lg:[&>div:first-child]:order-2",
        )}
      >
        <div className="group overflow-hidden p-4 sm:p-6">
          <div className="overflow-hidden rounded-[1.4rem] transition duration-700 group-hover:scale-[1.03]">
            <ProjectMockup variant={project.mockup} />
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {project.number} · {project.category}
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">
            {project.name}
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
          <dl className="mt-6 space-y-3 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-faint">
                Problem
              </dt>
              <dd className="mt-1 text-muted">{project.problem}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-faint">
                Solution
              </dt>
              <dd className="mt-1 text-muted">{project.solution}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-faint">
                Team contribution
              </dt>
              <dd className="mt-1 text-muted">{project.contribution}</dd>
            </div>
          </dl>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[color:var(--glass-border)] bg-[color:var(--accent-soft)] px-2.5 py-1 text-[11px] text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`/projects/${project.slug}`} arrow>
              Case Study
            </ButtonLink>
            <ButtonLink
              href={project.liveUrl}
              variant="secondary"
              external={project.liveUrl !== "#"}
            >
              Live Demo
            </ButtonLink>
            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                className="btn-glass-secondary inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm"
                {...(project.githubUrl !== "#"
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <GitHubIcon className="size-4" />
                GitHub
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
