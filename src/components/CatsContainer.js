import React from "react";
import CatCard from "./CatCard";

function CatsContainer({ cat }) {

    const renderCats = cat.map((cat, index) =>
        <CatCard key={index} cat={cat} />)

    return (
        <div className="ui grid container">
            {renderCats}
        </div>
    )
}

export default CatsContainer;