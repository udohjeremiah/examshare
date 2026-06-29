import BreadCrumb from "@/components/BreadCrumb";
import SignInForm from "@/components/SignInForm";
import Link from "next/link";

export const metadata = {
  title: "Sign In | ExamShare",
};

export default function SignIn() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 md:px-10">
      <BreadCrumb />
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
        Log In
      </h2>
      <p className="max-w-prose text-center">
        Welcome back to ExamShare! Sign in to access the collaborative community
        advocating{" "}
        <Link
          href="https://opensource.com/resources/what-open-education"
          className="font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          open-source education
        </Link>{" "}
        and shaping the future of education for generations to come.
      </p>
      <div className="flex w-full max-w-prose flex-col">
        <SignInForm />
      </div>
    </div>
  );
}
