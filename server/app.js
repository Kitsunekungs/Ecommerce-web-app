import express from "express";
import { client } from "./utils/db.js";
import authRouter from "./apps/auth.js";
import dotenv from "dotenv";

const app = express();
const port = 4000;

app.use("/auth", authRouter);

app.get("*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

init();
