"use client"


import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { JSONSchemaNode } from "./schemaInterface"
import { DataTable } from "@/components/ui/dataTable/data-table"
import { ColumnDef } from "@tanstack/react-table"
import { generateColumnsFromSchema } from "@/components/ui/dataTable/columns"


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
      const tableSource = schema.bind ? data[schema.bind] : null
      console.log(`TableSource:`, tableSource)
      if (!tableSource) return null

      const { columnDef = [], leaveRecords = [] } = tableSource

      // const columns: ColumnDef<any>[] = columnDef.map((col: any) => ({
      //   accessorKey: col.key,
      //   header: col.value,
      //   cell: ({ row }: any) => <span>{String(row.getValue(col.key) ?? "")}</span>,
      // }))

      const columns: ColumnDef<any>[] = generateColumnsFromSchema(columnDef)

      return (
        <div className="mt-6">
          {schema.title && <h2 className="text-lg font-semibold mb-2">{schema.title}</h2>}
          <DataTable columns={columns} data={leaveRecords} />
        </div>
      )
    }

    default:
      return null
  }
}
