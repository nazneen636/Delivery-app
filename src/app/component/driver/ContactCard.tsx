import React from "react";
import avatar from "../../assets/avatar.png";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const ContactCard = () => {
  return (
    <div className="w-[388px] bg-black rounded-[40px] pt-3 flex">
      <div className="bg-gradient-to-bl from-black to-[#ffffff] w-fit pb-[18px] rounded-[44px]">
        <div className=" bg-orange py-8 px-7 rounded-[44px] w-full">
          <div className="flex gap-3 items-center">
            <div className="">
              <Image src={avatar} alt="profile" width={52} height={52} />
            </div>
            <p className="poppins text-white text-base">Driver</p>
          </div>
          <p className="poppins font-medium text-sm opacity-60 mt-2 mb-1 text-white">
            ID : 222-111-33
          </p>
          <h2 className="text-white poppins font-semibold text-lg">
            Loki Bright
          </h2>
        </div>
        <Link
          href="tel:+0903001276"
          className="mt-3 bg-gradient-to-br from-[#636363] to-[#fff] flex gap-5 items-center text-white rounded-[44px] py-3 px-10 w-fit poppins text-lg mx-4"
        >
          {" "}
          <FaPhone /> Call
        </Link>
      </div>
      <div className="rounded-[40px] bg-gradient-to-b from-[#636363] to-[#ffffff67] poppins text-white px-[18px] py-5 pb-7 h-fit w-fit ml-[2px] mr-3">
        <div className="mt-6">
          <h3 className="font-semibold text-base mb-3">Address</h3>
          <div className="flex gap-1">
            <FaLocationDot className="mt-1" />
            <span className="text-base">Houston Lane, Lan 9, 22/1</span>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-base mb-3">Delivery</h3>
          <div className="flex gap-1">
            <SlCalender className="mt-1" />
            <span className="text-base">12:30 PM 31 Jan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
