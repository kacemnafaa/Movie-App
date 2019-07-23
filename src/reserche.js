import React, { Component } from 'react'
import "./App.css";


export default class Rserche extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        //    keyword:""
         }
    }
handelchange=(event)=>{
    this.props.shername(event.target.value)
//   this.setState({keyword:event.target.value} )
  
}
    render() {
        return (
            <div>
                <div className="name-filter">
        <input className="name-filter-text" type="text" onChange={this.handelchange} />
        <input className="name-filter-button" type="button" value="Search" />
      </div>
            </div>
        )
    }
}

// import React, { Component } from 'react';
// class Header extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             keyword:''
//          }
//     }
// handelchange=(event)=>{
//     this.setState({keyword:event.target.value})
//     this.props.searchname(event.target.value)
// }
//     render() { 
//         return ( 
//             <div className='header-container'>
//                 <h1>LOGO</h1>
//                 <input type='text' onChange={this.handelchange} />
//         </div> );
//     }
// }
 
