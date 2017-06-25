export const getListOfBundles = jsonOutput => jsonOutput.assets

export const getTranslationInformationForChunk = (chunkNumber, totalNumberOfChunks) => {
    const degreeIncrement: number = 180 / totalNumberOfChunks

    return chunkNumber * degreeIncrement
}
