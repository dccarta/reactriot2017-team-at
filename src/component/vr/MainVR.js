import React from 'react'
import { connect } from 'react-redux'
import 'aframe'
import 'aframe-particle-system-component'
import 'aframe-animation-component'
import 'aframe-mouse-cursor-component'
import { Entity, Scene } from 'aframe-react'
import BackgroundSwitcher from './BackgroundSwitcher'
import { getRandomArbitrary } from '../../webpack_parser/parser'

import BundleObject from './BundleObject'

class MainVR extends React.Component {
  constructor(props) {
    super(props)

    this.state = { cursorColour: 'white' }
  }

  _adjustSizeToScale(chunkSize, minChunkSize, maxChunkSize) {
    const newMin = 1
    const newRange = 15
    const oldRange = maxChunkSize - minChunkSize
    const newSize = (((chunkSize - minChunkSize) * newRange) / oldRange ) + newMin
    return newSize
  }

  render() {
    const { chunks } = this.props
    const { cursorColour } = this.state
    const numberOfChunks = chunks.length
    const randomSeed = getRandomArbitrary(1, 0.1 *  numberOfChunks)

    const minChunkSize = chunks.reduce((min, chunk) => Math.min(min, Number(chunk.size)), 200000000)
    const maxChunkSize = chunks.reduce((max, chunk) => Math.max(max, Number(chunk.size)), 0)

    return (
      <Scene>
        <BackgroundSwitcher selectedBackground={this.props.background}/>
        <Entity gearvr-controls />
        <Entity camera look-controls hmdEnabled wasd-controls mouse-cursor>
          <Entity cursor={{ fuse: true, fuseTimeout: 500 }}
            position={{ x: 0, y: 0, z: -2 }}
            geometry={{ primitive: 'ring', radiusInner: 0.02, radiusOuter: 0.03 }}
            material={{ color: cursorColour, shader: 'flat' }}
            events={{ mouseenter: () => this.setState({ cursorColour: 'black' }), mouseleave: () => this.setState({ cursorColour: 'white' }) }} />
        </Entity>

        {/* <Entity particle-system={{ preset: 'snow' }}/> */}
        <Entity light={{ type: 'point' }}/>

        <Entity animation={{ property: 'rotation', easing: 'linear', dur: '120000', to: '0 360 0', loop: true }}>
          { chunks.map(chunk =>
                <BundleObject key={String(chunk.id)}
                     chunk={chunk}
                     size={this._adjustSizeToScale(Number(chunk.size), minChunkSize, maxChunkSize)}
                     totalNumberOfChunks={numberOfChunks}
                     randomSeed={randomSeed} />)
          }
        </Entity>
      </Scene>
    )
  }
}

const mapStateToProps = state => (
  {
    title: state.title.value,
    chunks: state.stats && Array.isArray(state.stats.chunks)
        ?  state.stats.chunks
        : [],
    background: state.background.selectedBackground
  }
)

export default connect(mapStateToProps)(MainVR)
