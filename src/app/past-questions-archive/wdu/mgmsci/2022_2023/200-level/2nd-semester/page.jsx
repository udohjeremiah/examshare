import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "BUS 202 - Principles of Management II",
      route: "2nd-semester/bus202",
    },
    {
      name: "MKT 202 - Principles of Marketing",
      route: "2nd-semester/mkt202",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
