import React from 'react'
import {
  asset,
  Pano,
  Text,
  View,
  Box,
  PointLight,
  NativeModules
} from 'react-vr'
import { connect } from 'react-redux'

import BundleObject from './BundleObject'

class BundleDungeon extends React.Component {
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
      <View onInput={movementControls}>
        <Pano source={asset('space.jpg')}/>
        <PointLight decay={2} intensity={2.6}/>
        {/* <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -6]}],
          }}>
          { this.props.title }
        </Text> */}

        <Box
          dimWidth={2}
          dimDepth={2}
          dimHeight={2}
          style={{ transform: [{ translate : [0, -5, getZ(this.state.rotate)] }, { rotateY : this.state.rotate }] }}
        />

      { this.props.assets.map(bundle => <BundleObject key={bundle.chunks[0]} { ...bundle } rotate={this.state.rotate} orbit={this.state.orbit} />) }
      </View>
    );
  }
};

 const moveCamera = (x, y, z) => {
   NativeModules.TeleportModule.teleportCamera(x, y, z);
 }

 const movementControls=(event)=>{
   if(event.nativeEvent.inputEvent.type === 'KeyboardInputEvent' && event.nativeEvent.inputEvent.eventType === 'keypress'){
      const keyCode = event.nativeEvent.inputEvent.code
      const cameraMoveAmount= 5

      if (keyCode === 'KeyW') { //W
        moveCamera(0, 0, -cameraMoveAmount)
      }
      else if (keyCode === 'KeyA') { //A
        moveCamera(-cameraMoveAmount, 0, 0)
      }
      else if (keyCode === 'KeyS') { //S
        moveCamera(0, 0, cameraMoveAmount)
      }
      else if (keyCode === 'KeyD') { //D
        moveCamera(cameraMoveAmount, 0, 0)
      }
   }
 }

const getZ = rotate => 0 - rotate

export default connect(state => ({ title: state.title.value, assets: state.bundles.assets  }))(BundleDungeon)
