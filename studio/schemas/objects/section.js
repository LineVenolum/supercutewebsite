export default {
  name: "section",
  type: "object",
  title: "Section",
  fields: [
    { name: "title", type: "string", title: "Section name" },
    {
      name: "paragraph",
      type: "array",
      title: "Block",
      of: [
        {
          type: "sectionBlock",
        },
      ],
    },
  ],
};
