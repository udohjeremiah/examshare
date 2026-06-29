import pqa from "@/utils/past-questions-archive";
import LinkList from "@/components/link-list";

export default async function Session({
  params,
}: {
  params: Promise<{ institution: string; department: string; session: string }>;
}) {
  const { institution, department, session } = await params;

  const levelKeys = Object.keys(
    // @ts-expect-error — dynamic string index on inferred JSON type
    pqa[institution]["departments"][department]["sessions"][session]["levels"],
  );
  const levels = levelKeys.map((levelKey) => ({
    href: `/past-questions-archive/${institution}/${department}/${session}/${levelKey}`,
    // @ts-expect-error — dynamic string index on inferred JSON type
    name: pqa[institution]["departments"][department]["sessions"][session][
      "levels"
    ][levelKey]["name"],
  }));

  return <LinkList items={levels} isOrdered={true} />;
}
