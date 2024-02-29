import React from "react";
import EditProfile from "../../../ui/edit-profile/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Detail",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <div>
      <h1>Karyawan</h1>
      <EditProfile />
    </div>
  );
}
