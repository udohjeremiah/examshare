import { lazy, Suspense } from "react";

import { pqa } from "@/utils/past-questions-archive";

export default async function Course({
  params,
}: {
  params: Promise<{
    course: string;
    department: string;
    institution: string;
    level: string;
    semester: string;
    session: string;
  }>;
}) {
  const { course, department, institution, level, semester, session } =
    await params;
  const courseData = pqa[institution]["departments"][department]["sessions"][
    session
  ]["levels"][level]["semesters"][semester]["courses"].find(
    (c: { href: string; question?: string }) => c.href === course,
  );

  // Get the questions key from the courseData
  const questionsKey = courseData ? courseData.question : undefined;

  // Dynamically import the component using the questionsKey
  const QAndAComponent = questionsKey
    ? lazy(async () => {
        const module = await import(`@/questions/${questionsKey}`);
        return { default: module.PastQuestion };
      })
    : undefined;

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
