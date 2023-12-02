import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "MTH 211 - Statistics",
      route: "1st-semester/mth211",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
