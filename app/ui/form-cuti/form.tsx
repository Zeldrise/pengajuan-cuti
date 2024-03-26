"use client"
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
    const [emergencyOptions, setEmergencyOptions] = useState("");
    const [doctorLetter, setDoctorLetter] = useState(null);

    const handleCutiTypeChange = (e: any) => {
      setCutiType(e.target.value);
      setEmergencyOptions(""); // Reset emergency options when cuti type changes
    };

    const handleEmergencyOptionsChange = (e: any) => {
      setEmergencyOptions(e.target.value);
    };

    const handleDoctorLetterChange = (e: any) => {
      setDoctorLetter(e.target.files[0]);
    };

    const handleSubmit = (e: any) => {
      e.preventDefault();
      // Collect form data
      const formData = {
        cutiType,
        emergencyOptions,
        doctorLetter,
        // Add other form fields here
      };
      // Do something with formData, like send it to a server
      console.log(formData);
      // Reset form fields after submission
      setCutiType("");
      setEmergencyOptions("");
      setDoctorLetter(null);
    };

  return (
    <main className="w-full bg-yellow-50 justify-center items-center rounded-2xl shadow-xl shadow-yellow-500/50">
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
          className={`${inter.className} justify-around flex flex-col md:flex-col lg:flex-row`}
        >
          <div className="p-2 flex flex-col">
            <label className="text-center p-2 block text-gray-700">
              Alasan Cuti
            </label>
            <select
              value={cutiType}
              onChange={handleCutiTypeChange}
              className="border-1 p-1 border-transparent ring-1 block w-full ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            >
              <option value="">Pilih Alasan Cuti</option>
              <option value="cuti_tahunan">Cuti Tahunan</option>
              <option value="cuti_urgensi">Cuti Urgensi</option>
              <option value="cuti_sakit">Cuti Sakit</option>
            </select>
            {cutiType === "cuti_urgensi" && (
              <select
                value={emergencyOptions}
                onChange={handleEmergencyOptionsChange}
                className="border-1 p-1 border-transparent ring-1 block w-full ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent mt-2"
              >
                <option value="">Pilih Opsi Cuti Urgensi</option>
                {/* Add options for emergency leave */}
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            )}
            {cutiType === "cuti_sakit" && (
              <div className="mt-2">
                <label className="block text-gray-700">
                  Upload Foto Surat Dokter
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleDoctorLetterChange}
                  className="border-1 p-1 border-transparent ring-1 block w-full ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
            )}
          </div>
          <div className="p-2 flex flex-col">
            <label className="block text-gray-700">Deskripsi Cuti</label>
            <textarea
              className="border-1 p-1 border-transparent ring-1 block w-full ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
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
