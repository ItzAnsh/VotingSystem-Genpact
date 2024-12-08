import mongoose from "mongoose";

const voterSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	dob: {
		type: Date,
		required: true,
	},
	aadharno: {
		type: String,
		required: true,
	},
	voted: {
		type: Boolean,
		default: false,
	},
	totalVotes: {
		type: Number,
		default: 0,
	},
}, { timestamps: true });

const voterModel = mongoose.model("voter", voterSchema);

export default voterModel;
