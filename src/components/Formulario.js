import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {

  nombreRef = React.createRef();
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  generoHombreRef = React.createRef();
  generoMujerRef = React.createRef();
  generoOtroeRef = React.createRef();
  
  state = {
    user: {}
  }
  
  recibirFormulario = (e) => {
    e.preventDefault()


    let genero = 'hombre';

    if(this.generoHombreRef.current.checked){
      genero = this.generoHombreRef.current.value;
    }else if(this.generoMujerRef.current.checked){
      genero = this.generoMujerRef.current.value;
    }else{
      genero = this.generoOtroeRef.current.value;
    }


    let user = {
      nombre: this.nombreRef.current.value,
      apellidos: this.apellidosRef.current.value,
      bio: this.bioRef.current.value,
      genero: genero
    }

    this.setState({
      user: user
    })

    console.log("Formulario enviado !!")
    console.log(user)
  }

  render() {
    if(this.state.user.nombre){
      var user = this.state.user;
    }

    return (
      <div id="formulario">
        <div className="center">
          <div id="content">
            <h1 className="subheader">Formulario</h1>
            {/* Mostrar los datos del formulario */}
            {this.state.user.nombre &&
              <div>
                <p>Nombre:  <strong>{user.nombre}</strong></p>
                <p>apellidos:  <strong>{user.apellidos}</strong></p>
                <p>bio:  <strong>{user.bio}</strong></p>
                <p>genero:  <strong>{user.genero}</strong></p>
              </div>
            }
            {/* Crear un formulario */}
            <form className="mid-form" onChange={this.recibirFormulario}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nombreRef} />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.apellidosRef} />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea name="bio" ref={this.bioRef}></textarea>
              </div>

              <div className="form-group radibuttons">
                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef}/> Hombre
                <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef}/> Mujer
                <input type="radio" name="genero" value="otro" ref={this.generoOtroeRef}/> Otro
              </div>

              <div className="clearfix"></div>

              <input type="submit" value="Enviar" className="btn btn-success" />

            </form>
          </div>

          <Sidebar />

        </div>
      </div>
    );
  }
}

export default Formulario;