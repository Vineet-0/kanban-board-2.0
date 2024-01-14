import connectMongoDB from "@/libs/mongodb";
import Ticket from "@/models/ticket";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
    const { id } = params;
    const { newId: ticketId, newTitle: title, newTag: tag, newuUserId: userId, newStatus: status, newPriority: priority } = await req.json();
    await connectMongoDB();
    await Ticket.findByIdAndUpdate(id,{ticketId, title, tag, userId, status, priority});
    return NextResponse.json({message:"Ticket updated successfully"},{status: 203});
}

export async function GET(req, {params}) {
    const { id } = params;
    await connectMongoDB();
    const ticket = await Ticket.findOne({_id: id});
    return NextResponse.json({ticket},{status: 202});
}