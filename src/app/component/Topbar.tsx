import React from "react";
import avatar from "../assets/avatar.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="fixed left-0 top-[55px] md:static flex items-center justify-between px-2 md:px-0 bg-orange md:bg-transparent py-2 md:py-0 w-full z-50">
      <div className="flex">
        <div className="hidden md:block">
          <h2 className="jarkata font-bold text-[26px] ">
            Welcome back, <span className="capitalize">Jonathan roy!</span>
          </h2>
          <p className="jarkata tracking-tight text-font_gray mt-2">
            Let’s do the best today👋
          </p>
        </div>
        {/* search */}
        <div className="md:ml-9 md:w-[459px] w-[280px] rounded-[10px] ">
          <div className="relative">
            <div className="absolute top-1/2 translate-y-[-50%] left-3 text-font_gray">
              <FaMagnifyingGlass />
            </div>
            <input
              type="search"
              placeholder="Search here..."
              className="py-3 md:py-[18px] pr-4 pl-[35px] md:pl-[44px] font-medium text-xs jarkata w-full bg-white rounded-[10px] border-none outline-none focus:ring-1 focus:ring-orange-300"
            />
          </div>
        </div>
      </div>
      {/* profile */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-[14px] bg-gray-400 overflow-hidden">
          <Image src={avatar} alt="profile" height={48} width={48} />
        </div>
        <div className="poppins hidden md:block">Mathew Perry</div>
      </div>
    </div>
  );
};

export default Topbar;
