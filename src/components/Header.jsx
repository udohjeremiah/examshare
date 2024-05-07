"use client";

import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { FiSun } from "react-icons/fi";
import { PiMoonStarsBold, PiChatsBold } from "react-icons/pi";
import { MdClose, MdLogin } from "react-icons/md";
import { BiBookAlt, BiAddToQueue } from "react-icons/bi";
import { TbBuildingBank } from "react-icons/tb";
import { useState, useRef } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import useClickOutside from "@/hooks/useClickOutside";
import { useSession } from "next-auth/react";
import ProfileMenu from "./ProfileMenu";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showThemeNav, setShowThemeNav] = useState(false);
  const { theme, setTheme } = useTheme();

  const mobileNavRef = useRef(null);
  const showMobileNavRef = useRef(null);
  const themeNavRef = useRef(null);
  const showThemeNavRef = useRef(null);

  useClickOutside(mobileNavRef, showMobileNavRef, () =>
    setShowMobileNav(false),
  );
  useClickOutside(themeNavRef, showThemeNavRef, () => setShowThemeNav(false));

  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-white/80 px-4 py-2 text-slate-900 shadow-[inset_0_-1px_0_0] shadow-sky-100 backdrop-blur-sm dark:bg-slate-800/80 dark:text-slate-50 dark:shadow-sky-800 md:px-10">
      <Link href="/">
        <h1 className="font-monoton text-lg">EXAMSHARE</h1>
      </Link>
      <div className="flex items-center gap-2 lg:grow lg:gap-0">
        <div className="flex items-center lg:hidden">
          <button
            ref={showMobileNavRef}
            type="button"
            onClick={() => setShowMobileNav(true)}
            aria-label="Menu"
          >
            <HiMenuAlt3 size={25} />
          </button>
          <nav
            aria-hidden={showMobileNav}
            className={`fixed right-0 top-0 z-50 flex min-h-screen w-screen bg-slate-900/70 transition-opacity duration-1000 ease-in-out dark:bg-slate-700/70 ${
              showMobileNav ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <div className="w-1/4"></div>
            <div
              ref={mobileNavRef}
              className="flex min-h-screen w-3/4 flex-col gap-8 bg-sky-50 px-4 py-6 text-slate-600 dark:bg-sky-900 dark:text-slate-300 md:px-10"
            >
              <button
                aria-label="close menu"
                onClick={() => setShowMobileNav(false)}
                className="self-end p-2"
              >
                <MdClose size={25} />
              </button>
              <ul className="flex flex-col gap-6">
                <li className="max-w-max">
                  <Link
                    href="/about-us"
                    className="flex items-center gap-2"
                    onClick={() => setShowMobileNav(false)}
                  >
                    <BiBookAlt size={25} />
                    <span>About Us</span>
                  </Link>
                </li>
                <li className="max-w-max">
                  <Link
                    href="/contact-us"
                    className="flex items-center gap-2"
                    onClick={() => setShowMobileNav(false)}
                  >
                    <PiChatsBold size={25} />
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li className="max-w-max">
                  <Link
                    href="/past-questions-archive"
                    className="flex items-center gap-2"
                    onClick={() => setShowMobileNav(false)}
                  >
                    <TbBuildingBank size={25} />
                    <span>Past Questions Archive</span>
                  </Link>
                </li>
                <li className="max-w-max">
                  <Link
                    href="/submit-past-question"
                    className="flex items-center gap-2"
                    onClick={() => setShowMobileNav(false)}
                  >
                    <BiAddToQueue size={25} />
                    <span>Submit Past Question</span>
                  </Link>
                </li>
                {!session && (
                  <li className="max-w-max">
                    <Link
                      href="/signin"
                      className="flex items-center gap-2"
                      onClick={() => setShowMobileNav(false)}
                    >
                      <MdLogin size={25} />
                      <span>Log In</span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex grow items-center font-medium text-slate-600 dark:text-slate-300 max-lg:hidden">
          <nav className="grow">
            <ul className="flex items-center justify-evenly text-center text-sm">
              <li className="hover:text-sky-500 dark:hover:text-sky-600">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="hover:text-sky-500 dark:hover:text-sky-600">
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li className="hover:text-sky-500 dark:hover:text-sky-600">
                <Link href="/past-questions-archive">
                  Past Questions Archive
                </Link>
              </li>
              <li className="hover:text-sky-500 dark:hover:text-sky-600">
                <Link href="/submit-past-question">Submit Past Question</Link>
              </li>
              {!session && (
                <li className="hover:text-sky-500 dark:hover:text-sky-600">
                  <Link href="/signin">Log In</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <button
            ref={showThemeNavRef}
            type="button"
            onClick={() => setShowThemeNav((t) => !t)}
            aria-label="Theme"
          >
            {theme === "os" && <WiMoonAltThirdQuarter size={25} />}
            {theme === "light" && <FiSun size={25} />}
            {theme === "dark" && <PiMoonStarsBold size={25} />}
          </button>
          {showThemeNav && (
            <ul
              ref={themeNavRef}
              role="listbox"
              aria-label="theme options"
              className="absolute right-4 top-4 z-50 mt-8 w-40 rounded-lg bg-sky-50 px-1 py-2 text-sm font-semibold shadow-lg ring-1 ring-slate-900/10 dark:bg-sky-900 dark:ring-0 md:right-10"
            >
              <li
                role="option"
                aria-selected={theme === "light" ? true : false}
                onClick={() => {
                  localStorage.setItem("theme", "light");
                  setTheme("light");
                  setShowThemeNav(false);
                }}
                className={`mb-1 flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 hover:bg-sky-100 dark:hover:bg-sky-800 ${
                  theme === "light" && "font-extrabold text-sky-400"
                }`}
              >
                <FiSun size={25} />
                <span>Light</span>
              </li>
              <li
                role="option"
                aria-selected={theme === "dark" ? true : false}
                onClick={() => {
                  localStorage.setItem("theme", "dark");
                  setTheme("dark");
                  setShowThemeNav(false);
                }}
                className={`mb-1 flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 hover:bg-sky-100 dark:hover:bg-sky-800 ${
                  theme === "dark" && "font-extrabold text-sky-400"
                }`}
              >
                <PiMoonStarsBold size={25} />
                <span>Dark</span>
              </li>
              <li
                role="option"
                aria-selected={theme === "os" ? true : false}
                onClick={() => {
                  localStorage.setItem("theme", "os");
                  setTheme("os");
                  setShowThemeNav(false);
                }}
                className={`mb-1 flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 hover:bg-sky-100 dark:hover:bg-sky-800 ${
                  theme === "os" && "font-extrabold text-sky-400"
                }`}
              >
                <WiMoonAltThirdQuarter size={25} />
                <span>OS Default</span>
              </li>
            </ul>
          )}
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
