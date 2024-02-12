import React from "react";
import Approval from "../../ui/approval/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approval Cuti",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <div>
      <h1>owner</h1>
      <Approval />
    </div>
  );
}
