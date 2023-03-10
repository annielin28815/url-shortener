
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import BackgroundAnimates from './BackgroundAnimates';
import MainForm from './MainForm';
import DataTable from './DataTable';

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
        {viewData !== undefined &&  <DataTable data={viewData}/>}
      </main>
    </div>
  );
}

export default App;