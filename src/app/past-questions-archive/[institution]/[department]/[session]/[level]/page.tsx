import pqa from "@/utils/past-questions-archive";
import LinkList from "@/components/link-list";

export default async function Level({
  params,
}: {
  params: Promise<{
    institution: string;
    department: string;
    session: string;
    level: string;
  }>;
}) {
  const { institution, department, session, level } = await params;

  const semesterKeys = Object.keys(
    // @ts-expect-error — dynamic string index on inferred JSON type
    pqa[institution]["departments"][department]["sessions"][session]["levels"][
      level
    ]["semesters"],
  );
  const semesters = semesterKeys.map((semesterKey) => ({
    href: `/past-questions-archive/${institution}/${department}/${session}/${level}/${semesterKey}`,
    // @ts-expect-error — dynamic string index on inferred JSON type
    name: pqa[institution]["departments"][department]["sessions"][session][
      "levels"
    ][level]["semesters"][semesterKey]["name"],
  }));

  return <LinkList items={semesters} isOrdered={true} />;
}
