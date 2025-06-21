import React from "react";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import { FaUsersGear } from "react-icons/fa6";
export default function Topbar() {
  return (
    <div className="flex justify-between p-3">
      <div className="flex items-center gap-1.5 leading-normal">
        <FaUsersGear className="cursor-pointer text-3xl" />
        <h5 className="text-xl text-black font-bold ">HRMS PORTAL</h5>
      </div>

      <div className="flex items-center justify-between text-5xl gap-6">
        <FiSearch className="cursor-pointer text-2xl" />
        <FiBell className="cursor-pointer text-2xl" />
        <FiUser className="cursor-pointer text-2xl" />
      </div>
    </div>
  );
}
