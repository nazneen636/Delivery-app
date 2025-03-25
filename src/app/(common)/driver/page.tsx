import React from "react";
import Table from "../../component/driver/Table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driver",
};
const page = () => {
  return (
    <div className="">
      <Table />
    </div>
  );
};

export default page;
