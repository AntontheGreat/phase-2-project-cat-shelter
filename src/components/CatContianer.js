import React from "react";
import CatCard from "./CatCard";
import CatForm from "./CatForm";

function CatContainer({ cats, onAdoptCat, handleNewCat }) {
    return (
        <div id="cat-collection" className="ui grid container" >
            <CatForm handleNewCat={handleNewCat} />
            {cats.map((cat) => (
                <CatCard key={cat.id} cat={cat} onAdoptCat={onAdoptCat} />
            ))}
        </div>
    )
}

export default CatContainer;