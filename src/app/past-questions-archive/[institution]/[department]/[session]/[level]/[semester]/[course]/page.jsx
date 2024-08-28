import { lazy, Suspense } from "react";
import pqa from "@/utils/pastQuestionsArchive";

export default function Course({ params }) {
  const { institution, department, session, level, semester, course } = params;
  const courseData = pqa[institution]["departments"][department]["sessions"][
    session
  ]["levels"][level]["semesters"][semester]["courses"].find(
    (c) => c.href === course,
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
