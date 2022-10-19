export type Image = {
    accentColor: string
    url: string
}

export type Asset = {
    id: string
    title: string
    primaryImage: Image
    description: string
    path: string
    recommendedAssets: Asset[]

}
export type Block = {
    id: string
    headline: string
    assets: Asset[]
}