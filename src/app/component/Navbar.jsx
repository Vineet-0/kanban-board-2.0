"use client";
import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";

import { ImEqualizer } from "react-icons/im";
import { FaChevronDown } from "react-icons/fa";

import DarkModeToggle from "./DarkModeToggle";




const Navbar = ({
  selectedGrouping,
  setSelectedGrouping,
  selectedOrdering,
  setSelectedOrdering,
}) => {
  // const { theme , setTheme } = useTheme();


  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isChevronRotated, setIsChevronRotated] = useState(false);

  // const handleThemeChange = () => {
  //   if(theme == "light")
  //   { setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };

  const handleButtonClick = () => {
    setIsOptionsVisible(!isOptionsVisible);
    setIsChevronRotated(!isOptionsVisible);
  };
  const handleOutsideClick = () => {
    setIsOptionsVisible(false);
    setIsChevronRotated(false);
  }
  const handleGroupingChange = (event) => {
    setSelectedGrouping(event.target.value);
    setIsOptionsVisible(false);
  };

  const handleOrderingChange = (event) => {
    setSelectedOrdering(event.target.value);
    setIsOptionsVisible(false);
  };
  
  // useEffect(() => {
  //     setTheme(localStorage.getItem('theme') || 'light');
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  // }, [theme]);

  return (
    <div className="w-full text-black dark:text-white bg-white dark:bg-[#161b22]">
      <div className="w-full flex flex-row items-center justify-between px-8 sm:px-[60px] py-[20px] "
      // onClick={handleOutsideClick}
      >
        <button className="flex flex-row items-center justify-between gap-2 px-[15px] py-[8px] border border-[#e7e8ea] dark:border-[#4a4a4a] rounded-lg shadow dark:shadow-white "
        onClick={handleButtonClick}>
          <ImEqualizer className="text-sm bg-white dark:bg-[#161b22]" />
          Display
          <FaChevronDown className={`text-sm bg-white dark:bg-[#161b22] transition-transform transform ${
    isChevronRotated ? 'rotate-180' : '' // Apply rotation based on state
  }`} />
        </button>

        <DarkModeToggle />
        {/* <button onClick={handleThemeChange}>
          <MdSunny />
          <IoMdMoon />
          <div classname="bg-red-500 dark:bg-yellow-300">
            {theme}
            </div>
        </button> */}
      </div>
      {isOptionsVisible && (
        <div className="z-1 absolute top-[72px] left-[32px] md:left-[60px] w-[300px] font-700 px-[20px] py-[15px] border-[1px] border-[#e7e8ea] dark:border-[#4a4a4a] rounded-lg bg-white dark:bg-[#161b22] text-[#a1a1a3] dark:text-white">
          <div className="flex flex-col bg-transparent gap-[15px]  ">
            <div className="flex flex-row items-center justify-between decoration-none font-[15px]">
              <div className="">
                Grouping
              </div>
              <div className="min-w-[120px] flex flex-row bg-white dark:bg-[#161b22] z-2 rounded-md">
                {/* <FaChevronDown className="z-10 absolute top-[23px] right-[26px] bg-transparent" /> */}
                <select className=" z-1 w-full font-[12px] border-2 border-[#e7e8ea] dark:border-[#4a4a4a] rounded-lg px-2 py-1 text-black dark:text-white pointer bg-transparent" id="option1" value={selectedGrouping} onChange={handleGroupingChange}>
                  <option value="Status">Status</option>
                  <option value="User">User</option>
                  <option value="Priority">Priority</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between decoration-none font-[15px]">
              <div>
                Ordering
              </div>
              <div className="min-w-[120px] flex flex-row bg-white dark:bg-[#161b22] z-2 rounded-md">
                {/* <FaChevronDown className="z-10 absolute top-[68px] right-[26px] bg-transparent" /> */}
                <select   className="z-1 w-full font-[12px] border-2 border-[#e7e8ea] dark:border-[#4a4a4a] rounded-lg px-2 py-1 text-black dark:text-white pointer bg-transparent" id="option1" value={selectedOrdering} onChange={handleOrderingChange}>
                  <option value="Priority">Priority</option>
                  <option value="Title">Title</option>

                </select>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
