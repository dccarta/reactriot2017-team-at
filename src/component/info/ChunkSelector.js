export const selectChunksHierarchy = (state)  =>
  isChunksAvailable(state)
    ? state.stats.chunks
      .reduce((obj, chunk) => {
        const parentChunkId = chunk.parents[0]
        const children = obj[parentChunkId] || []
        children.push(String(chunk.id))
    	  obj[parentChunkId] = children
        return obj
      }, {})
    : {}

export const selectChunkById = (state, id) =>
  isChunksAvailable(state)
    ? state.stats.chunks
      .filter(chunk => String(chunk.id) === String(id))
      .shift()
    : undefined

export const selectChunkModulesCount = (state, id) => {
  const chunk = selectChunkById(state, id)
  return chunk ? chunk.modules.length : 0
}

export const selectChunkSize = (state, id) => {
  const chunk = selectChunkById(state, id)
  return chunk ? chunk.size : 0
}

const isChunksAvailable = (state) =>
    state && state.stats && Array.isArray(state.stats.chunks)
