import { defineTool } from "@lovable.dev/mcp-js";

const services = [
  {
    title: "Web Development",
    description: "Responsive, user-friendly websites and web apps using modern frameworks and best practices.",
    features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"],
  },
  {
    title: "Software Development",
    description: "Robust software in Java and Python, focused on scalability and maintainability.",
    features: ["Object-Oriented Programming", "Algorithm Design", "Code Optimization", "Testing & Debugging"],
  },
  {
    title: "Database Solutions",
    description: "Efficient database systems with SQL and Oracle for optimal data management.",
    features: ["Database Design", "Query Optimization", "Data Migration", "Performance Tuning"],
  },
  {
    title: "AI & Machine Learning",
    description: "Applied ML solutions for intelligent automation and data-driven insight.",
    features: ["AI Algorithm Implementation", "Data Analysis", "Predictive Modeling", "Automation Solutions"],
  },
];

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the services Satyajit offers, with descriptions and feature highlights.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
