import Image, { StaticImageData } from "next/image"; // Import StaticImageData
import React from "react";
import { FaCar, FaPhone, FaLocationDot, FaStar } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

interface Driver {
  avatar: string | StaticImageData; // Allow both string and StaticImageData
  rating: number;
  review: string;
  name: string;
  carName: string;
  phone: string;
  location: string;
  availabilityCheck: string;
}

const AvailableCard: React.FC<{ driver: Driver }> = ({ driver }) => {
  return (
    <div className="bg-gray-100 rounded-[12px] w-[350px] p-4">
      <div className="flex">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="mb-3">
            <Image
              src={driver.avatar}
              alt="Driver Avatar"
              height={64}
              width={64}
              className="rounded-full h-16 w-16"
            />
          </div>

          {/* Dynamic Star Rating */}
          <div className="flex gap-[2px] mb-[6px]">
            {[...Array(Math.floor(driver.rating) || 0)].map((_, index) => (
              <FaStar key={index} className="text-yellow text-[10px]" />
            ))}
          </div>

          {/* Rating and Review Count */}
          <div className="roboto">
            <span className="text-sm text-gray-800">{driver.rating} / </span>
            <span className="text-xs text-gray-500">{driver.review} </span>
          </div>
        </div>

        {/* Driver Details */}
        <div className="text-gray-800 roboto ml-5">
          <h2 className="font-semibold text-[18px] mb-3">{driver.name}</h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center">
              <FaCar className="text-gray-600" />
              <p className="text-[14px]">{driver.carName}</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaPhone className="text-gray-600" />
              <p className="text-[14px]">{driver.phone}</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaLocationDot className="text-gray-600" />
              <p className="text-[14px]">{driver.location}</p>
            </div>
          </div>

          {/* Availability Status */}
          <p className="py-1 px-3 bg-orange text-gray-800 font-semibold text-sm roboto rounded-[30px] text-nowrap mt-2">
            {driver.availabilityCheck}
          </p>
        </div>

        {/* Menu Icon */}
        <div className="w-6 h-6 rounded-full bg-[#d5deef75] flex items-center justify-center">
          <BsThreeDots className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default AvailableCard;
