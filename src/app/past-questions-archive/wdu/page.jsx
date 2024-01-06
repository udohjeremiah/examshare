import LinkList from "@/components/LinkList";

// source from https://wdu.edu.ng/academics/academic-programmes/
const departments = {
  b: [{ name: "Basic And Industrial Chemistry", route: "wdu/basicinduschem" }],
  c: [{ name: "Computer Science", route: "wdu/compsci" }],
  e: [
    { name: "Economics", route: "wdu/eco" },
    { name: "Environmental Management And Toxicology", route: "wdu/emt" },
  ],
  g: [{ name: "General Studies", route: "wdu/gst" }],
  m: [
    { name: "Management Sciences", route: "wdu/mgmsci" },
    { name: "Mathematics (Pure and Applied)", route: "wdu/mth" },
  ],
  p: [{ name: "Physics With Electronics", route: "wdu/phywithelect" }],
};

export default function WesternDeltaUniversity() {
  return <LinkList items={departments} isOrdered={true} />;
}
