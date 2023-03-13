import { v4 as uuid } from "uuid";
import shortId from 'shortid';

let urls = [];



export const getUrls = (req, res) => {
  console.log('urls =>', urls);
  res.send(urls)
};

export const createUrl = (req, res, next) => {

  const url = req.body;
  console.log('createUrl:  req =>', req);

  urls.push({...url, id: uuid(), short_url: shortId.generate()});
  res.send(`Added url successfully.${url}`)
};

export const getUrl = (req, res) => {
  const singleUrl = urls.filter((url) => url.id === req.params.id);

  console.log('singleUrl =>', singleUrl);
  res.send(singleUrl);
};

export const deleteUrl = (req, res) => {
  urls = urls.filter((url) => { url.id !== req.params.id});
  res.send('Deleted url successfully.')
};

export const updateUrl = (req, res) => {
  const url = urls.find((url) => url.id === req.params.id);

  url.full_url = req.body.full_url;

  res.send('Updated url successfully.')
};

export const updateClickCounts = (req, res) => {
  console.log('req =>', req);
  // const singleUrl = urls.filter((url) => url.full_url === req);
  // console.log('singleUrl =>', singleUrl);
  // if (singleUrl == null) {
  //   return res.sendStatus(404)
  // }

  // shortUrl.clicks++
  // shortUrl.save()

  // res.redirect(shortUrl.full)
}