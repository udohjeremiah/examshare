import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "BUS 101 - Introduction to Business",
      route: "1st-semester/bus101",
    },
  ],
};

export default function _1st_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
