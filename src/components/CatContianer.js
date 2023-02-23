import React from "react";
import CatCard from "./CatCard";

function CatContainer({ cats }) {
    return (
        <div id="cat-collection" className="ui grid container" >
            {cats.map((cat) => (
                <CatCard key={cat.id} cat={cat} />
            ))}
        </div>
    )
}

export default CatContainer;