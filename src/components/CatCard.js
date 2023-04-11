import React, { useState } from "react";
import CatCardBack from "./CatCardBack";
import CatCardFront from "./CatCardFront";

function CatCard({ cat, handleAdoptCat }) {
    const [showDetails, setShowDetails] = useState(false);

    function toggleCatDetails() {
        setShowDetails(!showDetails)
    }

    return (
        <div className="ui eight wide column">
            <div className="catTile">
                <button onClick={toggleCatDetails}>View Details</button>
                {showDetails ? <CatCardBack cat={cat} /> : <CatCardFront cat={cat} handleAdoptCat={handleAdoptCat} id={cat} />}
            </div>
        </div>
    )
}

export default CatCard;