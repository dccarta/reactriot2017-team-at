import React from 'react'
import 'aframe'
import 'aframe-animation-component'
import { Entity } from 'aframe-react'

import { getPositionInformationForChunk } from '../../webpack_parser/parser'

export default class BundleObject extends React.Component {
  constructor(props) {
    super(props)
    const { chunk, totalNumberOfChunks, randomSeed } = props
    const positionInformation = getPositionInformationForChunk(Number(chunk.id), totalNumberOfChunks, randomSeed )

    this.initialState = {
      xPos: positionInformation.x,
      yPos: positionInformation.y,
      zPos: positionInformation.z,
      colour: '#00ffff'
    }

    this.state = { ...this.initialState }
  }

  render() {
    const { size } = this.props
    const { xPos, yPos, zPos, colour } = this.state

    return (
      <Entity
        geometry={{ primitive: 'sphere', radius: size }}
        material={{ color: colour }}
        position={{ x: xPos, y: yPos, z: zPos }}
        animation={{ property: 'rotation', easing: 'linear', dur: '60000', to: `0 ${randomiseDirection()} 0`, loop: true }}
        metalness={11}
        events={{ click: () => this.setState({ colour: '#8a2be2' }) }} />
    )
  }
}

const randomiseDirection = () => Math.random() > 0.5 ? 360 : -360