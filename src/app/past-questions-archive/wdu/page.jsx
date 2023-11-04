import LinkList from "@/components/LinkList";

// source from https://wdu.edu.ng/academics/academic-programmes/
const departments = {
  c: [{ name: "Computer Science", route: "wdu/compsci" }],
};

export default function WesternDeltaUniversity() {
  return <LinkList items={departments} isOrdered={true} />;
}
