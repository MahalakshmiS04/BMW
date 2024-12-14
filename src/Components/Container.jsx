import React, { Component } from 'react'
import Nav from './Nav'
import Image from './Image'

export default class Container extends Component {
  render() {
    return (
      <div>
        <div id="container">
            <Nav></Nav>
            <Image></Image>
        </div>
      </div>
    )
  }
}
