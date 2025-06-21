# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!-- LOGIN SETUP
import React from "react";
import { RiAdminFill } from "react-icons/ri";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <div className="flex justify-center mb-4 text-black-600 text-4xl">
          <RiAdminFill />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-black-700">
          Unit-One Login
        </h2>

        <label className="block text-gray-600 text-sm mb-1">Email</label>
        <input
          type="email"
          placeholder="admin@example.com"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        <label className="block text-gray-600 text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-green-700 hover:text-black transition hover:cursor-pointer text-xl"
        >
          Login
        </button>
      </form>
    </div>
  );
} -->
<!--
TopBar SETUP
import React from "react";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import { FaUsersGear } from "react-icons/fa6";
export default function Topbar() {
  return (
    <div className="flex justify-between ">
      <FaUsersGear />
      <div className="text-3xl text-black font-bold">HRMS PORTAL</div>
      <div className="flex items-center justify-between text-5xl gap-2">
        <FiSearch className="cursor-pointer" />
        <FiBell className="cursor-pointer" />
        <FiUser className="cursor-pointer" />
      </div>
    </div>
  );
} -->

<!-- Sidebar Without active Status
import React from "react";
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiDollarSign,
  FiSettings,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-md border-r p-4">
      <nav className="flex flex-col gap-4 text-gray-400">
        <SidebarItems icon={<FiHome />} label="Dashboard"></SidebarItems>
        <SidebarItems icon={<FiUsers />} label="Employee"></SidebarItems>
        <SidebarItems icon={<FiCalendar />} label="Attendance"></SidebarItems>
        <SidebarItems icon={<FiDollarSign />} label="Payroll"></SidebarItems>
        <SidebarItems
          icon={<FiSettings />}
          label="User Management"
        ></SidebarItems>
      </nav>
    </div>
  );
}

const SidebarItems = ({ icon, label }) => {
  return (
    <div className="flex items-center content-between gap-2 ps-2 py-2">
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  )
 -->
<!-- Layout-containing[sidebar, Topbar]
import Topbar from "./topbar";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex flex-1 overflow-hidden ">
        <div>
          <Sidebar />
        </div>

        <div className=" flex-1 overflow-y-auto p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
Make a Reusable button componenet
function Button({
  children,
  onClick,
  type = "buttons",
  className = "",
  icon = null,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-1.5 text-white bg-black rounded cursor-pointer text-md inline-flex items-center gap-1`}
    >
      {icon && <span className="">{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
Make a dropdown
import { FaSearch } from "react-icons/fa";

export default function SearchSelect() {
  return (
    <div className="p-1 bg-white mt-3">
      <div className="grid grid-cols-12 gap-4 items-center">
        {/* Input container - flex, same padding */}
        <div className="col-span-10 flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>

        {/* Select container - flex + items-center + same padding */}
        <div className="col-span-2 flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
          <select
            className="w-full h-full text-sm bg-white text-gray-700 outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select
            </option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="hr">HR</option>
            <option value="engineering">Engineering</option>
          </select>
        </div>
      </div>
    </div>
  );
}

} -->
<!-- Table EmployeeCRUD -->
<!-- import { FaUser, FaEye, FaEdit, FaTrash } from "react-icons/fa";
export default function EmpolyeeCard() {
  return (
    <>
      <div className="flex flex-col gap-3 mt-4">
        <p className="text-sm  text-black">Employees(7)</p>
        <p className="text-xs">List of all employees in your organization</p>
      </div>
      <div className="mt-5">
        <table className="w-full text-sm text-center text-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Employee</th>
              <th>Department</th>
              <th>Position</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50">
              <td className="flex items-center gap-3 px-4 py-2">
                <FaUser className="text-gray-400" />
                <div>
                <div className="font-medium text-gray-900 text-left ">ABC</div>
                  <div className="text-gray-500 text-xs">abbc@gmail..com</div>
                </div>
              </td>
              <td className="text-center">HJWgd</td>
              <td className="text-center">ehfge</td>
              <td className="text-center">
                {/* <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    emp.status === "Active"
                      ? "bg-black text-white"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {emp.status}
                </span> */}
                <span className={`px-2 py-1 text-xs rounded-full `}>
                  Activate
                </span>
              </td>
              <td className="text-center">Date</td>
              <td className="text-center">500</td>
              <td className="flex justify-center gap-3 text-gray-600">
                <FaEye className="cursor-pointer hover:text-blue-500" />
                <FaEdit className="cursor-pointer hover:text-green-500" />
                <FaTrash className="cursor-pointer hover:text-red-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
} -->
<!--
ADD EMPloyee FORM
import React, { useState } from "react";
import Button from "../../components/button";

export default function EmployeeForm() {
  return (
    <div className="p-6 sm:p-8">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Add New Employee
        </h2>
        <p className="text-sm text-gray-500">
          Fill in the employee details below
        </p>
      </div>

      <form className="space-y-2">
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block mb-0.5 text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-2 py-1 border rounded-md focus:ring-1 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-0.5 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-2 py-1 border rounded-md focus:ring-1 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">
              Department
            </label>
            <select
              defaultValue=""
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="engineering">Engineering</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">
              Designation
            </label>
            <select
              defaultValue=""
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="senior">Senior</option>
              <option value="midlevel">Midlevel</option>
              <option value="junior">Junior</option>
              <option value="intern">Intern</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">
              User Type
            </label>
            <select
              defaultValue=""
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="hr">HR</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">Salary</label>
            <input
              type="number"
              min={1}
              placeholder="50000"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
          </div>
        </div>

        <div className="pt-2">
          <Button type="submit">Add Employee</Button>
        </div>
      </form>
    </div>
  );
}

 -->

<!-- Popup mOdel
{modelform && (
<div className="fixed inset-0 bg-transparent bg-opacity-10 backdrop-brightness-30 flex items-center justify-center">
<div className="bg-white rounded-md shadow-xl w-full max-w-md relative">
<button
onClick={() => setModelform(false)}
className="absolute top-2 right-2 text-xs bg-gray-200 px-2 py-1 rounded cursor-pointer" >
✕
</button>
<EmployeeForm />
</div>
</div>
)} -->
