import React, {useState,useEffect} from "react";
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav>
            <ul className="liste">
                <li className="items">Home</li>
                <li className="items">Collection</li>
                <li className="items">profil</li>
            </ul>
            <button className="btn">Boutton</button>
        </nav>
    )
}