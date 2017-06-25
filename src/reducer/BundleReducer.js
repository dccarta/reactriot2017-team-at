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
  // chunks: [
  //   {
  //     id: 0,
  //     size: 300,
  //     rendered: true,
  //     initial: true,
  //     entry: true,
  //     extraAsync: false,
  //     names: [],
  //     files: Array<string>,
  //     hash: a4etat43e3,
  //     parents: [],
  //     modules: [
  //       {
  //
  //       }
  //     ]
  //   },
  //   {
  //     id: 1,
  //     size: 350,
  //     rendered: true,
  //     initial: false,
  //     entry: false,
  //     extraAsync: false,
  //     names: Array<string>,
  //     files: Array<string>,
  //     hash: vave4te49,
  //     parents: [0],
  //     modules: [
  //
  //     ]
  //   },
  //   {
  //     id: 2,
  //     size: 40,
  //     rendered: true,
  //     initial: false,
  //     entry: false,
  //     extraAsync: false,
  //     names: Array<string>,
  //     files: Array<string>,
  //     hash: vse337yse4,
  //     parents: [0],
  //     modules: [
  //
  //     ]
  //   },
  //   {
  //     id: 3,
  //     size: 150,
  //     rendered: true,
  //     initial: false,
  //     entry: false,
  //     extraAsync: false,
  //     names: Array<string>,
  //     files: Array<string>,
  //     hash: 987u6yvbbt5,
  //     parents: [0],
  //     modules: [
  //
  //     ]
  //   }
  // ]
}

export const bundleReducer = (state = initialState) => {
  return state
}
