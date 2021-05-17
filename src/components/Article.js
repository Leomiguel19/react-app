import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Sidebar from './Sidebar';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';
import imageDefault from '../assets/images/logo.png';

class Article extends Component {

  url = Global.url;

  state = {
    article: false,
    status: null
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    let id = this.props.match.params.id;

    axios.get(this.url + 'article/' + id)
      .then(res => {

        this.setState({
          article: res.data.article,
          status: 'success'
        })
      }).catch(err => {
        this.setState({
          articles: false,
          status: 'success'
        })
      })
  }

  deleteArticle = (id) => {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar tu archivo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(this.url + 'article/' + id)
            .then(res => {

              this.setState({
                article: res.data.article,
                status: 'deleted'
              });

              swal(
                'Artículo borrado',
                'El artículo ha sido borrado correctamente',
                'success'
              )
            });
        } else {
          swal(
            'Tranquilo !!!',
            'El artículo esta a salvo',
            'success'
          )        }
      });
    /*
        
          */
  }

  render() {
    var article = this.state.article;

    if (this.state.status === 'deleted') {
      return <Redirect to="/blog" />
    }
    return (
      <div class="center">
        <section id="content">

          {this.state.article &&
            <article className="article-item article-detail">
              <div className="image-wrap">
                {
                  article.image !== null ? (
                    <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                  ) : (
                    <img src={imageDefault} alt={article.title} />
                  )
                }
              </div>

              <h1 className="subheader">{article.title}</h1>
              <span className="date">
                <Moment locale="es" fromNow>{article.date}</Moment>
              </span>
              <p>
                {article.description}
              </p>

              <button onClick={() => { this.deleteArticle(article._id) }} to="/blog" className="btn btn-danger">Eliminar</button>
              <Link to="/blog" className="btn btn-warning">editar</Link>

              <div className="clearfix"></div>
            </article>
          }

          {!this.state.article && this.state.status === 'success' &&
            <div id="article">
              <h2 className="subheader">El artículo no existe</h2>
              <p>Intentalo de nuevo mas tarde</p>
            </div>
          }

          {!this.state.status === null &&
            <div id="article">
              <h2 className="subheader">Cargando... </h2>
              <p>Espere unos segundos</p>
            </div>
          }

        </section>

        <Sidebar />

        <div className="clearfix"></div>
      </div>
    );
  }
}

export default Article;