import Link from "next/link";
import Logo from "./ui/logo-center";
import { inter, teko } from "./ui/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <div className="fixed w-full top-0 border-b-4 border-white">
        <div className="bg-dep p-4">
          <div className="items-center">
            <Logo />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-around  mx-auto w-full md:w-11/12">
        <div className="my-0 md:my-5 justify-center items-center md:w-[500px] w-full">
          <div
            className={`${inter.className} p-5 pt-0 md:pt-10 lg:pt-20 justify-center`}
          >
            <p className={`${teko.className} font-bold text-dep text-6xl`}>
              Selamat datang!
            </p>
            <p className={`${inter.className} font-bold  text-xl `}>
              Ajukan cuti dengan mudah dan praktis untuk perencanaan liburan
              atau keperluan pribadi Anda.
            </p>
            <div
              className={`${inter.className} justify-around flex flex-col lg:flex-row`}
            >
              <div></div>
              <Link
                className="text-white font-bold  bg-depy  focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-500/50 rounded-lg  px-5 py-2.5 text-center my-5 mx-3 md:my-5 md:mx-2 lg:my-5 lg:mx-0 lg:ml-20 hidden md:block"
                href="/login"
              >
                LOGIN
              </Link>
            </div>
            <div className="flex flex-row gap-5 font-bold text-sm">
              <Link href="/karyawan">Karyawan</Link>
              <Link href="/staff">Staff</Link>
              <Link href="/hr">HR</Link>
              <Link href="/owner">Owner</Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end ">
          <Image
            src="/first.svg"
            width={500}
            height={500}
            className="hidden md:block"
            alt="first dekstop photo"
          />
          <Image
            src="/first-m.svg"
            width={400}
            height={400}
            className="block md:hidden mx-auto my-5"
            alt="first dekstop photo"
          />
        </div>
        <div className={`${inter.className} fixed w-full bottom-0`}>
          <Link
            className="text-white font-bold  bg-depy  focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-500/50 rounded-lg  px-5 py-2.5 text-center my-5 mx-3 md:my-5 md:mx-2 lg:my-5 lg:mx-0 lg:ml-20 block md:hidden"
            href="/login"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </main>
  );
}
