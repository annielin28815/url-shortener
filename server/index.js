// const express = require("express");
// const cors = require("cors");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import urlRouter from "./routes/url.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/", urlRouter);

app.get("/", (req, res) => res.send(`Hello! ${PORT}`));
app.get("*", (req, res) => res.send("That route dose not exist."))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});