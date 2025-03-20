"use client";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddBtn from "../common/AddBtn";
import { useState } from "react";
import { OrderModal } from "./OrderModal";

const invoices = [
  {
    id: 1, // Added a unique ID for each invoice
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: "+90345354334",
    received: "Yes",
  },
  {
    id: 2, // Unique ID for this invoice
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: "+90345354334",
    received: "No",
  },
  {
    id: 3, // Unique ID for this invoice
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: "+90345354334",
    received: "Yes",
  },
  {
    id: 4, // Unique ID for this invoice
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: "+90345354334",
    received: "No",
  },
  {
    id: 5, // Unique ID for this invoice
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: "+90345354334",
    received: "Yes",
  },
  {
    id: 6, // Unique ID for this invoice
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: "+90345354334",
    received: "No",
  },
];

export default function TableDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="bg-white rounded-[20px] p-7 ">
      <div className="flex justify-between items-center  mb-5 md:mb-0">
        <h3 className="roboto font-bold text-[32px]">Drivers</h3>

        <AddBtn onClick={() => setModalOpen(true)} btnText="Add Order" />
      </div>
      {modalOpen && (
        <OrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="">Order</TableHead>
            <TableHead className="">Address</TableHead>
            <TableHead className="">Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="">Received</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                <Link href={`/order/${invoice.id}`} className="block">
                  {invoice?.Order}
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/order/${invoice.id}`} className="block">
                  {invoice?.Address}
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/order/${invoice.id}`} className="block">
                  {invoice?.Date}
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/order/${invoice.id}`} className="block">
                  {invoice?.Time}
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/order/${invoice.id}`} className="block">
                  {invoice?.Phone}
                </Link>
              </TableCell>
              <TableCell className="">
                <span className="rounded-md bg-blue-500 text-white px-4 py-2 text-sm">
                  {invoice?.received}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
