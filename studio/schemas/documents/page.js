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
      name: "herobanner",
      title: "Herobanner",
      type: "array",
      of: [
        {
          type: "herobanner",
        },
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
