
const timelineData = [
  
  {
    description: "Checking",
    time: '12:30'
  },
  {
    description: "Send to you",
    time: '12:30'
  },
];

const currentIndex = 0

const VerticalTimeline = () => {
  return (
    <div className="flex flex-col  w-full   py-6">
      <div  className="relative border-l-2 border-dashed border-gray-300">

        {timelineData.map((item, index) => (
          <div key={index} className=" pl-6 relative ">
            {/* Dot */}
            <div className={`absolute -left-[7px] top-[6px] w-3 h-3  rounded-full   shadow-md ${index == currentIndex ? 'border-e-amber-500 border-[2px] ' : 'border-[2px] border-gray-400'  } `}></div>

            {
               index == currentIndex ? <div className="!mt-[-20px] space-x-11">
                 <span className="text-[#000] my-4 text-[13px]">{item.description}</span> 
                 <span className="text-[#000] my-4 text-[13px]">{item.time}</span>
                 </div>
                 : <div className="space-x-8 my-5">
                  <span className="text-[#929292] my-4 text-[13px]">{item.description}</span>
                  <span className="text-[#929292] my-4 text-[13px]">{item.time}</span>
                 </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;
