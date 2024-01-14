import connectMongoDB from "@/libs/mongodb";
import Ticket from "@/models/ticket";
import { NextResponse } from "next/server";


export async function POST(req) {
    const { ticketId, title, tag, userId, status, priority } = await req.json();
    await connectMongoDB();
    await Ticket.create({ticketId, title, tag, userId, status, priority});
    return NextResponse.json({message:"Ticket Created successfully"},{status: 201});
}

export async function GET() {
    await connectMongoDB();
    const tickets = await Ticket.find();
    return NextResponse.json({tickets});
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({message:"Ticket Deleted successfully"},{status: 202});
}