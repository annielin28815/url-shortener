import { v4 as uuid } from "uuid";

let urls = [];

export const getUrls = (req, res) => {
  res.send(urls)
};

export const createUrl = (req, res) => {
  const url = req.body;

  urls.push({...url, id: uuid(), short_url: 'https://tinyurl.com/3eujaca6'});
  res.send('Added url successfully.')
};

export const getUrl = (req, res) => {
  const singleUrl = urls.filter((url) => url.id === req.params.id);
  res.send(singleUrl);
};

export const deleteUrl = (req, res) => {
  urls = urls.filter((url) => { url.id !== req.params.id});
  res.send('Deleted url successfully.')
};

export const updateUrl = (req, res) => {
  const url = urls.find((url) => url.id === req.params.id);

  url.full_url = req.body.full_url;
  url.short_url = 'https://tinyurl.com/3eujaca6';

  res.send('Updated url successfully.')
};