import { JSONSchemaNode } from "../schemaInterface";

const leaveManagementSchema: JSONSchemaNode = {
  id: "leave-page",
  type: "page",
  title: "Leave Management Dashboard",
  layout: "vertical",
  children: [
    {
      id: "summary-row",
      type: "row",
      layout: "horizontal",
      spacing: "md",
      children: [
        { id: "card-allowed", type: "card", title: "Leaves Allowed", bind: "leavesAllowed" },
        { id: "card-taken", type: "card", title: "Leaves Taken", bind: "leavesTaken" },
        { id: "card-available", type: "card", title: "Available Leaves", bind: "availableLeaves" },
        { id: "card-balance", type: "card", title: "Balance Leaves", bind: "balanceLeaves" },
      ],
    },
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
