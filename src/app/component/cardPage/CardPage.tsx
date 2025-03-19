import React from "react";
import mastercard from "../../assets/mastercard.png";
import profileImg from "../../assets/profileimg.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import Image from "next/image";
import { AiOutlineUpload } from "react-icons/ai";
import StatisticPage from "@/components/Statistic/Statistic";
import { IoStar } from "react-icons/io5";
import { HiMiniArrowDownTray } from "react-icons/hi2";

const card = () => {
  return (
    <div className="bg-[#FFFFFF] p-4 md:p-8">
      <h3 className="font-medium text-[#000000] text-[32px] mb-2.5">Card</h3>

      {/* 1st div  */}
      <div className="flex flex-col md:flex-row gap-4 2xl:gap-10 justify-between">
        <div className="w-full md:w-1/2">
          <div className="card bg-[#E97A20] bg-gradient-to-tr from-[#E97A20] from-50% to-[#F4BC8F] w-full md:w-[75%] h-[228px] p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-[18.33px] text-white font-[400] capitalize">
                  name
                </p>
                <Image src={mastercard} width={50} height={50} alt="image" />
              </div>

              <h3 className="text-2xl md:text-[26.27px] font-[400] text-white">
                Alex benjamin
              </h3>
            </div>

            <div className="flex gap-3 md:gap-12">
              <div className="flex">
                <IoStar className="text-xs md:text-base text-white"></IoStar>
                <IoStar className="text-xs md:text-base text-white"></IoStar>
                <IoStar className="text-xs md:text-base text-white"></IoStar>
                <IoStar className="text-xs md:text-base text-white"></IoStar>
              </div>

              <div className="flex">
                <IoStar className="text-xs md:text-base text-white"></IoStar>
                <IoStar className="text-xs md:text-base text-white"></IoStar>
                <IoStar className="text-xs md:text-base text-white"></IoStar>
                <IoStar className="text-xs md:text-base text-white"></IoStar>
              </div>

              <div className="flex">
                <IoStar className="text-xs md:text-base text-white"></IoStar>
                <IoStar className="text-xs md:text-base text-white"></IoStar>
                <IoStar className="text-xs md:text-base text-white"></IoStar>
                <IoStar className="text-xs md:text-base text-white"></IoStar>
              </div>

              <div className="flex">
                <IoStar className="text-xs md:text-base text-white"></IoStar>
                <IoStar className="text-xs md:text-base text-white"></IoStar>
                <IoStar className="text-xs md:text-base text-white"></IoStar>
                <IoStar className="text-xs md:text-base text-white"></IoStar>
              </div>
              <p className="text-xs md:text-base text-white">1590</p>
            </div>

            <div>
              <h3 className="text-[18.33px] text-white font-[400]">Balance</h3>
              <h3 className="text-[18.33px] text-white font-[400]">
                5,580,200
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end mt-6 md:mt-0">
          <div className="flex gap-7">
            <div className="w-[80px] h-[80px] md:w-[117px] md:h-[117px] bg-[#F3ABA7] rounded-full flex justify-center items-center">
              <Image
                src={profileImg}
                width={180}
                height={180}
                alt="image"
                className="w-full h-full"
              />
            </div>

            <div className="">
              <h2 className="font-medium text-2xl md:text-[36px] 2xl:text-[45px] text-[#000000]">
                Adeniyi O
              </h2>
              <h3 className="font-normal text-sm md:text-[22px] xl:text-[25px] 2xl:text-[30px]">
                adeniyiokunuga46@gmail.com
              </h3>
              <h3 className="text-center mt-5 text-[#00000080] font-medium md:text-[18px] 2xl:text-[24px]">
                Total balance
              </h3>
              <h2 className="text-2xl font-bold text-center mt-1 md:text-[29px] 2xl:[43px]">
                NGN 56,000.00
              </h2>
            </div>
          </div>

          <div className="flex justify-between w-[70%] mt-7 2xl:mt-9">
            <button className="bg-[#000000]  w-[45%] 2xl:w-[40%] text-white px-7 py-2 2xl:py-3 rounded-md flex justify-center items-center gap-2 cursor-pointer">
              Send{" "}
              <AiOutlineUpload className="text-white font-bold text-xl"></AiOutlineUpload>{" "}
            </button>
            <button className="bg-[#000000] w-[45%] 2xl:w-[40%] text-white px-5 py-2 2xl:py-3 rounded-md flex justify-center items-center gap-2 cursor-pointer">
              Receive
              <HiMiniArrowDownTray className="text-white font-bold text-xl"></HiMiniArrowDownTray>{" "}
            </button>
          </div>
        </div>
      </div>

      {/* secound div  */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-20 mt-14 md:mt-7">
        <div className="w-full md:w-1/2">
          <h1 className=" text-[26px] md:text-[30px] font-[500] text-[#000000]">
            Statistic
          </h1>
          <StatisticPage></StatisticPage>
        </div>

        <div className="w-full md:w-1/2 ">
          <h2 className="text-gray-500 font-[400] text-[20px] mb-4.5 ">
            Quick transfer
          </h2>

          {/* profile container */}
          <div className="flex justify-center items-center gap-2.5">
            <div className="w-[75px] h-[75px] xl:w-[80px] xl:h-[80px] 2xl:w-[90px] 2xl:h-[90px] bg-[#B4E5BC] rounded-full flex justify-center items-center">
              <Image src={img1} width={180} height={180} alt="image" />
            </div>
            <div className="w-[75px] h-[75px] xl:w-[80px] xl:h-[80px] 2xl:w-[90px] 2xl:h-[90px] bg-[#F3ABA7] rounded-full flex justify-center items-center">
              <Image src={img2} width={180} height={180} alt="image" />
            </div>
            <div className="w-[75px] h-[75px] xl:w-[80px] xl:h-[80px] 2xl:w-[90px] 2xl:h-[90px] bg-[#CCC1F0] rounded-full flex justify-center items-center">
              <Image src={img3} width={180} height={180} alt="image" />
            </div>
            <div className="w-[75px] h-[75px] xl:w-[80px] xl:h-[80px] 2xl:w-[90px] 2xl:h-[90px] bg-[#F4CE9B] rounded-full flex justify-center items-center">
              <Image src={img4} width={180} height={180} alt="image" />
            </div>
          </div>

          <div className="mt-10">
            <p className="text-gray-500 font-normal text-[20px] mb-6 ">
              Recent
            </p>

            <div>
              <div className="flex gap-6 w-full my-3">
                <div className="w-[75px] h-[75px] xl:w-[80px] xl:h-[80px] 2xl:w-[90px] 2xl:h-[90px] bg-[#B4E5BC] rounded-full flex justify-center items-center">
                  <Image src={img2} width={180} height={180} alt="image" />
                </div>

                <div className="w-[85%]">
                  <p className="font-medium text-[20px]">Aisha marama</p>
                  <p className="font-normal text-[18px] my-1">
                    Just sent you NG 2000,00
                  </p>
                  <div className="flex justify-between my-1">
                    <p className="font-medium text-[15px] text-[#9940DA]">
                      Click for detail
                    </p>
                    <p className="font-normal text-[15px] text-gray-400 ">
                      Just now
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 w-full my-3">
                <div className="w-[75px] h-[75px] xl:w-[80px] xl:h-[80px] 2xl:w-[90px] 2xl:h-[90px] bg-[#B4E5BC] rounded-full flex justify-center items-center">
                  <Image src={img2} width={180} height={180} alt="image" />
                </div>

                <div className="w-[85%]">
                  <p className="font-medium text-[20px]">Aisha marama</p>
                  <p className="font-normal text-[18px] my-1">
                    Just sent you NG 2000,00
                  </p>
                  <div className="flex justify-between my-1">
                    <p className="font-medium text-[15px] text-[#9940DA]">
                      Click for detail
                    </p>
                    <p className="font-normal text-[15px] text-gray-400">
                      Just now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
