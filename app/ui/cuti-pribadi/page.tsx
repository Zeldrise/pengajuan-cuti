import React from "react";
import { inter } from "../fonts";

const data = [
  {
    id: 1,
    nama: "Kawamatsu",
    tgl_penyerahan: "20 maret 2024",
    no_telephone: "123-456-789",
    posisi: "Developer",
    departemen: "Teknologi",
    tgl_mulai: "25 maret 2024",
    tgl_akhir: "30 maret 2024",
    tipe_cuti: "liburan",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur. Perspiciatis nihil illum aliquam quisquam earum velit est esse, consequuntur sint. Amet doloribus excepturi ab autem. Dolorem ut officiis repudiandae. ",
    status: "Diterima",
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
    tipe_cuti: "liburan",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur. Perspiciatis nihil illum aliquam quisquam earum velit est esse, consequuntur sint. Amet doloribus excepturi ab autem. Dolorem ut officiis repudiandae. ",
    status: "Diterima",
  },
];

export default function page() {
  return (
    <div className="w-full">
      <h1 className={`${inter.className} mb-8 text-xl md:text-2xl`}>
        Laporan Cuti
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
                    <th scope="col" className="px-3 py-5 font-medium">
                      No telephone darurat
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Posisi
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Departemen
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Tanggal Mulai
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Tanggal akhir
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Tipe cuti
                    </th>
                    <th scope="col" className="px-20 py-5 font-medium ">
                      Deskripsi
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Status
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
                        {row.tgl_mulai}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {row.tgl_akhir}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {row.tipe_cuti}
                      </td>
                      <td className="whitespace-pre-line bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md overflow-y-auto ">
                        <div className="max-h-20 text-center">
                          {row.deskripsi}
                        </div>
                      </td>

                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {row.status}
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
