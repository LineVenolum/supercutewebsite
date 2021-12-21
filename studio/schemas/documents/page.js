export default {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "This is the name of the site",
    },
    {
      name: "herobanner",
      title: "Herobanner",
      type: "array",
      of: [{ type: "herobanner" }],
    },
    {
      name: "section",
      title: "Sections",
      type: "array",
      of: [{ type: "section" }],
    },
  ],
};
