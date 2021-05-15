import React, { Component } from 'react'

class slider extends Component {
  render() {
    return (
      <div id="slider" className="slider-big">
        <h1>{this.props.title}</h1>
        <a href="#" className="btn-white">{this.props.btn}</a>
      </div>
    );
  }
}

export default slider;