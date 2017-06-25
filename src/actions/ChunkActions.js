import { SELECT_CHUNK, DESELECT_CHUNK } from '../constant/ActionTypes'

export const selectChunk = (chunkId) => ({
  type: SELECT_CHUNK,
  payload: chunkId
})

export const deselectChunk = (chunkId) => ({
  type: DESELECT_CHUNK
})
