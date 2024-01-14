"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation';

const AddTopic = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !description){
            alert('Title and Description are required');
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/topics',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title,description})
            });

            if(res.ok){
                router.push('/')
                router.refresh();
            } else {
                throw new Error("Error creating topic");
            }
        } catch (err) {
            console.log("Error creating topic:",err);
        }

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Topic Title"
                className='border border-slate-500 px-4 py-2 rounded-md'
            />
            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                placeholder="Topic Description"
                className='border border-slate-500 px-4 py-2 rounded-md'
            />
            <button type="submit" className="bg-green-600 font-bold text-white px-4 py-2 w-fit rounded-md">
                Add Topic
            </button>
        </form>
    )
}

export default AddTopic