import mongoose from "mongoose"

const electionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    parties: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "party",
        required: true,
    }],
    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "party"
    },
}, { timestamps: true }); 

export default mongoose.model("election", electionSchema);