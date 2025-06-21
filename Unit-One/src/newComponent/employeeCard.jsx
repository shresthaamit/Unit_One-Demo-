import { FaUser, FaEye, FaEdit, FaTrash } from "react-icons/fa";
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
}
