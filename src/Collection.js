import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import FilmPreview from './FilmPreview'
import FilmDetail from './FilmDetail'
import axios from 'axios'

export default class Collection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allFilms: []
    }
  }


  async componentDidMount() {

    const URL1 = 'https://ghibliapi.herokuapp.com/films'
    const rawData1 = await axios(URL1)
    let filmsData1 = rawData1.data
    let allFilms = []

    filmsData1.forEach(eachFilm => {
      let film = {
        title: '',
        description: '',
        producer: '',
        director: '',
        releaseYear: '',
        poster: '',
        ratings: [],
        imdbID: ''
      }

      film.title = eachFilm.title
      film.description = eachFilm.description
      film.producer = eachFilm.producer
      film.director = eachFilm.director
      film.releaseYear = eachFilm.release_date
      allFilms.push(film)

    })

    let URL2 = 'http://www.omdbapi.com/?apikey=8849bbd&t='
    // code taught by Mike
    await Promise.all(allFilms.map(async (film) => {
      const response = await axios.get(URL2 + film.title)
      let poster = response.data.Poster
      let ratings = response.data.Ratings
      let imdbID = response.data.imdbID

      film.poster = poster
      film.ratings = ratings
      film.imdbID = imdbID

    }))

    this.setState({
      allFilms: allFilms
    })
  }


  render() {
    console.log(this.state.allFilms)
    return (
      <div>
        <Route path='/collection/' exact={true}>
          <div>
            <h2>Film Collection</h2>
            <form>
              <input type='text' value='' placeholder="Type here"></input>
              <input type='submit' value='Search'></input>
            </form>
          </div>
          <div className="collection">
            {this.state.allFilms.length > 0 ? this.state.allFilms.map((film, key) => <FilmPreview film={film} key={key} />) : <img src='https://i.pinimg.com/originals/58/4b/60/584b607f5c2ff075429dc0e7b8d142ef.gif'></img>}
          </div>
        </Route>
        <Route path='/collection/:title'>
          {this.state.allFilms.length > 0 ? <FilmDetail allFilms={this.state.allFilms} /> : <img src='https://i.pinimg.com/originals/58/4b/60/584b607f5c2ff075429dc0e7b8d142ef.gif'></img>}

        </Route>

      </div >
    )
  }
}
