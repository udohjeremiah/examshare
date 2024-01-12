import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "ECO 102 - Principles of Economics II",
      route: "2nd-semester/eco102",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
