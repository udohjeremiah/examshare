import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "ECO 101 - Principles of Economics I",
      route: "1st-semester/eco101",
    },
  ],
};

export default function _1st_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
