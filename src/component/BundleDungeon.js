import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Box
} from 'react-vr';
import { connect } from 'react-redux'

class BundleDungeon extends React.Component {
  constructor(props) {
    super(props)

    this.state = { rotate : 0 }
  }

  componentDidMount() {
    setInterval(() => this.setState({ rotate : this.state.rotate + 1 }), 100)
  }

  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <Text
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
          {this.props.title}
        </Text>

        <Box
          dimWidth={2}
          dimDepth={2}
          dimHeight={2}
          style={{ transform: [{ translate : [0, -5, getZ(this.state.rotate)] }, { rotateY : this.state.rotate }] }} />
      </View>
    );
  }
};

const getZ = rotate => 0 - rotate

export default connect(state => ({ title: state.title.value, assets: state.bundles.assets  }))(BundleDungeon)
