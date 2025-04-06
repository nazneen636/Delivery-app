"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import AddBtn from "../common/AddBtn";
import { OrderModal } from "./OrderModal";
import CustomDropdown from "./Action";
import { PricingModal } from "./PricingModal"; 

type Invoice = {
  id: number;
  Order: string;
  Address: string;
  Date: string;
  Time: string;
  Phone: string;
  Type: string;
  distance?: number;
  price: number;
  packageType?: string;
  boxCount?: number;
};

const invoices: Invoice[] = [
  {
    id: 1,
    Order: "Begum Vocks",
    Address: "Meeting hall 1",
    Date: "Thus, 20-02-2025",
    Time: "15:00",
    Phone: "+90345354334",
    Type: "tow-truck",
    distance: 15, 
    price: 15.0, 
  },
  {
    id: 2,
    Order: "John Smith",
    Address: "Downtown Office",
    Date: "Thus, 21-02-2025",
    Time: "14:00",
    Phone: "+90345354335",
    Type: "delivery",
    packageType: "normal",
    boxCount: 2, 
    price: 50.0, 
  },
  {
    id: 3,
    Order: "Sarah Johnson",
    Address: "Marina Residence",
    Date: "Thus, 22-02-2025",
    Time: "16:30",
    Phone: "+90345354336",
    Type: "delivery",
    packageType: "emergency",
    boxCount: 1, 
    price: 50.0, 
  },
  {
    id: 4,
    Order: "Ahmed Hassan",
    Address: "Business Bay",
    Date: "Thus, 23-02-2025",
    Time: "08:00", 
    Phone: "+90345354337",
    Type: "delivery",
    packageType: "emergency",
    boxCount: 2, 
    price: 300.0, 
  },
  {
    id: 5,
    Order: "Michael Chen",
    Address: "Silicon Oasis",
    Date: "Thus, 24-02-2025",
    Time: "10:00",
    Phone: "+90345354338",
    Type: "tow-truck",
    distance: 25, 
    price: 25.0,
  },
  {
    id: 6,
    Order: "Lisa Wong",
    Address: "Palm Jumeirah",
    Date: "Thus, 25-02-2025",
    Time: "13:00",
    Phone: "+90345354339",
    Type: "delivery",
    packageType: "normal",
    boxCount: 5, 
    price: 125.0, 
  },
];

export default function TableDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);


  const getPriceDetails = (invoice: Invoice) => {
    const boxPrice = invoice.packageType === "normal" ? 25.0 : 50.0;
    const totalPrice = boxPrice * (invoice.boxCount || 1);

    if (invoice.Type === "tow-truck") {
      return `${invoice.price.toFixed(2)} (UAE ${
        invoice.distance
      } km × UAE 1.00/km)`;
    } else {
      const [hour] = invoice.Time.split(":").map(Number);
      const isEmergencyAfterMidnight =
        invoice.packageType === "emergency" && hour < 12;
      if (isEmergencyAfterMidnight) {
        return `150.00 (Emergency after midnight)`;
      }
      return `${totalPrice.toFixed(2)} (${
        invoice.boxCount || 1
      } box(es) × UAE ${boxPrice} per box)`;
    }
  };

  return (
    <div className="bg-white rounded-[20px] p-7">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-5 md:mb-0">
        <h3 className="roboto font-bold text-[32px]">Drivers</h3>
        <div className="flex justify-between gap-3 mt-2 md:mt-0">
          <Button
            onClick={() => setPricingModalOpen(true)}
            className="bg-white border-orange border md:py-6 py-5 text-base md:px-16 px-4 text-orange rounded-[10px] cursor-pointer hover:bg-orange hover:text-white"
          >
            Pricing Settings
          </Button>
          <AddBtn onClick={() => setModalOpen(true)} btnText="Add Driver" />
        </div>
      </div>

      {modalOpen && (
        <OrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
      {pricingModalOpen && (
        <PricingModal
          isOpen={pricingModalOpen}
          onClose={() => setPricingModalOpen(false)}
          initialPrices={{
            towTruckRate: 1.0,
            normalDeliveryRate: 25.0,
            emergencyDeliveryRate: 50.0,
            midnightEmergencyRate: 150.0,
          }} 
          onSave={() => {
            // Handle save logic here
          }}
        />
      )}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Price (UAE)</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                <Link href={`/driver/${invoice.id}`}>{invoice.Order}</Link>
              </TableCell>
              <TableCell>{invoice.Address}</TableCell>
              <TableCell>{invoice.Date}</TableCell>
              <TableCell>{invoice.Time}</TableCell>
              <TableCell>{invoice.Phone}</TableCell>
              <TableCell>
                {invoice.Type === "tow-truck" ? "Tow Truck" : "Delivery"}
              </TableCell>
              <TableCell>
                <div className="relative group z-30">
                  <span className="font-bold flex gap-1 items-center">
                    {invoice.price.toFixed(2)}
                  </span>
                  <div className="absolute left-0 bottom-0 w-24 md:w-full bg-white p-3 text-gray-600 border border-gray-300 rounded-md opacity-0 group-hover:opacity-100 transition-opacity text-wrap">
                    <span className="text-xs md:text-sm z-30">
                      {getPriceDetails(invoice)}
                    </span>
                    {invoice.packageType === "emergency" && (
                      <span className="text-xs md:text-sm text-red-500 font-normal">
                        {" "}
                        (Emergency package)
                      </span>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-0 whitespace-nowrap">
                <CustomDropdown invoiceId={invoice.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
