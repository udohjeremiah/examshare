import LinkList from "@/components/LinkList";

const sessions = {
  "": [{ name: "2022/2023", route: "pol/2022_2023" }],
};

export default function Pol() {
  return <LinkList items={sessions} isOrdered={true} />;
}
