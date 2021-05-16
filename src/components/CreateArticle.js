import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import Global from '../Global';

// Validaciones formularios y alertas

class CreateArticle extends Component{

  titleRef = React.createRef();
  descriptionRef = React.createRef();

  state = {
    article: {},
    status: null
  }

  changeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        description: this.descriptionRef.current.value
      }
    })
  }

  saveArticle = (e) => {
    e.preventDefault();

    // Rellenar state con formulario
    this.changeState();
  }

  render(){
    return(
      <div className="center">
        <section id="content">
          <h1 className="subheader">Crear Artículo</h1>

          <form className="mid-form" onSubmit={this.saveArticle}>

            <div className="form-group">
              <label htmlFor="title">Titulo</label>
              <input type="text" name="title" ref={this.titleRef} onChange={this.onChangeState}/>
            </div>

            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <input type="text" name="title" ref={this.descriptionRef} onChange={this.onChangeState}/>
            </div>

            <div className="form-group">
              <label htmlFor="file0">Imagen</label>
              <input type="file" name="file0"/>
            </div>
            
            <input type="submit" value="Guardar" className="btn btn-success" />
          </form>

        </section>
        <Sidebar/>
      </div>
    );
  }
}

export default CreateArticle;