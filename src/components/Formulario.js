import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {
  render() {
    return (
      <div id="formulario">
        <Slider
          title="Formulario"
          size="slider-small"
        />
        <div className="center">
          <div id="content">
            {/*Listado de artículos que vendrán de la API rest de node*/}
          </div>
          
          <Sidebar/>

        </div>
      </div>
    );
  }
}

export default Formulario;