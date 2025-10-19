import React from "react";

type Product = {
  id: string;
  name: string;
  price: number;
};

export default function StaticTable({ data }: { data: Product[] }) {
  return (
    <table className="min-w-full border border-gray-300 rounded-lg">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Price ($)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product) => (
          <tr key={product.id}>
            <td className="p-2 border">{product.id}</td>
            <td className="p-2 border">{product.name}</td>
            <td className="p-2 border">{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
