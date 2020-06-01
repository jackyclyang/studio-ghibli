import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import logo from './Ghibli Header Logo.png'
import axios from 'axios'
import FilmDetail from './FilmDetail'

export default class FilmPreview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.film.title,
      poster: ''
    }
  }

  async componentDidMount() {
    let title = this.state.title
    console.log(title)
    let URL = 'http://www.omdbapi.com/?apikey=8849bbd&t=' + title
    let rawData = await axios(URL)

    console.log(rawData.data)

    this.setState({
      poster: rawData.data.Poster
    })

  }


  render() {
    return (
      <div>
        <Link to={`/collection/${this.props.film.title}`} key={this.props.film.id}>
          <img src={this.state.poster}></img>
          <div>{this.props.film.title}</div>
        </Link>
      </div >
    )
  }
}
