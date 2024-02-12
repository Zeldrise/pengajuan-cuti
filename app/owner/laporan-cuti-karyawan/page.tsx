import React from "react";
import CutiKaryawan from "../../ui/cuti-karyawan/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuti Karyawan",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <div>
      <h1>owner</h1>
      <CutiKaryawan />
    </div>
  );
}
