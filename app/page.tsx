import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-row gap-11 font-bold text-3xl">
        <Link href="/karyawan">Karyawan</Link>
        <Link href="/staff">Staff</Link>
        <Link href="/hr">HR</Link>
        <Link href="/owner">Owner</Link>
      </div>
    </main>
  );
}
