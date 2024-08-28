import pqa from "@/utils/pastQuestionsArchive";
import LinkList from "@/components/LinkList";

export default function Level({ params }) {
  const { institution, department, session, level } = params;

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

  return <LinkList items={semesters} isOrdered={true} />;
}
