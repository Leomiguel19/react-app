import React, { Component } from 'react';

import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {

  contador = 0;

  /*constructor(props){
    super(props);

    this.state = {
      contador: 0
    };
  }*/

  state = {
    contador: 0
  }

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

  sumar = (e)=> {
    this.setState({
      contador: (this.state.contador +1)
    });
  }

  restar = (e) => {
    this.setState({
      contador: (this.state.contador -1)
    });
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

        <h2 className="subheader">Estado</h2>
        <p>
          Contado: {this.state.contador}
        </p>
        <p>
          <input type="button" value="Sumar" onClick={this.sumar} />
          <input type="button" value="Restar" onClick={this.restar} />
        </p>
      </section>
    );
  }
}

export default SeccionPruebas;