import React from "react";

function CatCardFront({ cat, isAdopted }) {
    return (
        <div>
            <h3>{cat.name}</h3>
            <img className="minCatTile" src={cat.image} alt="CatImage" />
            {isAdopted ? null : <button>Adopt</button>}
        </div>
    )
}

export default CatCardFront;