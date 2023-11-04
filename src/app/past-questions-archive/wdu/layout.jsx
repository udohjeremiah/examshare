import BreadCrumb from "@/components/BreadCrumb";

export const metadata = {
  title: "Past Questions Archive - Western Delta University | ExamShare",
};

export default function WesternDeltaUniversityLayout({ children }) {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:shadow-sky-800 md:px-10">
      <BreadCrumb />
      <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">
        Western Delta University, Oghara Delta State
      </h2>
      <div className="flex w-full max-w-prose flex-col gap-2">{children}</div>
    </div>
  );
}
