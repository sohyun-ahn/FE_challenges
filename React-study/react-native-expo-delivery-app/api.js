// Sanity Query 를 위한 파일
import sanityClient from "./sanity_client";
let sanityQuery = (query, params) => sanityClient.fetch(query, params);

export const getFeaturedRestaurants = () => {
  // sanity서버에서 vision부분에 쿼리 내용을 적은 것
  return sanityQuery(`*[_type=='featured'] {
        ..., 
        restaurants[]-> {
          ..., dishes[]->{
            name
          }
        }
      }`);
};

export const getCategories = () => {
  return sanityQuery(`
    *[_type=='category']`);
};

export const getFeaturedRestaurantById = (id) => {
  return sanityQuery(
    `*[_type=='featured' &&_id==$id] {
        ..., 
        restaurants[]-> {
          ..., dishes[]->{
            _id,
            name,
            short_description,
            price,
            image
          }
        }
      }[0]
      `,
    { id }
  );
};
