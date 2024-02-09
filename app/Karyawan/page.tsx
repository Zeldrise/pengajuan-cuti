import React from "react";
import type { Metadata } from "next";
import { inter } from "../ui/fonts";

export const metadata: Metadata = {
  title: "Karyawan",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <main className="justify-center items-center">
      <div className="flex flex-row gap-2 m-2 h-[100px]">
        <div className="w-full flex flex-col bg-gradient-to-r from-yellow-500 to-yellow-100 rounded-lg justify-between md:flex-row">
          <p
            className={`${inter.className}  font-bold p-2 text-2xl text-center  md:text-2xl lg:text-3xl xl:text-4xl`}
          >
            Cuti Diterima
          </p>
          <p
            className={`${inter.className} font-medium py-0 px-2 text-5xl text-center  md:text-5xl lg:text-6xl xl:text-7xl md:py-6 lg:py-5 xl:py-3`}
          >
            3
          </p>
        </div>
        <div className="w-full flex flex-col bg-gradient-to-r from-yellow-100 to-yellow-500 rounded-lg justify-between md:flex-row">
          <p
            className={`${inter.className} font-bold p-2 text-2xl text-center  md:text-2xl lg:text-3xl xl:text-4xl`}
          >
            Cuti Ditolak
          </p>
          <p
            className={`${inter.className} font-medium  py-0 px-2 text-5xl text-center md:text-5xl lg:text-6xl xl:text-7xl md:py-6 lg:py-5 xl:py-3`}
          >
            0
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-2 m-2 h-[100px]">
        <div className="w-full flex flex-col bg-gradient-to-r from-yellow-500 via-yellow-100 to-yellow-500 rounded-lg justify-between md:flex-row">
          <p
            className={`${inter.className} font-bold p-2 text-2xl text-center  md:text-2xl lg:text-3xl xl:text-4xl`}
          >
            Total Pengajuan
          </p>
          <p
            className={`${inter.className} font-medium py-0 px-2 text-5xl text-center  md:text-5xl lg:text-6xl xl:text-7xl md:py-6 lg:py-5 xl:py-3`}
          >
            5
          </p>
        </div>
      </div>
    </main>
  );
}
