import LinkList from "@/components/LinkList";

const sessions = {
  "": [{ name: "2022/2023", route: "emt/2022_2023" }],
};

export default function EMT() {
  return <LinkList items={sessions} isOrdered={true} />;
}
