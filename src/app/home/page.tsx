import HorizontalBarChart from "@/components/HorizontalBarChart/HorizontalBarChart";
import PieChart from "@/components/Piechart/Piechart";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlineDollar } from "react-icons/ai";
import { TfiStatsUp } from "react-icons/tfi";
import BarChartComponent from "@/components/BarChartComponent/BarChartComponent";
import TimeBar from "@/components/Timebar/Timebar";
import { TbCar } from "react-icons/tb";
import VerticalTimeline from "@/components/VerticalTimeline/VerticalTimeline";
import ProgressCircle from "@/components/ProgressCircle/ProgressCircle";
import { FaAngleDown } from "react-icons/fa6";




const HomePage = () => {

  


  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-7 gap-5 my-8 mx-8">

      <div className=" bg-[#FFFFFF] p-5.5 rounded-2xl flex flex-col justify-between col-span-2 h-[278px]">
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


        {/* <div className="flex justify-between items-center ">
          <h2 className="text-[24px] font-semibold">New Delivery ddd</h2>
          <BsThreeDotsVertical></BsThreeDotsVertical>
        </div> */}

         <div className="flex flex-col justify-between">
           <div>
           <h2 className="text-[24px] font-semibold">savings this month</h2>
            <div className="flex gap-2.5 items-center mt-5 ">
            <AiOutlineDollar className="text-4xl text-[#E97A20]" ></AiOutlineDollar>
            <h2 className="text-[24px] font-semibold">$1,806</h2>
            </div>
           </div>
           <div className="flex gap-2.5 items-center">
            <TfiStatsUp  className="text-4xl text-[#E97A20]" ></TfiStatsUp>
            <h2 className="text-[22px] font-semibold text-[#E97A20]">3.5%</h2>
            </div>
         </div>         
         <div className="flex items-center">
            <PieChart></PieChart>
         </div>
      </div>



      <div className="flex flex-col justify-between col-span-2 h-[278px]">


        <div className="flex justify-center bg-[#ffffff] p-5.5 rounded-2xl gap-10 py-8 ">
          <div>
            <h2 className="font-semibold text-[#000000] text-[46.47px] ">139</h2>
          </div>

          <div className="flex flex-col">
            <span className="text-[20px] font-[500]">Total delivery</span>
            <span className="text-[20px] font-[500]">packages</span>
          </div>
        </div>


        <div className="flex justify-center bg-[#000000] p-5.5 rounded-2xl gap-10 py-8 ">
          <div>
            <h2 className="font-semibold text-[#ffffff] text-[46.47px] ">268</h2>
          </div>

          <div className="flex flex-col">
            <span className="text-[20px] font-[500] text-[#ffffff]">Total delivery</span>
            <span className="text-[20px] font-[500] text-[#ffffff]">packages</span>
          </div>
        </div>



      </div>



      {/* secound colum  */}
      <div className=" bg-[#FFFFFF] p-5.5  rounded-2xl flex flex-col justify-between col-span-2  h-[511px] ">
        <div className="flex justify-between items-center ">
          <div>
            <h2 className="text-[25px] font-semibold text-[#000000] leading-6.5">Open Cases by</h2>
              <h2 className="text-[25px] font-semibold text-[#000000]">customer</h2>
          </div>


          <div className="bg-[#000000] h-[34px] w-[34px] rounded-full flex justify-center items-center">
               <GoArrowUpRight className="text-white text-lg" ></GoArrowUpRight>
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
          </div >
          <BarChartComponent></BarChartComponent>
        </div>
      </div>


      {/* 5 number div  */}

      <div className=" bg-[#F0F0F0] p-5.5  rounded-2xl col-span-3 h-[511px]">
        <div className="flex justify-between items-center ">
          <h2 className="text-[24px] font-semibold">Tracking</h2> 
          <h2 className="text-[24px] font-semibold">640 km</h2> 
        </div>




        <div className="flex justify-between items-center gap-3.5 mt-14">
        <div className="bg-[#000000] rounded-2xl p-6 h-[254px] flex flex-col justify-between w-1/2">
           <div className="flex justify-between">
            <p className="font-medium text-[20px] text-[#ffffff]">NYC</p>
            <p className="font-medium text-[20px] text-[#ffffff]">BOS</p>
           </div>


           <div className="flex flex-col justify-center items-center ">
             <TbCar className="font-medium text-[20px] text-[#ffffff] mb-1.5"></TbCar>
              <div>
                <span className="text-[13px] text-[#929292] font-medium"><span className="text-[#fff]">3</span> hr  <span className="text-[#fff]">40</span> min</span>
              </div>
           </div>
            <TimeBar></TimeBar>
         </div>



         <div className="text-[#000000] bg-[#FFFFFF] rounded-2xl p-6 h-[254px] flex flex-col justify-between w-1/2">           
            <p className="font-medium text-[20px] text-[#000000]">#1275896-LD-NY</p>
              <VerticalTimeline></VerticalTimeline>
         </div>
        </div>


        <div className="mt-10 bg-[#FFFFFF] py-3.5 px-3.5 rounded-full grid grid-cols-2 items-center">
      <ProgressCircle value={75} /> 

      <div className="border-l-2 border-gray-200 pl-3.5 flex justify-between items-center">
         <span className="text-[#929292] text-[16px] font-medium ">Deliveries</span>
         <FaAngleDown className="mr-8 text-[#929292]" ></FaAngleDown>
      </div>
    </div>
        

        
      </div>





      {/* 6 number div  */}

      <div className="flex flex-col gap-2.5 col-span-2  h-[511px]">

        <div className="flex flex-col justify-between   bg-[#E97A20] p-5.5 rounded-2xl h-[335px]">

          <div className="flex justify-between w-full ">
          <h2 className="text-[24px] font-semibold text-[#ffffff]">High Rates</h2>

          <div  className="bg-[#000000] h-[34px] w-[34px] rounded-full flex justify-center items-center">
          <BsThreeDotsVertical className="text-white" ></BsThreeDotsVertical>
          </div >
          </div>
        
          <div >
             <span className="text-[45px] text-[#ffffff] font-semibold">160/</span>
             <span className="text-[20px] font-[500] text-[#FFFFFFBF]">143/pkg</span>


             <div className="flex justify-evenly my-7 ">
                <div className="shape h-12 w-12 bg-black"></div>
                <div className="shape h-12 w-12 bg-[#ffff]"></div>
                <div className="shape h-12 w-12 bg-black"></div>
                <div className="shape h-12 w-12 bg-black"></div>
                <div className="shape h-12 w-12 bg-black"></div>
             </div>
          </div >

          
        </div>



        <div className="bg-[#000000] p-5.5 rounded-2xl">
           <div className="flex justify-between items-center">
               <span className="text-[#ffffff] text-[16px] font-medium">Get ready to ship</span>
               <div className="bg-[#E97A20] h-[34px] w-[34px] rounded-full flex justify-center items-center">
               <FaPlus className="text-white" ></FaPlus>
          </div>
           </div>

           <p className="font-[500] text-[22px] text-[#ffffff] leading-4.5 mt-14">Create your</p>
           <p className="font-[500] text-[22px] text-[#ffffff]"> Custom Dashboard</p>
          
        </div>
      </div>




      




    </div>
  );
};

export default HomePage;
