import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Entity } from 'aframe-react'

import {
  selectChunkById,
  selectChunksHierarchy,
  selectChunkModulesCount,
  selectChunkSize
} from './ChunkSelector'

const textProps = {
  align: "center",
  wrapCount: 15,
  width: 0.75,
  baseline: "top",
  align: 'left',
  alphaTest: 1.0
}

const firstLineY = 0.48
const lineHeight = 0.18

class ChunkInfo extends React.Component {

  render() {
    return (
      <Entity geometry={{ primitive: 'plane', height: 1, width: 0.85 }}
            position={{ x: -0.5, y: 0, z: -2 }}
            material={{ color: 'black', opacity: 1, shader: 'flat' }}>
        <Entity text={{value: "Chunk ID:  " + this.props.chunkId, ...textProps }}
                position={{ x: 0, y: firstLineY, z: 0 }}/>
        <Entity text={{value: "Chunk name:  " + this.props.chunk.names[0] || 'NO NAME', ...textProps}}
                position={{ x: 0, y: firstLineY-lineHeight, z: 0 }}/>
        <Entity text={{value: "Chunk size:  " + this.props.size + "B", ...textProps}}
                position={{ x: 0, y: firstLineY-(lineHeight*2), z: 0 }}/>
        <Entity text={{value: "Total modules:  " + this.props.totalModules, ...textProps}}
                position={{ x: 0, y: firstLineY-(lineHeight*3), z: 0 }}/>
        <Entity text={{value: "Child chunks:  " + this.props.chunkChildren.length, ...textProps}}
                position={{ x: 0, y: firstLineY-(lineHeight*4), z: 0 }} />
      </Entity>
    )
  }

}

ChunkInfo.propTypes = {
  chunkId: PropTypes.string.isRequired,
  chunk: PropTypes.object.isRequired,
  chunkChildren: PropTypes.arrayOf(PropTypes.string).isRequired
}

const mapStateToProps = (state, ownProps) => ({
  chunk: selectChunkById(state, ownProps.chunkId) || { names: ['NO NAME']},
  chunkChildren: selectChunksHierarchy(state)[ownProps.chunkId] || [],
  totalModules: selectChunkModulesCount(state, ownProps.chunkId),
  size: selectChunkSize(state, ownProps.chunkId)
})

export default connect(mapStateToProps)(ChunkInfo)
