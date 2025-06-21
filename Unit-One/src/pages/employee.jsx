import react, { useState } from "react";
import Button from "../services/components/button";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import Searchselect from "../services/components/searchselect";
import EmpolyeeCard from "../newComponent/employeeCard";
import EmployeeForm from "../services/employees/componenets/employeeform";
export default function Employee() {
  const [modelform, setModelform] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center pl-2 pr-2 text-gray-500">
        <div className=" flex flex-col gap-1">
          <h3 className="text-black text-md">Employee Management</h3>
          <p className="text-black text-xs">
            Manage your organization employees
          </p>
        </div>

        <Button
          icon={<FaPlus />}
          type="submit"
          onClick={() => setModelform(true)}
        >
          Add Employee{" "}
        </Button>
      </div>
      <Searchselect />
      <EmpolyeeCard />
      {modelform && (
        <div className="fixed inset-0 bg-transparent bg-opacity-10 backdrop-brightness-30 flex items-center justify-center">
          <div className="bg-white rounded-md shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setModelform(false)}
              className="absolute top-2 right-2 text-xs bg-gray-200 px-2 py-1 rounded cursor-pointer"
            >
              ✕
            </button>
            <EmployeeForm />
          </div>
        </div>
      )}
    </>
  );
}
