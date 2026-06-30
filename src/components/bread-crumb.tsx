"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LiaAngleRightSolid } from "react-icons/lia";

const capitalizeFirstLetter = (string_: string) => {
  return string_.charAt(0).toUpperCase() + string_.slice(1);
};

export function BreadCrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter(Boolean);

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
          const link = path
            .split("-")
            .map((part) => capitalizeFirstLetter(part))
            .join(" ");
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
