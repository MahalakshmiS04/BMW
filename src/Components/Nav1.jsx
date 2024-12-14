import React, { Component } from 'react'
import Logo from './Logo'
import Models from './Models'
import Electric from './Electric'
import Configurator from './Configurator'
import View from './View'
import More from './More'
export default class Nav1 extends Component {
  render() {
    return (
      <div>
        <div id="nav1">
            <Logo></Logo>
            <Models></Models>
            <Electric></Electric>
            <Configurator></Configurator>
            <View></View>
            <More></More>
        </div>
      </div>
    )
  }
}
