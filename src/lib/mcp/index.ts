import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listProjects from "./tools/list-projects";
import listSkills from "./tools/list-skills";
import listServices from "./tools/list-services";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "satyajit-portfolio-mcp",
  title: "Satyajit Patra — Portfolio",
  version: "0.1.0",
  instructions:
    "Public MCP server for Satyajit Patra's portfolio. Use these tools to answer questions about his profile, projects, skills, services, and contact info.",
  tools: [getProfile, listProjects, listSkills, listServices, getContact],
});
