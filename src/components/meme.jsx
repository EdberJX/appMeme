import React from "react";
import { Link } from 'react-router-dom';

export default props => {
  
  const { id,name, url } = props.meme;

  return (
    <div className="grids">
        <div className="card ">
          <div className="card-image">
            <img src={url} alt={id}/>
            <span className="card-title">{name}</span>
            
          </div>
          <div className="card-content">

          <Link 
            className="waves-effect waves-light btn-small"
            to={{
            pathname:"/create/"+id,
            state: props.meme
            }} 
            >
            Creatememe
            </Link>
          </div>
          
          
        </div>
        </div>
     
  );
};
