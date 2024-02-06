import React from "react";
import type { Metadata } from "next";
import { Lusitana } from "next/font/google";

export const metadata: Metadata = {
  title: "HR",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <main>
      <h1 className="bg-green-400 h-[800px]">Test Dashboard</h1>
    </main>
  );
}
