import React from 'react';
import Form from './components/form';
import NavBar from './components/navbar';
import Index from './components/index';
import MisMomos from './components/misMemes';

import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


 export default class App extends React.Component{
  

   render(){
         return (
            <Router>
               <NavBar/>
               <Route exact path='/' component={Index}></Route>
               <Route path="/mismomos" component={MisMomos}></Route>
               <Route path="/create/:id" component={Form}></Route>
               
            </Router>
    
  );
   }
  
}

