import React from "react";
import CatCard from "./CatCard";

function CatsContainer({ cat, onDeleteCat }) {

    const renderCats = cat.map((cat, index) =>
        <CatCard key={index} cat={cat} onDeleteCat={onDeleteCat} />)

    return (
        <div className="ui grid container">
            {renderCats}
        </div>
    )
}

export default CatsContainer;