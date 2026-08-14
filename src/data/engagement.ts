export const engagementModels = [
  {
    id: "project",
    title: "Project-Based",
    description:
      "A defined scope with clear milestones, from first commit through production release.",
    bestFor: ["MVPs", "SaaS products", "Websites", "Dashboards", "Mobile applications"],
    cta: "Discuss a Project",
    featured: false,
  },
  {
    id: "dedicated",
    title: "Dedicated Team",
    description:
      "A focused engineering unit that ships continuously with your product roadmap.",
    bestFor: ["Startups", "Growing companies", "Long-term development"],
    cta: "Discuss Dedicated Work",
    featured: true,
  },
  {
    id: "partner",
    title: "Remote Engineering Partner",
    description:
      "An extension of your existing team: reliable delivery without adding hiring overhead.",
    bestFor: ["Agencies", "Existing engineering teams", "Ongoing development"],
    cta: "Partner With Us",
    featured: false,
  },
] as const;
