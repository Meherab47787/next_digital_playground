import React from "react";
import employees from "../../app/data/employeeData.json";
import products from "../../app/data/productData.json";
import RendererEngine from "./RendererSchema";

export default function MainEngine() {
  const schemas = [
    {
      id: "employeeTable",
      type: "reactiveTable" as const,
      title: "Employee Table (Reactive)",
      data: employees,
    },
    {
      id: "productTable",
      type: "staticTable" as const,
      title: "Product Table (Static)",
      data: products,
    },
  ];

  return (
    <main className="p-6 space-y-10">
      {schemas.map((schema) => (
        <RendererEngine key={schema.id} schema={schema} />
      ))}
    </main>
  );
}
