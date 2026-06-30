"use client";

import { usePathname } from "next/navigation";

import { QuestionsIdProvider } from "@/providers/questions-id-provider";

interface QuestionsProperties {
  allowedTime: string;
  children: React.ReactNode;
  college: string;
  courseCode: string;
  courseTitle: string;
  department: string;
  instruction: string;
  school: string;
  semester: string;
  session: string;
}

export function Questions({
  allowedTime,
  children,
  college,
  courseCode,
  courseTitle,
  department,
  instruction,
  school,
  semester,
  session,
}: QuestionsProperties) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter(Boolean);
  const id = pathNames.slice(1).join("_");

  return (
    <QuestionsIdProvider id={id}>
      <article className="flex flex-col gap-4">
        <hgroup>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 uppercase dark:text-white">
            department of {department}
            <br />
            college of {college}
            <br />
            {school}
          </h3>
          <p className="font-medium capitalize">
            {semester} examination {session} session
          </p>
          <p className="font-medium capitalize">
            {courseCode} - {courseTitle} time: {allowedTime}
          </p>
          <p className="font-medium capitalize">{instruction}</p>
        </hgroup>

        <hr />

        <ol className="flex flex-col gap-10 px-4">{children}</ol>
      </article>
    </QuestionsIdProvider>
  );
}
