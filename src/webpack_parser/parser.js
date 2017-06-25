export const getListOfBundles = jsonOutput => jsonOutput.assets

export const getPositionInformationForChunk = (chunkNumber, totalNumberOfChunks, randomSeed) => {
    //randomseed MUST be greater than totalNumberofChunks
    return {
        x: (randomSeed - getRandomArbitrary(-20, 20) - (randomSeed * chunkNumber / totalNumberOfChunks)) * 4,
        y: (randomSeed - getRandomArbitrary(-20, 20) - (randomSeed * chunkNumber / totalNumberOfChunks)) * 4,
        z: (randomSeed - getRandomArbitrary(-20, 20) - (randomSeed * chunkNumber / totalNumberOfChunks)) * 4
    }
}

export const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min
}
