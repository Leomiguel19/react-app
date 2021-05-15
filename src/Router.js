import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Peliculas from './components/Peliculas';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Error from './components/Error';
// Importar componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
//import Peliculas from './components/Peliculas';

class Router extends Component {
  render() {
    let buttonString = "Ver más";
    return (
      <BrowserRouter>

        <Header />

        {/* CONFIGURAR RUTAS Y PÁGINAS */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/segunda-ruta" component={MiComponente} />
          <Route exact path="/ruta-prueba" component={SeccionPruebas} />

          <Route exact path="/pagina-1" render={() => (
            <React.Fragment>
              <h1>Hello world from route: PAGINA 1</h1>
              <MiComponente saludo="Hello my friend" />
            </React.Fragment>
          )} />

          <Route exact path="/pruebas/:nombre/:apellido?" render={(props) => {
            let nombre = props.match.params.nombre;
            let apellido = props.match.params.apellido;

            return (
              <div id="content">
                <h1 className="subheader">Página de pruebas</h1>
                <h2>
                  {nombre && !apellido &&
                    <div>
                      {nombre}
                    </div>
                  }
                  {nombre && apellido &&
                    <div>
                      {nombre} {apellido}
                    </div>
                  }
                </h2>
              </div>
            );
          }
          } />

          <Route component={Error} />
        </Switch>

        <div className="clearfix"></div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;