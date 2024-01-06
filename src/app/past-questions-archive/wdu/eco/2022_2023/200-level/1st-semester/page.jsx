import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "ECO 201 - Introductory Microeconomics I",
      route: "1st-semester/eco201",
    },
  ],
};

export default function _1st_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
