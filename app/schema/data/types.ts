export type LeaveData = {
    type: "Monthly" | "Casual" | "Sick"
    mode: "Full Day" | "Half Day" | "Multiple Days"
    status: "Approved" | "Pending" | "Cancelled" | "Rejected"
}