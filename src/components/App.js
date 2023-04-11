import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from "./Home";
import About from "./About";
import CatContainer from './CatContianer';

const API = "http://localhost:3000/cats"

function App() {
  const [page, setPage] = useState("/");

  return (
      <div className="App">
        <NavBar onChangePage={setPage} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cats" element={<CatContainer />} />
          </Routes>
      </div>
  );
}

export default App;