import React, { Component } from 'react'
import axios from 'axios'
import Video from './Video'
import { Link, withRouter } from 'react-router-dom'
import CTA from './CTA'

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
    window.scrollTo(0, 0)
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

    const response = await axios(trailerURL)

    const videoID =
      response.data.videoId

    // Placeholder below to save API calls to IMDb
    //'ByXuk9QqQkk'

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
        <div className="film-details">
          <div>
            <img className='film-poster-detail' src={this.state.poster}></img>
          </div>
          <div className='film-details-content'>
            <div className='film-details-title'>{this.state.title}</div>
            <p className='film-details-description'>{this.state.description}</p>
            <div className='film-details-others'>
              <div>Producer: {this.state.producer}</div>
              <div>Director: {this.state.director}</div>
              <p>Release Year: {this.state.releaseYear}</p>
              <div className='film-details-ratings'>
                Ratings: <br />
                {this.state.rating1.Source}: {this.state.rating1.Value}<br />
                {this.state.rating2.Source}: {this.state.rating2.Value}
              </div>
              {this.state.rating3.Source ? <p>{this.state.rating3.Source}: {this.state.rating3.Value}</p> : ''}
            </div>
            <div>
              <CTA onClick={this.openModal} text='Watch Trailer' />
            </div>
            <div>
              <Link to="/collection/" exact="true"><CTA text="Back" className="go-back" /></Link>
            </div>
          </div>
          <br />
        </div>
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