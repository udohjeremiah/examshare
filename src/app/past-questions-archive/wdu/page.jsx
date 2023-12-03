import LinkList from "@/components/LinkList";

// source from https://wdu.edu.ng/academics/academic-programmes/
const departments = {
  b: [{ name: "Basic And Industrial Chemistry", route: "wdu/basicinduschem" }],
  c: [{ name: "Computer Science", route: "wdu/compsci" }],
  g: [{ name: "General Studies", route: "wdu/gst" }],
  m: [
    { name: "Management Sciences", route: "wdu/mgmsci" },
    { name: "Mathematics (Pure and Applied)", route: "wdu/mth" },
  ],
};

export default function WesternDeltaUniversity() {
  return <LinkList items={departments} isOrdered={true} />;
}
