import React from "react";
import type { Metadata } from "next";
import { inter } from "../ui/fonts";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { rolesConfig } from "../utils/config";


export const metadata: Metadata = {
  title: "HR",
  description: "Website pengargba(0, 0, 0, 0.486) Indonesia",
};

export default function page() {
  
  return (
    <main className="justify-center items-center">
      <div className="flex flex-row gap-2 m-2 h-[100px]">
        <div className="w-full flex flex-col  bg-yellow-400 rounded-lg justify-between md:flex-row">
          <p
            className={`${inter.className} font-bold p-2 text-2xl text-center md:text-2xl lg:text-3xl xl:text-4xl`}
          >
            Karyawan
          </p>
          <p
            className={`${inter.className} font-medium py-0 px-2 text-5xl text-center md:text-5xl lg:text-6xl xl:text-7xl md:py-6 lg:py-5 xl:py-3`}
          >
            39
          </p>
        </div>
        <div className="w-full flex flex-col bg-yellow-400 rounded-lg justify-between md:flex-row">
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
      <div className="flex flex-row gap-2 m-2 h-[100px]">
        <div className="w-full flex flex-col bg-yellow-400 rounded-lg justify-between md:flex-row">
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
        <div className="w-full flex flex-col bg-yellow-400 rounded-lg justify-between md:flex-row">
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
    </main>
  );
}
