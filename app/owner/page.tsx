import React from "react";
import type { Metadata } from "next";
import { inter } from "../ui/fonts";

export const metadata: Metadata = {
  title: "Owner",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <main className="justify-center items-center">
      <div className="flex flex-row gap-2 m-2 h-[300px]">
        <div className="w-full flex flex-col bg-yellow-400 rounded-lg justify-between md:flex-col lg:flex-row">
          <p
            className={`${inter.className} font-bold p-2 text-5xl text-center md:text-6xl lg:text-7xl xl:text-7xl`}
          >
            Karyawan
          </p>
          <p
            className={`${inter.className} font-medium py-0 px-2 text-9xl text-center md:text-9xl lg:text-8xl xl:text-9xl md:py-6 lg:py-5 xl:py-3`}
          >
            39
          </p>
        </div>
      </div>
    </main>
  );
}
