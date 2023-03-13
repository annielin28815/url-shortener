import express from "express";
import { getUrls, createUrl, getUrl, deleteUrl, updateUrl, updateClickCounts } from "../controllers/url.js";

const urlRouter = express.Router();

urlRouter.get("/urls", getUrls);
urlRouter.post("/url", createUrl);
urlRouter.get("/url/:id", getUrl);
urlRouter.delete("/url/:id", deleteUrl);
urlRouter.put("/url/:id", updateUrl);
urlRouter.post("url/:id", updateClickCounts);

export default urlRouter;