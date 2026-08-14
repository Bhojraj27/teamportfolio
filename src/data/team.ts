/**
 * Team member content.
 *
 * Each person should edit ONLY their own object below.
 * Do not add company names, client names, or employer brands on these cards.
 * Keep the card to: photo, name, role, short intro, experience, skills, links.
 *
 * Photo: drop a file in /public/team/ and set `photo` to that path.
 * Leave `photo` as "" to keep the gradient placeholder.
 */

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  intro: string;
  yearsOfExperience: string;
  technologies: string[];
  linkedin: string;
  github: string;
  email: string;
  photo: string;
  /** CSS object-position, e.g. "center 65%". Raise the % to move the face up. */
  photoPosition: string;
  initials: string;
  accent: "blue" | "indigo" | "violet" | "cyan";
};

export const team: TeamMember[] = [
  {
    id: "01",
    name: "Bhojraj Chavan",
    role: "Senior Full-Stack Engineer",
    intro:
      "Builds production SaaS products across React, TypeScript, Node.js, and AWS, from product UI and APIs through cloud deployment.",
    yearsOfExperience: "2 years 10 months+",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS",
    ],
    linkedin: "https://linkedin.com/in/bhojraj-chavan",
    github: "https://github.com/Bhojraj27",
    email: "bhojrajchavan5@gmail.com",
    photo: "/team/bhojraj-chavan-headshot.png",
    photoPosition: "center top",
    initials: "BC",
    accent: "blue",
  },
  {
    id: "02",
    name: "Shubham Hanmane",
    role: "React Native Engineer",
    intro:
      "Add a short bio covering React Native, mobile product engineering, and API-backed app delivery.",
    yearsOfExperience: "Add years",
    technologies: ["React Native", "JavaScript", "REST APIs", "Mobile UX"],
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-handle",
    email: "you@yourteam.com",
    photo: "",
    photoPosition: "center 50%",
    initials: "SH",
    accent: "indigo",
  },
  {
    id: "03",
    name: "Atharv Mirajkar",
    role: "React Native Engineer",
    intro:
      "Add a short bio covering React Native, cross-platform mobile apps, and production mobile workflows.",
    yearsOfExperience: "Add years",
    technologies: ["React Native", "TypeScript", "REST APIs", "Mobile UX"],
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-handle",
    email: "you@yourteam.com",
    photo: "",
    photoPosition: "center 50%",
    initials: "AM",
    accent: "cyan",
  },
  {
    id: "04",
    name: "Vikas Vitekar",
    role: "Full-Stack Engineer",
    intro:
      "Add a short bio covering React, Next.js, Node.js, and AWS-backed product development.",
    yearsOfExperience: "Add years",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-handle",
    email: "you@yourteam.com",
    photo: "",
    photoPosition: "center 50%",
    initials: "VV",
    accent: "violet",
  },
  {
    id: "05",
    name: "Pranil Veer",
    role: "Full-Stack / DevOps Engineer",
    intro:
      "Add a short bio covering MERN, Next.js, AWS deployment, Docker, and CI/CD pipelines.",
    yearsOfExperience: "Add years",
    technologies: ["React", "Node.js", "AWS", "Docker", "CI/CD"],
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-handle",
    email: "you@yourteam.com",
    photo: "",
    photoPosition: "center 50%",
    initials: "PV",
    accent: "blue",
  },
];
