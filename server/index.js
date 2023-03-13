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

import mongoose from 'mongoose';
// import ShortUrl from './models/shortUrl.js';

// app.set('view engine', 'ejs')
// app.use(express.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
});

// app.get('/', async (req, res) => {
//   const shortUrls = await ShortUrl.find()
//   res.render('index', { shortUrls: shortUrls })
// })

// app.post('/shortUrls', async (req, res) => {
//   await ShortUrl.create({
//     full_url: req.body.fullUrl
//   })
//   res.redirect('/')
// })

// app.get('/:shortUrl', async (req, res) => {
//   const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
//   if (shortUrl == null) return res.sendStatus(404)

//   shortUrl.clicks++
//   shortUrl.save()

//   res.redirect(shortUrl.full)
// })


