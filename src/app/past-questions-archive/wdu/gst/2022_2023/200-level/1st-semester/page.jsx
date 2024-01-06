import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "GST 201 - Communication in French",
      route: "1st-semester/gst201",
    },
  ],
};

export default function _1st_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
