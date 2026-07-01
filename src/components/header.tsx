"use client";

import { useTheme } from "@teispace/next-themes";
import { cn } from "cnfast";
import Link from "next/link";
import { useRef, useState } from "react";
import { BiBookAlt } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose, MdLogin } from "react-icons/md";
import { PiChatsBold, PiMoonStarsBold } from "react-icons/pi";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

import { useClickOutside } from "@/hooks/use-click-outside";
import { authClient } from "@/lib/auth-client";

import { ProfileMenu } from "./profile-menu";

export function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showThemeNav, setShowThemeNav] = useState(false);
  const { setTheme, theme } = useTheme();

  const mobileNavRef = useRef(null);
  const showMobileNavRef = useRef(null);
  const themeNavRef = useRef(null);
  const showThemeNavRef = useRef(null);

  useClickOutside(mobileNavRef, showMobileNavRef, () =>
    setShowMobileNav(false),
  );
  useClickOutside(themeNavRef, showThemeNavRef, () => setShowThemeNav(false));

  const { data: session } = authClient.useSession();

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-white/80 px-4 py-2 text-slate-900 shadow-[inset_0_-1px_0_0] shadow-sky-100 backdrop-blur-sm md:px-10 dark:bg-slate-800/80 dark:text-slate-50 dark:shadow-sky-800">
      <Link className="hover:text-sky-500 dark:hover:text-sky-600" href="/">
        <h1 className="text-lg font-bold">EXAMSHARE</h1>
      </Link>
      <div className="flex items-center gap-2 lg:grow lg:gap-0">
        <div className="flex items-center lg:hidden">
          <button
            aria-label="Menu"
            onClick={() => setShowMobileNav(true)}
            ref={showMobileNavRef}
            type="button"
          >
            <HiMenuAlt3 size={25} />
          </button>
          <nav
            aria-hidden={showMobileNav}
            className={cn(
              "fixed top-0 right-0 z-50 flex min-h-screen w-screen bg-slate-900/70 transition-opacity duration-1000 ease-in-out dark:bg-slate-700/70",
              showMobileNav ? "visible opacity-100" : "invisible opacity-0",
            )}
          >
            <div className="w-1/4"></div>
            <div
              className="flex min-h-screen w-3/4 flex-col gap-8 bg-sky-50 px-4 py-6 text-slate-600 md:px-10 dark:bg-sky-900 dark:text-slate-300"
              ref={mobileNavRef}
            >
              <button
                aria-label="close menu"
                className="self-end p-2"
                onClick={() => setShowMobileNav(false)}
              >
                <MdClose size={25} />
              </button>
              <ul className="flex flex-col gap-6">
                <li className="max-w-max">
                  <Link
                    className="flex items-center gap-2"
                    href="/about-us"
                    onClick={() => setShowMobileNav(false)}
                  >
                    <BiBookAlt size={25} />
                    <span>About Us</span>
                  </Link>
                </li>
                <li className="max-w-max">
                  <Link
                    className="flex items-center gap-2"
                    href="/contact-us"
                    onClick={() => setShowMobileNav(false)}
                  >
                    <PiChatsBold size={25} />
                    <span>Contact Us</span>
                  </Link>
                </li>

                {!session && (
                  <li className="max-w-max">
                    <Link
                      className="flex items-center gap-2"
                      href="/sign-in"
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
        <div className="flex grow items-center font-medium text-slate-600 max-lg:hidden dark:text-slate-300">
          <nav className="grow">
            <ul className="flex items-center justify-evenly text-center text-sm">
              <li className="hover:text-sky-500 dark:hover:text-sky-600">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="hover:text-sky-500 dark:hover:text-sky-600">
                <Link href="/contact-us">Contact Us</Link>
              </li>

              {!session && (
                <li className="hover:text-sky-500 dark:hover:text-sky-600">
                  <Link href="/sign-in">Log In</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <button
            aria-label="Theme"
            onClick={() => setShowThemeNav((t) => !t)}
            ref={showThemeNavRef}
            type="button"
          >
            {theme === "system" && <WiMoonAltThirdQuarter size={25} />}
            {theme === "light" && <FiSun size={25} />}
            {theme === "dark" && <PiMoonStarsBold size={25} />}
          </button>
          {showThemeNav && (
            <ul
              aria-label="theme options"
              className="absolute top-4 right-4 z-50 mt-8 w-40 rounded-lg bg-sky-50 px-1 py-2 text-sm font-semibold shadow-lg ring-1 ring-slate-900/10 md:right-10 dark:bg-sky-900 dark:ring-0"
              ref={themeNavRef}
              role="listbox"
            >
              <li
                aria-selected={theme === "light" ? true : false}
                className={cn(
                  "mb-1 flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 hover:bg-sky-100 dark:hover:bg-sky-800",
                  theme === "light" && "font-extrabold text-sky-400",
                )}
                onClick={() => {
                  setTheme("light");
                  setShowThemeNav(false);
                }}
                onKeyDown={(event_) => {
                  if (!(event_.key === "Enter" || event_.key === " ")) {
                    return;
                  }

                  setTheme("light");
                  setShowThemeNav(false);
                }}
                role="option"
                tabIndex={0}
              >
                <FiSun size={25} />
                <span>Light</span>
              </li>
              <li
                aria-selected={theme === "dark" ? true : false}
                className={cn(
                  "mb-1 flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 hover:bg-sky-100 dark:hover:bg-sky-800",
                  theme === "dark" && "font-extrabold text-sky-400",
                )}
                onClick={() => {
                  setTheme("dark");
                  setShowThemeNav(false);
                }}
                onKeyDown={(event_) => {
                  if (!(event_.key === "Enter" || event_.key === " ")) {
                    return;
                  }

                  setTheme("dark");
                  setShowThemeNav(false);
                }}
                role="option"
                tabIndex={0}
              >
                <PiMoonStarsBold size={25} />
                <span>Dark</span>
              </li>
              <li
                aria-selected={theme === "system" ? true : false}
                className={cn(
                  "mb-1 flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 hover:bg-sky-100 dark:hover:bg-sky-800",
                  theme === "system" && "font-extrabold text-sky-400",
                )}
                onClick={() => {
                  setTheme("system");
                  setShowThemeNav(false);
                }}
                onKeyDown={(event_) => {
                  if (!(event_.key === "Enter" || event_.key === " ")) {
                    return;
                  }

                  setTheme("system");
                  setShowThemeNav(false);
                }}
                role="option"
                tabIndex={0}
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
