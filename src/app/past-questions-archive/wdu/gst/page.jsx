import LinkList from "@/components/LinkList";

const sessions = {
  "": [{ name: "2022/2023", route: "gst/2022_2023" }],
};

export default function GST() {
  return <LinkList items={sessions} isOrdered={true} />;
}
