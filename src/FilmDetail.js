import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class FilmDetail extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.title}
      </div>
    )
  }
}

export default withRouter(FilmDetail)