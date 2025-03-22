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
        className="bg-black md:py-3 px-4 py-2 md:px-[60px] flex gap-1 items-center text-orange rounded-[10px] border border-transparent cursor-pointer hover:bg-orange group"
      >
        <FaPlus className="group-hover:text-white" />
        <span className="text-orange group-hover:text-white"> {btnText}</span>
      </button>
    </div>
  );
};

export default AddBtn;
