import React from "react";
import howdy from "../assets/howdyCat.JPG";
// import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="nav">
            <span className="headerText">Cat Shelter</span>
            <div className="twirlyCat">
                <img src={howdy} className="appLogo" alt="kitty" />
            </div>
            <span className="normalText">
                A React App for Furry Feline Friends
            </span>
        </div>
    );
};

export default NavBar;