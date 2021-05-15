import React, { Component } from 'react';
import axios from 'axios';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Blog extends Component {

  state = {
    articles: {},
    status: null
  }

  render() {

    axios.get("http://localhost:3900/api/articles")
      .then(res => {
        this.setState({
          articles: res.data.articles,
          status: 'success'
        })
      });;

    return (
      <div id="blog">
        <Slider
          title="Blog"
          size="slider-small"
        />
        <div className="center">
          <div id="content">
            {/*Listado de artículos que vendrán de la API rest de node*/}

            {this.state.status === 'success' &&
              <div>
                {this.state.articles.map((article, i) => {
                  return (
                    <h1 key={article._id}>{article.title}</h1>
                  );
                })
                }
              </div>
            }

          </div>

          <Sidebar
            blog="true"
          />

        </div>
      </div>
    );
  }
}

export default Blog;