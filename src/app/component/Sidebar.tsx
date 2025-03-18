"use client";
import React from "react";
// import item1 from "../assets/item_1.png";
// import item2 from "../assets/item_2.png";
// import item3 from "../assets/item_3.png";
// import item4 from "../assets/item_4.png";
// import item5 from "../assets/item_5.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSettings } from "react-icons/io5";
import { BsFillPostcardFill } from "react-icons/bs";
import { MdAccessible } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { GoPackageDependents } from "react-icons/go";
const items = [
  {
    id: 1,
    icon: <BiCategory />,
    link: "/home",
  },
  {
    id: 2,
    icon: <GoPackageDependents />,
    link: "/order",
  },
  {
    id: 3,
    icon: <MdAccessible />,
    link: "/driver",
  },
  {
    id: 4,
    icon: <BsFillPostcardFill />,
    link: "/card",
  },
  {
    id: 5,
    icon: <IoSettings />,
    link: "/setting",
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-black md:rounded-full py-2 px-3 md:py-[243px] fixed md:top-8 md:left-6 left-0 top-0 md:px-6 flex flex-col justify-center w-full md:w-auto z-50">
      <ul className="flex md:flex-col md:gap-8 items-center justify-between md:justify-center h-full">
        {items.map((item) => (
          <li
            className={`px-[17px] md:py-[14px] py-2 rounded-[8px] hover:bg-orange duration-300 transition-all ${
              pathName === item.link ? "bg-orange" : ""
            }`}
            key={item.id}
          >
            <Link href={item.link} className="text-white text-2xl">
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
