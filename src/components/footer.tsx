"use client";

import Link from "next/link";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-11 py-16 shadow-[inset_0_1px_0_0] shadow-sky-100 md:gap-14 dark:shadow-sky-800">
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-4xl font-bold text-sky-900 md:text-5xl dark:text-sky-50">
          ExamShare
        </h2>
        <p className="text-xs md:text-base lg:text-base">
          Learn from the Past, Thrive in the Present
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <ul aria-label="Community" className="flex w-full justify-center gap-6">
          <li>
            <Link href="https://github.com/udohjeremiah/examshare">
              <BsGithub size={25} />
              <span className="sr-only">ExamShare on GitHub</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <BsTwitter size={25} />
              <span className="sr-only">ExamShare on Twitter</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <BsFacebook size={25} />
              <span className="sr-only">ExamShare on Facebook</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <BsInstagram size={25} />
              <span className="sr-only">ExamShare on Instagram</span>
            </Link>
          </li>
        </ul>
        <p className="text-xs md:text-base">
          &copy; {new Date().getFullYear()} ExamShare. All rights reserved.
        </p>
        <div className="flex w-full items-center justify-center gap-5 text-xs">
          <Link
            className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
            href="/terms-and-conditions"
          >
            Terms of Use
          </Link>
          <Link
            className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
            href="/legal-disclaimer"
          >
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
