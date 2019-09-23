import React from 'react';
import { Link } from "react-router-dom";

export default ()=>{
    return (
        <div >
        <nav className="purple">
        <div className="nav-wrapper container ">
          <Link to="/" className="brand-logo">Logo</Link>
          <Link  to="#"data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/mismomos">Mis Memes</Link></li>
            
          </ul>
        </div>
      </nav>
    
      <ul className="sidenav" id="mobile-demo">
      <li><Link to="/mismomos">Mis Memes</Link></li>
      </ul>
      </div>
)}