import React, { useState } from "react";
import CatCardBack from "./CatCardBack";
import CatCardFront from "./CatCardFront";

function CatCard({ cat }) {
    
    const [showDetails, setShowDetails] = useState(false);

    function toggleCatDetails() {
        setShowDetails(!showDetails)
    }

    return (
        <div className="ui eight wide column" onClick={toggleCatDetails}>
            <div className="catTile">
                {showDetails ? <CatCardBack cat={cat} /> : <CatCardFront cat={cat} />}
            </div>
        </div>
    )
}

export default CatCard;