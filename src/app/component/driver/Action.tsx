"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

export default function CustomDropdown({ invoiceId }: { invoiceId: number }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown container

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle the click on dropdown options
  const handleOptionClick = (value: string) => {
    if (value === "Detail") {
      console.log("Navigating to:", `/driver/${invoiceId}`);
      router.push(`/driver/${invoiceId}`);
    }
    setSelected(value);
    setIsOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative md:w-40" ref={dropdownRef}>
      {/* Custom Dropdown Trigger */}
      <div
        className="w-12 h-8 flex items-center justify-between border rounded-md bg-blue-500 text-white font-bold cursor-pointer px-2"
        onClick={toggleDropdown}
      >
        {selected ? "" : ""}
        <IoIosArrowDown className="text-white ml-2" />
      </div>

      {/* Custom Dropdown Menu */}
      {isOpen && (
        <div className="absolute md:left-12 -left-12 top-2  bg-white border border-gray-200 rounded-md shadow-lg z-20">
          <ul className="">
            <li
              className="px-6 py-1.5 text-black text-center hover:bg-gray-100 cursor-pointer border-b border-gray-300"
              onClick={() => handleOptionClick("Accept")}
            >
              Accept
            </li>
            <li
              className="px-6 py-1.5 text-black text-center hover:bg-gray-100 cursor-pointer border-b border-gray-300"
              onClick={() => handleOptionClick("Decline")}
            >
              Decline
            </li>
            <li
              className="px-6 py-1.5 text-black text-center hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick("Detail")}
            >
              Details
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
