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
        <p className="text-xs md:text-base lg:text-base">
          © 2023 ExamShare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
