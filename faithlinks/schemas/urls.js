const urls = {
  title: "Links",
  type: "document",
  name: "links",
  fields: [
    {
      title: "Display Text",
      description: "This is what will appear on the screen",
      name: "displayText",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "URL",
      description: "Where do you want the link to take the user?",
      name: "url",
      type: "url",
      validation: Rule => Rule.required()
    },
    {
      title: "Active",
      description: "Enable this if you'd like this link to be displayed",
      name: "active",
      type: "boolean"
    }
  ]
};

export default urls;