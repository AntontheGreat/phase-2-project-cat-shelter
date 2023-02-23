import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from "./Home";
import About from "./About";
import CatForm from './CatForm';
import './App.css'; 
import CatContainer from './CatContianer';

const API = "http://localhost:3000/cats"

function App() {
  const [page, setPage] = useState("/");
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch(API)
     .then(res => res.json())
     .then(setCats);
  }, []);

  const handleNewCat = (freshBatchCat) => {
    setCats([freshBatchCat, ...cats]);
  }

  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <CatForm handleNewCat={handleNewCat} />
        <Routes>
          <Route path="/cats" element={<CatContainer cats={cats} />} />
        </Routes>
    </div>
  );
}

export default App;
