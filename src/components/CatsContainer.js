import React, { useEffect, useState } from "react";
import CatCard from "./CatCard";

function CatContainer() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/cats')
        .then((r) => r.json())
        .then((cats) => setCats(cats))
    }, []);

    function handleDeleteClick(id) {
        fetch(`http://localhost:3000/cats/${id}`, {
            method: 'DELETE',
        })
            .then((r) => r.json())
            .then(() => {
                const updatedCats = cats.filter(cat => cat.id === id);
                setCats(updatedCats);
        });
    }

    const catCards = cats.map((cat) => (
        <CatCard
            cat={cat}
            key={cat.id}
            id={cat.id}
            name={cat.name}
            age={cat.age}
            weight={cat.weight}
            image={cat.image}
            onDeleteClick={handleDeleteClick}
            />
    ));

    return (
        <div className="ui grid container">
            {catCards}
        </div>
    )
}

export default CatContainer;