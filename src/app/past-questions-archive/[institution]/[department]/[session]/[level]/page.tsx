import { LinkList } from "@/components/link-list";
import { pqa } from "@/utils/past-questions-archive";

export default async function Level({
  params,
}: {
  params: Promise<{
    department: string;
    institution: string;
    level: string;
    session: string;
  }>;
}) {
  const { department, institution, level, session } = await params;

  const semesterKeys = Object.keys(
    pqa[institution]["departments"][department]["sessions"][session]["levels"][
      level
    ]["semesters"],
  );
  const semesters = semesterKeys.map((semesterKey) => ({
    href: `/past-questions-archive/${institution}/${department}/${session}/${level}/${semesterKey}`,
    name: pqa[institution]["departments"][department]["sessions"][session][
      "levels"
    ][level]["semesters"][semesterKey]["name"],
  }));

  return <LinkList isOrdered={true} items={semesters} />;
}
