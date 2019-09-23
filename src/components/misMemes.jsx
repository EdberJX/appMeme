import React, {Component} from 'react';


export default class MisMomos extends Component{
    
    
    
    render(){
        const { meme } = this.props
      
        if(meme){
        return(
            <div>
                <img src={meme} alt="meme"/>
                <a className="waves-effect waves-light btn-small green accent-3" href={meme}><i className="material-icons left">file_download</i></a>
            </div>
            
        )
        }else{
            return <div></div>
        }
    }
}
