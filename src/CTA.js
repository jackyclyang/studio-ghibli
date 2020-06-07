import React, { Component } from 'react'

export default class CTA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  componentDidMount() {
    this.setState({
      text: this.props.text
    })
  }


  render() {
    return (
      <button onClick={this.props.onClick} className={this.props.className}>
        {this.state.text}
      </button>
    )
  }
}
