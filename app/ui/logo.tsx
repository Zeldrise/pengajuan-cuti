import React from "react";
import Image from "next/image";

export default function logo() {
  return (
    <div>
      <Image
        src="/logo-deptech.png"
        width={150}
        height={30}
        alt="logo deptech"
      />
    </div>
  );
}
