import Link from 'next/link'
import RemoveTicketBtn from './RemoveTicketBtn'
import {HiPencilAlt} from 'react-icons/hi'

const getTickets = async () => {
    try {     
        const res = await fetch('http://localhost:3000/api/tickets',{
            cache: 'no-store',
        })
        if(!res.ok){
            throw new Error("Failed to fetch topics")
        }
        return res.json();
    } catch (error) {
        console.log("Error loading Topics:",error)
    }
};

const TicketsList = async () => {

    const {tickets} = await getTickets();
    return (
        <div className='mt-4 mx-auto max-w-[800px]'>
            {tickets.map(t => (
                <div key={t._id} className='p-4 border border-slate-300 my-3 flex items-start justify-between gap-5 rounded-md hover:scale-[1.03] transition ease-in-out'>
                    <div>
                        <h2 className='font-bold text-2xl'>
                            {t.ticketId}
                        </h2>
                        <div>
                            {t.title}
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <RemoveTicketBtn id={t._id}/>
                        <Link href={`/editTicket/${t._id}`}>
                            <HiPencilAlt size={24}/>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TicketsList