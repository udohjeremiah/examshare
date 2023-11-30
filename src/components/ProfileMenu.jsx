"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useRef } from "react";
import Image from "next/image";
import useClickOutside from "@/hooks/useClickOutside";
import { FiLogOut } from "react-icons/fi";
import InlineSVG from "react-inlinesvg";

export default function ProfileMenu() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const profileMenuRef = useRef(null);
  const showProfileMenuRef = useRef(null);

  useClickOutside(profileMenuRef, showProfileMenuRef, () =>
    setShowProfileMenu(false),
  );

  const { data: session } = useSession();

  if (!session) {
    return;
  }

  return (
    <div>
      <button
        ref={showProfileMenuRef}
        onClick={() => setShowProfileMenu((i) => !i)}
        className="relative flex h-8 w-8 items-center justify-center"
      >
        {session.user.image.startsWith("<svg") ? (
          <InlineSVG src={session.user.image} width={30} height={30} />
        ) : (
          <Image
            src={session.user.image}
            alt={session.user.name}
            fill
            className="inline-block rounded-full"
          />
        )}
      </button>
      {showProfileMenu && (
        <ul
          ref={profileMenuRef}
          className="absolute right-4 top-4 z-50 mt-8 space-y-2 rounded-lg bg-sky-50 px-1 py-2 text-sm font-semibold shadow-lg ring-1 ring-slate-900/10 dark:bg-sky-900 dark:ring-0 md:right-10"
        >
          <li className="flex items-center gap-2 rounded-lg px-2 py-1">
            <div className="relative h-10 w-10">
              {session.user.image.startsWith("<svg") ? (
                <InlineSVG src={session.user.image} width={40} height={40} />
              ) : (
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  fill
                  className="inline-block rounded-full"
                />
              )}
            </div>
            <div>
              <p>{session.user.userName}</p>
              <p className="text-slate-400">{session.user.email}</p>
            </div>
          </li>
          <li className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1 hover:bg-sky-100 dark:hover:bg-sky-800">
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2"
            >
              <FiLogOut size={25} />
              <span>Sign Out</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
