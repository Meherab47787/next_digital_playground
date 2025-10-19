"use client";

import React, { useState } from "react";

type Employee = {
  id: number;
  name: string;
  role: string;
};

export default function ReactiveTable({ data }: { data: Employee[] }) {
  const [employees, setEmployees] = useState<Employee[]>(data);

  const deleteEmployee = (id: number) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <table className="min-w-full border border-gray-300 rounded-lg">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Role</th>
          <th className="p-2 border">Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td className="p-2 border">{emp.id}</td>
            <td className="p-2 border">{emp.name}</td>
            <td className="p-2 border">{emp.role}</td>
            <td className="p-2 border text-center">
              <button
                onClick={() => deleteEmployee(emp.id)}
                className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}

        {employees.length === 0 && (
          <tr>
            <td colSpan={4} className="p-4 text-center text-gray-500">
              No employees left
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
