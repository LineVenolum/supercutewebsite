export default {
  name: "herobanner",
  title: "Herobanner",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    { name: "h1", type: "string", title: "H1" },
    { name: "paragraph", type: "text", title: "Paragraph" },
    { name: "image", type: "mainImage", title: "Image" },
  ],
};
