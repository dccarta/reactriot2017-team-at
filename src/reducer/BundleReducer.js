const initialState = {
  assets: [
    {
      name: 'bundle0',
      size: 300,
      chunks: [0],
      chunkNames: [],
      emitted: true
    },
    {
      name: 'bundle1',
      size: 350,
      chunks: [1],
      chunkNames: [],
      emitted: true
    },
    {
      name: 'bundle2',
      size: 40,
      chunks: [2],
      chunkNames: [],
      emitted: true
    },
    {
      name: 'bundle3',
      size: 150,
      chunks: [3],
      chunkNames: [],
      emitted: true
    },
  ]
}

export const bundleReducer = (state = initialState) => {
  return state
}
