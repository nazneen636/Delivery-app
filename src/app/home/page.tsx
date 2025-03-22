import HorizontalBarChart from "@/components/HorizontalBarChart/HorizontalBarChart";
import PieChart from "@/components/Piechart/Piechart";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlineDollar } from "react-icons/ai";
import { TfiStatsUp } from "react-icons/tfi";
import BarChartComponent from "@/components/BarChartComponent/BarChartComponent";
import { TbCar } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

const HomePage = () => {
  const TimeBar = () => {
    return (
      <div className="w-full">
        <div className="flex justify-between mb-1">
          <span className="text-xs text-[#929292]">12:00</span>
          <span className="text-xs text-[#929292]">13:41</span>
        </div>
        <div className="h-1 w-full bg-[#333333] rounded-full">
          <div
            className="h-1 bg-white rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
      </div>
    );
  };

  const VerticalTimeline = () => {
    return (
      <div className="flex flex-col space-y-4 py-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
          <span className="flex-grow">Checking</span>
          <span className="text-sm">16:56</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full border border-gray-400 mr-3"></div>
          <span className="flex-grow text-gray-600">Sent to you</span>
          <span className="text-sm text-gray-600">12:30</span>
        </div>
      </div>
    );
  };

  const ProgressCircle = ({ value }: { value: number }) => {
    return (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          <circle
            className="text-[#FFA500]"
            strokeWidth="10"
            strokeDasharray={251.2}
            strokeDashoffset={251.2 - (251.2 * value) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-sm font-semibold">{value}%</span>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-7 gap-3 md:gap-5 my-8 pt-6 md:pt-0  md:mx-8 ">
      <div className="bg-[#FFFFFF] p-5.5 rounded-2xl flex flex-col justify-between col-span-2 h-[278px]">
        <div className="flex justify-between items-center ">
          <h2 className="text-[24px] font-semibold jarkata">New Delivery</h2>
          <BsThreeDotsVertical></BsThreeDotsVertical>
        </div>

        <div>
          <div>
            <span className="font-semibold text-[45px] text-[#000000] ">
              27/
            </span>
            <span className="text-[#929292] font-semibold text-[20px]">
              143/pkg
            </span>
          </div>
          <HorizontalBarChart progress={60}></HorizontalBarChart>
        </div>
      </div>

      <div className=" bg-[#FFFFFF] p-5.5  rounded-2xl flex justify-between col-span-3 h-[278px]  ">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-base md:text-[24px] font-semibold capitalize text-nowrap">
              savings this month
            </h2>
            <div className="flex gap-2.5 items-center mt-5 ">
              <AiOutlineDollar className="text-4xl text-[#E97A20]"></AiOutlineDollar>
              <h2 className="text-base md:text-[24px] font-semibold">$1,806</h2>
            </div>
          </div>
          <div className="flex gap-2.5 items-center">
            <TfiStatsUp className="text-base md:text-4xl text-[#E97A20]"></TfiStatsUp>
            <h2 className="text-base md:text-[22px] font-semibold text-[#E97A20]">
              3.5%
            </h2>
          </div>
        </div>
        <div className="flex items-center">
          <PieChart></PieChart>
        </div>
      </div>

      <div className="flex flex-col justify-between col-span-2 h-[278px]">
        {/* Tow Truck Deliveries */}
        <div className="flex justify-center items-center bg-[#ffffff] p-5.5 rounded-2xl gap-10 py-8">
          <div>
            <h2 className="font-semibold text-[#000000] text-[46.47px]">139</h2>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-[500]">
              Total Tow Truck Deliveries
            </span>
          </div>
        </div>

        {/* Package Deliveries */}
        <div className="flex justify-center items-center bg-[#000000] p-5.5 rounded-2xl gap-10 py-8">
          <div>
            <h2 className="font-semibold text-[#ffffff] text-[46.47px]">168</h2>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-[500] text-[#ffffff]">
              Total Package Deliveries
            </span>
          </div>
        </div>
      </div>

      {/* secound colum  */}
      <div className=" bg-[#FFFFFF] p-5.5  rounded-2xl flex flex-col justify-between col-span-2  h-[511px] ">
        <div className="flex justify-between items-center ">
          <div>
            <h2 className="text-[25px] font-semibold text-[#000000] leading-6.5">
              Open Cases by
            </h2>
            <h2 className="text-[25px] font-semibold text-[#000000]">
              customer
            </h2>
          </div>

          <div className="bg-[#000000] h-[34px] w-[34px] rounded-full flex justify-center items-center">
            <GoArrowUpRight className="text-white text-lg"></GoArrowUpRight>
          </div>
        </div>

        <div>
          <div className="mt-5">
            <span className="font-semibold text-[45px] text-[#000000] ">
              27/
            </span>
            <span className="text-[#929292] font-semibold text-[20px]">
              143/pkg
            </span>
          </div>
          <BarChartComponent></BarChartComponent>
        </div>
      </div>

      {/* 5 number div  */}

      <div className="bg-[#F0F0F0] p-5.5 rounded-2xl col-span-3 h-auto md:h-[511px] flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-[24px] font-semibold">Tracking</h2>
          <h2 className="text-[24px] font-semibold">640 km</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-stretch gap-3.5 mt-8 md:mt-14 flex-1">
          <div className="bg-[#000000] rounded-2xl p-4 md:p-6 flex flex-col justify-between w-full min-h-[200px] md:min-h-0">
            <div className="flex justify-between">
              <p className="font-medium text-[20px] text-[#ffffff]">NYC</p>
              <p className="font-medium text-[20px] text-[#ffffff]">BOS</p>
            </div>

            <div className="flex flex-col justify-center items-center py-4">
              <TbCar className="font-medium text-[20px] text-[#ffffff] mb-1.5"></TbCar>
              <div>
                <span className="text-[13px] text-[#929292] font-medium">
                  <span className="text-[#fff]">3</span> hr{" "}
                  <span className="text-[#fff]">40</span> min
                </span>
              </div>
            </div>
            <TimeBar></TimeBar>
          </div>

          <div className="text-[#000000] bg-[#FFFFFF] rounded-2xl p-4 md:p-6 flex flex-col justify-between w-full min-h-[200px] md:min-h-0">
            <p className="font-medium text-[20px] text-[#000000]">
              #1275896-LD-NY
            </p>
            <VerticalTimeline></VerticalTimeline>
          </div>
        </div>

        <div className="mt-6 md:mt-10 mb-2 bg-[#FFFFFF] py-3 md:py-3.5 px-3 md:px-3.5 rounded-full">
          <div className="flex flex-row items-center justify-between ">
            <div className="w-1/2 sm:w-auto flex justify-between gap-3 items-center sm:justify-start py-2 sm:py-0">
              <ProgressCircle value={75} />
              <span className="text-xs md:text-base font-semibold jarkata">
                75% Completed
              </span>
            </div>
            <Separator orientation="vertical" />
            <div className="w-1/2 pl-3.5 flex items-center justify-between">
              <span className="text-[#929292] text-xs md:text-base font-medium ">
                Deliveries
              </span>
              <FaAngleDown className="mr-8 text-[#929292]"></FaAngleDown>
            </div>
          </div>
        </div>
      </div>
      {/* 6 number div  */}

      <div className="flex flex-col gap-2.5 col-span-2  h-[511px]">
        <div className="flex flex-col justify-between   bg-[#E97A20] p-5.5 rounded-2xl h-[335px]">
          <div className="flex justify-between w-full ">
            <h2 className="text-[24px] font-semibold text-[#ffffff]">
              High Rates
            </h2>

            <div className="bg-[#000000] h-[34px] w-[34px] rounded-full flex justify-center items-center">
              <BsThreeDotsVertical className="text-white"></BsThreeDotsVertical>
            </div>
          </div>

          <div>
            <span className="text-[45px] text-[#ffffff] font-semibold">
              160/
            </span>
            <span className="text-[20px] font-[500] text-[#FFFFFFBF]">
              143/pkg
            </span>

            <div className="flex justify-evenly my-7 ">
              <div className="shape h-12 w-12 bg-black"></div>
              <div className="shape h-12 w-12 bg-[#ffff]"></div>
              <div className="shape h-12 w-12 bg-black"></div>
              <div className="shape h-12 w-12 bg-black"></div>
              <div className="shape h-12 w-12 bg-black"></div>
            </div>
          </div>
        </div>

        <div className="bg-[#000000] p-5.5 rounded-2xl">
          <div className="flex justify-between items-center">
            <span className="text-[#ffffff] text-[16px] font-medium">
              Get ready to ship
            </span>
            <div className="bg-[#E97A20] h-[34px] w-[34px] rounded-full flex justify-center items-center">
              <FaPlus className="text-white"></FaPlus>
            </div>
          </div>

          <p className="font-[500] text-[22px] text-[#ffffff] leading-4.5 mt-14">
            Create your
          </p>
          <p className="font-[500] text-[22px] text-[#ffffff]">
            {" "}
            Custom Dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
