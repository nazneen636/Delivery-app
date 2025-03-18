import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const Card2 = () => {
  return (
    <div>
      {/* card-1 */}
      <div className="w-full md:max-w-[350px] mt-3 pt-10 pb-5 rounded-[32px] bg-white relative overflow-hidden px-4">
        <div className="h-[14px] w-full bg-orange absolute top-0 left-0 z-20"></div>
        <div className="h-[14px] w-1/3 bg-[#eaa36a] absolute top-0 right-0 z-20"></div>
        <div className="">
          <div className="flex justify-between pb-2">
            <div className=" ">
              <h3 className="poppins font-semibold text-[26px] text-black">
                #127777489-DL-NY
              </h3>
            </div>
            <div className="text-black mr-4 cursor-pointer mt-2">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="bg-[#F2EED0] rounded-3xl py-2 px-4 poppins text-sm font-medium text-black">
              In Transit
            </button>
            <button className="bg-[#F2EED0] rounded-3xl py-2 px-4 poppins text-sm font-medium text-black">
              Documents
            </button>
          </div>
          <div className="flex gap-2">
            <div className="w-7 h-7 rounded-full bg-[#e97a205b] flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center">
                <GoDotFill />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-black">
              <h2 className="font-semibold poppins text-sm ">
                Package has left Courier Facility
              </h2>
              <p className="poppins font-medium text-xs opacity-50">
                Detroit, Denmark
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mt-3">
        <button className="text-white hover:text-orange rounded-[8px] py-[14px] px-[47px] border border-transparent hover:border-orange bg-orange hover:bg-transparent duration-300 transition-all">
          Reject
        </button>
        <button className="text-white hover:text-orange rounded-[8px] py-[14px] px-[47px] border border-transparent hover:border-orange bg-orange hover:bg-transparent duration-300 transition-all">
          Accept
        </button>
      </div>
      {/* card-2 */}
      <div className="max-w-[350px] mt-4 pt-10 pb-5 rounded-[32px] bg-white relative overflow-hidden px-4">
        <div className="h-[14px] w-full bg-orange absolute top-0 left-0 z-20"></div>
        <div className="h-[14px] w-1/3 bg-[#eaa36a] absolute top-0 right-0 z-20"></div>
        <div className="">
          <div className="flex justify-between pb-2">
            <div className=" ">
              <h3 className="poppins font-semibold text-[26px] text-black">
                #127777489-DL-NY
              </h3>
            </div>
            <div className="text-black mr-4 cursor-pointer mt-2">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="bg-[#F2EED0] rounded-3xl py-2 px-4 poppins text-sm font-medium text-black">
              In Customs
            </button>
            <button className="bg-[#F2EED0] rounded-3xl py-2 px-4 poppins text-sm font-medium text-black">
              Parcel
            </button>
          </div>
          <div className="flex gap-2">
            <div className="w-7 h-7 rounded-full bg-[#e97a205b] flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center">
                <GoDotFill />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-black">
              <h2 className="font-semibold poppins text-sm ">Customs</h2>
              <p className="poppins font-medium text-xs opacity-50">
                New York City, New york
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
