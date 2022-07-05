import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
    return(
        <nav>
            <ul className="liste">
                <li className="items"><Link to="/">Home</Link></li>
                <li className="items">Collection</li>
                <li className="items">profil</li>
            </ul>
            <button className="btn">Boutton</button>
        </nav>
    )
}