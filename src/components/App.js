import React, { useEffect, useState } from 'react';
// import { Switch, Route } from "react-router-dom";
// import NewCat from './NewCat';
// import CatList from './CatList';
import NavBar from './NavBar';
import Home from "./Home";
import About from "./About";
import CatsContainer from './CatsContainer';
import CatForm from './CatForm';
import CatCollection from "./CatCollection";
import './App.css'; 

function App() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cats")
      .then((r) => r.json())
      .then(cats => setCats(cats))
  }, [])
  
  // console.log(cats)

  function addCat(newCat) {
    const updatedCats = [...cats, newCat]
    setCats(updatedCats);
  }

//   function deleteCat(id) {
//     const updatedCats = cats.filter(cat => cat.id !== id)
//     setCats(updatedCats)
//   }
  
//   function updateCat(id, adopted) {
//     const updatedCats = cats.map(cat => {
//       if (cat.id === id) {
//         return { ...cat, adopted }
//       } else {
//         return cat
//       }
//     })
//     // setCats(updatedCats)
// }

  return (
    <div className="App">
      <NavBar />
      <br />
      <Home />
      <br />
      <About />
      {/* // <CatList cats={cats} />
      // <NewCat onAddCat={addCat} />
      // <CatList cats={cats} onDeleteCat={deleteCat} onUpdateCat={updatedCats} /> */}
      <CatForm onAddCat={addCat} />
      <br />
      <CatsContainer cat={cats} />
    </div>
  );
}

export default App;
