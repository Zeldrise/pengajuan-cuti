import React from "react";
import { bebas } from "../../fonts";
import Image from "next/image";

export default function () {
  return (
    <main className="bg-dep p-2 flex justify-between">
      <p className={`${bebas.className} pt-1 text-white text-3xl`}>
        Pengajuan cuti | HR
      </p>
      <Image
        src="/profile.jpg"
        width={40}
        height={40}
        alt="user profile"
        className="rounded-full"
      />
    </main>
  );
}
