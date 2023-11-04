"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LiaAngleRightSolid } from "react-icons/lia";
import React from "react";

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function BreadCrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
      <ul className="flex flex-wrap items-center gap-2 text-sm">
        <li className="hover:text-slate-400 dark:hover:text-slate-500">
          <Link href="/">Home</Link>
        </li>
        {pathNames.length > 0 && <LiaAngleRightSolid />}
        {pathNames.map((path, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isActivePath = paths === href;
          const link = path.split("-").map(capitalizeFirstLetter).join(" ");
          return (
            <React.Fragment key={index}>
              {isActivePath ? (
                <li className="text-sky-500">
                  <span>{link}</span>
                </li>
              ) : (
                <li className="hover:text-slate-400 dark:hover:text-slate-500">
                  <Link href={href}>{link}</Link>
                </li>
              )}
              {pathNames.length !== index + 1 && (
                <LiaAngleRightSolid key={`angle-${index}`} />
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
