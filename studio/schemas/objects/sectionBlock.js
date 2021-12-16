export default {
  name: "sectionBlock",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    { name: "paragraph", type: "text", title: "Paragraph" },
    { name: "image", type: "mainImage", title: "Image" },
  ],
};
