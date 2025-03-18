import Image from "next/image";
import Link from "next/link";
import React from "react";
import transporter_document from "../../assets/transporter_document.png";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { GiPathDistance } from "react-icons/gi";
import { GoStopwatch } from "react-icons/go";
const cardItem = [
  {
    id: 1,
    icon: <FaRegCreditCard />,
    unit: "kg",
    no: 101,
    label: "Payload",
  },
  {
    id: 1,
    icon: <PiHandbagSimpleFill />,
    unit: "In",
    supno: 3,
    no: 123,
    label: "Volume",
  },
  {
    id: 1,
    icon: <GiPathDistance />,
    unit: "Km",
    no: 51,
    label: "Distance",
  },
  {
    id: 1,
    icon: <GoStopwatch />,
    unit: "Mins",
    no: 90,
    label: "Estimated Time",
  },
];

const MiddlePart = () => {
  return (
    <div className="mt-2 poppins max-w-[450px]">
      <h2 className="md:text-center font-bold text-2xl text-black">
        Orders Detail
      </h2>
      <div className="poppins text-black mt-[22px]">
        <h4 className="font-semibold text-2xl mb-4 md:mb-8">Package Name</h4>
        <h2 className="font-bold text-[32px] mb-5 md:mb-10">Lorem Ipsum</h2>
        <h4 className="font-semibold text-2xl mb-3 md:mb-[18px]">
          Package Detail
        </h4>
        <p className="text-sm md:text-base mb-8 md:mb-[67px] ">
          rem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare
          vulputate accumsan. Sed nunc ligula, laoreet et placerat sed,
          ullamcorper eget justo. Nulla laci
        </p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">Volkswagen Transporter</p>
          <Link href="/" className="text-orange font-medium text-xs underline">
            View Documents
          </Link>
        </div>
        {/* cards */}
        <Image src={transporter_document} alt="document" />
        <div className="mt-8 text-black flex gap-4 flex-wrap">
          {cardItem?.map((item) => (
            <div
              key={item.id}
              className="p-6 w-full md:w-[216px] bg-[#FFF7F1] rounded-[32px] border border-[#C9C8C8]"
            >
              <div className="float-right">{item?.icon}</div>
              <h2 className="font-semibold text-5xl mb-6 font-poppins mt-2">
                {item.no}
                <sub className="text-lg">
                  {item?.unit} <sup>{item?.supno}</sup>
                </sub>
              </h2>
              <p className="text-sm">{item?.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
