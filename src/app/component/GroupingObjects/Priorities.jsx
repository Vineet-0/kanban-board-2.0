import React from 'react';

import { MdOutlinePriorityHigh } from "react-icons/md";
import { CgBorderStyleDashed } from "react-icons/cg";

import High from '../PriorityIcons/High.jsx';
import Medium from '../PriorityIcons/Medium.jsx';
import Low from '../PriorityIcons/Low.jsx';

const Priorities = [
    {
        id: 0,
        name: 'No Priority',
        icon: <CgBorderStyleDashed className='bg-transparent flex item-center justify-center text-black dark:text-white '/>,
    },
    {
        id: 1,
        name: 'Low',
        icon: <Low className='bg-transparent flex item-center justify-center text-black dark:text-white'/>,
    },
    {
        id: 2,
        name: 'Medium',
        icon: <Medium className='bg-transparent flex item-center justify-center text-black dark:text-white '/>,
    },
    {
        id: 3,
        name: 'High',
        icon: <High className='bg-transparent flex item-center justify-center text-[#686c72] dark:text-white '/>,
    },
    {
        id: 4,
        name: 'Urgent',
        icon: <MdOutlinePriorityHigh className='flex item-center justify-center border-2 border-[#fb773f] rounded-sm bg-[#fb773f] text-white'/>,
    },
];

// Exporting the Priorities array for use in other components
export default Priorities;