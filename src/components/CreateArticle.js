import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import Global from '../Global';

// Validaciones formularios y alertas

class CreateArticle extends Component{
  render(){
    return(
      <div className="center">
        <section id="content">
          <h1 className="subheader">Crear Artículo</h1>
        </section>
        <Sidebar/>
      </div>
    );
  }
}

export default CreateArticle;