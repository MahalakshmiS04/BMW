import React, { Component } from 'react'
import Contact from './Contact'
import Cart from './Cart'
import Location from './Location'
import Search from './Search'

export default class Nav2 extends Component {
  render() {
    return (
      <div>
        <div id="nav2">
            <Contact></Contact>
            <Cart></Cart>
            <Location></Location>
            <Search></Search>
        </div>
      </div>
    )
  }
}
