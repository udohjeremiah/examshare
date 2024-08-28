import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | ExamShare",
};

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 md:px-10">
      <BreadCrumb />
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
        Contact Us
      </h2>
      <p className="max-w-prose text-center">
        Looking for more information? Please fill out the contact form below
        with your details, and an ExamShare representative will promptly get in
        touch with you. If you have a simple question, check out our{" "}
        <Link
          href="/#faqs"
          className="font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          FAQ section
        </Link>
        . To connect with our community, you can find us on{" "}
        <Link
          href="https://github.com/udohjeremiah/examshare"
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          GitHub
        </Link>
        ,{" "}
        <Link
          href=""
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          Twitter
        </Link>
        ,{" "}
        <Link
          href=""
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          Facebook
        </Link>
        , and{" "}
        <Link
          href=""
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          Instagram
        </Link>
        .
      </p>
      <div className="flex w-full max-w-prose flex-col">
        <ContactForm />
      </div>
    </div>
  );
}
