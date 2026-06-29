import { lazy, Suspense } from "react";
import pqa from "@/utils/past-questions-archive";

export default async function Course({
  params,
}: {
  params: Promise<{
    institution: string;
    department: string;
    session: string;
    level: string;
    semester: string;
    course: string;
  }>;
}) {
  const { institution, department, session, level, semester, course } =
    await params;
  // @ts-expect-error — dynamic string index on inferred JSON type
  const courseData = pqa[institution]["departments"][department]["sessions"][
    session
  ]["levels"][level]["semesters"][semester]["courses"].find(
    (c: { href: string; question?: string }) => c.href === course,
  );

  // Get the questions key from the courseData
  const questionsKey = courseData ? courseData.question : null;

  // Dynamically import the component using the questionsKey
  const QAndAComponent = questionsKey
    ? lazy(() => import(`@/questions/${questionsKey}`))
    : null;

  return (
    <div>
      {QAndAComponent ? (
        <Suspense fallback={<div>Loading...</div>}>
          <QAndAComponent />
        </Suspense>
      ) : (
        <p>No questions available for this course.</p>
      )}
    </div>
  );
}
