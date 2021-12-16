export default {
  name: "page",
  type: "document",
  title: "Pages",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "This is the name of the site",
    },
    {
      title: "Herobanner",
      name: "herobanner",
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
    },
    {
      name: "section",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "section",
        },
      ],
    },
  ],
};
