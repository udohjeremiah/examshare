import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "POL 102 - Forms and Organs of Government",
      route: "2nd-semester/pol102",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
