import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "EMT 104 - Practical Biology II",
      route: "2nd-semester/emt104",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
