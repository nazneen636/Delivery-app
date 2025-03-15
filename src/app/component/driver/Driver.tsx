import Image from "next/image";
import React from "react";
import driver_avatar from "../../assets/driver_avatar.png";
import { FaCar, FaStar } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

const Driver = () => {
  return (
    <div>
      <div className="w-[315px] h-[386px] py-10 rounded-[32px] bg-orange">
        {/* top */}
        <div className="flex justify-between pb-3 border-b border-dashed border-b-[#ffffff95]">
          <div className="flex gap-3 items-center px-4 ">
            <div className="w-[85px] h-[85px] rounded-full">
              <Image src={driver_avatar} alt="profile" />
            </div>
            {/* details */}
            <div className="">
              <h2 className="text-white font-semibold roboto text-2xl mb-[6px]">
                Loki Bright
              </h2>
              <div className="flex gap-1 mb-[12px]">
                <FaStar className="text-yellow text-sm" />
                <FaStar className="text-yellow text-sm" />
                <FaStar className="text-yellow text-sm" />
                <FaStar className="text-yellow text-sm" />
                <FaStar className="text-yellow text-sm" />
              </div>
              <div className="text-white roboto">
                <span className="text-sm">4.5/</span>
                <span className="text-xs text-[#E3E3E3]">2,256</span>
              </div>
            </div>
          </div>
          <div className="text-white">
            <BsThreeDotsVertical />
          </div>
        </div>
        {/* bottom */}
        <div className="px-[18px] mt-4">
          <div className="flex gap-[5px]">
            <div className="w-[26px] h-[26px] rounded-full bg-white text-gray-600 flex items-center justify-center">
              <FaCar />
            </div>
            <h3 className="text-white poppins font-semibold text-sm">
              Mercedes-EQE - White - DHR3421H
            </h3>
          </div>
          <p className="text-xs font-medium poppins ml-8 text-white opacity-80">
            Loremisum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Driver;
