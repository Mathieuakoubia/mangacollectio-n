import React, {useState,useEffect} from "react";
import Collection from '../component/collection_item';
import "@css/collection.scss";

// const test = [{title : 1}, {title : 2}, {title : 3}];s

export default function Home(){
    return(
        <div id="collection-container">
            <Collection />
        </div>
    )
}