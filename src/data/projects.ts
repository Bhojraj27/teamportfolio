/**
 * Project portfolio content.
 *
 * Only add work Kestryn owns, or company work with written permission.
 * Do not publish employer/client products without approval.
 * Do not invent clients, revenue, user counts, or results.
 *
 * Shape:
 * {
 *   slug: "your-project",
 *   number: "01",
 *   name: "Project name",
 *   category: "SaaS / Web Application",
 *   problem: "...",
 *   solution: "...",
 *   description: "...",
 *   technologies: ["React", "Next.js", "Node.js", "AWS"],
 *   contribution: "...",
 *   liveUrl: "https://...",
 *   githubUrl: "",
 *   overview: "...",
 *   challenge: "...",
 *   approach: "...",
 *   architecture: ["..."],
 *   features: ["..."],
 *   process: ["..."],
 *   deployment: "...",
 *   results: "...",
 *   mockup: "saas",
 * }
 */

export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  problem: string;
  solution: string;
  description: string;
  technologies: string[];
  contribution: string;
  liveUrl: string;
  caseStudyUrl?: string;
  githubUrl: string;
  overview: string;
  challenge: string;
  approach: string;
  architecture: string[];
  features: string[];
  process: string[];
  deployment: string;
  results: string;
  mockup: "saas" | "commerce" | "ios" | "dashboard";
};

export const projects: Project[] = [];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
