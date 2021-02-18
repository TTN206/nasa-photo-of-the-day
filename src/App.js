import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./Components/Constants";
import Title from "./Components/Title";

export default function App() {

  const [ state, setState ] = useState( [] );
  // console.log(state);
  // console.log(setState);
    
  useEffect(( ) => {
    axios
      .get( `${BASE_URL}/planetary/apod?api_key=${API_KEY}` )
      .then(( res ) => {
        setState( res.data, "You think this is a game?!?!?" )
      })
      .catch(( err ) => {
        console.log( err, "Houston, we got problems..." )
      })
  }, [] );

  return (
    <div>
      <Title state = { state } />
    </div>
  );
}
