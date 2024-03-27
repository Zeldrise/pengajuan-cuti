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
  { name: "Home", href: "/owner", icon: HomeIcon },
  {
    name: "Manajemen Cuti",
    icon: Squares2X2Icon,
    submenu: [
      { name: "Approval Cuti", href: "/owner/approval-cuti" },
      { name: "Data Karyawan", href: "/owner/data-karyawan" },
    ],
  },
  {
    name: "Laporan Cuti",
    icon: TableCellsIcon,
    href: "/owner/laporan-cuti-karyawan",
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
                    "flex h-[48px] grow w-full items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-yellow-100 hover:text-yellow-600 md:flex-none md:justify-start md:p-2 md:px-3",
                    {
                      "bg-yellow-100 text-yellow-600": pathname === link.href,
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
                              "text-yellow-600": pathname === sublink.href,
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
                  "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-yellow-100 hover:text-yellow-600 md:flex-none md:justify-start md:p-2 md:px-3",
                  {
                    "bg-yellow-100 text-yellow-600": pathname === link.href,
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
