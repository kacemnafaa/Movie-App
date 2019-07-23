import React from "react";
import "./App.css";
// function Star(props){

//     return <div> 
//         for(let i=0;i<=5;i++){
//     <div className="movie-rating">{props.star}</div>
//     }
//   </div>
// }
// export default Star;
const Star = ({star,onChangeRating=()=>[]}) => {
    let starsHtml = []
    for(let i = 0; i < 5; i++) {
        if(i < star) {
            starsHtml.push(<span onClick={() => onChangeRating(i+1)} key={i}>★</span>)
        }
        else {
            starsHtml.push(<span onClick={() => onChangeRating(i+1)} key={i}>☆</span>)
        }
    }
    return (
        <div className="movie-rating">{starsHtml}</div>
    )
}

export default Star