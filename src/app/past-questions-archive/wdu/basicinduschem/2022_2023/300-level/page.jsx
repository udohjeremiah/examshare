import LinkList from "@/components/LinkList";

const semesters = {
  "": [{ name: "1st Semester", route: "300-level/1st-semester" }],
};

export default function _300_level() {
  return <LinkList items={semesters} isOrdered={true} />;
}
