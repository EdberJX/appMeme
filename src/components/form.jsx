import React, { Component } from "react";
import BoxCount from "./box_count";
import { Link } from "react-router-dom";
import sweetalert from "sweetalert";

import MisMemes from './misMemes'

const text = [];
export default class Form extends Component {
  componentDidMount() {
    console.log(this.props.location.state);
    const { id } = this.props.location.state;
    this.setState({
      template_id: id,
      
    });
  }
  state = {
    template_id: "",
    username: "Edberjx",
    password: "edber-26",
    memes:["https://i.imgflip.com/3bbg9t.jpg","https://i.imgflip.com/3bbg9t.jpg"],
    memel:""
    
    
  };
 
  creaMeme = async e => {
    e.preventDefault()
     
      
    const {template_id, username, password } = this.state;
    const text0 =  text[0];
    let text1 = "";
    let text2 = "";
    let text3 = "";
    if(text[1]){
      text1=text[1]
    }
    if(text[2]){
      text2=text[2]
    }
    if(text[3]){
      text3=text[3]
    }
      

    const newMeme = {params: {
        template_id,
        username,
        password,
        text0,
        text1,
        text2,
        text3
      }}
    
    // this.createMeme(newMeme);
  };
  createMeme= async (meme)=>{
    this.setState({memel:"https://i.imgflip.com/3bbg9t.jpg"})
   const {template_id, username, password , text0, text1, text3, text2} = meme.params;
   console.log(text0)
   const min = this.state.memes;
  await min.push("https://i.imgflip.com/3bbg9t.jpg")
   console.log("Crea",min)
   this.setState({memes: [...this.state.memes],min})
  
   /* axios({
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image',
      data: meme,
   }).then(response=>{console.log(response)})
   .catch(err=>{console.log(err)})*/
   
      /*axios.post(`https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image?template_id=${template_id}&username=${username}&password=${password}&text0=${text0}&text1=${text1}&text2=${text2}&text3=${text3}`)
      .then(response=>{
          this.setState({memes: response.data.data.url})
          this.setState({memes: this.state.memes[...],response.data.data.url})
          sweetalert(
      "Meme Creado exitosamente",
      "Visita la seccion mis memes para ver el meme creado",
      "success"
    );
        })
      .catch(err=>{console.log(err)})*/
     
    }
  cancelMeme = () => {
    sweetalert(
      "Registro guardado",
      "El Gasto se guardó correctamente",
      "error"
    );
  };
  imprimirmeme=()=>{
    let { memes } = this.state
    console.log("mem",memes[0])
    if(memes[0]){
      memes.map(momo=>{
          this.viweMeme(momo)
      })
    }
  }
  viweMeme = (momo) =>{
    console.log("el momo",momo)
      return <img src={momo} alt={momo} />
   
      
    
    }
  
  

  render() {
    const { id, name, url, box_count } = this.props.location.state;
    const { memes, memel } = this.state
    const tex = [0];
    for (let i = 1; i < box_count; i++) {
      tex.push(i);
    }
    console.log(tex);

    return (
      <div className="container grids">
        <div>
          <img src={url} alt={name} id={id} />
        </div>
        <div>
          <form className="col s8 container">
            <div className="row">
              <div className="input-field col s8">
                <div
                  disabled
                  id="disabled"
                  type="text"
                  className="purple-text text-lighten-2 ol"
                >
                  {name}
                </div>
              </div>

              {tex.map(position => (
                <div key={Math.random()}>
                  <BoxCount position={position} tex={text} />
                </div>
              ))}
            </div>
            <a
              onClick={this.creaMeme}
              className="waves-effect waves-light btn-small purple lighten-2"
            >
              <i className="material-icons left">send</i>
            </a>
            <Link
              className="waves-effect waves-light btn-small red"
             
              onClick={this.cancelMeme}
            >
              <i className="material-icons left">block</i>
            </Link>
          </form> 
         
               <MisMemes memel={memel} memes={memes}/>
             
        </div>
      </div>
    );
  }
}
//{this.imprimirmeme()}