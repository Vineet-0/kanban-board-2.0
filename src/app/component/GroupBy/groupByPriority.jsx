"use client"
import React, {useState,useEffect} from 'react';

import CardHead from '../Card/cardHead.jsx';
import CardBody from '../Card/cardBody.jsx';

import priorities from '../GroupingObjects/priorities.jsx'

const GroupByPriority = ({ data, grouping, ordering }) => {
  const [groupedTickets, setGroupedTickets] = useState({});

  // Effect to group tickets by priority when data changes
  useEffect(() => {
      // Check if data is available
      if (data) {
          // Grouping tickets based on priority
          const groupedData = data.tickets.reduce((acc, ticket) => {
              const priority = ticket.priority;
              if (!acc[priority]) {
                  acc[priority] = [];
              }
              acc[priority].push(ticket);
              return acc;
          }, {});

          // Updating state with grouped data
          setGroupedTickets(groupedData);
      }
  }, [data]);
  return (
    <div className="w-full">
        {/* Check if there are grouped tickets to display */}
        {/* Rendering grouped tickets based on priority */}
        {groupedTickets && Object.keys(groupedTickets).length > 0 ? (
            <div className='flex flex-wrap h-auto'> 
                {priorities.map(priority => (
                    <div key={priority.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2'>

                        {/* CardHead component for displaying priority information */}
                        <CardHead
                            title = {priority.name}
                            number = {groupedTickets[priority.id]?.length || 0}
                            icon = {priority.icon}
                            users = {data.users}
                        />
                        <div className='w-full flex flex-col gap-4'>
                            {/* Conditional rendering based on ordering type */}
                            {/* Rendering tickets based on priority, if available */}
                            {ordering === 'Priority' && (
                                groupedTickets[priority.id] ? (
                                groupedTickets[priority.id].map(ticket => (
                                    <CardBody key={ticket.id} ticket={ticket} users={data.users} grouping={grouping} />
                                ))
                                ) : (
                                    <></> // Placeholder for empty case
                                )
                            )}
                            {/* Sorting and rendering tickets based on title */}
                            {ordering === 'Title' && (
                                groupedTickets[priority.id] ? (
                                groupedTickets[priority.id]
                                .sort((a, b) => a.title.localeCompare(b.title)) // Sort by title in increasing order
                                .map(ticket => (
                                    <CardBody key={ticket.id} ticket={ticket} users={data.users} grouping={grouping} />
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

export default GroupByPriority