import React from "react";


    // let today = new Date();
    // let dd = String(today.getDate()).padStart(2, '0');
    // let mm = String(today.getMonth() + 1).padStart(2, '0');
    // let yyyy = today.getFullYear();

    // const time = yyyy + '-' + mm + '-' + dd;  


export default function NasaTime ( props ){

    const { date } = props;

    return (
        <div>
          <h2>{ date }</h2>    
        </div>
    )

};