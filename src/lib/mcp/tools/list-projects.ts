import { defineTool } from "@lovable.dev/mcp-js";

const projects = [
  {
    title: "Error Detection and Resolution System",
    year: "2024",
    role: "Project Leader",
    company: "OCAC Internship",
    technologies: ["Java", "NetBeans IDE 8.2", "Oracle Database"],
    description:
      "Built during the OCAC internship to help teams track and fix bugs faster, streamlining testing and team collaboration.",
    details: "https://github.com/satyajit-25/EDRS/blob/main/README.md",
    code: "https://github.com/satyajit-25/EDRS/tree/main/src/ocacjava2_6pm",
  },
  {
    title: "AI Computer Vision Toolkit",
    year: "2025",
    role: "AI Intern",
    company: "OCAC Internship",
    technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    description:
      "Virtual mouse and hand gesture detection system — control a computer with hand gestures, no touch required.",
    details: "https://github.com/satyajit-25/VisionMouse/blob/main/README.md",
    code: "https://github.com/satyajit-25/VisionMouse/blob/main/ai_virtual_mouse.py",
  },
  {
    title: "Employee Salary Prediction",
    year: "2025",
    role: "ML Intern",
    company: "Edunet Foundation with IBM",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    description:
      "Machine-learning project predicting salaries from multiple factors, deployed as a Streamlit web app.",
    details: "https://github.com/satyajit-25/Employee-salary-prediction/blob/main/README.md",
    code: "https://github.com/satyajit-25/Employee-salary-prediction/blob/main/app.py",
  },
];

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "List projects Satyajit has built, with technologies, role, company, and links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
    structuredContent: { projects },
  }),
});
