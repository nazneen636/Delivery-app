import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Action from "../order/Action";
import AddBtn from "../common/AddBtn";

const invoices = [
  {
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: +90345354334,
    // Action: <PiCheckFill />,
  },
  {
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: +90345354334,
    // Action: <PiCheckFill />,
  },
  {
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: +90345354334,
    // Action: <PiCheckFill />,
  },
  {
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: +90345354334,
    // Action: <PiCheckFill />,
  },
  {
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: +90345354334,
    // Action: <PiCheckFill />,
  },
  {
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: +90345354334,
    // Action: <PiCheckFill />,
  },
];

export default function TableDemo() {
  return (
    <div className="bg-white rounded-[20px] p-7">
      <div className="flex justify-between">
        <h3 className="roboto font-bold text-[32px]">Orders</h3>
        <AddBtn />
      </div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="">Order</TableHead>
            <TableHead className="">Address</TableHead>
            <TableHead className="">Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{invoice.Order}</TableCell>
              <TableCell className="">{invoice.Address}</TableCell>
              <TableCell>{invoice.Date}</TableCell>
              <TableCell className="">{invoice.Time}</TableCell>
              <TableCell className="">{invoice.Phone}</TableCell>
              <TableCell className="">
                <Action />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
}
