import React from "react";
import { FaPlus } from "react-icons/fa6";

const AddBtn = () => {
  return (
    <div>
      <button className="bg-black py-4 px-[60px] flex gap-1 items-center text-orange rounded-[10px]">
        <FaPlus />
        <span className="text-orange"> Add order</span>
      </button>
    </div>
  );
};

export default AddBtn;
