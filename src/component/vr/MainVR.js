import React from 'react'
import { connect } from 'react-redux'
import 'aframe'
import 'aframe-particle-system-component'
import 'aframe-animation-component';
import { Entity, Scene } from 'aframe-react'
import BackgroundSwitcher from './BackgroundSwitcher'
import { getRandomArbitrary } from '../../webpack_parser/parser'

import BundleObject from './BundleObject'

class MainVR extends React.Component {
  constructor(props) {
    super(props)

    this.state = { rotate : 0, orbit : 0 }
  }

  componentDidMount() {
    // setInterval(() => {
    //   if (this.state.rotate === 360) {
    //     this.setState({ rotate : 0 })
    //   } else {
    //     this.setState({ rotate : this.state.rotate + 1 })
    //   }
    // }, 100)
    //
    // setInterval(() => {
    //   if (this.state.orbit === 360) {
    //     this.setState({ orbit : 0 })
    //   } else {
    //     this.setState({ orbit : this.state.orbit + 0.1 })
    //   }
    // }, 100)
  }

  render() {
    const numberOfChunks = this.props.chunks.length
    const randomSeed = getRandomArbitrary(1, 0.1 *  numberOfChunks)
    return (
      <Scene>
        <BackgroundSwitcher selectedBackground={this.props.background}/>

        <Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }}/>
        <Entity particle-system={{ preset: 'snow' }}/>
        <Entity light={{ type: 'point' }}/>

        <Entity animation={{ property: 'rotation', easing: 'linear', dur: '60000', to: '0 360 0', loop: true }}>
          { this.props.chunks.map(chunk =>
                <BundleObject key={String(chunk.id)}
                     chunk={chunk}
                     rotate={this.state.rotate}
                     orbit={this.state.orbit}
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
