import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between bg-slate-800 px-8 py-3'>
        <Link href={"/"} className='text-white font-bold'>
            ToDo
        </Link>
        <Link href={"/addTicket"} className='bg-white p-2'>
            Add Ticket
        </Link>
    </nav>
  )
}

export default NavBar