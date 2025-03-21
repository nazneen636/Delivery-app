"use client";
import Image from "next/image";
import React, { useState } from "react";
import driver_avatar from "../../assets/driver_avatar.png";
import { FaCar, FaLocationDot, FaPhone, FaStar } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const driver_cardItem = [
  {
    id: 1,
    icon: <FaCar />,
    label: "Mercedes-EQE - White - DHR3421H",
    location: "Loremisum",
  },
  {
    id: 2,
    icon: <FaPhone />,
    label: "0903001276",
    location: "NEW YORK CITY, NEW YORK",
  },
  {
    id: 3,
    icon: <FaLocationDot />,
    label: "Saigon",
    location: "NEW YORK CITY, NEW YORK",
  },
];
const Driver = () => {
  const [close, setClose] = useState(false);
  return (
    <div>
      <div className="relative">
        {close && (
          <div className="absolute md:-right-20 right-2 md:top-6 top-18 z-20 bg-white md:bg-orange rounded-[16px] py-3 px-4 after:-z-20 after:absolute after:h-1 md:after:w-20 after:w-0 after:bg-orange after:-left-16 after:top-1/2 after:translate-y-[-50%]">
            <IoClose className="text-black text-2xl" />
          </div>
        )}
        <div className="w-full md:w-[350px] pt-10 pb-5 rounded-[32px] bg-orange relative overflow-hidden">
          <div className="h-[14px] w-full bg-black absolute top-0 left-0 z-20"></div>
          <div className="h-[14px] w-1/3 bg-[#eaa36a] absolute top-0 right-0 z-20"></div>
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
                  <span className="text-sm">4.5 / </span>
                  <span className="text-xs text-[#E3E3E3]">2,256</span>
                </div>
              </div>
            </div>
            <div
              className="text-white mr-4 cursor-pointer"
              onClick={() => setClose(!close)}
            >
              <BsThreeDotsVertical />
            </div>
          </div>
          {/* bottom */}
          <div className="px-[18px] pt-4 flex flex-col gap-6 relative">
            <div className="absolute left-0 top-0 h-full w-fit pr-8  border-r border-dashed border-r-white"></div>
            {driver_cardItem?.map((item) => (
              <div className="" key={item.id}>
                <div className="flex gap-[5px] relative z-20">
                  <div className="w-[26px] h-[26px] rounded-full bg-white text-gray-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-white poppins font-semibold text-sm">
                    {item.label}
                  </h3>
                </div>
                <p className="text-xs font-medium poppins ml-8 text-white opacity-80">
                  {item.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;
