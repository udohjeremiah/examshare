import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";
import SubmitForm from "@/components/SubmitForm";

export const metadata = {
  title: "Submit Past Question | ExamShare",
};

export default function SubmitPastQuestion() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:shadow-sky-800 md:px-10">
      <BreadCrumb />
      <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">
        Submit Past Question
      </h2>
      <p className="max-w-prose text-center">
        You are just one step away from becoming one of the early pioneers of{" "}
        <Link
          href="https://opensource.com/resources/what-open-education"
          className="font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          open-source education
        </Link>{" "}
        in Africa. Please fill out the submission form below with your details,
        including a clear photo or image of the past question you wish to
        submit. An ExamShare representative will promptly get in touch with you.
      </p>
      <div className="flex w-full max-w-prose flex-col">
        <SubmitForm />
      </div>
    </div>
  );
}
