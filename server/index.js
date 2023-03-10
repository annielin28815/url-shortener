const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.json(
    {
      full: 'https://getbootstrap.com/docs/5.3/utilities/spacing/#notation',
      short: 'https://tinyurl.com/3eujaca6',
      clicks: 10
    },
    {
      full: 'https://getbootstrap.com/docs/5.3/utilities/spacing/#notation',
      short: 'https://tinyurl.com/3eujaca6',
      clicks: 10
    });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});