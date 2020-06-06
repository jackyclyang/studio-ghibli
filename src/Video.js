import React, { Component } from 'react'

class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videoID: this.props.videoID
    }
  }

  componentDidMount() {
    this.setState({
      videoID: this.props.videoID
    })
  }

  render() {
    return (
      <iframe className="video" width="640" height="360" src={"https://www.youtube.com/embed/" + this.state.videoID} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
  }
}

export default Video