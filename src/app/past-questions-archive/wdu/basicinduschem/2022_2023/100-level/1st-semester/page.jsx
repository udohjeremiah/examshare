import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "CHM 101 - General Chemistry I",
      route: "1st-semester/chm101",
    },
  ],
};

export default function _1st_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
