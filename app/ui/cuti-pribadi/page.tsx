"use client";
import React, { useState } from "react";
import { inter } from "../fonts";
import {
  TrashIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface EditFormData {
  tgl_mulai: string;
  tgl_akhir: string;
  tipe_cuti: string;
  deskripsi: string;
}

interface DataItem {
  id: number;
  nama: string;
  tgl_penyerahan: string;
  no_telephone: string;
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
    posisi: "Developer",
    departemen: "Teknologi",
    tgl_mulai: "25 maret 2024",
    tgl_akhir: "30 maret 2024",
    lama_cuti: 5,
    tipe_cuti: "liburan",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur. Perspiciatis nihil illum aliquam quisquam earum velit est esse, consequuntur sint. Amet doloribus excepturi ab autem. Dolorem ut officiis repudiandae. ",
    status: "Pending",
    approved_by: "",
  },
  {
    id: 2,
    nama: "Kawamatsu",
    tgl_penyerahan: "20 april 2024",
    no_telephone: "123-456-789",
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
  {
    id: 3,
    nama: "Kawamatsu",
    tgl_penyerahan: "20 april 2024",
    no_telephone: "123-456-789",
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
  const [cutiType, setCutiType] = useState("");
  const [urgentCutiOption, setUrgentCutiOption] = useState("");
  const [doctorLetter, setDoctorLetter] = useState(null);
  const [editCutiType, setEditCutiType] = useState("");

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    setDoctorLetter(file);
  };

  const [editDataId, setEditDataId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<EditFormData>({
    tgl_mulai: "",
    tgl_akhir: "",
    tipe_cuti: "",
    deskripsi: "",
  });

  const handleEditClick = (id: number) => {
    const itemToEdit = data.find((item) => item.id === id);
    if (itemToEdit) {
      setEditFormData({
        tgl_mulai: itemToEdit.tgl_mulai,
        tgl_akhir: itemToEdit.tgl_akhir,
        tipe_cuti: itemToEdit.tipe_cuti,
        deskripsi: itemToEdit.deskripsi,
      });
      setEditDataId(id);
    }
  };
  const handleCloseModal = () => {
    setEditDataId(null);
  };

  const handleEditFormChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setEditFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleEditFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editDataId !== null) {
      console.log("Edited Data:", editFormData);
      setEditDataId(null);
      setEditFormData({
        tgl_mulai: "",
        tgl_akhir: "",
        tipe_cuti: "",
        deskripsi: "",
      });
    }
  };
    const handleEditCutiTypeChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const { value } = event.target;
      setEditCutiType(value); // Update editCutiType saat cutiType berubah
      setCutiType(value); // Jika perlu, update cutiType juga sesuai kebutuhan aplikasi
    };
  return (
    <div className="w-full">
      <h1 className={`${inter.className} mb-8 text-xl md:text-2xl`}>
        Laporan Cuti
      </h1>
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
                    {data.some((row) => row.status === "Pending") && ( 
                      <th scope="col" className="px-4 py-5 font-medium">
                        Actions
                      </th>
                    )}
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
                      {row.status === "Pending" && ( 
                        <td className="whitespace-nowrap flex flex-row bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                          <button onClick={() => handleEditClick(row.id)}>
                            <PencilSquareIcon className="w-6" />
                          </button>
                          <button>
                            <TrashIcon className="w-6" />
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {editDataId !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md w-full max-h-96 m-3 mt-10 md:w-1/3 overflow-y-auto">
            <div className="flex flex-row justify-between">
              <h2 className="text-lg font-semibold mb-4">
                Edit Pengajuann Cuti
              </h2>
              <button onClick={handleCloseModal}>
                <XMarkIcon className="w-6 mb-4" />
              </button>
            </div>
            <p>
              <span className="font-semibold">Nama:</span>{" "}
              {data.find((item) => item.id === editDataId)?.nama}
            </p>
            <form onSubmit={handleEditFormSubmit}>
              <div className="flex flex-row justify-between">
                <label htmlFor="tipe_cuti" className="block font-semibold mb-1">
                  Tipe Cuti:
                </label>
                <select
                  className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  value={editCutiType} // Gunakan editCutiType sebagai nilai default
                  onChange={handleEditCutiTypeChange} // Ganti fungsi onChange
                >
                  <option value="Cuti Tahunan">Cuti Tahunan</option>
                  <option value="Cuti Urgensi">Cuti Urgensi</option>
                  <option value="Cuti Sakit">Cuti Sakit</option>
                </select>
              </div>

              {/* Additional options based on selected cuti type */}
              {cutiType === "Cuti Urgensi" && (
                <div className="mx-2">
                  <label className="block text-gray-700">
                    Opsi Cuti Urgensi
                  </label>
                  <select
                    className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
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
              <div className="mt-2 flex flex-row justify-between">
                <label htmlFor="deskripsi" className="block font-semibold mb-1">
                  Deskripsi:
                </label>
                <textarea
                  name="deskripsi"
                  className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  value={editFormData.deskripsi}
                  onChange={handleEditFormChange}
                />
              </div>
              <div className="mt-2 flex flex-row justify-between">
                <label htmlFor="tgl_mulai" className="block font-semibold mb-1">
                  Tanggal Mulai:
                </label>
                <input
                  type="date"
                  name="tgl_mulai"
                  className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  value={editFormData.tgl_mulai}
                  onChange={handleEditFormChange}
                />
              </div>
              <div className="mt-2 flex flex-row justify-between">
                <label htmlFor="tgl_akhir" className="block font-semibold mb-1">
                  Tanggal Akhir:
                </label>
                <input
                  type="date"
                  name="tgl_akhir"
                  className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  value={editFormData.tgl_akhir}
                  onChange={handleEditFormChange}
                />
              </div>
              <div className="flex flex-row justify-end mt-5">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
