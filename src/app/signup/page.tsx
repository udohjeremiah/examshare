import BreadCrumb from "@/components/BreadCrumb";
import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";

export const metadata = {
  title: "Sign Up | ExamShare",
};

export default function SignUp() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 md:px-10">
      <BreadCrumb />
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
        Create An Account
      </h2>
      <p className="max-w-prose text-center">
        Thank you for joining the{" "}
        <Link
          href="https://opensource.com/resources/what-open-education"
          className="font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          open-source education
        </Link>{" "}
        community on Examshare. By signing up, you access collaborative
        learning, share, discuss, and learn from others&apos; answers to past
        examination questions. Your impact lies in shaping the future and
        contributing to a timeless resource for future generations.
      </p>
      <div className="flex w-full max-w-prose flex-col">
        <SignUpForm />
      </div>
    </div>
  );
}
