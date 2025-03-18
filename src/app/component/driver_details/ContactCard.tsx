import React from "react";
import avatar from "../../assets/avatar.png";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const ContactCard = () => {
  return (
    <div className="w-full bg-black rounded-[40px] pt-3 flex">
      <div className="w-1/2 md:w-fit  bg-gradient-to-bl  from-black to-[#ffffff] pb-2 md:pb-[18px] rounded-[40px]">
        <div className=" bg-orange px-5 py-3 md:py-8 md:px-7 rounded-[40px] w-full">
          <div className="flex gap-3 items-center">
            <div className="">
              <Image src={avatar} alt="profile" width={52} height={52} />
            </div>
            <p className="poppins text-white text-base">Driver</p>
          </div>
          <p className="poppins font-medium text-sm opacity-60 mt-2 mb-1 text-white">
            ID : 222-111-33
          </p>
          <h2 className="text-white poppins font-semibold text-lg underline">
            Loki Bright
          </h2>
        </div>
        <Link
          href="tel:+0903001276"
          className="mt-3 bg-gradient-to-br from-[#636363] to-[#fff] flex gap-5 items-center text-white rounded-[40px] py-3 px-10 w-fit poppins text-lg mx-4"
        >
          {" "}
          <FaPhone /> Call
        </Link>
      </div>
      <div className="rounded-[25px] md:rounded-[40px] bg-gradient-to-b from-[#636363] to-[#ffffff67] poppins text-white px-2 md:px-[18px] py-1 md:py-5 pb-7 h-fit    w-1/2 md:w-fit ml-[2px] mr-3">
        <div className="mt-6">
          <h3 className="font-semibold text-base mb-3">Address</h3>
          <div className="flex gap-4 md:gap-1">
            <FaLocationDot className="md:mt-1 mt-[2px] text-base" />
            <span className="text-xs md:text-base">
              Houston Lane, <br className="hidden md:block" /> Lan 9, 22/1
            </span>
          </div>
        </div>
        <div className="mt-2 md:mt-6">
          <h3 className="font-semibold text-sm md:text-base mb-3">Delivery</h3>
          <div className="flex gap-4 md:gap-1">
            <SlCalender className="md:mt-1 mt-[2px] text-base" />
            <span className="text-xs md:text-base">
              12:30 PM <br className="hidden md:block" />
              31 Jan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
