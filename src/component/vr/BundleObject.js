import React from 'react'
import 'aframe'
import 'aframe-animation-component'
import { Entity } from 'aframe-react'
import { getRandomArbitrary } from '../../webpack_parser/parser'
import ModuleObject from './ModuleObject'

import { getPositionInformationForChunk } from '../../webpack_parser/parser'

const SELECTED_COLOR = '#8a2be2'
const DESELECTED_COLOR = '#00ffff'
const MEGA_BUNDLE_COLOR = '#f44141'

export default class BundleObject extends React.Component {
  constructor(props) {
    super(props)
    const { chunk, totalNumberOfChunks, randomSeed } = props
    const positionInformation = getPositionInformationForChunk(Number(chunk.id), totalNumberOfChunks, randomSeed )

    this.initialState = {
      xPos: positionInformation.x,
      yPos: positionInformation.y,
      zPos: positionInformation.z,
      colour: chunk.size > 600000 ? MEGA_BUNDLE_COLOR : DESELECTED_COLOR,
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
    this.setState({colour: this.initialState.colour})
    this.props.handleOnMouseLeave()
  }

  _onClick() {
    this.setState((state) => ({ isExpanded: !state.isExpanded }))
  }

  _adjustSizeToScale(chunkSize, minChunkSize, maxChunkSize) {
    const newMin = 1
    const newRange = 15
    const oldRange = maxChunkSize - minChunkSize
    const newSize = (((chunkSize - minChunkSize) * newRange) / oldRange ) + newMin
    return newSize
  }

  _setColour(size){
    const colour = (size > 600000 ? DESELECTED_COLOR : MEGA_BUNDLE_COLOR )
    this.setState({colour: colour})
  }

  render() {
    const { size, chunk : { modules } } = this.props
    const numberOfModules = modules.length
    const randomSeed = getRandomArbitrary(1, 0.1 * numberOfModules)

    const minModuleSize = modules.reduce((min, module) => Math.min(min, Number(module.size)), 20000000)
    const maxModuleSize = modules.reduce((max, module) => Math.max(max, Number(module.size)), 0)

    const { xPos, yPos, zPos, colour, isExpanded } = this.state

    return (
      <Entity
        geometry={{ primitive: 'sphere', radius: size }}
        material={{ color: colour, wireframe: isExpanded }}
        position={{ x: xPos, y: yPos, z: zPos }}
        metalness={1}
        animation={{ property: 'rotation', easing: 'linear', dur: '60000', to: `0 ${randomiseDirection()} 0`, loop: true }}
        events={{ click: this._onClick, mouseenter: this._onMouseEnter, mouseleave: this._onMouseLeave  }}
      >
        {
          isExpanded ? modules.map((module, i) =>
            <ModuleObject key={i}
               module={module}
               moduleNumber={i + 1}
               size={this._adjustSizeToScale(Number(module.size), minModuleSize, maxModuleSize) / 10}
               totalNumberOfModules={numberOfModules}
               randomSeed={randomSeed}
            />) : null
        }
      </Entity>
    )
  }
}

const randomiseDirection = () => Math.random() > 0.5 ? 360 : -360
