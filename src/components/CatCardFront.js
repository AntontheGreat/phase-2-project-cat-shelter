import React, { useState } from "react";

function CatCardFront({ cat, handleAdoptCat, id }) {
    const [upvotes, setUpvotes] = useState(cat.upvotes);
    const [downvotes, setDownvotes] = useState(cat.downvotes);

    function handleUpvotes() {
        let newCount = upvotes + 1
        setUpvotes(newCount)
    }

    function handleDownvotes() {
        let newCount = downvotes + 1
        setDownvotes(newCount)
    }


    function adoptCat() {
        fetch(`http://localhost:3000/cats/${id}`, {method: "DELETE"})
            .then(() => handleAdoptCat(id))
    }

    return (
        <div>
            <h3>{cat.name}</h3>
            <img className="minCatTile" src={cat.image} alt="CatImage" />
            <button onClick={handleUpvotes}>{upvotes}👍</button> <button onClick={handleDownvotes}>{downvotes}👎</button> <button onClick={adoptCat}>Adopt</button>
        </div>
    )
}

export default CatCardFront;