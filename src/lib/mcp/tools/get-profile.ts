import { defineTool } from "@lovable.dev/mcp-js";

const profile = {
  name: "Satyajit Patra",
  headline: "B.Tech Computer Science student at Government College of Engineering Kalahandi (GCEK)",
  year: "4th Year",
  focus: [
    "Software Development (Java, Python)",
    "Web Development",
    "AI & Machine Learning",
    "Database Management (SQL, Oracle)",
    "Cybersecurity",
  ],
  bio: "Passionate CS student focused on building innovative, real-world solutions. Experienced leading project teams during internships at OCAC and Edunet Foundation with IBM.",
  website: "https://satyajit-portfolio.lovable.app",
};

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Return an overview of Satyajit Patra: name, education, focus areas, and short bio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
    structuredContent: profile,
  }),
});
