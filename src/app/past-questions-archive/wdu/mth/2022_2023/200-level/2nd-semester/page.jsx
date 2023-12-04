import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "MTH 202 - Linear Algebra II",
      route: "2nd-semester/mth202",
    },
    {
      name: "MTH 206 - Mathematical Method I",
      route: "2nd-semester/mth206",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
