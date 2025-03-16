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
import Action from "../order/Action";
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
  },
  {
    id: 2, // Unique ID for this invoice
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: "+90345354334",
  },
  {
    id: 3, // Unique ID for this invoice
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: "+90345354334",
  },
  {
    id: 4, // Unique ID for this invoice
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: "+90345354334",
  },
  {
    id: 5, // Unique ID for this invoice
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: "+90345354334",
  },
  {
    id: 6, // Unique ID for this invoice
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00 14:00",
    Phone: "+90345354334",
  },
];

export default function TableDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="bg-white rounded-[20px] p-7">
      <div className="flex justify-between">
        <h3 className="roboto font-bold text-[32px]">Orders</h3>

        <AddBtn onClick={() => setModalOpen(true)} />
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
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                <Link href={`/order-details/${invoice.id}`}>
                  {invoice.Order}
                </Link>
              </TableCell>
              <TableCell>{invoice.Address}</TableCell>
              <TableCell>{invoice.Date}</TableCell>
              <TableCell>{invoice.Time}</TableCell>
              <TableCell>{invoice.Phone}</TableCell>
              <TableCell>
                <Action />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
