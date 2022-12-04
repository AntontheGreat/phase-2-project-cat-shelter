import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Home from "./Home";
import About from "./About";
import CatsContainer from './CatsContainer';
import CatForm from './CatForm';
import './App.css'; 

function App() {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState("/");

  useEffect(() => {
    fetch("http://localhost:3000/cats")
      .then((r) => r.json())
      .then(cats => setCats(cats))
  }, [])

  if (!cats) {
    return <h2>Loading...</h2>
  }
  
  function addCat(newCat) {
    const updatedCats = [...cats, newCat]
    setCats(updatedCats);
  }

  function deleteCat(id) {
    const updatedCats = cats.filter(cat => cat.id !== id)
    setCats(updatedCats)
  }

  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path="/about"> */}
            <About />
          {/* </Route> */}
          {/* <Route exact path="/home"> */}
            <Home />
          {/* </Route> */}
        <CatForm onAddCat={addCat} />
          {/* <Route path="/cats"> */}
            <CatsContainer cat={cats} onDeleteCat={deleteCat} />
          {/* </Route>
          <Route path="*">
            <h1>404 not found</h1> */}
          {/* </Route> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
