import React, { Component } from "react";
import Memes from './memes'

import axios from "axios";

export default class Index extends Component {
  state = {
    memes: []
    

  };
  addMeme=(newMeme)=>{
    this.setState({
      misMemes: [...this.state.misMemes]+newMeme
    })
  }
   UNSAFE_componentWillMount() {
     this.getMemes();
  }

  getMemes = async () => {
      try {
        const { data } = await axios.get("https://api.imgflip.com/get_memes");
        const memes = data.data.memes;
         
        this.setState({ memes: memes.filter(meme =>meme.box_count <3)});
      } catch (error) {
          console.log(error)
        
  };
} 

  
    
renderMeme = (memes)=>{

  if(memes[0]){
  return (
    <div> 
  <Memes memes={memes}/></div>
   
  )
}}

  render() {
      const { memes } = this.state
    return (
       <div>{this.renderMeme(memes)}</div> 
    )
  }
}