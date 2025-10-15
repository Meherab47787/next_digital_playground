import { JSONSchemaAction } from "./schemaActionInterface";

export interface JSONSchemaNode {
  id: string;
  type:
    | "page"
    | "row"
    | "card"
    | "table"
    | "form"
    | "group"
    | "textbox"
    | "button"
    | string;
  title?: string;
  layout?: "vertical" | "horizontal";
  spacing?: "sm" | "md" | "lg";
  bind?: string; // data binding key
  style?: Record<string, any>;
  columns?: { key: string; label: string }[];
  children?: JSONSchemaNode[];
  actions?: JSONSchemaAction[]
}
