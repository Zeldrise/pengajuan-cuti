import React from "react";
import { inter, teko } from "../fonts";

export default function form() {
  return (
    <main className="w-full bg-yellow-50 justify-center items-center rounded-2xl shadow-xl shadow-yellow-500/50">
      <div className={`${teko.className} font-bold p-5 text-center`}>
        <p className="text-6xl">Form Pengajuan Cuti</p>
      </div>
      <form>
        <div
          className={`${inter.className} justify-around flex flex-col md:flex-col lg:flex-row`}
        >
          <div className="p-2 flex flex-col">
            <label>Nama</label>
            <input
              className="border-1 p-1 border-transparent ring-1 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              type="text"
              name="nama"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label>Telephone Darurat</label>
            <input
              className="border-1 p-1 border-transparent ring-1 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              type="tel"
              name="nomor_telephone"
            />
          </div>
        </div>
        <div
          className={`${inter.className} justify-around flex flex-col md:flex-col lg:flex-row`}
        >
          <div className="p-2 flex flex-col">
            <label>Posisi</label>
            <input
              className="border-1 p-1 border-transparent ring-1 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              type="text"
              name="posisi"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label>Departemen</label>
            <input
              className="border-1 p-1 border-transparent ring-1 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              type="text"
              name="departemen"
            />
          </div>
        </div>
        <div
          className={`${inter.className} justify-around flex flex-col md:flex-col lg:flex-row`}
        >
          <div className="p-2 flex flex-col">
            <label>Tanggal Awal</label>
            <input
              className="border-1 p-1 border-transparent ring-1 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              type="date"
              name="tanggal_awal"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label>Tanggal Akhir</label>
            <input
              className="border-1 p-1 border-transparent ring-1 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              type="date"
              name="tanggal_akhir"
            />
          </div>
        </div>
        <div
          className={`${inter.className} justify-around flex flex-col md:flex-col lg:flex-row`}
        >
          <div className="p-2 flex flex-col ">
            <label className="text-center p-2">Alasan Cuti</label>
            <div className="flex flex-row gap-2 justify-around">
              <label>
                <input type="radio" name="tipe_cuti" value="cuti_tahunan" />
                Cuti tahunan
              </label>
              <label>
                <input type="radio" name="tipe_cuti" value="cuti_sakit" />
                Cuti sakit
              </label>
              <label>
                <input type="radio" name="tipe_cuti" value="kehilangan" />
                Kehilangan
              </label>
            </div>
            <div className="flex flex-row gap-2 justify-around">
              <label>
                <input type="radio" name="tipe_cuti" value="cuti_hamil" />
                Cuti hamil
              </label>
              <label>
                <input type="radio" name="tipe_cuti" value="liburan" />
                Liburan
              </label>
              <label>
                <input type="radio" name="tipe_cuti" value="hari_pernikahan" />
                Hari pernikahan
              </label>
            </div>
            <input
              className="border-1 p-1 border-transparent ring-1 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              type="text"
              name="alasan_cuti"
              placeholder="Alasan lain"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label>Deskripsi Cuti</label>
            <textarea
              className="border-1 p-1 border-transparent ring-1 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              name="deskripsi_cuti"
            />
          </div>
        </div>
        <div
          className={`${inter.className} justify-around flex flex-col lg:flex-row`}
        >
          <div></div>
          <button
            type="submit"
            className="text-white font-bold  bg-yellow-400  focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-500/50 rounded-lg  px-5 py-2.5 text-center my-5 mx-3 md:my-5 md:mx-2 lg:my-5 lg:mx-0 lg:ml-20"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
