import LinkList from "@/components/LinkList";

const sessions = {
  "": [{ name: "2022/2023", route: "acc/2022_2023" }],
};

export default function Acc() {
  return <LinkList items={sessions} isOrdered={true} />;
}
