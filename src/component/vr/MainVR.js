import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import { Entity, Scene } from 'aframe-react'
import BackgroundSwitcher from './BackgroundSwitcher'

class MainVR extends React.Component {
  constructor(props) {
    super(props)

    this.state = { rotate : 0, orbit : 0 }
  }

  render() {
    return (
      <Scene>
        <BackgroundSwitcher selectedBackground='dungeon'/>

        <Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }}/>
        <Entity particle-system={{ preset: 'snow' }}/>
        <Entity light={{ type: 'point' }}/>

        {/* { this.props.assets.map(bundle => <BundleObject key={bundle.chunks[0]} { ...bundle } rotate={this.state.rotate} orbit={this.state.orbit} />) } */}
      </Scene>
    )
  }

}

export default MainVR
