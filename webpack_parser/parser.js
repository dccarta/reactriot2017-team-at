//@flow
import type { Asset } from '../common.types'

export const getListOfBundles = (jsonOutput: {assets: Array<Asset>}) => jsonOutput.assets

export const getTranslationInformationForChunk = (chunkNumber: number, totalNumberOfChunks: number) => {
    const degreeIncrement: number = 180 / totalNumberOfChunks

    return chunkNumber * degreeIncrement
}
