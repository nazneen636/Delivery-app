import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export default function CustomDropdown() {
  return (
    <Select>
      <SelectTrigger className="w-8 h-8 flex items-center justify-center border rounded-md bg-blue-500 text-white hover:bg-blue-600">
        {/* <ChevronDown size={16} /> */}
      </SelectTrigger>
      <SelectContent className="w-24 shadow-lg border rounded-md px-4 py-4">
        <SelectItem
          value="Accept"
          className="p-2 pb-2 roboto font-bold hover:bg-gray-50 border-b-2 border-b-gray-400 text-center"
        >
          Accept
        </SelectItem>
        <SelectItem
          value="Decline"
          className="p-2 pb-2 roboto font-bold hover:bg-gray-50 border-b-2 border-b-gray-400 text-center"
        >
          Decline
        </SelectItem>
        <SelectItem
          value="Detail"
          className="p-2 pb-2 roboto font-bold hover:bg-gray-50 "
        >
          Detail
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
