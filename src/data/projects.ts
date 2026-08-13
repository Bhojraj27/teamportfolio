/**
 * Project portfolio content.
 * Add more projects here as the team publishes them. Keep metrics and
 * outcomes limited to work you can stand behind.
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

export const projects: Project[] = [
  {
    slug: "bynaus-ai",
    number: "01",
    name: "Bynaus AI",
    category: "SaaS / Construction Operations",
    problem:
      "General contractors lose hours on manual attendance, paperwork-heavy daily reports, fragmented cost-code data, and slow construction plan review.",
    solution:
      "A multi-tenant SaaS PWA that unifies field workforce management with document intelligence — clock-in, timecards, daily reports, sheets, and an AI assistant in one product.",
    description:
      "A multi-tenant, AI-augmented construction operations platform. Field crews clock in with face recognition and geolocation, supervisors run daily reports and projects, and AI supports document search, takeoff, and contract workflows.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "AWS",
      "OpenAI",
      "Gemini",
    ],
    contribution:
      "Full-stack engineering across the React PWA and Node.js API — attendance and timecards, daily-report automation, sheet annotation, Global Admin surfaces, and AI assistant integration.",
    liveUrl: "https://bynaus.ai",
    githubUrl: "",
    overview:
      "Bynaus AI is a multi-tenant B2B SaaS PWA for construction operations. It combines workforce management (attendance, timecards, shifts, daily reports, projects, cost codes) with document intelligence (plan processing, annotation, AI takeoff, and a RAG assistant). The product runs on phones, tablets in kiosk mode, and desktop, with a Global Admin portal for cross-tenant operations.",
    challenge:
      "Construction teams were working across disconnected tools: paper or ad-hoc timecards, emailed daily reports, fragmented cost-code data, and slow markup of architectural drawings. The product needed to work in the field — including shared kiosk tablets, geolocation, and flaky connectivity — while remaining a serious multi-tenant SaaS with role-based access.",
    approach:
      "We shipped a React PWA for the product surface and a Node.js / TypeScript REST API for business logic, tenancy, and integrations. Identity is handled with Auth0. MongoDB Atlas and Redis sit behind the API. AWS covers storage, face recognition, OCR, and background pipelines. Heavy LLM and RAG work is isolated in a Python AI companion so the browser never talks to model providers directly.",
    architecture: [
      "React PWA with role-based layouts, kiosk mode, and offline-capable Workbox caching",
      "Node.js / Express TypeScript API with JWT auth, RBAC, and tenant-scoped data access",
      "MongoDB Atlas as the system of record, including vector search for document RAG",
      "Redis for caching, rate limits, and cron leadership locks",
      "AWS S3, Rekognition, Textract, Lambda, and ECS Fargate for files, vision, OCR, and deploy",
      "Python AI companion for RAG, takeoff, and LLM orchestration with SSE streaming back to the PWA",
    ],
    features: [
      "Face-recognition clock-in/out with geolocation and kiosk mode",
      "Timecards, shifts, auto-clockout, and attendance rollups",
      "Scheduled daily reports with photos, signatures, PDF, and email delivery",
      "Projects, cost codes, RFIs, submittals, and HR violation tracking",
      "Construction sheet annotation with AI takeoff overlays",
      "Embedded RAG assistant for grounded document Q&A",
      "Global Admin portal for users, accounts, billing, and enrollment review",
    ],
    process: [
      "Map field workflows: clock-in, timecards, daily reports, and plan review",
      "Lock multi-tenant API contracts, RBAC, and data isolation",
      "Ship PWA modules in vertical slices with role-specific views",
      "Integrate AWS, email, and AI companion behind the API",
      "Add cron automation, observability, and production deploy on AWS",
    ],
    deployment:
      "The API runs in Docker on AWS ECS Fargate across environment-specific task definitions. The PWA is built and served through Nginx, with CloudFront-style static delivery. CI/CD handles lint, tests, image build, and ECS updates. Sentry covers the PWA and API.",
    results:
      "The platform is live at bynaus.ai as a production PWA used across active construction accounts. Automated daily reports, auto-clockout, AI-assisted cost-code repair, and RAG-based document Q&A reduced manual operational work. Face-recognition attendance with GPS geofencing strengthened field accountability.",
    mockup: "saas",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
