import pqa from "@/utils/pastQuestionsArchive";
import LinkList from "@/components/LinkList";

export default function Course({
  params,
}: {
  params: {
    institution: string;
    department: string;
    session: string;
    level: string;
    semester: string;
  };
}) {
  const { institution, department, session, level, semester } = params;

  const courses = pqa[institution]["departments"][department]["sessions"][
    session
  ]["levels"][level]["semesters"][semester]["courses"].map(
    (course: { href: string; name: string }) => ({
      ...course,
      href: `/past-questions-archive/${institution}/${department}/${session}/${level}/${semester}/${course.href}`,
    }),
  );

  return <LinkList items={courses} isOrdered={true} />;
}
