import React from "react";
import CatItem from "./CatItem";
import CatCard from "./CatCard";

function CatCollection({ cats }) {
    
    return (
        <div>
            <h2>Our Cats</h2>
            <ul>
                {cats.map((cat) => (
                    <CatCard key={cat.id} cat={cat} />
                ))}
            </ul>
        </div>
    );
}

export default CatCollection;