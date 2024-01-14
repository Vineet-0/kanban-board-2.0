"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation';

const AddTicket = () => {
    const [ticketId,setTicketId] = useState("");
    const [title,setTitle] = useState("");
    const [tag,setTag] = useState("");
    const [userId,setUserId] = useState("");
    const [status,setStatus] = useState("");
    const [priority,setPriority] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!ticketId || !title || !tag || !userId || !status || !priority){
            alert('All fields are required');
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/tickets',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ticketId, title, tag, userId, status, priority })
            });

            if(res.ok){
                router.push('/')
                router.refresh();
            } else {
                throw new Error("Error creating ticket");
            }
        } catch (err) {
            console.log("Error creating ticket:",err);
        }

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setTicketId(e.target.value)}
                value={ticketId}
                type="text"
                placeholder="Enter Ticket ID"
                className='border border-slate-500 px-4 py-2 rounded-md'
            />
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Enter Title"
                className='border border-slate-500 px-4 py-2 rounded-md'
            />
            <input
                onChange={(e) => setTag(e.target.value)}
                value={tag}
                type="text"
                placeholder="Enter Tag"
                className='border border-slate-500 px-4 py-2 rounded-md'
            />
            <input
                onChange={(e) => setUserId(e.target.value)}
                value={userId}
                type="text"
                placeholder="Enter UserId"
                className='border border-slate-500 px-4 py-2 rounded-md'
            />

            <select
                id="status"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
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
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
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
                Add Ticket
            </button>
        </form>
    )
}

export default AddTicket