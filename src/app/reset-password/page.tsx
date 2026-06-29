import BreadCrumb from "@/components/BreadCrumb";
import ResetPasswordForm from "@/components/ResetPasswordForm";

export default function ResetPassword() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 md:px-10">
      <BreadCrumb />
      <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">
        Reset Password
      </h2>
      <p className="max-w-prose text-center">
        You are just one step away from successfully recovering your account.
        Please fill the form below to complete the process and regain access to
        your account.
      </p>
      <div className="flex w-full max-w-prose flex-col">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
