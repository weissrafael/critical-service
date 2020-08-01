import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useWebsocket from "./hooks/useWebsocket";

function App() {
  const { connected } = useWebsocket();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{`Conection State: ${connected} `}</div>
      </header>
    </div>
  );
}

export default App;
