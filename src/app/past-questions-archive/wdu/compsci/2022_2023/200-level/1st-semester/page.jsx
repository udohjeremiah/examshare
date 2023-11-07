import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "CSC 201 - Computer Programming I (Java)",
      route: "1st-semester/csc201",
    },
    {
      name: "CSC 203 - Computer Programming II",
      route: "1st-semester/csc203",
    },
    {
      name: "CSC 209 - Foundations of Sequential Programming",
      route: "1st-semester/csc209",
    },
    {
      name: "MTH 211 - Statistics",
      route: "1st-semester/mth211",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
