import { inter, teko } from "../ui/fonts";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function page() {
  return (
    <main className="justify-center items-center">
      <p className={`${teko.className} text-center p-6 text-4xl`}>
        Pengajuan cuti
      </p>
      <div className="flex flex-col md:flex-row-reverse justify-around mx-auto w-11/12 md:w-9/12 bg-yellow-50 rounded-2xl shadow-xl shadow-yellow-500/50">
        <div className="bg-yellow-50 border-solid border-0 md:border-2 border-yellow-500 rounded-xl my-5 justify-center items-center md:w-[400px] w-full shadow-none md:shadow-xl shadow-black-500/50">
          <div className={`${inter.className}  p-5`}>
            <p className={`${teko.className} font-bold text-4xl text-center`}>
              Lupa Password?
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Masukan Email Anda
                </label>
                <div className="mt-1 relative shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border-1 p-1 border-transparent ring-1 block w-full pl-10 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="mt-[230px]">
                <button
                  type="submit"
                  className="w-full text-center text-white font-bold  bg-yellow-400  focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-500/50 rounded-lg  px-5 py-2.5 "
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-end md:py-6">
          <Image
            src="/forgot.svg"
            width={400}
            height={400}
            className="hidden md:block"
            alt="forgot dekstop photo"
          />
        </div>
      </div>
    </main>
  );
}
