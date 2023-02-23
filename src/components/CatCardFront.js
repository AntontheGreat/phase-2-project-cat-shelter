import React from "react";

function CatCardFront({ cat, onAdoptCat, id }) {

    function adoptCat() {
        fetch(`http://localhost:3000/cats/${id}`, {method: "DELETE"})
            .then(() => onAdoptCat(id))
    }

    return (
        <div>
            <h3>{cat.name}</h3>
            <img className="minCatTile" src={cat.image} alt="CatImage" />
            <button onClick={adoptCat}>Adopt</button>
        </div>
    )
}

export default CatCardFront;