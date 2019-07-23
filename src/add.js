import React from "react";
import "./App.css";

const Add=({movies=[],onaddmovie=()=>{}})=>{
return (<div>
      <div className="new-movie-card" onClick={()=>onaddmovie({
                id: Math.random(),
                title: prompt('movie title: '),
                rating: Number(prompt('movie rating: ')),
                year: Number(prompt('movie year: '))})}>+</div>
    </div>)
    }
    export default Add
  