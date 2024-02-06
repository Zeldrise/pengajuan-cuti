import React from "react";
import Link from "next/link";
import Logo from "../../logo";

export default function sidenav() {
  return (
    <div className="flex flex-col px-2 py-2 md:px-2">
      <Link className="mb-2 rounded-md bg-dep p-4 md:h-15" href="/">
        <div>
          <Logo />
        </div>
      </Link>
      <div className="flex gap-3 flex-row md:flex-col">
        <div className="bg-yellow-400 h-[100px] w-[100px]">test</div>
        <div className="bg-yellow-400 h-[100px] w-[100px]">test</div>
        <div className="bg-yellow-400 h-[100px] w-[100px]">test</div>
      </div>
    </div>
  );
}
