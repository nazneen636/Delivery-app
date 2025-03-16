export default function TimeBar() {
    return (
      <div className="flex items-center justify-center ">
        <div className="w-full p-5 rounded-sm">
          
          <div className="grid grid-cols-4 gap-2">
            
            <div className="bg-[#ffffff] h-[1px] rounded-md"></div>
            <div className="bg-[#ffffff] h-[1px] rounded-md"></div>
            <div className="bg-[#ffffff] h-[1px] rounded-md"></div>
            <div className="bg-[#ffffff] h-[1px] rounded-md"></div>
          </div>

             <div className="mt-3 flex justify-between">
                <span className="text-[13px] text-[#929292] font-medium">12:00</span>
                <span className="text-[13px] text-[#929292] font-medium">13:41</span>
              </div>
        </div>
      </div>
    );
  }
  