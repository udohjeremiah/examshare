import LinkList from "@/components/LinkList";

const levels = {
  "": [
    { name: "100 Level", route: "2022_2023/100-level" },
    { name: "300 Level", route: "2022_2023/300-level" },
  ],
};

export default function _2022_2023() {
  return <LinkList items={levels} isOrdered={true} />;
}
