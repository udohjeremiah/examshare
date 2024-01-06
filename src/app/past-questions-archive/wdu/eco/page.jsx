import LinkList from "@/components/LinkList";

const sessions = {
  "": [{ name: "2022/2023", route: "eco/2022_2023" }],
};

export default function ECO() {
  return <LinkList items={sessions} isOrdered={true} />;
}
