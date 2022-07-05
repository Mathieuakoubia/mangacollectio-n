import Img from "@assets/img404.jpg";
import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "@css/notFound.scss"

export default function NotFound(){
    return(
        <div id="not-found">
            <img src={Img} />
            <article>
                <h1>En cours</h1>
                <p>En cours de construction</p>
            </article>
        </div>
    )
}