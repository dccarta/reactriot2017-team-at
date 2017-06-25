import React from 'react'
import { connect } from 'react-redux'
import 'aframe'
import 'aframe-particle-system-component'
import 'aframe-animation-component';
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
        <BackgroundSwitcher selectedBackground={this.props.background}/>

        <Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }}/>
        <Entity particle-system={{ preset: 'snow' }}/>
        <Entity light={{ type: 'point' }}/>

        <Entity animation={{ property: 'rotation', easing: 'linear', dur: '60000', to: '0 360 0', loop: true }}>
          { this.props.assets.map(bundle => <BundleObject key={bundle.chunks[0]} { ...bundle } rotate={this.state.rotate} orbit={this.state.orbit} />) }
        </Entity>
      </Scene>
    )
  }

}
const mapStateToProps = state => (
  { 
    title: state.title.value,
    assets: state.bundles.assets,
    background: state.background.selectedBackground
  }
)

export default connect(mapStateToProps)(MainVR)
