"use client";

import {
  ArrowTrendingUpIcon,
  HomeIcon,
  Squares2X2Icon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  { name: "Home", href: "/karyawan", icon: HomeIcon },
  {
    name: "Ajukan Cuti",
    href: "/karyawan/ajukan-cuti",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Laporan Cuti",
    icon: TableCellsIcon,
    href: "/karyawan/laporan-cuti-pribadi",
  },
];

export default function NavLink() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-yellow-100 hover:text-yellow-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-yellow-100 text-yellow-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
