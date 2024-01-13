import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "BFN 102 - Element of Banking II",
      route: "2nd-semester/bfn102",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
