import pqa from "@/utils/past-questions-archive";
import LinkList from "@/components/link-list";

export default async function Course({
  params,
}: {
  params: Promise<{
    institution: string;
    department: string;
    session: string;
    level: string;
    semester: string;
  }>;
}) {
  const { institution, department, session, level, semester } = await params;

  // @ts-expect-error — dynamic string index on inferred JSON type
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
