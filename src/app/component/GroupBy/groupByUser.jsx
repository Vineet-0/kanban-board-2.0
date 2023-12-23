"use client"
import React, { useState, useEffect } from 'react';
import CardHead from '../Card/CardHead';
import CardBody from '../Card/CardBody';

const GroupByUser = ({ data, grouping, ordering }) => {
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    // Check if data is available
    if (data) {
        // Grouping tickets based on user name
    const groupedData = data.tickets.reduce((acc, ticket) => {
        const user = data.users.find(user => user.id === ticket.userId);
        const userName = user ? user.name : 'Unknown';

        if (!acc[userName]) {
        acc[userName] = [];
        }
        acc[userName].push(ticket);
        return acc;
    }, {});

    // Sort tickets within each user group by user name
    Object.keys(groupedData).forEach(userName => {
        groupedData[userName].sort((a, b) => {
        return a.title.localeCompare(b.title); // You can change the sorting criteria as needed
        });
    });

    // Updating state with grouped data
    setGroupedTickets(groupedData);
    }
}, [data]);

  return (
    <div className="w-full">
            {/* Check if there are grouped tickets to display */}
            {/* Rendering grouped tickets based on user name */}
            {groupedTickets && Object.keys(groupedTickets).length > 0 ? (
                <div className='flex flex-wrap h-auto'>
                    {Object.keys(groupedTickets)
                    .sort((a, b) => a.localeCompare(b))
                    .map(userName => (
                        <div key={userName} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2'>
                            {/* CardHead component for displaying user information */}
                            <CardHead
                                userName={userName}
                                title={userName}
                                number={groupedTickets[userName]?.length || 0}
                                users={data.users}
                            />
                            <div className="w-full flex flex-col gap-4">
                                {/* Conditional rendering based on ordering type */}
                                {/* Rendering tickets based on user, sorted by priority in decreasing order */}
                                {ordering === 'Priority' && (
                                    groupedTickets[userName] ? (
                                    groupedTickets[userName]
                                    .sort((a, b) => b.priority - a.priority) // Sort by priority in decreasing order
                                    .map(ticket => (
                                        <CardBody key={ticket.id} ticket={ticket} users={data.users} grouping={grouping} />
                                    ))
                                    ) : (
                                    <></> // Placeholder for empty case
                                    )
                                )}
                                {/* Rendering tickets based on user, sorted by title in increasing order */}
                                {ordering === 'Title' && (
                                    groupedTickets[userName] ? (
                                    groupedTickets[userName]
                                    .sort((a, b) => a.title.localeCompare(b.title)) // Sort by title in increasing order
                                    .map(ticket => (
                                        <CardBody key={ticket.id} ticket={ticket} users={data.users} grouping={grouping}/>
                                    ))
                                    ) : (
                                    <></> // Placeholder for empty case
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <></> // Displayed while data is being loaded
            )}
        </div>
  );
}

export default GroupByUser