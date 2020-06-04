import React, { Component } from 'react'
import axios from 'axios'

import { Link, withRouter } from 'react-router-dom'

class FilmDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      poster: '',
      description: '',
      producer: '',
      director: '',
      releaseYear: '',
      rating1: {},
      rating2: {},
      rating3: {},
      imdbID: '',
      videoID: ''
    }

  }

  async componentDidMount() {

    const film = await this.props.allFilms.find(film =>
      film.title === this.props.match.params.title
    )

    this.setState({
      title: film.title,
      poster: film.poster,
      description: film.description,
      producer: film.producer,
      director: film.director,
      releaseYear: film.releaseYear,
      rating1: film.ratings[0],
      rating2: film.ratings[1],
      ratings3: film.ratings[2],
      imdbID: film.imdbID
    })
    console.log(this.state.imdbID)

    const trailerURL = 'https://imdb-api.com/en/API/YouTubeTrailer/k_7uEj708N/' + this.state.imdbID

    //const response = await axios(trailerURL)

    //const videoID = response.data.videoId

    let videoID = 'ByXuk9QqQkk'

    console.log(videoID)
    this.setState({
      videoID: videoID
    })

  }

  render() {
    return (
      <div>
        <Link to="/collection/" exact="true">Back</Link>
        <br />
        <img src={this.state.poster}></img>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
        <p>Producer: {this.state.producer}</p>
        <p>Director: {this.state.director}</p>
        <p>Release Year: {this.state.releaseYear}</p>
        <p>{this.state.rating1.Source}: {this.state.rating1.Value}</p>
        <p>{this.state.rating2.Source}: {this.state.rating2.Value}</p>
        {this.state.rating3.Source ? <p>{this.state.rating3.Source}: {this.state.rating3.Value}</p> : ''}

        <iframe src={'https://www.youtube.com/embed/' + this.state.videoID} width='600' controls="controls" autoplay="true" />



      </div>
    )
  }
}

export default withRouter(FilmDetail)