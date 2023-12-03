import LinkList from "@/components/LinkList";

const sessions = {
  "": [{ name: "2022/2023", route: "phywithelect/2022_2023" }],
};

export default function PhyWithElec() {
  return <LinkList items={sessions} isOrdered={true} />;
}
