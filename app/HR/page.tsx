import React from "react";
import type { Metadata } from "next";
import { Lusitana } from "next/font/google";

export const metadata: Metadata = {
  title: "HR",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <main className="justify-center items-center">
      <div className="flex flex-row gap-2 m-2 h-[100px]">
        <h1 className="bg-green-400 w-full">Test Dashboard</h1>
        <h1 className="bg-green-400 w-full">Test Dashboard</h1>
      </div>
      <div className="flex flex-row gap-2 m-2 h-[100px]">
        <h1 className="bg-green-400 w-full">Test Dashboard</h1>
        <h1 className="bg-green-400 w-full">Test Dashboard</h1>
      </div>
    </main>
  );
}
