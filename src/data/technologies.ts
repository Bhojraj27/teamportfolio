export type TechCategory = {
  id: string;
  title: string;
  accent: "blue" | "indigo" | "violet" | "cyan";
  items: string[];
};

export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    accent: "blue",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    accent: "indigo",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "JWT",
      "API Architecture",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    accent: "violet",
    items: ["MongoDB", "MySQL", "PostgreSQL", "SQL"],
  },
  {
    id: "mobile",
    title: "Mobile",
    accent: "cyan",
    items: ["React Native", "JavaScript", "TypeScript", "REST APIs"],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    accent: "blue",
    items: ["AWS", "EC2", "S3", "Cloud deployment", "Docker", "Nginx"],
  },
  {
    id: "devops",
    title: "DevOps",
    accent: "violet",
    items: [
      "CI/CD",
      "GitHub Actions",
      "Git",
      "Automated deployment",
      "Production pipelines",
    ],
  },
];
