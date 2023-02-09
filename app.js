import express from "express";
import User from "./routers/UserRouter.js";
import Nursery from "./routers/NurseryRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

app.use("/api/v1", User);
app.use("/api/nursery/v1", Nursery);

app.get("/", (req, res) => {
  res.send("Server is working well");
});
