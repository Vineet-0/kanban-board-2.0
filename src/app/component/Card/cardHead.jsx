import React from 'react';

import { FaPlus } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

// Functional component for rendering the header of a card
const CardHead = ({ userName, title, number, icon, users }) => {
    // Generate a user icon based on the first character of the title
    const userIcon = title.charAt(0).toUpperCase();

    // Find the user object based on the user name
    const user = users.find((user) => user.name === userName);

    // Determine the availability status of the user or set to false if not available
    const active = icon === undefined && user ? user.available
                                              : false;

    return (
        <div className='flex items-center justify-between h-[80px]'>
            <div className='flex flow-row items-center justify-center gap-[12px]'>
                {/* Check if an icon is provided, if not, display the user icon and availability status */}
                {icon ? (
                    <div className=''>{icon}</div>
                ) : (
                    <>
                        <div className='flex items-center justify-center  w-[25px] h-[25px] text-[14px] font-bold rounded-full text-white bg-[#35383d]'>
                            {userIcon}
                        </div>
                        {/* Display an active or inactive indicator based on user availability */}
                        {/* {active ? <div className='relative left-[14px] w-[13px] h-[13px] border-[2px] border-white rounded-full bg-[#ffa500]'></div>
                                : <div className='relative w-[13px] h-[13px] border-[2px] border-white rounded-full bg-[#a6a9ad]'></div>
                        } */}
                    </>
                )}
                {!icon &&
                    <>
                        {active
                            ?   <div className='relative -left-[21px] top-[9px] w-[13px] h-[13px] border-[2px] border-white rounded-full bg-[#ffa500] -z-1'></div>
                            :   <div className='relative -left-[21px] top-[9px] w-[13px] h-[13px] border-[2px] border-white rounded-full bg-[#a6a9ad] -z-1'></div>
                        }
                    </>
                }
                {!icon &&
                    <div className=' -ml-[25px]'>
                        
                    </div>
                }
                {/* Display the title and number in the header */}
                <div className='text-md font-bold text-[#35383d] dark:text-white'>{title}</div>
                <div className='text-md font-semibold text-[#8c8f94]'>{number}</div>
            </div>
            {/* Display icons on the right side of the header */}
            <div className='flex flow-row  gap-[15px]'>
                <div className='text-[#8c8f94]'><FaPlus /></div>
                <div className='text-[#8c8f94] font-bold pr-5'><HiDotsHorizontal /></div>
            </div>
        </div>
    );
};

export default CardHead;