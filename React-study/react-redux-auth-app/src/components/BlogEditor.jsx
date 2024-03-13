import React from "react";
import { useState } from "react";
import { writePost } from "../redux/reducers/blog.reducer";
import { useDispatch } from "react-redux";

function BlogEditor() {
  // 로그인을 한 사람만 글 작성하기

  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleClickWrite = () => {
    // 클릭시, 어딘가에 글을 저장해 두기 (실제엔 서버에 보내서 DB에 저장)
    // TODO: 리덕스의 저장소에 글 저장해야함
    // 글을 쓴다 = 저장소에 저장되어 있는 글 목록에 글을 추가한다
    // => 공장에 작업지시서를 줘야하고, 작업지시서를 작성하고 우체부를 통해 전달해야함
    const action = writePost(value); // action을 직접 작성하지 않고, actionCreator 불러오기
    dispatch(action);
  };
  return (
    <section>
      <h2>글 작성하기</h2>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClickWrite}> 글 추가하기</button>
    </section>
  );
}

export default BlogEditor;
