"use client";

import Link from "next/link";
import { BsGithub, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-11 py-20 md:gap-14">
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="font-monoton text-4xl text-sky-900 dark:text-sky-50 md:text-5xl">
          ExamShare
        </h2>
        <p className="text-xs md:text-base lg:text-base">
          Learn from the Past, Thrive in the Present
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <ul className="flex w-full justify-center gap-6" aria-label="Community">
          <li>
            <Link href="https://github.com/udohjeremiah/examshare">
              <BsGithub size={25} />
            </Link>
          </li>
          <li>
            <Link href="">
              <BsTwitter size={25} />
            </Link>
          </li>
          <li>
            <Link href="">
              <BsFacebook size={25} />
            </Link>
          </li>
          <li>
            <Link href="">
              <BsInstagram size={25} />
            </Link>
          </li>
        </ul>
        <p className="text-xs md:text-base">
          &copy; 2023 ExamShare. All rights reserved.
        </p>
        <div className="flex w-full items-center justify-center gap-5 text-xs">
          <Link
            href="/privacy-policy"
            className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          >
            Terms of Use
          </Link>
          <Link
            href="/legal-disclaimer"
            className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          >
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
