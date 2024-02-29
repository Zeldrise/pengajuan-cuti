import React from "react";
import UserProfile from "../../ui/user-profile/page";
import Link from "next/link";
import { Metadata } from "next";
import Button from "../../ui/ud-button/page";

export const metadata: Metadata = {
  title: "Edit Profile",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <div className="grid justify-center">
      <h1>Karyawan</h1>
      <UserProfile />
      <Link href="/karyawan/user-profile/edit-profile">
        <Button />
      </Link>
    </div>
  );
}
