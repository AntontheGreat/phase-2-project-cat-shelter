import React from "react";
import CatCard from "./CatCard";

function CatContainer({ cats }) {

    // function handleDeleteClick(id) {
    //     fetch(`http://localhost:3000/cats/${id}`, {
    //         method: 'DELETE',
    //     })
    //         .then((r) => r.json())
    //         .then(() => {
    //             const updatedCats = cats.filter(cat => cat.id === id);
    //             setCats(updatedCats);
    //     });
    // }

    // const catCards = cats.map((cat, index) => (
    //     <CatCard
    //         cat={cat}
    //         key={cat.id}
    //         id={cat.id}
    //         name={cat.name}
    //         age={cat.age}
    //         weight={cat.weight}
    //         image={cat.image}
    //         onDeleteClick={handleDeleteClick}
    //         />
    // ));

    return (
        <div id="cat-collection" className="ui grid container">
            {cats.map((cat) => (
                <CatCard cat={cat} />
            ))}
        </div>
    );
}

export default CatContainer;