import React from 'react'

import 'aframe';
import 'aframe-animation-component';
import { Entity } from 'aframe-react';

import { getTranslationInformationForChunk } from '../../webpack_parser/parser'

export default class BundleObject extends React.Component {
  constructor(props) {
    super(props)
    const { name, size, chunks, chunkNames, emitted } = props

    this.initialState = {
      size: size / 50,
      xPos: random(),
      yPos: random(),
      zPos: -20,
      yRotate: getTranslationInformationForChunk(chunks[0], 4),
      lit: true,
      colour: '#00ffff'
    }

    this.state = { ...this.initialState }
  }

  render() {
    const { name, chunks, chunkNames, emitted, rotate, orbit } = this.props
    const { size, xPos, yPos, zPos, yRotate, lit, colour } = this.state
    return (
      // <View onEnter={() => this.setState({ colour: '#7fff00' })} onExit={() => this.setState({ colour: this.initialState.colour })} >
      // <Text style={{
      //     transform: [{ rotateY : orbit }, { rotateY: yRotate }, { translate: [xPos, yPos, zPos + size + 10] }],
      //     textAlign: 'center',
      //     textAlignVertical: 'center',
      //     fontSize: 0.5 * size,
      //     fontWeight: '200'
      // }}>
      //   {name}
      // </Text>
      <Entity
        geometry={{ primitive: 'sphere', radius: size }}
        // radius={size}
        material={{ color: colour }}
        position={{ x: xPos, y: yPos, z: zPos }}
        animation={{ property: 'rotation', dur: '10000', to: '0 360 0', loop: true }}
        metalness={11}
        // style={{ color: colour, transform: [{ rotateY : orbit }, { rotateY: yRotate }, { translate: [xPos, yPos, zPos] }, { rotateY : rotate }] }}
      />

      // </View>
    )
  }
}

const random = () => Math.floor(Math.random() * 50) - 25
