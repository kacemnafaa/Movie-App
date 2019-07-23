import React from "react";
import Star from "./start";
import "./App.css";


function Movcard({mov})

{
    // const mov=props.mov
return (<div className="movie-card">
    <Star star={mov.rating}/>
 
<div
  className="movie-image"
  style={{
    backgroundImage:
     `url('${mov.image}')`
  }}
/>
<div className="movie-description">{mov.title}-{mov.year}</div>
</div>)
}
export default Movcard;