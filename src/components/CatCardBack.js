import React from "react";

function CatCardBack({ cat }) {

    const renderCatDetails=[]

    for (let key in cat) {
        if (key !== "name" && key !== "image")
        renderCatDetails.push(<p>{`${key}: ${cat[key]}`}</p>)
    }

    return (
        <div>
            <ul>
                {renderCatDetails}
            </ul>
        </div>
    )
}

export default CatCardBack;