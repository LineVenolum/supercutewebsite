export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Please describe your project",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Image",
    },
  ],
};
