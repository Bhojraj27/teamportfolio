/**
 * Site-wide configuration.
 * Edit TEAM_NAME and contact links here. Teammates can update their own
 * profiles in src/data/team.ts without touching this file.
 */

export const TEAM_NAME = "Kestryn";

export const siteConfig = {
  name: TEAM_NAME,
  legalName: TEAM_NAME,
  tagline: "Remote engineering. Global collaboration. Production-ready software.",
  headlineLead: "Reliable Remote Development.",
  headlineSupport: "We design, build and deploy scalable digital products worldwide.",
  supportingHeadline:
    "We design, build and deploy scalable digital products for businesses worldwide.",
  description:
    "From MVPs and SaaS platforms to enterprise applications and mobile products, we deliver production-ready software across the entire development lifecycle.",
  availability: "Available for Remote Projects",
  microCopy: "Working remotely with clients worldwide",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "teamkestryn@gmail.com",
  linkedin: "https://www.linkedin.com/in/team-kestryn-191b79429",
  github: "https://github.com/Bhojraj27",
  whatsapp: "https://wa.me/917887780210",
  seo: {
    title: `${TEAM_NAME} — Remote Software Development`,
    description:
      "Remote software development specializing in React, Next.js, Node.js, AWS, PostgreSQL, MySQL, MongoDB, React Native and CI/CD.",
  },
  nav: [
    { href: "/#home", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#expertise", label: "Expertise" },
    { href: "/#projects", label: "Projects" },
    { href: "/#process", label: "Process" },
    { href: "/#contact", label: "Contact" },
  ],
  footerNav: [
    { href: "/#services", label: "Services" },
    { href: "/#expertise", label: "Expertise" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ],
  footerTech: [
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "AWS",
    "React Native",
    "CI/CD",
  ],
} as const;

export const trustItems = [
  "Remote Engineering",
  "Full-Stack Development",
  "Web + Mobile",
  "AWS & Cloud",
  "CI/CD",
  "Remote Worldwide",
] as const;
