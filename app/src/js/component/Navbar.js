import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "@css/Navbar.scss";

export default function Navbar(){
    return(
        <nav>
            <ul className="liste">
                <li className="items"><Link to="/">Home</Link></li>
                <li className="items"><Link to="/collection">Collection</Link></li>
                <li className="items"><Link to="/profil">profil</Link></li>
            </ul>
            <button className="btn">Boutton</button>
        </nav>
    )
}