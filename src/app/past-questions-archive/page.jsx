import LinkList from "@/components/LinkList";
import BreadCrumb from "@/components/BreadCrumb";
import nigerianUniversities from "@/utils/nigerianUniversities";

export const metadata = {
  title: "Past Questions Archive | ExamShare",
};

export default function PastQuestionsArchive() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:shadow-sky-800 md:px-10">
      <BreadCrumb />
      <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">
        Past Questions Archive
      </h2>
      <p className="max-w-prose text-center">
        The importance of learning from the past lies in emphasizing that
        understanding the format and content of previous exams can significantly
        enhance your preparation. However, there is a risk in assuming that past
        examination questions mirror those you will encounter. We encourage
        using these questions solely for preparatory purposes, without any
        expectation of encountering the exact same questions in your exams.
      </p>
      <div className="flex w-full max-w-prose flex-col gap-2">
        <LinkList items={nigerianUniversities} isOrdered={true} />
      </div>
    </div>
  );
}
