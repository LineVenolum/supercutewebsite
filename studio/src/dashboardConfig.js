export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61ba0b468b0c0f2fee0f1ffa",
                  title: "Sanity Studio",
                  name: "supercutewebsite-studio",
                  apiId: "133ba0d2-893c-4555-8a2e-a5d2d22d4484",
                },
                {
                  buildHookId: "61ba0b46272c302d953d8ba5",
                  title: "Blog Website",
                  name: "supercutewebsite",
                  apiId: "10ce4648-f744-4998-a16b-2e83c5763353",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/LineVenolum/supercutewebsite",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://supercutewebsite.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
