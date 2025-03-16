import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card2 = () => {
  return (
    <div>
      <div className="max-w-[350px] mt-3 pt-10 pb-5 rounded-[32px] bg-white relative overflow-hidden">
        <div className="h-[14px] w-full bg-orange absolute top-0 left-0 z-20"></div>
        <div className="h-[14px] w-1/3 bg-[#eaa36a] absolute top-0 right-0 z-20"></div>
        <div className="flex justify-between pb-3 border-b border-dashed border-b-[#ffffff95]">
          <div className="px-4 ">
            <h3 className="poppins font-semibold text-[26px] text-black">
              #127777489-DL-NY
            </h3>
          </div>
          <div className="text-black mr-4 cursor-pointer mt-2">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
