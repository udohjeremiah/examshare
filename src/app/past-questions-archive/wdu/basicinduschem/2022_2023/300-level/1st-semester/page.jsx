import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "CHM 303 - Inorganic Chemistry",
      route: "1st-semester/chm303",
    },
  ],
};

export default function _1st_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
