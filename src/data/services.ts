export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: "web" | "backend" | "saas" | "mobile" | "cloud" | "database";
};

export const services: Service[] = [
  {
    id: "web",
    number: "01",
    title: "Web Application Development",
    description:
      "React, Next.js, MERN, TypeScript and modern frontend architecture for fast, maintainable product interfaces.",
    tags: ["React", "Next.js", "TypeScript", "MERN"],
    icon: "web",
  },
  {
    id: "backend",
    number: "02",
    title: "Backend & API Engineering",
    description:
      "Node.js, Express.js, REST APIs, authentication, databases and scalable backend architecture.",
    tags: ["Node.js", "Express", "REST", "Auth"],
    icon: "backend",
  },
  {
    id: "saas",
    number: "03",
    title: "SaaS & Product Development",
    description:
      "Build complete SaaS products from MVP to production — billing-ready architecture, dashboards, and multi-tenant foundations.",
    tags: ["MVP", "SaaS", "Dashboards", "Scale"],
    icon: "saas",
  },
  {
    id: "mobile",
    number: "04",
    title: "Mobile Development",
    description:
      "React Native and cross-platform mobile product engineering for iOS and Android, connected to production APIs.",
    tags: ["React Native", "iOS", "Android", "APIs"],
    icon: "mobile",
  },
  {
    id: "cloud",
    number: "05",
    title: "Cloud & DevOps",
    description:
      "AWS infrastructure, deployment architecture, Docker, CI/CD, monitoring and production environments.",
    tags: ["AWS", "Docker", "CI/CD", "Nginx"],
    icon: "cloud",
  },
  {
    id: "database",
    number: "06",
    title: "Database & Data Systems",
    description:
      "SQL, MySQL, PostgreSQL, MongoDB, database design, optimization and API integration.",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
    icon: "database",
  },
];
