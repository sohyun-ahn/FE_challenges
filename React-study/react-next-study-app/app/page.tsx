import Image from "next/image";
// file 이름을 바꾸면 안되는 파일
// app아래에 넣는 페이지

// public아래에는 정적인 바뀌지 않는 것들만 넣음
// app에는 동적으로 복잡한 컴포넌트같은 것들을 넣음
// app아래에 파일 경로가 url경로가 된다.
// app바로 아래파일들이 root (/) -> HOME PAGE  = 웹페이지 중에 루트경로에서 볼 수 있는 페이지가 홈페이지임!

//
import Page from "@/components/Page";

export default function Home() {
  return <Page title="홈">이건 홈페이지의 내용이다</Page>;
}
