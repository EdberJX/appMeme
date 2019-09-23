import React, { Component } from "react";
import Meme from './meme';

export default class Memes extends Component {
  
  

  render() {
    const {memes} = this.props
  
 
    return (<div  className="row container">
          {memes.map(meme=>(
           
            <div className="col s12 m4 " key={meme.id}>
            <Meme meme={meme}/>
             </div>
            
           
          ))}
    </div>
    )}
    }
