import React from "react";
import Link from "next/link";
import Logo from "../../logo";
import NavLink from "./nav-link";
import { PowerIcon } from "@heroicons/react/24/solid";

export default function sidenav() {
  return (
    <div className="flex h-full flex-col px-2 py-2 md:px-2">
      <Link
        className="mb-2 rounded-md bg-dep p-4 md:h-15 "
        href="/karyawan"
      >
        <div>
          <Logo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-around space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLink />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            "use server";
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
