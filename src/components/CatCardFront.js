import React from "react";

function CatCardFront({ cat, onDeleteClick }) {
    const { id } = cat;

    function handleDeleteClick() {
        onDeleteClick(id);
    }

    return (
        <div>
            <h3>{cat.name}</h3>
            <img className="minCatTile" src={cat.image} alt="CatImage" />
            <button onClick={handleDeleteClick}>Adopt</button>
        </div>
    )
}

export default CatCardFront;