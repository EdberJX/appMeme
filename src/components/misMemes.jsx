import React, {Component} from 'react';


export default class MisMomos extends Component{
    
    
    
    render(){
        const { memel } = this.props
      
        if(memel){
        return(
            <img src={memel} alt="meme"/>
        )
        }else{
            return <div></div>
        }
    }
}
