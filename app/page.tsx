import Link from "next/link";
import Logo from "./ui/logo-center";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="fixed w-full top-0">
        <div className="bg-dep p-4">
          <div className="items-center">
            <Logo />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-11 font-bold text-3xl">
        <Link href="/karyawan">Karyawan</Link>
        <Link href="/staff">Staff</Link>
        <Link href="/hr">HR</Link>
        <Link href="/owner">Owner</Link>
      </div>
    </main>
  );
}
