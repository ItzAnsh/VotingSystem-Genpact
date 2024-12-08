import mongoose from "mongoose";

const partySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		leader: {
			type: String,
			required: true,
		},
		symbol: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model("party", partySchema);
