import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "BUS 102 - Introduction to Business II",
      route: "2nd-semester/bus102",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
