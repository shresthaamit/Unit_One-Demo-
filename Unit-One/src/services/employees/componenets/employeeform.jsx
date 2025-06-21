import React, { useState } from "react";
import Button from "../../components/button";

export default function EmployeeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDegisnation] = useState("");
  const [department, setDepartment] = useState("");
  const [userType, setuserType] = useState("");
  const [salary, setSalary] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !designation ||
      !department ||
      !userType ||
      !salary ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill out all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password Doesnot match");
    }
    const newEmployee = {
      name,
      email,
      department,
      designation,
      userType,
      salary,
      password,
      confirmPassword,
    };
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });

      if (!response.ok) {
        throw new error("Failed to add EMployee");
      }
      const result = await response.json();
      console.log("Success:", result);
      alert("Employee Added Successfuly");
      setName("");
      setEmail("");
      setDepartment("");
      setDegisnation("");
      setSalary("");
      setPassword("");
      setuserType("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding employee.");
    }
  };
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

      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block mb-0.5 text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=""
              className="w-full px-2 py-1 border rounded-md focus:ring-1 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-0.5 text-gray-700">Email</label>
            <input
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
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
              value={designation}
              onChange={(e) => setDegisnation(e.target.value)}
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
              value={userType}
              onChange={(e) => setuserType(e.target.value)}
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
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
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
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
