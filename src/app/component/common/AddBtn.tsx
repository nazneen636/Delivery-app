import React from "react";
import { FaPlus } from "react-icons/fa6";

interface AddBtnProps {
  onClick: () => void;
  btnText: string;
}

const AddBtn: React.FC<AddBtnProps> = ({ onClick, btnText }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-black md:py-4 px-4 py-2 md:px-[60px] flex gap-1 items-center text-orange rounded-[10px]"
      >
        <FaPlus />
        <span className="text-orange"> {btnText}</span>
      </button>
    </div>
  );
};

export default AddBtn;
