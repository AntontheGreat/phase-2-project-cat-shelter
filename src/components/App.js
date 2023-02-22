import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from "./Home";
import About from "./About";
import CatForm from './CatForm';
import './App.css'; 
import CatContainer from './CatContainer';

const API = "http://localhost:3001/cats"

function App() {
  const [page, setPage] = useState("/");
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch(API)
     .then(res => res.json())
     .then(setCats)
  }, []);

  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <CatForm />
        <Routes>
          <Route path="/cats" element={<CatContainer cats={cats} />} />
        </Routes>
    </div>
  );
}

export default App;
