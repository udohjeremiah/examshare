import LinkList from "@/components/LinkList";

const semesters = {
  "": [{ name: "1st Semester", route: "100-level/1st-semester" }],
};

export default function _100_level() {
  return <LinkList items={semesters} isOrdered={true} />;
}
