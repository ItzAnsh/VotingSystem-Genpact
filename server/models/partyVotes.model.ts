import mongoose from "mongoose";

const partyVotesSchema = new mongoose.Schema({
    partyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "party",
        required: true,
    },
    electionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "election",
        required: true,
    },
    votes: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

export default mongoose.model("partyVotes", partyVotesSchema);