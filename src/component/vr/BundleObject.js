import React from 'react'
import 'aframe'
import 'aframe-animation-component'
import { Entity } from 'aframe-react'

import { getPositionInformationForChunk } from '../../webpack_parser/parser'

export default class BundleObject extends React.Component {
  constructor(props) {
    super(props)
    const { chunk, totalNumberOfChunks, randomSeed } = props
    const { id, size } = chunk
    const positionInformation = getPositionInformationForChunk(Number(id), totalNumberOfChunks, randomSeed )

    this.initialState = {
      size: Number(size) / 100000,
      xPos: positionInformation.x,
      yPos: positionInformation.y,
      zPos: positionInformation.z,
      lit: true,
      colour: '#00ffff'
    }

    this.state = { ...this.initialState }
  }

  render() {
    const { chunk, rotate, orbit } = this.props
    const { size, xPos, yPos, zPos, yRotate, lit, colour } = this.state

    return (
      <Entity
        geometry={{ primitive: 'sphere', radius: size }}
        material={{ color: colour }}
        position={{ x: xPos, y: yPos, z: zPos }}
        animation={{ property: 'rotation', easing: 'linear', dur: '60000', to: '0 360 0', loop: true }}
        metalness={11} />
    )
  }
}

const random = () => Math.floor(Math.random() * 50) - 25
