import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class FilmDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      info1: this.props.basicInfo,
      info2: this.props.additionalInfo,
      title: this.props.match.params.title,
      poster: '',
      description: '',
      producer: '',
      director: '',
      releaseYear: '',
      ratings: [],
      imdbID: ''
    }
  }


  componentDidMount = () => {
    let filmInfo1 = this.state.info1.find(element => element.title === this.state.title)

    console.log(filmInfo1)

    let filmInfo2 = this.state.info2.find(element => element.title === this.state.title)

    let poster = filmInfo2.poster
    let description = filmInfo1.description

    console.log(filmInfo2.poster)

    this.setState({
      poster: poster,
      description: description
    })


  }


  render() {
    return (
      <div>
        <span>Back</span>
        <h2>{this.state.title}</h2>
        <img src={this.state.poster}></img>
        <p>Description</p>
        <p>{this.state.description}</p>
      </div>
    )
  }
}

export default withRouter(FilmDetail)