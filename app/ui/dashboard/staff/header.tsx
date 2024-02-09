import React from "react";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { teko } from "../../fonts";

export default function () {
  return (
    <main className="bg-dep p-2 flex justify-between">
      <p className={`${teko.className} pt-1  text-white text-4xl`}>
        Pengajuan cuti | Staff
      </p>
      <Link href="/">
        <UserCircleIcon className="h-10 w-10 text-white" />
      </Link>
    </main>
  );
}
