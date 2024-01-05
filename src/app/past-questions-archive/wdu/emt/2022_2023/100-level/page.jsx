import LinkList from "@/components/LinkList";

const semesters = {
  "": [{ name: "2nd Semester", route: "100-level/2nd-semester" }],
};

export default function _100_level() {
  return <LinkList items={semesters} isOrdered={true} />;
}
