import React from "react";
import DetailsCard from "./DetailsCard";
import AvailableCard from "./AvailableCard";
import avatar from "../../assets/driver_avater2.png"; // Ensure this path is correct
import RightSide from "./RightSide";
import MiddleSide from "./MiddleSide";

const available_cardItem = [
  {
    id: 1,
    avatar: avatar, // Now works with updated type
    rating: 3.5,
    review: "2,256",
    name: "Michael Nguyen",
    carName: "Pontiac - White - 586 5GX",
    phone: "0903001276",
    location: "Saigon",
    availabilityCheck: "On the way to destination",
  },
  {
    id: 2,
    avatar: avatar,
    rating: 4.5,
    review: "2,256",
    name: "Michael Nguyen",
    carName: "Pontiac - White - 586 5GX",
    phone: "0903001276",
    location: "Saigon",
    availabilityCheck: "Available",
  },
  {
    id: 3,
    avatar: avatar,
    rating: 5,
    review: "2,256",
    name: "Michael Nguyen",
    carName: "Pontiac - White - 586 5GX",
    phone: "0903001276",
    location: "Saigon",
    availabilityCheck: "Available",
  },
];

const Driver = () => {
  return (
    <div className="md:flex gap-10 w-full pt-5 md:pt-0">
      {/* left */}
      <div className="">
        <DetailsCard />
        <div className="flex flex-col gap-[13px] mt-4">
          {available_cardItem.map((item) => (
            <AvailableCard key={item.id} driver={item} />
          ))}
        </div>
      </div>
      <div className="md:flex justify-between bg-white rounded-[40px] mt-6 md:mt-0 p-4 md:p-[30px] w-full">
        {/* middle */}
        <MiddleSide />
        {/* right */}
        <RightSide />
      </div>
    </div>
  );
};

export default Driver;
