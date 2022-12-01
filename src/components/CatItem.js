import React from "react";

function CatItem({ cat, onUpdateCat, onDeleteCat }) {
    const { breed, id, adopted } = cat

    function handleAdopted(e) {

    }
    
    function handleDelete() {
        
    }

    return (
        <li>
            <strong>{breed}</strong>
            <label>
                Adopted?
                <input
                    type="checkbox"
                    onChange={handleAdopted}
                    checked={adopted}
                />
            </label>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}


export default CatItem;