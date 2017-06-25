import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
  selectChunkById,
  selectChunksHierarchy,
  selectChunkModulesCount,
  selectChunkSize
} from './ChunkSelector'

class ChunkInfo extends React.Component {

  render() {
    return (
      <div>
        <div>
          <span>Chunk ID:  </span>
          <span>{this.props.chunkId}</span>
        </div>
        <div>
          <span>Chunk name:  </span>
          <span>{this.props.chunk.names[0] || 'NO NAME'}</span>
        </div>
        <div>
          <span>Child Chunks:</span>
          <ul>
            {this.props.chunkChildren.map(id => (<li>{'Chunk ' + id}</li>))}
          </ul>
        </div>
        <div>
          <span>Total modules:  </span>
          <span>{this.props.totalModules}</span>
        </div>
        <div>
          <span>Chunk size:  </span>
          <span>{this.props.size}B</span>
        </div>
      </div>
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
