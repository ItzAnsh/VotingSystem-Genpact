import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Config from "./config/config";
import rateLimit from "express-rate-limit";

dotenv.config({
	path: "./.env",
});

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.send("API is working fine...");
});

try {
	Config.connectDB().then(() => {
		app.listen(3000, () => {
			console.log("Server is running on port 3000");
		});
	}).catch((err) => {
        console.error("Error occurred: ", err);
    });
} catch (error) {
	console.error("Error occurred: ", error);
}
