import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/connectDB.js";
import userRouter from "./routes/user-routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const url = process.env.DB_URL;
app.use(cors());
app.use(express.json());

connectDb(url);

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log("server running on http://localhost:8000");
});
