import React from 'react'
import UserDetail from "../../../ui/user-detail/page"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Detail",
  description: "Website pengajuan cuti PT.Deptech Indonesia",
};

export default function page() {
  return (
    <div>
      <h1>Staff</h1>
      <UserDetail />
    </div>
  );
}
