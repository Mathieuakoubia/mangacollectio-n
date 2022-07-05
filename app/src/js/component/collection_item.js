import React, {useState,useEffect} from "react";
import "@css/collectionItem.scss";
import tomeNaruto from "@assets/Naruto_tome_1.jpg"

export default function collection_item(){
    return(
        <div class="collection-container">
            <img src={tomeNaruto} alt="couverture manga" />
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

// const AxiosClientManga = axios.create({
//     baseURL: "http://localhost:8080/api/manga",
// } )

// export const createManga = async (url) => {
// let res = await AxiosClientManga.get(url)
// return { data: res.data, status: res.status, statusText: res.statusText }
// }

// Pour utiliser la fonction :
// createManga( "/url" )
// Cette fonction déclenchera une requete à l'url : http://localhost:8080/api/manga/url