import React from "react";
import howdy from "../assets/howdyCat.JPG";

function Home() {
    return (
        <div id="home">
            <h1>
            <span className="headerText">Cat Shelter</span>
            <div className="twirlyCat">
                <img src={howdy} className="appLogo" alt="kitty" />
            </div>
            <span className="normalText">
                A React App for Furry Feline Friends
            </span>
            </h1>
        </div>
    );
}

export default Home;