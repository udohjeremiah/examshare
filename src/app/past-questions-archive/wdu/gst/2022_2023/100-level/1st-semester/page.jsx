import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "GST 101 - Use of English and Library",
      route: "1st-semester/gst101",
    },
    {
      name: "GST 103 - Philosophy and Logic",
      route: "1st-semester/gst103",
    },
  ],
};

export default function _1st_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
