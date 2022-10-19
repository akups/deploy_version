import { gql } from "@apollo/client";

export const AllBlocksQuery = gql`
query {
  blocks {
    id
    headline
    assets {
      id
      title
      primaryImage {
        url
      }
    }
  }
}
`;

export const GetSeriesByIDQuery = gql`
  query ($id: String) {
    asset(id: $id) {
      title
      primaryImage {
        url
      }
      description
      recommendedAssets {
        title
        primaryImage {
          url
        }
      }
    }
  }
`;
