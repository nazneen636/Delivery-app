"use client";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const driver_cardItem = [
  {
    id: 1,
    status: "Package has left Courier Facility",
    location: "San Francisco, California",
  },
  {
    id: 2,
    status: "Package arrived at Local Facility",
    location: "NEW YORK CITY, NEW YORK",
  },
  {
    id: 3,
    status: "Out for Delivery",
    location: "NEW YORK CITY, NEW YORK",
  },
  {
    id: 4,
    status: "Delivered",
    location: "1567 DOVE STREET, NEW YORK CITY, 9888",
  },
];
const Driver = () => {
  const [close, setClose] = useState(false);
  return (
    <div>
      <div className="relative w-full md:max-w-[350px]">
        {close && (
          <div className="absolute md:-right-20 right-2 md:top-6 top-18 z-20 bg-white md:bg-orange rounded-[16px] py-3 px-4 after:absolute after:h-1 md:after:w-20 after:w-0 after:bg-orange after:-left-16 after:top-1/2 after:translate-y-[-50%]">
            <IoClose className="text-black text-2xl" />
          </div>
        )}
        <div className="w-full pt-10 pb-5 rounded-[32px] bg-orange relative overflow-hidden">
          <div className="h-[14px] w-full bg-black absolute top-0 left-0 z-20"></div>
          <div className="h-[14px] w-1/3 bg-[#eaa36a] absolute top-0 right-0 z-20"></div>
          {/* top */}
          <div className="flex justify-between pb-3 border-b border-dashed border-b-[#ffffff95]">
            <div className="px-4 ">
              <h3 className="poppins font-semibold text-[26px] text-white">
                #127777489-DL-NY
              </h3>
            </div>
            <div
              className="text-white mr-4 cursor-pointer mt-2"
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
                    <GoDotFill />
                  </div>
                  <h3 className="text-white poppins font-semibold text-sm">
                    {item.status}
                  </h3>
                </div>
                <p className="text-xs font-medium poppins ml-8 text-white opacity-80">
                  {item.location}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* button */}
        <div className="flex items-center justify-center gap-3 mt-3">
          <button className="text-white hover:text-orange rounded-[8px] py-[14px] px-[47px] border border-transparent hover:border-orange bg-orange hover:bg-transparent duration-300 transition-all">
            Reject
          </button>
          <button className="text-white hover:text-orange rounded-[8px] py-[14px] px-[47px] border border-transparent hover:border-orange bg-orange hover:bg-transparent duration-300 transition-all">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Driver;
