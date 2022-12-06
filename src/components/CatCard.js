import React, { useState } from "react";
import CatCardBack from "./CatCardBack";
import CatCardFront from "./CatCardFront";

function CatCard({ cat, id, name, age, weight, image, onDeleteClick }) {
    // const { id } = cat;
    
    const [showDetails, setShowDetails] = useState(false);

    function toggleCatDetails() {
        setShowDetails(!showDetails)
    }

    function handleDeleteClick() {
        onDeleteClick(id);
    }

    return (
        <div className="ui eight wide column" onClick={toggleCatDetails}>
            <div className="catTile">
                {showDetails ? <CatCardBack cat={cat} age={age} weight={weight} image={image} /> : <CatCardFront key={cat.id} name={cat.name} cat={cat} onDeleteClick={handleDeleteClick} />}
            </div>
        </div>
    )
}

export default CatCard;