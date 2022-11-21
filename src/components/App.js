import React, { useState } from 'react';
// import { Switch, Route } from "react-router-dom";
import Nav from './Nav';
import './App.css';
import CatsContainer from './CatsContainer';
import cats from "../"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Nav />
      <CatsContainer />
    </div>
  );
}

export default App;
