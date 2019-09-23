import React, { Component } from "react";
import Meme from './meme';

export default class Memes extends Component {
  
  

  render() {
    const {memes, handleMeme} = this.props
  
 
    return (<div  className="row container">
          {memes.map(meme=>(
           
            <div className="col s12 m6 " key={meme.id}>
            <Meme meme={meme} handleMeme={handleMeme}/>
             </div>
            
           
          ))}
    </div>
    )}
    }
//  <Meme id={meme[0].id} name={meme[0].name} url={meme[0].url}/>
/**
 * 
 */
