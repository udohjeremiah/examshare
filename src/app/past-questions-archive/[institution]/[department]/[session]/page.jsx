import pqa from "@/utils/pastQuestionsArchive";
import LinkList from "@/components/LinkList";

export default function Session({ params }) {
  const { institution, department, session } = params;

  const levelKeys = Object.keys(
    pqa[institution]["departments"][department]["sessions"][session]["levels"],
  );
  const levels = levelKeys.map((levelKey) => ({
    href: `/past-questions-archive/${institution}/${department}/${session}/${levelKey}`,
    name: pqa[institution]["departments"][department]["sessions"][session][
      "levels"
    ][levelKey]["name"],
  }));

  return <LinkList items={levels} isOrdered={true} />;
}
