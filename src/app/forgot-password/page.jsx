import BreadCrumb from "@/components/BreadCrumb";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";

export const metadata = {
  title: "Forgot Password | ExamShare",
};

export default function ForgotPassword() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:shadow-sky-800 md:px-10">
      <BreadCrumb />
      <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">
        Forgot Password
      </h2>
      <p className="max-w-prose text-center">
        You are not alone. We&apos;ve all been here at some point. Enter the
        email you signed up with in the input field below, and then click on the
        button to reset your password.
      </p>
      <div className="flex w-full max-w-prose flex-col">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
