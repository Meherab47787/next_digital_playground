"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { leaveManagementData } from "@/app/schema/data/leaveManagementData"

export function generateColumnsFromSchema(
  schemaColumns: { key: string; value: string }[]
): ColumnDef<any>[] {
  const baseColumns: ColumnDef<any>[] = schemaColumns.map((col) => ({
    accessorKey: col.key,
    header: col.value,
    cell: ({ row }) => {
      const rawValue = row.getValue(col.key)
      const value = String(rawValue) // cast unknown → string

      // Status formatting with color badges
      // if (col.key === "status") {
      //   const statusColors: Record<string, string> = {
      //     Approved: "bg-green-100 text-green-800",
      //     Pending: "bg-yellow-100 text-yellow-800",
      //     Cancelled: "bg-red-100 text-red-800",
      //   }
      //   return (
      //     <span
      //       className={` px-2 py-1 rounded-full text-sm ${
      //         statusColors[value] ?? "bg-gray-100 text-gray-800"
      //       }`}
      //     >
      //       {value}
      //     </span>
      //   )
      // }

      // Mode formatting as subtle badge
      if (col.key === "mode") {
        return (
          // <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
          <span>
        
            {value}
          </span>  
          // </span>
        )
      }

      // Default: plain text, capitalize
      return <span className="capitalize">{value}</span>
    },
  }))

  // Add Actions column at the end
  baseColumns.push({
  id: "actions",
  header: "Actions",
  cell: ({ row }) => {
    const rowData = row.original;

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {leaveManagementData.tableDef.actions.map((action) => (
            <DropdownMenuItem
              key={action.label}
              onClick={() => {
                if (action.type === "link") {
                  const path = action.endpoint.replace(":id", rowData.id ?? "");
                  window.location.href = path;
                } else if (action.type === "api") {
                  if (
                    !action.confirm ||
                    confirm(`Are you sure you want to ${action.label.toLowerCase()}?`)
                  ) {
                    fetch(action.endpoint.replace(":id", rowData.id ?? ""), {
                      method: action.method || "GET",
                    });
                  }
                }
              }}
            >
              {action.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
});


  return baseColumns
}
