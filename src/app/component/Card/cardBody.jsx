import React from 'react';

import priorities from '../GroupingObjects/Priorities.jsx';
import statuses from '../GroupingObjects/Statuses.jsx';

// Functional component for rendering the body of a card
const CardBody = ({ ticket, users, grouping }) => {
    // Find the user object based on the user ID
    const user = users.find((user) => user.id === ticket.userId);

    // Determine the availability status of the user or set to false if not available
    const active = user ? user.available
                        : false;

    // Generate a user icon based on the first character of the user name
    const userIcon = user ? user.name.charAt(0).toUpperCase()
                          : 'N/A';

    // Find the priority and status objects based on ticket data
    const priority = priorities.find(p => p.id === ticket.priority);
    const status = statuses.find(s => s.title === ticket.status);

    return (
        <div className='hover:scale-[1.03] transition ease-in-out duration-300 text-[15px] p-[20px] flex flex-col gap-2 rounded-lg bg-white dark:bg-[#161b22] shadow'>
            {/* Top section with user ID and user icon (if grouping is not 'User') */}
            <div className='flex flex-row items-center justify-between text-[#a6a9ad] bg-white dark:bg-[#161b22]'>
                <div className='bg-white dark:bg-[#161b22]'>
                    {ticket.id}
                </div>
                {grouping !== 'User' && (
                    <div className='flex items-center'>
                        {/* Display an active or inactive indicator based on user availability */}
                        {active ? <div className='relative -right-[24px] top-[8px] w-[10px] h-[10px] border-[2px] border-white rounded-full bg-[#ffa500]'></div>
                                : <div className='relative -right-[24px] top-[8px] w-[10px] h-[10px] border-[2px] border-white rounded-full bg-[#a6a9ad]'></div>
                        }
                        {/* Display the user icon (first character of the user name) */}
                        <div className='flex items-center justify-center w-[20px] h-[20px] text-[12px] font-bold rounded-full text-white dark:text-black bg-[#35383d] dark:bg-white'>
                            {userIcon}
                        </div>
                    </div>
                )}
            </div>
            {/* Middle section with status icon and ticket title */}
            <div className='flex gap-2 items-start'>
                {grouping !== 'Status' && (
                    <div>
                        {/* Display the status icon based on ticket data */}
                        {status ? status.icon
                                : null}
                    </div>
                )}
                {/* Display the ticket title */}
                <div className='text-black dark:text-white'>
                    {ticket.title}
                </div>
            </div>
            {/* Bottom section with priority icon and ticket tags */}
            <div className='flex flex-wrap items-center gap-2 bg-white dark:bg-[#161b22] text-sm'>
                {grouping !== 'Priority' && (
                    <div className='flex items-center justify-center p-0.5 border-[1.5px] border-[#dbdbdb] dark:border-[#4a4a4a] rounded-md'>
                        {/* Display the priority icon based on ticket data */}
                        {priority.icon}
                    </div>
                )}
                {/* Display each tag associated with the ticket */}
                {ticket.tag.map((tag, index) => (
                    <div key={index} className='flex items-center justify-center gap-2 px-2 border-[1.5px] border-[#dbdbdb] dark:border-[#4a4a4a] rounded-md bg-white dark:bg-[#161b22] text-[#a0a3a7]'>
                        <div className='w-3 h-3 rounded-full bg-[#bec2c7] dark:bg-[#a0a3a7]'></div>
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardBody;