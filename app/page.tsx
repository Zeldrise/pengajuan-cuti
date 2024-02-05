import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-row gap-11 font-bold text-3xl">
        <Link href="/Karyawan">Karyawan</Link>
        <Link href="/Staff">Staff</Link>
        <Link href="/HR">HR</Link>
        <Link href="/Atasan">Atasan</Link>
      </div>
    </main>
  );
}
