import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import FilmList from './FilmList'
import FilmDetail from './FilmDetail'

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
          <Route path='/collection/' exact='true'>
            {this.props.allFilms.map((film, key) => <FilmList film={film} key={key} />)}
          </Route>
          <Route path='/collection/:title'>
            <FilmDetail />
          </Route>

        </div>

      </div>
    )
  }
}
