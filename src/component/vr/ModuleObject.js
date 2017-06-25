import React from 'react'
import 'aframe'
import 'aframe-animation-component'
import { Entity } from 'aframe-react'

import { getPositionInformationForChunk } from '../../webpack_parser/parser'

export default class ModuleObject extends React.Component {
  constructor(props) {
    super(props)
    const { module, moduleNumber, totalNumberOfModules, randomSeed } = props
    const positionInformation = getPositionInformationForChunk(moduleNumber, totalNumberOfModules, randomSeed )

    this.initialState = {
      xPos: positionInformation.x / 10,
      yPos: positionInformation.y / 10,
      zPos: positionInformation.z / 10,
      colour: '#7fff00'
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
        metalness={1} />
    )
  }
}

const randomiseDirection = () => Math.random() > 0.5 ? 360 : -360
