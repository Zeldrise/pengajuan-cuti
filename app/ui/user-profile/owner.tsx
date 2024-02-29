import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { inter } from "../fonts";

export default function page() {
  return (
    <main className={`${inter.className}w-full`}>
      <div>
        <UserCircleIcon className="h-[300px] w-[300px]" />
      </div>
      <div className={`${inter.className} font-medium`}>
        <h1>Nama : ----------</h1>
        <h1>Email : ----------</h1>
        <h1>No telephone : 123456789</h1>
        <h1>Posisi : ---------</h1>
        <h1>Departemen : ----------</h1>
      </div>
    </main>
  );
}
