import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class FilmPreview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="film-preview">
        <Link to={`/collection/${this.props.film.title}`} key={this.props.film.id}>
          <img src={this.props.film.poster} className="film-poster"></img>
          <div>{this.props.film.title}</div>
        </Link>
      </div >
    )
  }
}
