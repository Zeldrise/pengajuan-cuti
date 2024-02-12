import React from "react";
import UserProfile from "../../ui/user-profile/page";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <div>
      <h1>HR</h1>
      <UserProfile />
      <Link href="/hr/user-profile/user-detail">User Detail</Link>
    </div>
  );
}
