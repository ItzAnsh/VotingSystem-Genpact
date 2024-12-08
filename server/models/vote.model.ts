import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
    voterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "voter",
        required: true,
    },
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
}, { timestamps: true });

export default mongoose.model("vote", voteSchema);