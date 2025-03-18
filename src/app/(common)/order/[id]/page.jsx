import React from "react";
import OrderDetails from "../../../component/orderDetails/OrderDetails";
import MiddlePart from "@/app/component/orderDetails/MiddlePart";
import RightSide from "@/app/component/driver_details/RightSide";
const page = () => {
  return (
    <div className="md:flex gap-6 pt-6 md:pt-0">
      <div className="w-full md:max-w-[350px]">
        <OrderDetails />
      </div>
      <div className="w-full bg-white rounded-2xl mt-4 md:mt-0 p-3 md:p-6 md:flex justify-between">
        <MiddlePart />
        <RightSide />
      </div>
    </div>
  );
};

export default page;
