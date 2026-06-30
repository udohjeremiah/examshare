import { LinkList } from "@/components/link-list";
import { pqa } from "@/utils/past-questions-archive";

export default async function Session({
  params,
}: {
  params: Promise<{ department: string; institution: string; session: string }>;
}) {
  const { department, institution, session } = await params;

  const levelKeys = Object.keys(
    pqa[institution]["departments"][department]["sessions"][session]["levels"],
  );
  const levels = levelKeys.map((levelKey) => ({
    href: `/past-questions-archive/${institution}/${department}/${session}/${levelKey}`,
    name: pqa[institution]["departments"][department]["sessions"][session][
      "levels"
    ][levelKey]["name"],
  }));

  return <LinkList isOrdered={true} items={levels} />;
}
