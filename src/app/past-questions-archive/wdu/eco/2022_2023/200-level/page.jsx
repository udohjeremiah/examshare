import LinkList from "@/components/LinkList";

const semesters = {
  "": [{ name: "1st Semester", route: "200-level/1st-semester" }],
};

export default function _200_level() {
  return <LinkList items={semesters} isOrdered={true} />;
}
