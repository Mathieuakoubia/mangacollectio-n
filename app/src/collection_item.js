import React, {useState,useEffect} from "react";
import "./collection.css"

export default function collection_item(){
    return(
        <div class="collection-container">
            <img src="img.jpg" alt="couverture manga" />
            <div class="description">
                <h3>Title</h3>
                <ul>
                    <li>nb tome</li>
                    <li>auteur</li>
                    <li>date</li>
                </ul>
                <a href="">voir plus</a>
            </div>
        </div>
    )
}