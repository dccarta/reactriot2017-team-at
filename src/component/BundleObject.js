import React from 'react'
import {
  asset,
  Pano,
  Text,
  View,
  Box
} from 'react-vr';
import { getTranslationInformationForChunk } from '../../webpack_parser/parser'

export default class BundleObject extends React.Component {
  constructor(props) {
    super(props)
    const { name, size, chunks, chunkNames, emitted } = props

    this.state = {
      size: size / 10,
      xPos: 0,
      yPos: random(),
      zPos: -200,
      yRotate: getTranslationInformationForChunk(chunks[0], 4),
      lit: true
    }
  }

  render() {
    const { name, chunks, chunkNames, emitted } = this.props
    const { size, xPos, yPos, zPos, yRotate, lit } = this.state
    return (<View>
      <Text style={{
          backgroundColor: '#7b68ee',
          transform: [{ rotateY: yRotate }, { translate: [xPos, yPos, zPos + size + 10] }],
          textAlign: 'center',
          textAlignVertical: 'center',
          fontSize: 0.5 * size,
          fontWeight: '200'
      }}>
        {name}
      </Text>
      <Box
        dimWidth={size}
        dimHeight={size}
        dimDepth={size}
        lit={lit}
        style={{ color: '#00ffff', transform: [{ rotateY: yRotate }, { translate: [xPos, yPos, zPos] }] }}
      />
    </View>)
  }
}

const random = () => Math.floor(Math.random() * 100) - 50
