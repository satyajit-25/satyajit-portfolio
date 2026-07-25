import { defineTool } from "@lovable.dev/mcp-js";

const skills = [
  { category: "Programming Languages", items: [{ name: "Java", level: 90 }, { name: "Python", level: 85 }] },
  { category: "Web Development", items: [{ name: "HTML", level: 95 }, { name: "CSS", level: 90 }, { name: "JavaScript", level: 85 }] },
  { category: "Database Management", items: [{ name: "SQL", level: 90 }, { name: "Oracle", level: 85 }] },
  { category: "Core Concepts", items: [{ name: "Data Structures", level: 88 }, { name: "Algorithms", level: 85 }, { name: "OOP", level: 92 }] },
  { category: "Tools & Technologies", items: [{ name: "Git", level: 90 }, { name: "GitHub", level: 88 }, { name: "AI Concepts", level: 75 }] },
];

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "Return Satyajit's technical skills grouped by category, with proficiency levels (0-100).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
    structuredContent: { skills },
  }),
});
