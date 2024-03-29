import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "PHY 102 - Waves and Thermal Physics",
      route: "2nd-semester/phy102",
    },
    {
      name: "PHY 104 - General Modern Physics",
      route: "2nd-semester/phy104",
    },
  ],
};

export default function _2nd_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
