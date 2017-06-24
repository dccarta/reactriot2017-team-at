//@flow

export type Asset = {
    name: string,
    size: number,
    chunks: Array<number>,
    chunkNames: Array<any>,
    emitted: boolean
}

export type Module = {
    id: number,
    identifier: string,
    name: string,
    index: number,
    index2: number,
    size: number,
    cacheable: boolean,
    built: boolean,
    optional: boolean,
    prefetched: boolean,
    chunks: Array<number>,
    assets: Array<any>,
    issuer: string,
    issuerId: number,
    issuerName: string,
    profile: {
        factory: number,
        building: number
    },
    failed: boolean,
    errors: number,
    warnings: number,
    reasons: [
        {
            moduleId: number,
            moduleIdentifier: string,
            module: string,
            moduleName: string,
            type: string,
            userRequest: string,
            loc: string
        }
    ],
    usedExports: boolean,
    providedExports: any,
    depth: number,
    source: string
}

export type Chunk = {
    id: number,
    size: number,
    rendered: boolean,
    initial: boolean,
    entry: boolean,
    extraAsync: boolean,
    names: Array<string>,
    files: Array<string>,
    hash: string,
    parents:Array<number>,
    modules: Array<Module>
}
