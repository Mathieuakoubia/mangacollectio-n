import React, {useState,useEffect} from "react";
import "@css/manga.scss";
import tomeNaruto from "@assets/Naruto_tome_1.jpg"
import { Link } from "react-router-dom";

export default function manga(){
    return(
        <div class="manga-container">
            <img src={tomeNaruto} alt="couverture manga" />
            <div class="manga-description">
                <h3>Naruto</h3>
                <ul>
                    <li>tome 1</li>
                    <li>masashi kishimoto</li>
                    <li>2000</li>
                </ul>
                <Link to="">supprimer</Link>
            </div>
        </div>
    )
}

//call API to get manga
const manga = () => {
    const [manga, setManga] = useState([]);
    useEffect(() => {
        fetch("https://api.jikan.moe/v3/manga/1")
        .then(res => res.json())
        .then(data => setManga(data))
    }, []);
