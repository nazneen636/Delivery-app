import React from "react";
import Tabs from "../../component/setting/Tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setting",
};
const page = () => {
  return (
    <div>
      <Tabs />
    </div>
  );
};

export default page;
