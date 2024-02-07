import React from "react";
import { bebas } from "../../fonts";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function () {
  return (
    <main className="bg-dep p-2 flex justify-between">
      <p className={`${bebas.className} pt-1 text-white text-3xl`}>
        Pengajuan cuti | HR
      </p>
      <Link href="/">
        <UserCircleIcon className="h-10 w-10 text-white" />
      </Link>
    </main>
  );
}
