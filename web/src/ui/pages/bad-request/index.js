import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

// import * as process from './process'
import css from './index.css'
import connected from 'State/connect'

class BadRequest extends Component {
  // TODO Challenge 4 create an error page.
  // You must use an image, have text on the screen, a link to your login/sign up pages
  // and something that is using animation
  render() {
    return (
      <span>TODO delete me</span>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(BadRequest, css)))
