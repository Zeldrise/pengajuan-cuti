"use client";
import React, { useState } from "react";
import { inter } from "../fonts";
import {
  DocumentMagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface DataItem {
  id: number;
  nama: string;
  tgl_penyerahan: string;
  no_telephone: string;
  telephone_darurat: string;
  posisi: string;
  departemen: string;
  tgl_mulai: string;
  tgl_akhir: string;
  lama_cuti: number;
  tipe_cuti: string;
  deskripsi: string;
  status: string;
  approved_by: string;
}

const data: DataItem[] = [
  {
    id: 1,
    nama: "Kawamatsu",
    tgl_penyerahan: "20 maret 2024",
    no_telephone: "123-456-789",
    telephone_darurat: "097-123-412",
    posisi: "Developer",
    departemen: "Teknologi",
    tgl_mulai: "25 maret 2024",
    tgl_akhir: "30 maret 2024",
    lama_cuti: 5,
    tipe_cuti: "liburan",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur. Perspiciatis nihil illum aliquam quisquam earum velit est esse, consequuntur sint. Amet doloribus excepturi ab autem. Dolorem ut officiis repudiandae. ",
    status: "Diterima",
    approved_by: "HR",
  },
  {
    id: 2,
    nama: "Kawamatsu",
    tgl_penyerahan: "20 april 2024",
    no_telephone: "123-456-789",
    telephone_darurat: "097-123-412",
    posisi: "Developer",
    departemen: "Teknologi",
    tgl_mulai: "25 april 2024",
    tgl_akhir: "30 april 2024",
    lama_cuti: 5,
    tipe_cuti: "liburan",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur. Perspiciatis nihil illum aliquam quisquam earum velit est esse, consequuntur sint. Amet doloribus excepturi ab autem. Dolorem ut officiis repudiandae. ",
    status: "Diterima",
    approved_by: "HR",
  },
];

export default function page() {
  const [selectedData, setSelectedData] = useState<DataItem | null>(null);
  const handleDetailClick = (rowData: DataItem) => {
    setSelectedData(rowData);
  };

  const handleCloseModal = () => {
    setSelectedData(null);
  };
  return (
    <div className="w-full">
      <h1 className={`${inter.className} mb-8 text-xl md:text-2xl`}>
        Laporan Cuti Karyawan
      </h1>
      {/* <Search placeholder="Search rows..." /> */}
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <table className="min-w-full divide-y divide-gray-200 rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      No
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Tanggal Penyerahan
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Tanggal Mulai
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Tanggal akhir
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Lama Cuti
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Tipe cuti
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Approved by
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {data.map((row, index) => (
                    <tr key={row.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{index + 1}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{row.nama}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {row.tgl_penyerahan}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {row.tgl_mulai}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {row.tgl_akhir}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {row.lama_cuti}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {row.tipe_cuti}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {row.status}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {row.approved_by}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        <button onClick={() => handleDetailClick(row)}>
                          <DocumentMagnifyingGlassIcon className="w-6" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {selectedData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md w-full max-h-96 m-3 mt-10 md:w-1/2 overflow-y-auto">
            <div className="flex flex-row justify-between">
              <h2 className="text-lg font-semibold mb-4">Detail Data</h2>
              <button onClick={handleCloseModal}>
                <XMarkIcon className="w-6 mb-4" />
              </button>
            </div>
            <p>
              <span className="font-semibold">Nama:</span> {selectedData.nama}
            </p>
            <p>
              <span className="font-semibold">Tanggal Penyerahan:</span>{" "}
              {selectedData.tgl_penyerahan}
            </p>
            <p>
              <span className="font-semibold">Nomor Telephone:</span>{" "}
              {selectedData.no_telephone}
            </p>
            <p>
              <span className="font-semibold">Telephone Darurat:</span>{" "}
              {selectedData.telephone_darurat}
            </p>
            <p>
              <span className="font-semibold">Posisi:</span>{" "}
              {selectedData.posisi}
            </p>
            <p>
              <span className="font-semibold">Departemen:</span>{" "}
              {selectedData.departemen}
            </p>
            <p>
              <span className="font-semibold">Tanggal Mulai:</span>{" "}
              {selectedData.tgl_mulai}
            </p>
            <p>
              <span className="font-semibold">Tanggal Akhir:</span>{" "}
              {selectedData.tgl_akhir}
            </p>
            <p>
              <span className="font-semibold">Lama Cuti:</span>{" "}
              {selectedData.lama_cuti}
            </p>
            <p>
              <span className="font-semibold">Tipe Cuti:</span>{" "}
              {selectedData.tipe_cuti}
            </p>
            <div className="flex flex-row">
              <p className="font-semibold">Deskripsi:&nbsp;</p>
              <p>{selectedData.deskripsi}</p>
            </div>
            <p>
              <span className="font-semibold">Status:</span>{" "}
              {selectedData.status}
            </p>
            <p>
              <span className="font-semibold">Approved by:</span>{" "}
              {selectedData.approved_by}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
