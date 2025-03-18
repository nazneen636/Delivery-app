import React from "react";
import OrderDetails from "../../../component/orderDetails/OrderDetails";
import MiddlePart from "@/app/component/orderDetails/MiddlePart";
import RightSide from "@/app/component/driver_details/RightSide";
const page = () => {
  return (
    <div className="flex gap-6">
      <div className="max-w-[350px]">
        <OrderDetails />
      </div>
      <div className="w-full bg-white rounded-2xl p-6 flex justify-between">
        <MiddlePart />
        <RightSide />
      </div>
    </div>
  );
};

export default page;
