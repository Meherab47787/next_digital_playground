export const leaveManagementData = {
  leavesAllowed: 30,
  leavesTaken: 12,
  availableLeaves: 10,
  balanceLeaves: 8,
  
  tableDef: {
    columnDef: [
      {
        key: "type",
        value: "Type"
      },
      {
        key: "mode",
        value: "Mode"
      },
      {
        key: "status",
        value: "Status"
      },
    ],
    leaveRecords: [
    { type: "Monthly", mode: "Full Day", status: "Approved" },
    { type: "Casual", mode: "Half Day", status: "Pending" },
    { type: "Sick", mode: "Full Day", status: "Cancelled" },
    { type: "Sick", mode: "Full Day", status: "Cancelled" },
    { type: "Monthly", mode: "Full Day", status: "Approved" },
    { type: "Sick", mode: "Full Day", status: "Cancelled" },
    { type: "Casual", mode: "Half Day", status: "Pending" },
    { type: "Sick", mode: "Full Day", status: "Cancelled" },
    { type: "Sick", mode: "Full Day", status: "Cancelled" },
    { type: "Monthly", mode: "Full Day", status: "Approved" },
    { type: "Sick", mode: "Full Day", status: "Cancelled" },
    { type: "Monthly", mode: "Full Day", status: "Approved" },
  ],
  actions: [
      {
        label: "Edit",
        type: "link",
        endpoint: "/employee/edit/:id",
        icon: "edit",
      },
      {
        label: "Delete",
        type: "api",
        method: "DELETE",
        endpoint: "/api/employee/:id",
        confirm: true,
        icon: "trash",
      },
    ],
  }
};