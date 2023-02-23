import React from "react";

function CatCardBack({ cat }) {

    return (
        <div className="cardBack">
            <p>Age: {cat.age}</p>
            <p>Weight: {cat.weight}</p>
            <p>Gender: {cat.gender}</p>
        </div>
    )
}

export default CatCardBack;

// age, weight, gender, is adopted