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
  { name: "Home", href: "/hr", icon: HomeIcon },
  {
    name: "Menu khusus",
    icon: Squares2X2Icon,
    submenu: [
      { name: "Approval Cuti", href: "/approval-cuti" },
      { name: "Data Karyawan", href: "/data-karyawan" },
    ],
  },
  { name: "Ajukan Cuti", href: "/ajukan-cuti", icon: ArrowTrendingUpIcon },
  {
    name: "Laporan Cuti",
    icon: TableCellsIcon,
    submenu: [
      { name: "Cuti Karyawan", href: "/laporan-cuti-karyawan" },
      { name: "Cuti Pribadi", href: "/laporan-cuti-pribadi" },
    ],
  },
];

export default function NavLink() {
  const pathname = usePathname();
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const handleSubMenuToggle = (index: any) => {
    setOpenSubMenuIndex(index === openSubMenuIndex ? null : index);
  };

  return (
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        return (
          <div key={link.name}>
            {link.submenu ? (
              <div>
                <button
                  onClick={() => handleSubMenuToggle(index)}
                  className={clsx(
                    "flex h-[48px] grow w-full items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                    {
                      "bg-sky-100 text-blue-600": pathname === link.href,
                    }
                  )}
                >
                  <LinkIcon className="w-6" />
                  <p className="hidden md:block">{link.name}</p>
                </button>
                {index === openSubMenuIndex && (
                  <div className=" mt-1 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                    {link.submenu.map((sublink) => (
                      <Link key={sublink.name} href={sublink.href}>
                        <p
                          className={clsx(
                            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            {
                              "text-blue-600": pathname === sublink.href,
                            }
                          )}
                        >
                          {sublink.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:flex-grow md:justify-start md:p-2 md:px-3",
                  {
                    "bg-sky-100 text-blue-600": pathname === link.href,
                  }
                )}
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            )}
          </div>
        );
      })}
    </>
  );
}
