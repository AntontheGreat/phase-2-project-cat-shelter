import React, { useState } from "react";
import CatCardFront from "./CatCardFront";
import CatCardBack from "./CatCardBack";

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