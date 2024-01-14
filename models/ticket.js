import mongoose,{Schema} from "mongoose";

const ticketSchema = new Schema(
    {
        ticketId: {type: String, unique: true},
        title: String,
        tag: String,
        userId: String,
        status: String,
        priority: Number,
    },
    {
        timestamps: true,
    }
);

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket',ticketSchema);

export default Ticket ;