import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "MTH 202 - Linear Algebra II",
      route: "2nd-semester/mth202",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
