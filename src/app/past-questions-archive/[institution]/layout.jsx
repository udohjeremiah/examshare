import pqa from "@/utils/pastQuestionsArchive";
import BreadCrumb from "@/components/BreadCrumb";

export function generateMetadata({ params }) {
  const { institution } = params;
  const institutionName = pqa[institution]["name"];

  return { title: `Past Questions Archive - ${institutionName} | ExamShare` };
}

export default function InstitutionLayout({ children, params }) {
  const { institution } = params;
  const institutionName = pqa[institution]["name"];

  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 md:px-10">
      <BreadCrumb />
      <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">
        {institutionName}
      </h2>
      <div className="flex w-full max-w-prose flex-col gap-2">{children}</div>
    </div>
  );
}
