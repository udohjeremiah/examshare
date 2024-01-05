import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "EMT 103 - Practical Biology I",
      route: "1st-semester/emt103",
    },
  ],
};

export default function _1st_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
