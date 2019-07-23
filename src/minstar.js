import React from "react";
import "./App.css";
import Star from "./start"
function MStar({mstar,onChanging=()=>[]}){

    return <div className="rating-filter">
   <span className="rating-filter-text" >Minimum rating</span>
    <Star star={mstar} onChangeRating={(newRating) =>{onChanging(newRating)}}/>
  </div>
}
export default MStar;