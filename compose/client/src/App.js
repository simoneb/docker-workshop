import React from "react";
import useAxios from "axios-hooks";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [{ data: counter }, increment] = useAxios(
    "http://localhost:3001/count"
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The current counter is {counter}</p>
        <a className="App-link" onClick={() => increment({ method: "POST" })}>
          Increase counter
        </a>
      </header>
    </div>
  );
}

export default App;
