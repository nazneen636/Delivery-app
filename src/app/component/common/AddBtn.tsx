import React from "react";
import { FaPlus } from "react-icons/fa6";

interface AddBtnProps {
  onClick: () => void;
}

const AddBtn: React.FC<AddBtnProps> = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-black py-4 px-[60px] flex gap-1 items-center text-orange rounded-[10px]"
      >
        <FaPlus />
        <span className="text-orange"> Add order</span>
      </button>
    </div>
  );
};

export default AddBtn;
