"use client"
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation'

const RemoveTicketBtn = ({id}) => {
    const router = useRouter();
    const removeTicket = async() => {
        const confirmed = confirm('Are you sure you want to Delete this?');

        if(confirmed) {
            const res = await fetch(`http://localhost:3000/api/tickets/?id=${id}`,{
                method: 'DELETE',
            });
            if(res.ok)
            {
                router.refresh();
            }
        }
    }
    return (
        <button onClick={removeTicket} className='text-red-400'>
            <HiOutlineTrash size={24}/>
        </button>
    )
}

export default RemoveTicketBtn