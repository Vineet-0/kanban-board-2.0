import EditTicketForm from '@/components/EditTicketForm'

const getTicketById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/tickets/${id}`,{
            cache: "no-store",
        })
        if(!res.ok){
            throw new Error("Failed to fetch topic");
        }
        return res.json();
    } catch (err) {
        console.log("Error loading topic:",err);
    }
}

const EditTicket = async ({params}) => {
    const { id } = params;
    const {ticket} = await getTicketById(id);
    const { ticketId, title, tag, userId, status, priority } = ticket;
    return (
        <EditTicketForm id={id} ticketId={ticketId} title={title} tag={tag} userId={userId} status={status} priority={priority}/>
    )
}

export default EditTicket