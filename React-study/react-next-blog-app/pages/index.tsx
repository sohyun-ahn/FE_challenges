import Head from "next/head";
import { Inter } from "next/font/google";
import homeStyles from "../styles/Home.module.css";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/post";
import Link from "next/link"; // file기반 Routing 가능

const inter = Inter({ subsets: ["latin"] });

interface PropsType {
  allPostsData: { date: string; title: string; id: string }[];
}

export default function Home({ allPostsData }: PropsType) {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>{`Mangom's Blog`}</title>
      </Head>

      <section className={homeStyles.headingMd}>
        <p>[Mangom Introduction]</p>
        <p> (This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={homeStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Next(framework)에서 제공하는 SSG방식
  const allPostsData = getSortedPostsData(); // 빌드시 제공해야하는 정보
  console.log(allPostsData);
  return {
    props: { allPostsData },
  };
};

// static site 정적페이지로 제공

// NEXT에서 제공하는 페이지 제공방식 3가지

// CSR => 클라이언트 사이드 렌더링 (제일 느림 - 서버가 없어도 배포가능,)
// => 유저한테 index.html이랑 리액트 코드가 담긴 js파일을 응답한다.
// => 유저가 브라우저에서 js파일을 실행시켜서 index.html에 결과물(ui)을 담는다.
// => 결론적으로, 브라우저가 렌더링하는 것
// 브라우저에다가 js파일을 던져주고, 문서에 그리게 한다.

// Next의 영역
// 리액트를 SSR로 그려준다 => Server Side Rendering
// => 누가 /something 페이지를 요청한다
// => Next.js 서버가 요청을 받아서 pages/something의 컴포넌트를 html로 렌더링한다.
// => 렌더링 된 html파일을 유저에게 응답한다.

// SSG => Static Site Generate 정적파일 생성 (제일 빠름)
// => next.js를 build(배포하기 전에 운영환경에 최적화되는 상태로 변환)할 때, html파일을 생성한다.
// => 유저가 /something 에 접근하면 빌드할때 만들어놓은 html파일을 응답해준다.

// 똑같은 페이지 빠른 순서 : SSG(이미 렌더링된 파일 던져주기) => SSR(요청할때마다 서버에서 렌더링해서 파일을 던져줌) => CSR(재료만 주고 다 클라이언트에서 그림)
