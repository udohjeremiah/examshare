import LinkList from "@/components/LinkList";

const sessions = {
  "": [{ name: "2022/2023", route: "basicinduschem/2022_2023" }],
};

export default function BasicIndusChem() {
  return <LinkList items={sessions} isOrdered={true} />;
}
