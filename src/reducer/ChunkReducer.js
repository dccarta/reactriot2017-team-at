import { SELECT_CHUNK, DESELECT_CHUNK } from '../constant/ActionTypes'

export default (state = { selectedChunkId: '' }, action) => {
  switch(action.type) {
    case SELECT_CHUNK: return { selectedChunkId: action.payload }
    case DESELECT_CHUNK: return { selectedChunkId: '' }
    default: return state
  }
}
