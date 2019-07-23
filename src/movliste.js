import React from "react";
import "./App.css";
import Movcard from "./movieCard";

function Movliste(props)
 
{
    const movlist=props.movlist  
return  <div className="movie-list">
    {
         movlist.map((el,i)=> <Movcard key={el.id} mov={el} />)
    }
        </div>
       
        }
        
        export default Movliste;