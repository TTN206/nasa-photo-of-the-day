import React from "react";
import Photo from "./Photo";

export default function Title ( props ){
    
    const { state } = props;
    console.log(state);

    return (
        <div>
            <h1>{ state.title }</h1>
            <Photo state = { state } />
        </div>
    )
};
