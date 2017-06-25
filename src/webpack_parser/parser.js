export const getListOfBundles = jsonOutput => jsonOutput.assets

export const getPositionInformationForChunk = (chunkNumber, totalNumberOfChunks, randomSeed) => {
    //randomseed MUST be greater than totalNumberofChunks
    return {
        x: randomSeed - getRandomArbitrary(-20, 20) - (randomSeed * chunkNumber / totalNumberOfChunks),
        y: randomSeed - getRandomArbitrary(-20, 20) - (randomSeed * chunkNumber / totalNumberOfChunks),
        z: randomSeed - getRandomArbitrary(-20, 20) - (randomSeed * chunkNumber / totalNumberOfChunks)
    }

}

export const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min
}
