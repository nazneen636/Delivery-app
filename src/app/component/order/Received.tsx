import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function YesNoDropdown() {
  const [selectedValue, setSelectedValue] = React.useState("No");

  return (
    <Select onValueChange={setSelectedValue} value={selectedValue}>
      <SelectTrigger className="h-8 flex items-center justify-center border rounded-md bg-blue-500 text-white hover:bg-blue-600">
        <SelectValue>{selectedValue}</SelectValue>
      </SelectTrigger>
      <SelectContent className="w-24 shadow-lg border rounded-md md:px-4 md:py-2">
        <SelectItem
          value="Yes"
          className="md:p-2 roboto font-bold  hover:bg-gray-50 text-center"
        >
          Yes
        </SelectItem>
        <SelectItem
          value="No"
          className="md:p-2 roboto font-bold  hover:bg-gray-50 text-center"
        >
          No
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
