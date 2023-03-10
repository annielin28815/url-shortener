
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  console.log('data =>', data);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  React.useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form action="" method="post">
          <label for="fullUrl">Url</label>
          <input type="url" name="fullUrl" if="fullUrl"></input>
          <button type="submit">go</button>
        </form>
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;