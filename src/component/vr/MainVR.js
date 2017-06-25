import React from 'react'
import { connect } from 'react-redux'
import 'aframe'
import 'aframe-particle-system-component'
import { Entity, Scene } from 'aframe-react'
import BackgroundSwitcher from './BackgroundSwitcher'

import BundleObject from './BundleObject'

class MainVR extends React.Component {
  constructor(props) {
    super(props)

    this.state = { rotate : 0, orbit : 0 }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.rotate === 360) {
        this.setState({ rotate : 0 })
      } else {
        this.setState({ rotate : this.state.rotate + 1 })
      }
    }, 100)

    setInterval(() => {
      if (this.state.orbit === 360) {
        this.setState({ orbit : 0 })
      } else {
        this.setState({ orbit : this.state.orbit + 0.1 })
      }
    }, 100)
  }

  render() {
    return (
      <Scene>
        <BackgroundSwitcher selectedBackground='dungeon'/>

        <Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }}/>
        <Entity particle-system={{ preset: 'snow' }}/>
        <Entity light={{ type: 'point' }}/>

        { this.props.assets.map(bundle => <BundleObject key={bundle.chunks[0]} { ...bundle } rotate={this.state.rotate} orbit={this.state.orbit} />) }
      </Scene>
    )
  }

}

export default connect(state => ({ title: state.title.value, assets: state.bundles.assets  }))(MainVR)
