import BreadCrumb from "@/components/BreadCrumb";
import VerifyEmailForm from "@/components/VerifyEmailForm";

export default function VerifyEmail() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:shadow-sky-800 md:px-10">
      <BreadCrumb />
      <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">
        Verify Email
      </h2>
      <p className="max-w-prose text-center">
        Email verification is a crucial step in ensuring the authenticity of our
        community. By confirming your email address, we enhance security and
        maintain a community free from fake identities and profiles. Thank you
        for your cooperation.
      </p>
      <div className="flex w-full max-w-prose flex-col">
        <VerifyEmailForm />
      </div>
    </div>
  );
}
