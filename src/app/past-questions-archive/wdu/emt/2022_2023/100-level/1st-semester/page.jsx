import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "EMT 101 - General Biology I",
      route: "1st-semester/emt101",
    },
    {
      name: "EMT 103 - Practical Biology I",
      route: "1st-semester/emt103",
    },
  ],
};

export default function _1st_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
