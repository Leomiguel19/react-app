import React, { Component } from 'react';

import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {

  //let HelloWorld = () => {}
  HelloWorld(name, age) {
    let presentation = (
      <div>
        <h2>Hi, i'm {name}</h2>
        <h2>i'm {age} years old</h2>
      </div>
    );
    return presentation;
  }

  render() {
    let name = "Leonardo Guilarte";

    return (
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <p>
          Hi there! Welcome to mi first project in react
        </p>

        {this.HelloWorld(name, 22)}


        <section className="components">
          <MiComponente />
          <Peliculas />
        </section>
      </section>
    );
  }
}

export default SeccionPruebas;