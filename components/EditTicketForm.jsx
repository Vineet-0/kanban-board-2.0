"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

const EditTicketForm = ({id,ticketId, title, tag, userId, status, priority}) => {
    const [newTicketId,setNewTicketId]=useState(ticketId);
    const [newTitle,setNewTitle]=useState(title);
    const [newTag,setNewTag] = useState(tag);
    const [newUserId,setNewUserId] = useState(userId);
    const [newStatus,setNewStatus] = useState(status);
    const [newPriority,setNewPriority] = useState(priority);

    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/tickets/${id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({newTicketId,newTitle, newTag, newUserId, newStatus, newPriority})
            });
            if(!res.ok){
                throw new Error("Error updating topic");
            }
            router.push('/');
            router.refresh();
        } catch (err) {
            console.log("Error updating topic:",err);
        }
    };
  return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setNewTicketId(e.target.value)}
                value={newTicketId}
                type="text"
                placeholder="Enter Ticket ID"
                className='border border-slate-500 px-4 py-2 rounded-md'
            />
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                type="text"
                placeholder="Enter Title"
                className='border border-slate-500 px-4 py-2 rounded-md'
            />
            <input
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                type="text"
                placeholder="Enter Tag"
                className='border border-slate-500 px-4 py-2 rounded-md'
            />
            <input
                onChange={(e) => setNewUserId(e.target.value)}
                value={newUserId}
                type="text"
                placeholder="Enter UserId"
                className='border border-slate-500 px-4 py-2 rounded-md'
            />

            <select
                id="status"
                onChange={(e) => setNewStatus(e.target.value)}
                value={newStatus}
                className='w-full border border-slate-500 px-4 py-2 mr-4 rounded-md'
            >
                <option defaultValue>Choose a Status</option>
                <option value="Backlog">Backlog</option>
                <option value="Todo">Todo</option>
                <option value="Progress">Progress</option>
                <option value="Done">Done</option>
                <option value="Canceled">Canceled</option>
            </select>

            {/* Select for Priority */}
            <select
                id="priority"
                onChange={(e) => setNewPriority(e.target.value)}
                value={newPriority}
                className='w-full border border-slate-500 px-4 py-2 mr-4 rounded-md'
            >
                <option defaultValue>Choose a Priority</option>
                <option value="4">Urgent</option>
                <option value="3">High</option>
                <option value="2">Medium</option>
                <option value="1">Low</option>
                <option value="0">No Priority</option>
            </select>
            <button type="submit" className="bg-green-600 font-bold text-white px-4 py-2 w-fit rounded-md">
                Update Topic
            </button>
        </form>
  )
}

export default EditTicketForm