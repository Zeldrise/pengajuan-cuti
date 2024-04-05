"use client";
import React, { useState } from "react";
// import Search from "./search";
import { inter } from "../fonts";

import {
  TrashIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface EditFormData {
  posisi: string;
  departemen: string;
}

interface AddFormData {
  nama: string;
  email: string;
  no_telephone: string;
  posisi: string;
  departemen: string;
  tanggal_bergabung: string;
}

interface DataItem {
  id: number;
  nama: string;
  email: string;
  no_telephone: string;
  posisi: string;
  departemen: string;
  sisa_cuti: number;
}
const data: DataItem[] = [
  {
    id: 1,
    nama: "Kawamatsu",
    email: "kappa@example.com",
    no_telephone: "123-456-789",
    posisi: "Developer",
    departemen: "Teknologi",
    sisa_cuti: 10,
  },
  {
    id: 2,
    nama: "Nekomamushi",
    email: "neko@example.com",
    no_telephone: "987-654-321",
    posisi: "Designer",
    departemen: "Desain",
    sisa_cuti: 8,
  },
];

export default function page() {
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<EditFormData>({
    posisi: "",
    departemen: "",
  });

  const [addingEmployee, setAddingEmployee] = useState<boolean>(false);
  const [addFormData, setAddFormData] = useState<AddFormData>({
    nama: "",
    email: "",
    no_telephone: "",
    posisi: "",
    departemen: "",
    tanggal_bergabung: "",
  });

  const handleAddEmployeeClick = () => {
    setAddingEmployee(true);
  };

  const handleCloseAddModal = () => {
    setAddingEmployee(false);
    setAddFormData({
      nama: "",
      email: "",
      no_telephone: "",
      posisi: "",
      departemen: "",
      tanggal_bergabung: "",
    });
  };

  const handleAddFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddFormData((prevFormData: AddFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Added Data:", addFormData);
    handleCloseAddModal();
  };

  const handleEditClick = (id: number) => {
    const itemToEdit = data.find((item) => item.id === id);
    if (itemToEdit) {
      setEditFormData({
        posisi: itemToEdit.posisi,
        departemen: itemToEdit.departemen,
      });
      setEditingItemId(id);
    }
  };
  const handleCloseModal = () => {
    setEditingItemId(null);
  };

  const handleEditFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEditFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editingItemId !== null) {
      console.log("Edited Data:", editFormData);
      setEditingItemId(null);
      setEditFormData({ posisi: "", departemen: "" });
    }
  };
  return (
    <div className="w-full">
      <h1 className={`${inter.className} mb-8 text-xl md:text-2xl`}>
        Data Karyawan
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
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      No telephone
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Posisi
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Departemen
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Sisa cuti
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
                        {row.email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {row.no_telephone}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {row.posisi}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {row.departemen}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        <div className="flex items-center">{row.sisa_cuti}</div>
                      </td>
                      <td className="whitespace-nowrap flex flex-row bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        <button onClick={() => handleEditClick(row.id)}>
                          <PencilSquareIcon className="w-6" />
                        </button>
                        <button>
                          <TrashIcon className="w-6" />
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
      {editingItemId !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md w-full max-h-96 m-3 mt-10 md:w-1/3 overflow-y-auto">
            <div className="flex flex-row justify-between">
              <h2 className="text-lg font-semibold mb-4">Edit Data Karyawan</h2>
              <button onClick={handleCloseModal}>
                <XMarkIcon className="w-6 mb-4" />
              </button>
            </div>
            <p>
              <span className="font-semibold">Nama:</span>{" "}
              {data.find((item) => item.id === editingItemId)?.nama}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {data.find((item) => item.id === editingItemId)?.email}
            </p>

            <form onSubmit={handleEditFormSubmit}>
              <div className="flex flex-row justify-between">
                <label htmlFor="position" className="block font-semibold mb-1">
                  Posisi:
                </label>
                <input
                  type="text"
                  name="posisi"
                  className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  value={editFormData.posisi}
                  onChange={handleEditFormChange}
                />
              </div>
              <div className="mt-2 flex flex-row justify-between">
                <label
                  htmlFor="departemen"
                  className="block font-semibold mb-1"
                >
                  Departemen:
                </label>
                <input
                  type="text"
                  name="departemen"
                  className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  value={editFormData.departemen}
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
      {addingEmployee && ( // Tampilkan modal tambah karyawan jika state addingEmployee bernilai true
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md w-full max-h-96 m-3 mt-10 md:w-1/3 overflow-y-auto">
            <div className="flex flex-row justify-between">
              <h2 className="text-lg font-semibold mb-4">Tambah Karyawan</h2>
              <button onClick={handleCloseAddModal}>
                <XMarkIcon className="w-6 mb-4" />
              </button>
            </div>
            <form onSubmit={handleAddFormSubmit}>
              {/* Input fields for adding an employee */}
              <div className="mt-2 flex flex-row justify-between">
                <label htmlFor="nama" className="font-semibold mb-1">
                  Nama:
                </label>
                <input
                  type="text"
                  name="nama"
                  value={addFormData.nama}
                  onChange={handleAddFormChange}
                  className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              <div className="mt-2 flex flex-row justify-between">
                <label htmlFor="nama" className="font-semibold mb-1">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  value={addFormData.email}
                  onChange={handleAddFormChange}
                  className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              <div className="mt-2 flex flex-row justify-between">
                <label htmlFor="nama" className="font-semibold mb-1">
                  No Telephone:
                </label>
                <input
                  type="text"
                  name="no_telephone"
                  value={addFormData.no_telephone}
                  onChange={handleAddFormChange}
                  className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              <div className="mt-2 flex flex-row justify-between">
                <label htmlFor="nama" className="font-semibold mb-1">
                  Posisi:
                </label>
                <input
                  type="text"
                  name="posisi"
                  value={addFormData.posisi}
                  onChange={handleAddFormChange}
                  className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              <div className="mt-2 flex flex-row justify-between">
                <label htmlFor="nama" className="font-semibold mb-1">
                  Departemen:
                </label>
                <input
                  type="text"
                  name="departemen"
                  value={addFormData.departemen}
                  onChange={handleAddFormChange}
                  className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              <div className="mt-2 flex flex-row justify-between">
                <label htmlFor="nama" className="font-semibold mb-1">
                  Tanggal Bergabung:
                </label>
                <input
                  type="date"
                  name="tanggal_bergabungh"
                  value={addFormData.tanggal_bergabung}
                  onChange={handleAddFormChange}
                  className="border-1 p-1 border-transparent ring-1 block w-[200px] ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
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
      <button
        className={`fixed right-3 bottom-3 md:right-10 md:bottom-10 bg-yellow-400  px-4 py-2 text-white rounded-md ${
          editingItemId !== null || addingEmployee ? "opacity-50" : ""
        }`}
        onClick={handleAddEmployeeClick}
        disabled={editingItemId !== null}
      >
        Tambah Karyawan
      </button>
    </div>
  );
}
