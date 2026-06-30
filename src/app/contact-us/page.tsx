import Link from "next/link";

import { BreadCrumb } from "@/components/bread-crumb";
import { ContactForm } from "@/components/contact-form";

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
          className="font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href="/#faqs"
        >
          FAQ section
        </Link>
        . To connect with our community, you can find us on{" "}
        <Link
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href="https://github.com/udohjeremiah/examshare"
        >
          GitHub
        </Link>
        ,{" "}
        <Link
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href=""
        >
          Twitter
        </Link>
        ,{" "}
        <Link
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href=""
        >
          Facebook
        </Link>
        , and{" "}
        <Link
          className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href=""
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
