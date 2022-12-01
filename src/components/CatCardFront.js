import React from "react";

function CatCardFront({ cat, onUpdateCat, onDeleteCat }) {
    const { breed, id, adopted } = cat;

    function handleDelete() {
        fetch(`http://localhost:3000/cats${id}`, {
            method: "DELETE"
        })
        onDeleteCat(id)
    }


    return (
        <div>
            <h3>{cat.name}</h3>
            <img className="minCatTile" src={cat.image} alt="CatImage" />
            {<button onClick={handleDelete}>Adopt</button>}
        </div>
    )
}

export default CatCardFront;