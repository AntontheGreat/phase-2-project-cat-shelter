import React, { useEffect, useState } from 'react';
// import { Switch, Route } from "react-router-dom";
// import NewCat from './NewCat';
// import CatList from './CatList';
import NavBar from './NavBar';
import Home from "./Home";
import About from "./About";
import CatsContainer from './CatsContainer';
import CatForm from './CatForm';
import { cats as catsArray } from "../kitty_data";
import './App.css'; 

function App() {

  const [cats, setCats] = useState(catsArray);
  // console.log(cats)

  // useEffect(() => {
  //   fetch("/cats")
  //     .then((r) => r.json())
  //     .then(data => setCats(data.cats));
  // }, [])

  // function addCat(newCat) {
  //   const updatedCats = [...cats, newCat]
  //   setCats(updatedCats);
  // }

  // function deleteCat(id) {
  //   const updatedCats = cats.filter(cat => cat.id !== id)
  //   setCats(updatedCats)
  // }

  // function updatedCats(id, adopted) {
  //   const updatedCats = cats.map(cat => {
  //     if (cat.id === id) {
  //       return { ...cat, adopted }
  //     } else {
  //       return cat
  //     }
  //   })
  //   setCats(updatedCats)
  // }

  function addCat(catObj) {
    setCats([...cats, catObj])
  }

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      {/* // <CatList cats={cats} />
      // <NewCat onAddCat={addCat} />
      // <CatList cats={cats} onDeleteCat={deleteCat} onUpdateCat={updatedCats} /> */}
      <CatForm onAddCat={addCat} />
      <CatsContainer cat={cats}/>
    </div>
  );
}

export default App;
