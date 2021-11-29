const announcement = {
  title: "Announcements",
  name: "announcements",
  type: "document",
  fields: [
    {
      title: "Announcement Title",
      name: "announcementTitle",
      type: "string"
    },
    {
      title: "Announcement Content",
      name: "announcementContent",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      title: "Active",
      description: "Enable this if you'd like this announcement to be displayed",
      name: "active",
      type: "boolean"
    },
    {
      title: "Priority",
      description: "Set this number to control the order in which the announcements are displayed. Lower numbers will be rendered before higher numbers.",
      name: "priority",
      type: "number",
      hidden: ({document}) => !document?.active
    }
  ]
};

export default announcement;