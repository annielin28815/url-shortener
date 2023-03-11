
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import BackgroundAnimates from './BackgroundAnimates';
import MainForm from './MainForm';
import DataTable from './DataTable';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUrls();
  }, [])

  const getUrls = async () => {
    const response = await axios.get('http://localhost:3001/urls');
    if(response.status === 200){
      setData(response.data);
    }
  };

  return (
    <div className="App">
      <BackgroundAnimates />

      <main className="container my-5">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>URL Shortener</h1>
        <MainForm />
        {data.length > 0 &&  <DataTable data={data}/>}
      </main>
    </div>
  );
}

export default App;