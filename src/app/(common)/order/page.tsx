import React from "react";
import Table from "../../component/order/Table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order",
  description: "",
};
const page = () => {
  return (
    <div className="">
      <Table />
    </div>
  );
};

export default page;
