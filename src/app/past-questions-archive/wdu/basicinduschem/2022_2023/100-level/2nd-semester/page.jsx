import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "CHM 102 - General Chemistry II",
      route: "2nd-semester/chm102",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
