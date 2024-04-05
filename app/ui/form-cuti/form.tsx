"use client";
import React, { useState } from "react";
import { inter, teko } from "../fonts";
import {
  BuildingOfficeIcon,
  ListBulletIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function form() {
  const [cutiType, setCutiType] = useState("");
  const [urgentCutiOption, setUrgentCutiOption] = useState("");
  const [doctorLetter, setDoctorLetter] = useState(null);

  // Function to handle file upload
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    setDoctorLetter(file);
  };

  return (
    <main className="w-full bg-yellow-50 justify-center items-center rounded-2xl shadow-xl shadow-yellow-500/50">
      <p className="font-bold text-end mt-5 mr-5">Sisa Cuti : 7</p>
      <div className={`${teko.className} font-normal p-5 text-center`}>
        <p className="text-6xl">Form Pengajuan Cuti</p>
      </div>
      <form>
        <div
          className={`${inter.className} justify-around flex flex-col md:flex-col lg:flex-row`}
        >
          <div className="p-2 flex flex-col">
            <label className="block text-gray-700">Nama</label>
            <div className="mt-1 relative shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                className="border-1 p-1 border-transparent ring-1 block w-full pl-10 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                type="text"
                name="nama"
              />
            </div>
          </div>
          <div className="p-2 flex flex-col">
            <label className="block text-gray-700">Telephone Darurat</label>
            <div className="mt-1 relative shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <PhoneIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                className="border-1 p-1 border-transparent ring-1 block w-full pl-10 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                type="tel"
                name="nomor_telephone"
              />
            </div>
          </div>
        </div>
        <div
          className={`${inter.className} justify-around flex flex-col md:flex-col lg:flex-row`}
        >
          <div className="p-2 flex flex-col">
            <label className="block text-gray-700">Posisi</label>
            <div className="mt-1 relative shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ListBulletIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                className="border-1 p-1 border-transparent ring-1 block w-full pl-10 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                type="text"
                name="posisi"
              />
            </div>
          </div>
          <div className="p-2 flex flex-col">
            <label>Departemen</label>
            <div className="mt-1 relative shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BuildingOfficeIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                className="border-1 p-1 border-transparent ring-1 block w-full pl-10 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                type="text"
                name="departemen"
              />
            </div>
          </div>
        </div>

        <div
          className={`${inter.className} justify-around flex flex-col md:flex-col lg:flex-row`}
        >
          <div className={`${inter.className}justify-around flex flex-col`}>
            <div className="p-2 flex flex-col">
              <label className="block text-gray-700">Tipe Cuti</label>
              <select
                className="border-1 p-2 border-transparent ring-1 block w-full md:w-full lg:w-[262px]  ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                value={cutiType}
                onChange={(e) => setCutiType(e.target.value)}
              >
                <option value="Cuti Tahunan">Cuti Tahunan</option>
                <option value="Cuti Urgensi">Cuti Urgensi</option>
                <option value="Cuti Sakit">Cuti Sakit</option>
              </select>
            </div>

            {/* Additional options based on selected cuti type */}
            {cutiType === "Cuti Urgensi" && (
              <div className="mx-2">
                <label className="block text-gray-700">Opsi Cuti Urgensi</label>
                <select
                  className="border-1 p-2  border-transparent ring-1 block w-full md:w-full lg:w-[262px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  value={urgentCutiOption}
                  onChange={(e) => setUrgentCutiOption(e.target.value)}
                >
                  <option value="">Opsi Cuti Urgensi</option>
                </select>
              </div>
            )}

            {cutiType === "Cuti Sakit" && (
              <div className="ml-2">
                <label className="block text-gray-700">
                  Upload Surat Dokter
                </label>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                />
                {doctorLetter && (
                  <img
                    src={URL.createObjectURL(doctorLetter)}
                    alt="Preview"
                    className="mt-2 mx-auto w-1/2 md:w-1/2 lg:w-[262px] h-auto "
                  />
                )}
              </div>
            )}
          </div>
          <div className="p-2 flex flex-col">
            <label className="block text-gray-700">Deskripsi Cuti</label>
            <textarea
              className="border-1 p-1 border-transparent ring-1 block w-full md:w-full lg:w-[262px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              name="deskripsi_cuti"
            />
          </div>
        </div>
        <div
          className={`${inter.className} justify-center flex flex-col md:flex-col lg:flex-row`}
        >
          <div className="p-2 flex flex-col">
            <label className="block text-gray-700">Tanggal Awal</label>
            <input
              className="border-1 p-1 border-transparent ring-1 block w-full ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              type="date"
              name="tanggal_awal"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label className="block text-gray-700">Tanggal Akhir</label>
            <input
              className="border-1 p-1 border-transparent ring-1 block w-full ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              type="date"
              name="tanggal_akhir"
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
