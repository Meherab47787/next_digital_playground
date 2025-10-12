import { JSONSchemaNode } from "../schemaInterface";

export const leaveManagementSchema: JSONSchemaNode = {
  id: "leave-page",
  type: "page",
  title: "Leave Management Dashboard",
  layout: "vertical",
  children: [
    // 🔹 TOP ROW - Summary Cards
    {
      id: "summary-row",
      type: "row",
      layout: "horizontal",
      spacing: "md",
      children: [
        {
          id: "card-allowed",
          type: "card",
          title: "Leaves Allowed",
          bind: "leavesAllowed",
          style: { variant: "default" },
        },
        {
          id: "card-taken",
          type: "card",
          title: "Leaves Taken",
          bind: "leavesTaken",
          style: { variant: "default" },
        },
        {
          id: "card-available",
          type: "card",
          title: "Available Leaves",
          bind: "availableLeaves",
          style: { variant: "default" },
        },
        {
          id: "card-balance",
          type: "card",
          title: "Balance Leaves",
          bind: "balanceLeaves",
          style: { variant: "default" },
        },
      ],
    },

    // 🔹 TABLE SECTION
    {
      id: "leave-table-section",
      type: "table",
      title: "Leave History",
      columns: [
        { key: "type", label: "Type" },
        { key: "mode", label: "Mode" },
        { key: "status", label: "Status" },
      ],
      bind: "leaveRecords",
    },
  ],
};
