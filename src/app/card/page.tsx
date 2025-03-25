import React from "react";
import CardPage from "../component/cardPage/CardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Card",
};
const page = () => {
  return (
    <div>
      <CardPage />
    </div>
  );
};

export default page;
