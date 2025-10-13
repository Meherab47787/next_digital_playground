export interface JSONSchemaAction {
  label: string
  type: "link" | "api" | "custom"
  endpoint?: string
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  confirm?: boolean
  icon?: string
  onClick?: string // Optional handler reference for client-side logic
}