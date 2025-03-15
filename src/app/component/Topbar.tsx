import React from "react";
import avatar from "../assets/avatar.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="flex justify-between w-full ">
      <div className="flex">
        <div className="">
          <h2 className="jarkata font-bold text-[26px] ">
            Welcome back, <span className="capitalize">Jonathan roy!</span>
          </h2>
          <p className="jarkata tracking-tight text-font_gray mt-2">
            Let’s do the best today👋
          </p>
        </div>
        {/* search */}
        <div className="ml-9 w-[459px]  rounded-[8px]">
          <div className="relative bg-white">
            <div className="absolute top-1/2 translate-y-[-50%] left-5 text-font_gray">
              <FaMagnifyingGlass />
            </div>
            <input
              type="search"
              placeholder="Search here..."
              className="py-[18px] pr-4 pl-[44px] font-medium text-xs jarkata w-full bg-transparent rounded-[8px]  border-none outline-none focus:ring-1 focus:ring-orange-300"
            />
          </div>
        </div>
      </div>
      {/* profile */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-[14px] bg-gray-400 overflow-hidden">
          <Image src={avatar} alt="profile" height={48} width={48} />
        </div>
        <div className="poppins">Mathew Perry</div>
      </div>
    </div>
  );
};

export default Topbar;
