import React, { Component } from "react";
import BoxCount from "./box_count";
import { Link } from "react-router-dom";
import sweetalert from "sweetalert";
import axios from 'axios'
//import request  from'request-promise-native'
//const request = require('request-promise-native');

import MisMemes from './misMemes'

const text = [];
export default class Form extends Component {
  componentDidMount() {

    const { id } = this.props.location.state;
    this.setState({
      template_id: id,
      
    });
  }
  state = {
    template_id: "",
    username: "Edberjx",
    password: "edber-26",
    newMeme:""
    };
    
    
  creaMeme = async e => {
    e.preventDefault()
     
      
    const {template_id, username, password } = this.state;
    const text0 =  text[0];
    let text1 = "";
   
    if(text[1]){
      text1=text[1]
    }
    
      

    const addMeme = {
        template_id,
        username,
        password,
        text0,
        text1
      }
    
    this.createMeme(addMeme);
  };
  createMeme= async (meme)=>{
   // this.setState({memel:"https://i.imgflip.com/3bbg9t.jpg"})
   const {template_id, username, password , text0, text1, } = meme;
   
   /*const captions = [{text:"hola"},{text:"hola"},{text:"hola"},{text:"hola"}];

        const params = {
          template_id,
          username,
          password,
          boxes: captions.map(caption => ({text: caption}))
        }
        const imgflip = ( params) =>
        request(`https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image`, {
          method: 'post',
          qs: params,
          json: true
        }).then(res => res['success'] ? res['data'] : Promise.reject(new Error(res['error_message'])))

        imgflip(params).then(res => res['url'])
     /* const prueba ={
        method: 'POST',
        qs: params,
        url: `https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image`,
      
      }
      axios(prueba)
      .then(res=>{console.log("orueba",res)})*/
   /**/
   
      axios.post(`https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image?template_id=${template_id}&username=${username}&password=${password}&text0=${text0}&text1=${text1}`)
      .then(response=>{
          this.setState({newMeme: response.data.data.url})
         
          sweetalert(
      "Meme Creado exitosamente",
      "Ya puedes verlo",
      "success"
    );
        })
      .catch(err=>{console.log(err)})
     
    }

  cancelMeme = () => {
    sweetalert(
      "Meme cancelado",
      "Se direccionara a la pagina principal",
      "error"
    );
  };
    

  render() {
    const { id, name, url, box_count } = this.props.location.state;
    const ref= `/create/${id}`;
    const { newMeme } = this.state
    const tex = [0];
    for (let i = 1; i < box_count; i++) {
      tex.push(i);
    }
  

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
            <a href={ref}
              onClick={this.creaMeme}
              className="waves-effect waves-light btn-small purple lighten-2"
            >
              <i className="material-icons left">send</i>
            </a>
            <Link
              className="waves-effect waves-light btn-small red"
              to="/"
              onClick={this.cancelMeme}
            >
              <i className="material-icons left">block</i>
            </Link>
          </form> 
         
               <MisMemes meme={newMeme} />
             
        </div>
      </div>
    );
  }
}
