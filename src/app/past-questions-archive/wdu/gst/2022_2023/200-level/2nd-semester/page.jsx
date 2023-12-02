import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "GST 202 - Peace Studies And Conflict Resolution",
      route: "2nd-semester/gst202",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
