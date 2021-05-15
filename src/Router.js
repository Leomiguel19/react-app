import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Peliculas from './components/Peliculas';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Error from './components/Error';

class Router extends Component{
  render(){
    return(
      <BrowserRouter>

        {/* CONFIGURAR RUTAS Y PÁGINAS */}
        <Switch>
          <Route exact path="/" component={Peliculas}/>
          <Route exact path="/segunda-ruta" component={MiComponente}/>
          <Route exact path="/ruta-prueba" component={SeccionPruebas}/>

          <Route exact path="/pagina-1" render = {() => (
            <React.Fragment>
              <h1>Hello world from route: PAGINA 1</h1>
              <MiComponente saludo="Hello my friend"/>
            </React.Fragment>
          )}/>
                    
          <Route component={Error}/>
        </Switch>

      </BrowserRouter>
    );
  }
}

export default Router;