"use client";
import React, { useState } from "react";
import { inter, teko } from "../ui/fonts";
import Image from "next/image";
import {
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    // Your logic to handle password reset request
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <main className="justify-center items-center">
      <p className={`${teko.className} text-center p-6 text-4xl`}>
        Pengajuan cuti
      </p>
      <div className="flex flex-col md:flex-row-reverse justify-around mx-auto w-11/12 md:w-9/12 bg-yellow-50 rounded-2xl shadow-xl shadow-yellow-500/50">
        <div className="bg-yellow-50 border-solid border-0 md:border-2 border-yellow-500 rounded-xl my-5 justify-center items-center md:w-[400px] w-full shadow-none md:shadow-xl shadow-black-500/50">
          <div className={`${inter.className}  p-5`}>
            <p className={`${teko.className} font-bold text-4xl text-center`}>
              Change Password
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="new-password" className="block text-gray-700">
                  New Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="new-password"
                    name="new-password"
                    className="border-1 p-1 border-transparent ring-1 block w-full pl-10 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <div
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeSlashIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <EyeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirm-password"
                  className="block text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirm-password"
                    name="confirm-password"
                    className="border-1 p-1 border-transparent ring-1 block w-full pl-10 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeSlashIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <EyeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-[125px]">
                <button
                  type="submit"
                  className="w-full text-center text-white font-bold  bg-yellow-400  focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-500/50 rounded-lg  px-5 py-2.5 "
                >
                  Change Password
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
