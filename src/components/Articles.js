import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';

import Global from '../Global';
import imageDefault from '../assets/images/logo.png';
class Articles extends Component {

  url = Global.url;

  state = {
    articles: [],
    status: null
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    axios.get(this.url+"articles")
      .then(res => {

        this.setState({
          articles: res.data.articles,
          status: 'success'
        })
        console.log(this.state)
      })
  }

  render() {
    if (this.state.articles.length >= 1) {

      var listArticles = this.state.articles.map((article) => {
        return (
          <article className="article-item" id="article-template">
            <div className="image-wrap">
              {
                article.image !== null ? (
                  <img src={this.url+'get-image/'+article.image} alt={article.title} />
                ) : (
                  <img src={imageDefault} alt={article.title} />
                )
              }

            </div>

            <h2>{article.title}</h2>
            <span className="date">
              {/*<Moment format="D MMMM YYYY">{article.date}</Moment>   9 mayo 2021*/}
              <Moment fromNow>{article.date}</Moment>
            </span>
            <Link to={'/blog/articulo/'+article._id}>Leer más</Link>

            <div className="clearfix"></div>
          </article>
        )
      })

      return (
        <div id="articles">
          {listArticles}
        </div>
      );
    } else if (this.state.articles.length === 0 && this.state.articles.status === 'success') {
      return (
        <div id="articles">
          <h2 className="subheader">No hay artículos para mostrar</h2>
          <p>Todavia no hay contenido en esta sección</p>
        </div>
      );
    } else {
      return (
        <div id="articles">
          <h2 className="subheader">Cargando...</h2>
          <p>Espere mientras carga el contenido...</p>
        </div>
      );

    }
  }
}

export default Articles