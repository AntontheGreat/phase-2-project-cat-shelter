import React from "react";

function CatCardFront({ cat }) {
    return (
        <div>
            <h3>{cat.name}</h3>
            <img className="minCatTile" src={cat.image} alt="CatImage" />
        </div>
    )
}

export default CatCardFront;