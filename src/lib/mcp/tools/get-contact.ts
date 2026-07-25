import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  email: "satyajit.patra203@gmail.com",
  phone: "+91 79782 72616",
  linkedin: "https://linkedin.com/in/satyajit-patra-a33403323",
  github: "https://github.com/satyajit-25",
  website: "https://satyajit-portfolio.lovable.app",
};

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Return public contact channels for Satyajit: email, phone, LinkedIn, GitHub, and website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});
