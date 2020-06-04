import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'


export default class FilmPreview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Link to={`/collection/${this.props.film.title}`} key={this.props.film.id}>
          <img src={this.props.film.poster}></img>
          <div>{this.props.film.title}</div>
        </Link>
      </div >
    )
  }
}
