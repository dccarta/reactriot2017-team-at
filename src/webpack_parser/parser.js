export const getListOfBundles = jsonOutput => jsonOutput.assets

export const getPositionInformationForChunk = (chunkNumber, totalNumberOfChunks, randomSeed) => {
    //randomseed MUST be greater than totalNumberofChunks
    return {
        x: (randomSeed - getRandomArbitrary(-20, 20) - (randomSeed * chunkNumber / totalNumberOfChunks)) * 5,
        y: (randomSeed - getRandomArbitrary(-20, 20) - (randomSeed * chunkNumber / totalNumberOfChunks)) * 5,
        z: (randomSeed - getRandomArbitrary(-20, 20) - (randomSeed * chunkNumber / totalNumberOfChunks)) * 5
    }

}

export const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min
}
