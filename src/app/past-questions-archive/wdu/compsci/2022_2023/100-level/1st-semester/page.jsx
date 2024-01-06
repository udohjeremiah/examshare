import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "CSC 101 - Introduction to Computers and Spreadsheet Analysis (FOR LAW AND MANAGEMENT SCIENCES)",
      route: "1st-semester/csc101-law-mgmsci",
    },
    {
      name: "CSC 101 - Introduction to Computers and Spreadsheet Analysis (FOR SCIENCES)",
      route: "1st-semester/csc101-sci",
    },
  ],
};

export default function _1st_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
