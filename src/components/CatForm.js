import React, { useState } from "react";

const API = "http://localhost:3000/cats"

function CatForm({ handleNewCat }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState(0);
    const [image, setImage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        let newCat = {
            name: name,
            age: age,
            gender: gender,
            weight: weight,
            image: image
        }

        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCat),
        })
            .then(res => res.json())
            .then(freshBatchCat => handleNewCat(freshBatchCat))
    }

    return (
        <div className="cat-form">
            <h3>Put up for adoption</h3>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />

                <label htmlFor="age">Gender:</label>
                <input type="text" id="gender" placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)} />

                <label htmlFor="weight">Weight:</label>
                <input type="number" id="weight" placeholder="Weight" value={weight} onChange={e => setWeight(e.target.value)} />

                <label htmlFor="image">Image</label>
                <input type="text" id="image" placeholder="Image" value={image} onChange={e => setImage(e.target.value)} />

                <button type="submit">Add Cat</button>
            </form>
        </div>
    )        
}

export default CatForm;