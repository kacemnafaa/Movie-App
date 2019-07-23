import React, { Component } from 'react';
import Rserche from "./reserche"; 
import Movliste from "./movliste";
import MStar from "./minstar";
import Add from "./add";


import "./App.css";
// const inception = {title: 'Inceptionnnn', rating: 5, image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg', year: 2010}

// const shawshank = {
//     title: 'Shawshank Redeption',
//     year: 1994,
//     rating: 5
// }
// const tab=[inception,shawshank]
const inception = {title: 'Inception', rating: 5, image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg', year: 2010,id:'Inception'}
const shawshank = {
    title: 'Shawshank Redeption',
    year: 1994,
   image: 'https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL._SY445_.jpg',
    rating: 5,
    id:'shawshank'
}
const joker = {
  title: 'the joker',
  year: 2019,
  image:'https://i.pinimg.com/originals/55/ca/18/55ca184699865df2dc8df814bbec0c39.jpg',
  rating:3,
  id:'joker'
}

const tab=[inception,shawshank,joker]
// const MovieApp = () => 
//   <div className="movie-app">
//   <header className="movie-app-header">
//     <Rserche/>
//     <Star/>
//     </header>
//     <main className="movie-app-main">
//     <Movliste movlist={tab} />
//         <div>
//         <div className="new-movie-card">+</div>
//       </div>
//     </main>
//   </div>


// export default MovieApp;
class MovieApp extends Component {
  constructor(props){
    super(props)
      this.state={
        minRating:"",
        stat:tab,
        filtred:tab,
        keyword:''
          
      }
    }
    
  serach=(keyword)=>{
    this.setState({keyword:this.state.keyword})
   this.setState({filtred:this.state.stat.filter((el,i)=>el.title.toUpperCase().indexOf(keyword.toUpperCase())>-1 && el.rating>=this.state.minRating)})
   
  }
  
 onvisible=(newRating)=>{ 
  this.setState({minRating:newRating})
     this.setState({filtred:this.state.stat.filter((el,i)=>el.rating>=this.state.minRating && el.title.toUpperCase().indexOf(this.state.keyword.toUpperCase())>-1  )})}
 
     addnewmovie=(newmovie)=>{
       
      this.setState({stat:this.state.stat.concat(newmovie)}) 
      
     }
     
    
  
  render() {
    return (
     <div className="movie-app">
  <header className="movie-app-header">
  <Rserche shername={(keyword)=>this.serach(keyword)} />
  <MStar mstar={this.state.minRating} onChanging={(newRating)=> this.onvisible(newRating)}/>
  </header>
  <main className="movie-app-main"> 
  <Movliste movlist={this.state.filtred}  />
      <Add onaddmovie={(newmovie)=>this.addnewmovie(newmovie)}/>
  </main>
</div>
    );
  }
}

export default MovieApp;