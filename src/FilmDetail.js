import React, { Component } from 'react'
import axios from 'axios'
import Video from './Video'
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
      videoID: '',
      hide: true
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

    // const trailerURL = 'https://imdb-api.com/en/API/YouTubeTrailer/k_7uEj708N/' + this.state.imdbID

    // const response = await axios(trailerURL)

    const videoID =
      // response.data.videoId

      'ByXuk9QqQkk'

    console.log(videoID)

    this.setState({
      videoID: videoID
    })

  }

  openModal = () => {
    console.log('open modal')
    this.setState({
      hide: false
    })
  }

  closeModal = () => {
    this.setState({
      hide: true
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

        <button onClick={this.openModal}>
          Watch Trailer
        </button>
        {this.state.hide ? '' :
          <div className='modal' onClick={this.closeModal}>
            <div class='modal-content'>
              <div>
                <Video videoID={this.state.videoID} />
              </div>

            </div>

          </div>}
      </div>
    )
  }
}

export default withRouter(FilmDetail)