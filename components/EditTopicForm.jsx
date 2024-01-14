"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

const EditTopicForm = ({id,title,description}) => {
    const [newTitle,setNewTitle]=useState(title);
    const [newDescription,setNewDescription]=useState(description);

    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({newTitle,newDescription})
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
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                type="text"
                placeholder="Topic Title"
                className='border border-slate-500 px-4 py-2 rounded-md'
            />
            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                type="text"
                placeholder="Topic Description"
                className='border border-slate-500 px-4 py-2 rounded-md'
            />
            <button type="submit" className="bg-green-600 font-bold text-white px-4 py-2 w-fit rounded-md">
                Update Topic
            </button>
        </form>
  )
}

export default EditTopicForm