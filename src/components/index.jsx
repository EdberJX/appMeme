import React, { Component } from "react";
import Memes from './memes'
import MisMemes from './misMemes'
import axios from "axios";

export default class Index extends Component {
  state = {
    memes: [],
    memeSelected: "",
    misMemes: []
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
        
        this.setState({ memes});
      } catch (error) {
          console.log(error)
        
  };
} 

  handleMeme = (idMeme)=>{
    //this.setState({memeSelected:idMeme})
    console.log("el ide men",idMeme)
  } 
    
renderMeme = (memes)=>{

  if(memes[0]){
  return (
    <div> 
  <Memes memes={memes} addMeme={this.addMeme} handleMeme={this.handleMeme}/></div>
   
  )
}}

  render() {
      const { memes } = this.state
    return (
       <div>{this.renderMeme(memes)}</div> 
    )
  }
}