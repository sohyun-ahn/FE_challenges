// Sanity Query 를 위한 파일
import sanityClient from "./sanity_client";
let sanityQuery = (query: string, params?: Object) =>
  sanityClient.fetch(query, params);

export const getFeaturedRestaurant = () => {
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

export const getFeaturedRestaurantById = (id: Object) => {
  return sanityQuery(
    `*[_type=='featured'] {
        ..., 
        restaurants[]-> {
          ..., dishes[]->{
            name
          }
        }
      }`,
    { id }
  );
};
