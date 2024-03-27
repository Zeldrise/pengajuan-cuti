import React from "react";
import Logo from "../../logo-center";
import Link from "next/link";
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";

export default function () {
  return (
    <main className="flex justify-between bg-dep p-4">
      <Link href="/">
        <ChevronDoubleLeftIcon className="h-8 w-8 text-white " />
      </Link>
      <div className="my-auto">
        <Logo />
      </div>
    </main>
  );
}
