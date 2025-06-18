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
}
