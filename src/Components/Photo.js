import React from "react";
import NasaTime from "./NasaTime";
import Explanation from "./Explanation";

export default function Photo ( props ){
    
    const { state } = props;

    return (
        <div>
            <img src = { state.url } />
            <NasaTime date = { state.date } />
            <Explanation info = { state.explanation } />
        </div>
    )
 };