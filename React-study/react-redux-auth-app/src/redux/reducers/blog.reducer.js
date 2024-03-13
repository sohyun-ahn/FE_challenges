// 공장, 작업명, 작업명을 활용해서 작업생성기(Action Creator) 만들어야함
// => createSlice 사용해서 한번에 만들기 가능
import { createSlice } from "@reduxjs/toolkit";

const initialPosts = [
  { id: 1, content: "첫 번째 게시물" },
  { id: 2, content: "두 번째 게시물" },
  { id: 3, content: "세 번째 게시물" },
];

const blogSlice = createSlice({
  name: "blog",
  initialState: { posts: initialPosts },
  reducers: {
    // 이 key이름 그대로 사용가능
    // 인자는 prevState || state, action 필요
    // 원래는 React에서 불변성 유지로 새 객체를 해야하지만,
    // slice에서는 불변성 관리 필요없음, 새로운 상태 return도 하지 않아도 됨!
    writePost: (state, { payload }) => {
      state.posts.push({ id: 999, content: payload }); // payload에 적은 글이 전달됨
    },
    deletePost: () => {},
  },
});

// slice안에는 "공장"이 만들어져 있고,
export const blogReducer = blogSlice.reducer; //store에 등록해야함

// slice안에는 "action creator(작업지시서 생성기)"이 만들어져 있고,
export const { writePost, deletePost } = blogSlice.actions; //actionCreator들을 가져오는 방법.
