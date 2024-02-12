import React from "react";
import AjukanCuti from "../../ui/form-cuti/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form Cuti",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <div>
      <h1>staff</h1>
      <AjukanCuti />
    </div>
  );
}
