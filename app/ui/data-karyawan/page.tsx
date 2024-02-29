import React from "react";
// import Search from "./search";
import { inter } from "../fonts";

import { TrashIcon } from "@heroicons/react/24/outline";

const data = [
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
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
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
    </div>
  );
}
