import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "GST 103 - Philosophy and Logic",
      route: "1st-semester/gst103",
    },
  ],
};

export default function _1st_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
