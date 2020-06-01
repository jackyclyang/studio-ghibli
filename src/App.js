import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import Collection from './Collection'
import Header from './Header'
import Footer from './Footer'
import FilmDetail from './FilmDetail';


class App extends Component {
  constructor() {
    super()

    this.state = {
      allFilms: []
    }
  }

  async componentDidMount() {
    const URL = 'https://ghibliapi.herokuapp.com/films'
    const rawData = await axios(URL)
    let filmsData = rawData.data

    console.log(filmsData)

    this.setState({
      allFilms: filmsData
    })

  }

  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
        <div>
          <Header />
        </div>
        <div className='main'>
          <Route path='/' exact><img src='https://www.theedgesusu.co.uk/wp-content/uploads/2016/01/studio_ghibli.jpg' alt="studio ghibli characters" className='hero' /></Route>
          <Route path='/collection/'><Collection allFilms={this.state.allFilms} /></Route>

        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
