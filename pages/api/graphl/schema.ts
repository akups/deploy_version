import { gql } from "apollo-server-micro";


export const typeDefs = gql`
  type Image {
    accentColor: String
    url: String
  }
  type Asset {
    id: String
    title: String
    primaryImage: Image
    description: String
    path: String
    recommendedAssets: [Asset]
  }
  
  type Block {
    id: String
    headline: String
    assets: [Asset]
  }
  type Query {
    blocks: [Block]
    block(id: String): Asset
    asset(title: String, id: String): Asset
  }
`;

