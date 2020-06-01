import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import FilmPreview from './FilmPreview'

export default class Collection extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div>
          <h2>Film Collection</h2>
        </div>
        <div className="collection">
          {this.props.allFilms.map((film, key) => <FilmPreview film={film} key={key} />)}
        </div>

      </div>
    )
  }
}
