
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import BackgroundAnimates from './BackgroundAnimates';
import MainForm from './MainForm';

const App = () => {
  const [data, setData] = useState([]);

  const viewData = [
    {
      id: 1,
      full: 'https://getbootstrap.com/docs/5.3/utilities/spacing/#notation',
      short: 'https://tinyurl.com/3eujaca6',
      clicks: 10
    },
    {
      id: 2,
      full: 'https://getbootstrap.com/docs/5.3/utilities/spacing/#notation',
      short: 'https://tinyurl.com/3eujaca6',
      clicks: 10
    }
  ];

  return (
    <div className="App">
      <BackgroundAnimates />
      <main className="container my-5">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>URL Shortener</h1>

        <MainForm />

        {viewData !== undefined &&
          <table className="table table-responsive table-light table-striped rounded-4">
            <thead>
              <tr>
                <th>Full URL</th>
                <th>Short URL</th>
                <th>Clicks</th>
              </tr>
            </thead>
            <tbody>
              {viewData.map((shortUrl) => {
                return <tr key={shortUrl.id}>
                  <td><a href={shortUrl.full}>{shortUrl.full}</a></td>
                  <td><a href={shortUrl.short}>{shortUrl.short}</a></td>
                  <td>{shortUrl.clicks}</td>
                </tr>
                })
              }
            </tbody>
          </table>
        }
      </main>
    </div>
  );
}

export default App;