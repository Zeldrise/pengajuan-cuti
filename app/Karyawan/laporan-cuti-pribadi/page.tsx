import React from "react";
import CutiPribadi from "../../ui/cuti-pribadi/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuti Pribadi",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <div>
      <h1>karyawan</h1>
      <CutiPribadi />
    </div>
  );
}
