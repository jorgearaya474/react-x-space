import { gql } from 'graphql-tag';

const GET_LAUNCEHS = gql`
  query Query($limit: Int, $order: String, $sort: String, $offset: Int) {
    launchesPast(limit: $limit, order: $order, sort: $sort, offset: $offset) {
      id
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      details
      links {
        article_link
        video_link
        flickr_images
      }
      launch_date_utc
    }
  }
`;

export { GET_LAUNCEHS };