import React from "react";
// [movieId]이기 때문에 프롭스가 movieId로 들어옴
function Page(props: { params: { movieId: string } }) {
  return <div>movieId: {props.params.movieId}의 PAGE입니다</div>;
}

export default Page;
