import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import FilmPreview from './FilmPreview'
import FilmDetail from './FilmDetail'
import axios from 'axios'

export default class Collection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      basicInfo: [],
      additionalInfo: []
    }
  }

  async componentDidMount() {
    const URL = 'https://ghibliapi.herokuapp.com/films'
    const rawData = await axios(URL)
    let filmsData = rawData.data

    console.log(filmsData)

    this.setState({
      basicInfo: filmsData
    })

  }

  setAdditionalInfo = (title, poster, ratings, imdbID) => {
    let addInfo = {
      title: title,
      poster: poster,
      ratings: ratings,
      imdbID: imdbID
    }

    let addInfoArray = this.state.additionalInfo
    addInfoArray.push(addInfo)
    this.setState({
      additionalInfo: addInfoArray
    })
  }

  render() {
    return (
      <div>
        <Route path='/collection/' exact={true}>
          <div>
            <h2>Film Collection</h2>
          </div>
          <div className="collection">
            {this.state.basicInfo.map((film, key) => <FilmPreview film={film} key={key} setAdditionalInfo={this.setAdditionalInfo} />)}
          </div>
        </Route>
        <Route path='/collection/:title'>
          <FilmDetail basicInfo={this.state.basicInfo} additionalInfo={this.state.additionalInfo} />
        </Route>

      </div >
    )
  }
}
