import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "GST 102 - Use of English",
      route: "2nd-semester/gst102",
    },
    {
      name: "GST 104 - Nigerian Peoples and Culture",
      route: "2nd-semester/gst104",
    },
    {
      name: "GST 106 - History and Philosophy of Science",
      route: "2nd-semester/gst106",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
