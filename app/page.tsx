import Image from "next/image";
import SchemaRenderer from "./schema/SchemaRenderer";
import { leaveManagementSchema } from "./schema/data/leaveManagementSchema";
import { leaveManagementData } from "./schema/data/leaveManagementData";

export default function Home() {
  return (
    <div>
       <SchemaRenderer schema={leaveManagementSchema} data={leaveManagementData} />
    </div>
   
  );
}
