
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import BackgroundAnimates from './BackgroundAnimates';
import MainForm from './MainForm';

const App = () => {
  return (
    <div className="App">
      <BackgroundAnimates />

      <main className="container my-5">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>URL Shortener</h1>
        <MainForm />
      </main>
    </div>
  );
}

export default App;