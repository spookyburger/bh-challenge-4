// TODO Challenge 4 replace the logo with your own
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import connected from 'State/connect'
import { selector as UsersState } from 'Process/users/reducer'
// import Logo from './logo.svg'
import UserLinks from './user-dropdown'
import DefaultLinks from './nav-links'

class Header extends Component {
  render() {
    const { active } = this.props.UserState
    const rightSide = active ? <UserLinks /> : <DefaultLinks />

    return (
      <div styleName="container">
        <Link to="/">
          <div styleName="logo">{/* <Logo /> */}</div>
        </Link>
        <div styleName="active-links">
          {rightSide}
        </div>
      </div>
    )
  }
}

export default connected([UsersState], [])(Header)
