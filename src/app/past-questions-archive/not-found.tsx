import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 py-20 shadow-[inset_0_-1px_0_0] shadow-sky-100 md:px-10 dark:shadow-sky-800">
      <h2 className="text-4xl font-bold">404 Error</h2>
      <Image alt="" height={303} priority src="/404.svg" width={300} />
      <p className="max-w-prose text-center">
        You didn&apos;t break the internet, but unfortunately, we don&apos;t
        currently possess any past examination questions from your school.
        However, this presents an opportunity for you to pioneer{" "}
        <Link
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href="https://opensource.com/resources/what-open-education"
        >
          open-source education
        </Link>{" "}
        in Africa, by being the first person to{" "}
        <Link
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href="/submit-past-question"
        >
          submit a past question
        </Link>{" "}
        for your school. You can also{" "}
        <Link
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href="/past-questions-archive"
        >
          view past questions from other schools
        </Link>{" "}
        or{" "}
        <Link
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href="/"
        >
          visit our homepage
        </Link>{" "}
        to learn more about us.
      </p>
    </div>
  );
}
