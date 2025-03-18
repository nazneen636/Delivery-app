import React from "react";
import avatar from "../../assets/driver_avatar.png";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import document1 from "../../assets/documents1.png";
import document2 from "../../assets/documents2.png";

const MiddleSide = () => {
  return (
    <div className="md:mt-[71px] md:ml-10 md:mr-11 ">
      <div className="flex justify-between w-full">
        <div className="flex gap-1 md:gap-4">
          <Image
            src={avatar}
            alt="profile"
            height={54}
            width={54}
            className="rounded-full"
          />

          <div className="ml-4">
            <h2 className="roboto text-lg font-semibold">Loki Bright</h2>
            <p className="roboto text-xs text-gray-600">
              experience{" "}
              <strong className="text-gray-800 text-xs md:text-sm">
                2 Years{" "}
              </strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <button className="flex items-center text-[#0F60FF] bg-blue-50 rounded-[30px] py-[2px] px-3">
            <GoDotFill />{" "}
            <span className="roboto text-xs md:text-sm font-medium">
              on the road
            </span>
          </button>
          <div className="mt-2 mr-2 flex gap-2">
            <FaStar className="text-yellow-400" />
            <span className="roboto font-semibold text-sm text-gray-800">
              4.8
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="mt-[30px] md:ml-[50px] flex flex-col gap-4 md:gap-11 md:px-10">
        <div className="flex">
          <span className="roboto text-lg md:text-2xl text-gray-600 w-[90px] md:w-[180px] inline-block">
            Address{" "}
          </span>
          <span className="roboto font-medium text-base md:text-xl text-gray-800 text-nowrap">
            Memphis.911 Estate
          </span>
        </div>
        <div className="flex">
          <span className="roboto text-lg md:text-2xl text-gray-600 w-[90px] md:w-[180px] inline-block">
            Phone{" "}
          </span>
          <span className="roboto font-medium text-base md:text-xl text-gray-800">
            (901) 767-8384
          </span>
        </div>
      </div>
      {/* card details */}
      <div className="mt-8 md:mt-[68px]">
        <h3 className="poppins text-xl md:text-2xl font-semibold text-black">
          Card Detail
        </h3>
        <div className="w-full  rounded-lg bg-orange py-5 px-4 text-white relative mt-3">
          <div className="mb-11">
            <h2 className="roboto font-bold text-2xl">360Bank</h2>
            <div className="absolute right-9 top-5 w-5 h-5 rounded-full opacity-50 bg-white"></div>
            <div className="absolute right-11 top-5 w-5 h-5 rounded-full opacity-50 bg-white"></div>
          </div>
          <div className="flex gap-10 md:gap-0 md:justify-between">
            <h2 className="roboto font-bold text-lg ">7234 4567 7654 4576</h2>
            <p className="roboto font-medium text-sm text-[#F9F9F9]">$156.87</p>
          </div>
        </div>
      </div>
      {/* documents */}
      <div className="mt-9">
        <h3 className="poppins text-xl md:text-2xl font-semibold text-black mb-3 md:mb-[42px]">
          Documents
        </h3>
        <div className="flex flex-col gap-3">
          <Image
            src={document2}
            alt="document"
            width={210}
            height={134}
            className="w-full "
          />
          <Image
            src={document1}
            alt="document"
            width={210}
            height={134}
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleSide;
