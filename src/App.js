import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>

        <div>
          <h1>Hello World!</h1>
          <p>It's time for the weekend!</p>
        </div>

        <div>
          <button onClick="">Go Home!</button>
        </div>
      </header>
    </div>
  );
}

export default App;
