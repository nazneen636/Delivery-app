import React from "react";
import item1 from "../assets/item_1.png";
import item2 from "../assets/item_2.png";
import item3 from "../assets/item_3.png";
import item4 from "../assets/item_4.png";
import item5 from "../assets/item_5.png";
import Link from "next/link";
import Image from "next/image";
const items = [
  {
    id: 1,
    icon: item1,
    link: "/",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-black rounded-full h-full px-6 ">
      <ul className="flex flex-col items-center justify-center h-full">
        {items.map((item) => (
          <li
            className="px-[17px] py-[14px] rounded-[8px] hover:bg-orange duration-300 transition-all"
            key={item.id}
          >
            <Link href="" className="">
              <Image
                src={item.icon.src}
                alt={`Item ${item.id}`}
                width={21}
                height={21}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
