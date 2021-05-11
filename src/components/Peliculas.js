import React, {Component} from 'react';
import MensajeEstatico from './MensajeEstatico'

class Peliculas extends Component{
    render(){
        return(
            <div>
                <h4>I'm the Peliculas component</h4>
                <MensajeEstatico/>
            </div>
        )
    }
}

export default Peliculas;