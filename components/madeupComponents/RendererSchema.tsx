import React from "react";
import ReactiveTable from "./reactive-table";
import StaticTable from "./staticTable";


type RendererSchema = {
  type: "reactiveTable" | "staticTable";
  title: string;
  data: any[];
};

export default function RendererEngine({ schema }: { schema: RendererSchema }) {
  switch (schema.type) {
    case "reactiveTable":
      return (
        <section className="space-y-4">
          <h2 className="text-xl font-bold">{schema.title}</h2>
          <ReactiveTable data={schema.data} />
        </section>
      );

    case "staticTable":
      return (
        <section className="space-y-4">
          <h2 className="text-xl font-bold">{schema.title}</h2>
          <StaticTable data={schema.data} />
        </section>
      );

    default:
      return <div>Unknown schema type: {schema.type}</div>;
  }
}
