import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import Collection from './Collection'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor() {
    super()

    this.state = {
      allFilms: []
    }
  }


  // async componentDidMount() {

  //   const URL1 = 'https://ghibliapi.herokuapp.com/films'
  //   const rawData1 = await axios(URL1)
  //   let filmsData1 = rawData1.data
  //   let allFilms = []

  //   filmsData1.forEach(eachFilm => {
  //     let film = {
  //       title: '',
  //       description: '',
  //       producer: '',
  //       director: '',
  //       releaseYear: '',
  //       poster: '',
  //       ratings: [],
  //       imdbID: ''
  //     }

  //     film.title = eachFilm.title
  //     film.description = eachFilm.description
  //     film.producer = eachFilm.producer
  //     film.director = eachFilm.director
  //     film.releaseYear = eachFilm.release_date
  //     allFilms.push(film)

  //   })

  //   let URL2 = 'http://www.omdbapi.com/?apikey=8849bbd&t='

  //   await Promise.all(allFilms.map(async (film) => {
  //     const response = await axios.get(URL2 + film.title)
  //     console.log(URL2)
  //     console.log(film.title)

  //     let poster = response.data.Poster
  //     let ratings = response.data.Ratings
  //     let imdbID = response.data.imdbID

  //     film.poster = poster
  //     film.ratings = ratings
  //     film.imdbID = imdbID

  //   }))

  //   this.setState({
  //     allFilms: allFilms
  //   })

  // }


  render() {
    console.log(this.state.allFilms)

    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
        <div>
          <Header />
        </div>
        <div className='main'>
          <Route path='/' exact={true}>
            <img src='https://www.theedgesusu.co.uk/wp-content/uploads/2016/01/studio_ghibli.jpg' alt="studio ghibli characters" className='hero' />
          </Route>
          <Route path='/collection/'>
            <Collection />
          </Route>

        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
