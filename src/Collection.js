import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export default class Collection extends Component {
  constructor() {
    super()

    this.state = {
      allFilms: []
    }
  }

  render() {
    return (
      <div>
        <div>
          Header
        </div>
        {this.props.allFilms.map((film, key) => <div key={film.id}>{film.title}</div>)}
      </div>
    )
  }
}
