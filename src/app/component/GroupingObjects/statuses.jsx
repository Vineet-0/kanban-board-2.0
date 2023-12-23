import React from 'react'

import { LuCircleDashed } from "react-icons/lu";
import { MdOutlineCircle } from "react-icons/md";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

//Array representing different statuses along with their icons
const Statuses = [
    {
        title: 'Backlog',
        icon: <LuCircleDashed className='bg-transparent flex items-center justify-center w-[16px] h-[16px] font-bold text-[#e3e3e4]'/>
    },
    {
        title: 'Todo',
        icon: <MdOutlineCircle className='bg-transparent flex items-center justify-center w-[18px] h-[18px] font-bold text-[#e3e3e4] '/>
    },
    {
        title: 'In progress',
        icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className='text-[#f5c842] w-[16px] h-[16px]' xmlns="http://www.w3.org/2000/svg"><path d="M12 2h-1v9H2v1a10 10 0 0 0 17.07 7.07A10 10 0 0 0 12 2z"></path></svg>
        // <FaCircleHalfStroke className='bg-transparent flex items-center justify-center w-[18px] h-[18px] border-2 border-[#f1c94b] rounded-full bg-[#f1c94b]'/>
    },
    {
        title: 'Done',
        icon: <FaCircleCheck className='bg-transparent flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#f4f5f8] text-[#5d6ad1]'/>
    },
    {
        title: 'Canceled',
        icon: <MdCancel className='bg-transparent flex items-center justify-center w-[17px] h-[17px]  text-[#94a2b2] '/>
    },
];

export default Statuses