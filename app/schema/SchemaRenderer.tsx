"use client"


import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { JSONSchemaNode } from "./schemaInterface"
import { DataTable } from "@/components/ui/dataTable"

interface SchemaRendererProps {
  schema: JSONSchemaNode
  data: JSONData
}

export default function SchemaRenderer({ schema, data }: SchemaRendererProps) {
  switch (schema.type) {
    case "page":
    case "group":
      return (
        <div className="flex flex-col gap-6">
          {schema.children?.map((child) => (
            <SchemaRenderer key={child.id} schema={child} data={data} />
          ))}
        </div>
      )

    case "row":
      return (
        <div className="flex flex-row gap-4">
          {schema.children?.map((child) => (
            <SchemaRenderer key={child.id} schema={child} data={data} />
          ))}
        </div>
      )

    case "card":
  return (
    <Card className="flex-1 text-center">
      <CardHeader>
        <CardTitle>{schema.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-2xl font-bold">
        {/* Render bound data first */}
        {schema.bind && data[schema.bind]}
        {/* Render children recursively if present */}
        {schema.children?.map((child) => (
          <SchemaRenderer key={child.id} schema={child} data={data} />
        ))}
      </CardContent>
    </Card>
  )



case "table": {
  const rows = (schema.bind && data[schema.bind]) ? data[schema.bind] : []

  // Dynamically generate columns from your schema
  const columns =
    schema.columns?.map(col => ({
      accessorKey: col.key,
      header: col.label,
      cell: ({ row }: any) => {
        const value = row.getValue(col.key)
        return <span>{String(value ?? "")}</span>
      },
    })) ?? []

  return (
    <div className="mt-6">
      {schema.title && (
        <h2 className="text-lg font-semibold mb-2">{schema.title}</h2>
      )}
      <DataTable columns={columns} data={rows} />
    </div>
  )
}

    default:
      return null
  }
}
