import React from 'react'
import 'aframe'
import 'aframe-animation-component'
import { Entity } from 'aframe-react'

import { getPositionInformationForChunk } from '../../webpack_parser/parser'

const SELECTED_COLOR = '#8a2be2'
const DESELECTED_COLOR = '#00ffff'

export default class BundleObject extends React.Component {
  constructor(props) {
    super(props)
    const { chunk, totalNumberOfChunks, randomSeed } = props
    const positionInformation = getPositionInformationForChunk(Number(chunk.id), totalNumberOfChunks, randomSeed )

    this.initialState = {
      xPos: positionInformation.x,
      yPos: positionInformation.y,
      zPos: positionInformation.z,
      colour: DESELECTED_COLOR,
      isExpanded: false
    }

    this.state = { ...this.initialState }

    this._onMouseEnter = this._onMouseEnter.bind(this)
    this._onMouseLeave = this._onMouseLeave.bind(this)
    this._onClick = this._onClick.bind(this)
  }

  _onMouseEnter() {
    this.setState({colour: SELECTED_COLOR})
    this.props.handleOnMouseEnter()
  }

  _onMouseLeave() {
    this.setState({colour: DESELECTED_COLOR})
    this.props.handleOnMouseLeave()
  }

  _onClick() {
    this.setState((state) => ({ isExpanded: !state.isExpanded }))
  }

  render() {
    const { size } = this.props
    const { xPos, yPos, zPos, colour, isExpanded } = this.state

    const baseEntity = <Entity
        geometry={{ primitive: 'sphere', radius: size }}
        material={{ color: colour }}
        position={{ x: xPos, y: yPos, z: zPos }}
        animation={{ property: 'rotation', easing: 'linear', dur: '60000', to: `0 ${randomiseDirection()} 0`, loop: true }}
        metalness={11}
        events={{ click: this._onClick, mouseenter: this._onMouseEnter, mouseleave: this._onMouseLeave  }} />

    const expandedView = null

    return isExpanded ? expandedView : baseEntity
  }
}

const randomiseDirection = () => Math.random() > 0.5 ? 360 : -360
