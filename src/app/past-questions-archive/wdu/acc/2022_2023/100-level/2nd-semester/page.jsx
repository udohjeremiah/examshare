import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "ACC 102 - Introduction to Financial Accounting II",
      route: "2nd-semester/acc102",
    },
    {
      name: "BFN 102 - Element of Banking II",
      route: "2nd-semester/bfn102",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
