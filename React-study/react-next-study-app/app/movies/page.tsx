import React from "react";
import Page from "../../\bcomponents/Page";
import MovieCard from "./_components/MovieCard";

// dynamic routing : 동적 라우팅
// 페이지를 바꿀때마다 폴더를 만들어서 page.tsx같은 파일을 만들어야하나? => 아님
// => 페이지바꿀(id)같은 것은 디렉터리이름을 [movieId] 대괄호로 감싸면 됨
// [ ] <= 바꿔줘야하는 것을 적으면 됨. 이 이름이 내부파일의 프롭스로 들어가게됨.

type Movie = {
  id: number;
  title: string;
  description: string;
};

const movies: Movie[] = [
  { id: 1, title: "어벤져스1", description: "마블의 대표 영화" },
  { id: 2, title: "기생충", description: "오스카상 수상작" },
];

function MoviePages() {
  return (
    <Page title="영화 목록">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie.title} />
      ))}
    </Page>
  );
}

export default MoviePages;
