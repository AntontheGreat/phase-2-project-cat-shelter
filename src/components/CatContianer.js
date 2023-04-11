import React, { useEffect, useState } from "react";
import CatCard from "./CatCard";
import CatForm from "./CatForm";

const API = "http://localhost:3000/cats"

function CatContainer() {
    const [cats, setCats] = useState([]);
    
    useEffect(() => {
        fetch(API)
         .then(res => res.json())
         .then(setCats);
      }, []);
    
      function handleAdoptCat(id) {
        setCats(cats.filter((cat) => cat.id !== id));
      }

      function handleNewCat(freshBatchCat) {
        setCats([...cats, freshBatchCat]);
      }

      const catElements = cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} handleAdoptCat={handleAdoptCat} />
      ))

    return (
        <div id="cat-collection" className="ui grid container" >
            <CatForm handleNewCat={handleNewCat} />
            {catElements}
        </div>
    )
}

export default CatContainer;