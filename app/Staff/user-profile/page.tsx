import React from "react";
import UserProfile from "../../ui/user-profile/page";
import Button from "../../ui/ud-button/page";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <div className="grid justify-center">
      <h1>staff</h1>
      <UserProfile />
      <Link href="/staff/user-profile/edit-profile">
        <Button />
      </Link>
    </div>
  );
}
