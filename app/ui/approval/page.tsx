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
  telephone_darurat: string;
  posisi: string;
  departemen: string;
  tgl_mulai: string;
  tgl_akhir: string;
  lama_cuti: number;
  tipe_cuti: string;
  sisa_cuti: number;
  deskripsi: string;
}

const data: DataItem[] = [
  {
    id: 1,
    nama: "Kappa",
    tgl_penyerahan: "20 maret 2024",
    telephone_darurat: "123-456-789",
    posisi: "Developer",
    departemen: "Teknologi",
    tgl_mulai: "25 maret 2024",
    tgl_akhir: "30 maret 2024",
    lama_cuti: 5,
    tipe_cuti: "liburan",
    sisa_cuti: 8,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur. Perspiciatis nihil illum aliquam quisquam earum velit est esse, consequuntur sint. Amet doloribus excepturi ab autem. Dolorem ut officiis repudiandae. ",
  },
  {
    id: 2,
    nama: "Kawamatsu",
    tgl_penyerahan: "21 april 2024",
    telephone_darurat: "123-456-789",
    posisi: "Developer",
    departemen: "Teknologi",
    tgl_mulai: "26 april 2024",
    tgl_akhir: "31 april 2024",
    lama_cuti: 5,
    tipe_cuti: "liburan",
    sisa_cuti: 7,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur. Perspiciatis nihil illum aliquam quisquam earum velit est esse, consequuntur sint. Amet doloribus excepturi ab autem. Dolorem ut officiis repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magnam porro, ex tempore sequi explicabo ratione qui culpa repudiandae voluptas veniam rerum ullam natus repellat aspernatur ab facere, beatae exercitationem maxime assumenda magni adipisci! Provident asperiores facilis molestias cupiditate voluptatum alias quas maxime natus fuga distinctio, esse quaerat nostrum doloremque placeat aut explicabo soluta. Ad eos reiciendis recusandae dolorem voluptatum nobis temporibus consequatur, eveniet aperiam ab at, repudiandae accusantium in soluta, maxime sint. Doloremque aliquid debitis minus dolorem provident suscipit obcaecati enim nisi eligendi itaque qui cum sit molestias officia optio aliquam eos, iure veritatis eius magnam dolores incidunt beatae? ",
  },
];

export default function page() {
  const [selectedData, setSelectedData] = useState<DataItem | null>(null);
  const [accepted, setAccepted] = useState<boolean>(false);
  const [rejected, setRejected] = useState<boolean>(false);

  const handleDetailClick = (rowData: DataItem) => {
    setSelectedData(rowData);
    setAccepted(false); // Reset state accepted
    setRejected(false); // Reset state rejected
  };

  const handleCloseModal = () => {
    setSelectedData(null);
  };

  const handleAccept = () => {
    setAccepted(true);
    setSelectedData(null); // Tutup modul setelah menerima
    alert("Permohonan cuti diterima!");
  };

  const handleReject = () => {
    setRejected(true);
    setSelectedData(null); // Tutup modul setelah menolak
    alert("Permohonan cuti ditolak!");
  };
  return (
    <div className="w-full">
      <h1 className={`${inter.className} mb-8 text-xl md:text-2xl`}>
        Approval Cuti
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
                      Tanggal Akhir
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Lama Cuti
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Tipe Cuti
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium ">
                      Sisa Cuti
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
                        {row.sisa_cuti}
                      </td>
                      {/* <td className="whitespace-pre-line bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md overflow-y-auto ">
                        <div className="max-h-20 text-center">
                          {row.deskripsi}
                        </div>
                      </td> */}

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
      {/* Modul detail */}
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
            <p>
              <span className="font-semibold">Sisa Cuti:</span>{" "}
              {selectedData.sisa_cuti}
            </p>
            <div className="flex flex-row">
              <p className="font-semibold">Deskripsi:&nbsp;</p>
              <p>{selectedData.deskripsi}</p>
            </div>
            <div className="flex flex-row justify-around mt-5">
              <button
                className={`bg-red-500 text-white px-4 py-2 rounded-md ${
                  rejected ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleReject}
                disabled={rejected}
              >
                Tolak
              </button>
              <button
                className={`bg-green-500 text-white px-4 py-2 rounded-md mr-2 ${
                  accepted ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleAccept}
                disabled={accepted}
              >
                Terima
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
