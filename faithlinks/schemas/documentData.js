const documentData = {
  title: "Document Data",
  name: "documentData",
  type: "document",
  fields: [
    {
      title: "Page Title",
      name: "pageTitle",
      description: "This is the big title at the top of the page",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Sunday Title",
      name: "sundayTitle",
      description: "This is the name of the Sunday on the Church Calendar, like: 'First Sunday of Advent'",
      type: "string",
      validation: Rule => Rule.required()
    }
  ]
};

export default documentData;