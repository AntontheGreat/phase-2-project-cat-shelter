import React, { useState } from "react";

function CatForm({ onAddCat }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(event) {
        event.preventDefault()
        const catObj = {
            name,
            image,
        }

        fetch("http://localhost:3000/cats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(catObj),
        })
            .then(r => r.json())
            .then(data => onAddCat(data.cat))
    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="image">Image</label>
                <input type="text" id="image" value={image} onChange={e => setImage(e.target.value)} />
                <button type="submit">Add Pet</button>
            </form>
        </div>
    )        
}

export default CatForm;