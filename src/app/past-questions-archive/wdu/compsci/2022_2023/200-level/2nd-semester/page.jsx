import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "CSC 202 - Assembly Language Processing",
      route: "2nd-semester/csc202",
    },
    { name: "CSC 204 - File Processing", route: "2nd-semester/csc204" },
    { name: "CSC 206 - Computer Hardware", route: "2nd-semester/cs206" },
    { name: "MTH 202 - Linear Algebra II", route: "2nd-semester/mth202" },
    { name: "MTH 206 - Mathematical Method I", route: "2nd-semeter/mth206" },
    {
      name: "PHY 208 - Electric Circuits and Electronics",
      route: "2nd-semester/phy208",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
