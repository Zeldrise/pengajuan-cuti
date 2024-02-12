import React from "react";
import DataKaryawan from "../../ui/data-karyawan/page";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Data karyawan",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <div>
      <h1>HR</h1>
      <DataKaryawan/>
    </div>
  );
}
