import React, { useState } from "react";

function CatForm({ onAddCat, setCats }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(event) {
        event.preventDefault()
        const formData = {
            cat: { name, age, weight, image }
        }
        fetch("http://localhost:3000/cats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then(data => {
                console.log(data.cat)
                onAddCat(data.cat)})
    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />

                <label htmlFor="age">Age:</label>
                <input type="text" id="age" value={age} onChange={e => setAge(e.target.value)} />

                <label htmlFor="weight">Weight:</label>
                <input type="text" id="weight" value={weight} onChange={e => setWeight(e.target.value)} />

                <label htmlFor="image">Image</label>
                <input type="text" id="image" value={image} onChange={e => setImage(e.target.value)} />

                <button type="submit">Add Cat</button>
            </form>
        </div>
    )        
}

export default CatForm;