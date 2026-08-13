import Image from "next/image";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { team, type TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

const avatarAccent = {
  blue: "from-accent/50 to-indigo/20",
  indigo: "from-indigo/50 to-violet/20",
  violet: "from-violet/50 to-accent/20",
  cyan: "from-cyan/40 to-accent/20",
};

export function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Team"
            title="Meet the Engineering Team"
            subtitle="Five specialists working as one distributed engineering team."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {team.map((member, index) => (
            <Reveal key={member.id} delay={index * 70}>
              <MemberCard member={member} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group rounded-[1.75rem] border border-white/8 bg-surface p-5 transition duration-500 hover:-translate-y-1 hover:border-white/14">
      <div
        className={cn(
          "relative flex aspect-[4/5] items-end overflow-hidden rounded-[1.3rem] bg-gradient-to-br",
          avatarAccent[member.accent],
        )}
      >
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            fill
            sizes="(min-width: 1280px) 220px, (min-width: 640px) 45vw, 90vw"
            className="object-cover object-[center_18%] saturate-[0.9] contrast-[1.04]"
            priority={member.id === "01"}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_36%)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
        <span className="absolute left-4 top-4 font-mono text-xs text-white/80">
          {member.initials}
        </span>
        <div className="relative w-full p-4">
          <p className="font-display text-xl font-semibold leading-tight">
            {member.name}
          </p>
          <p className="mt-1 text-sm text-white/75">{member.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{member.intro}</p>
      <p className="mt-3 text-xs uppercase tracking-[0.16em] text-faint">
        Experience · {member.yearsOfExperience}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {member.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/8 px-2 py-1 text-[10px] text-faint"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-2 opacity-90 transition group-hover:opacity-100">
        <Social href={member.linkedin} label={`${member.name} LinkedIn`}>
          <LinkedInIcon className="size-3.5" />
        </Social>
        <Social href={member.github} label={`${member.name} GitHub`}>
          <GitHubIcon className="size-3.5" />
        </Social>
        <Social href={`mailto:${member.email}`} label={`${member.name} email`}>
          <Mail className="size-3.5" />
        </Social>
      </div>
    </article>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid size-8 place-items-center rounded-full border border-white/8 text-muted transition hover:border-accent/40 hover:text-foreground"
    >
      {children}
    </a>
  );
}
