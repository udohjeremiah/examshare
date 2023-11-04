import LinkList from "@/components/LinkList";

const sessions = {
  "": [{ name: "2022/2023", route: "compsci/2022_2023" }],
};

export default function CompSci() {
  return <LinkList items={sessions} isOrdered={true} />;
}
