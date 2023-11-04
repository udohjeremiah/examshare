import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 py-20 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:shadow-sky-800 md:px-10">
      <h2 className="text-4xl font-bold">404 Error</h2>
      <Image src="/404.svg" alt="" width={300} height={303} priority />
      <p className="max-w-prose text-center">
        You didn&apos;t break the internet, but unfortunately, we don&apos;t
        currently possess any past examination questions from your school.
        However, this presents an opportunity for you to pioneer{" "}
        <Link
          href="https://opensource.com/resources/what-open-education"
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          open-source education
        </Link>{" "}
        in Africa, by being the first person to{" "}
        <Link
          href="/submit-past-question"
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          submit a past question
        </Link>{" "}
        for your school. You can also{" "}
        <Link
          href="/past-questions-archive"
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          view past questions from other schools
        </Link>{" "}
        or{" "}
        <Link
          href="/"
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          visit our homepage
        </Link>{" "}
        to learn more about us.
      </p>
    </div>
  );
}
