import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from "./Home";
import About from "./About";
import CatContainer from './CatsContainer';
import CatForm from './CatForm';
import './App.css'; 

function App() {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState("/");

  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cats" element={<CatContainer cats={cats} />}>
            <Route
              path="/cats/:id"
              element={<CatForm setCats={setCats} cat={cats} />}
            />
          </Route>
          <Route path="*" element={<h1>404 not found</h1>}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
