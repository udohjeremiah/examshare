import { LinkList } from "@/components/link-list";
import { pqa } from "@/utils/past-questions-archive";

export default async function Course({
  params,
}: {
  params: Promise<{
    department: string;
    institution: string;
    level: string;
    semester: string;
    session: string;
  }>;
}) {
  const { department, institution, level, semester, session } = await params;

  const courses = pqa[institution]["departments"][department]["sessions"][
    session
  ]["levels"][level]["semesters"][semester]["courses"].map(
    (course: { href: string; name: string }) => ({
      ...course,
      href: `/past-questions-archive/${institution}/${department}/${session}/${level}/${semester}/${course.href}`,
    }),
  );

  return <LinkList isOrdered={true} items={courses} />;
}
