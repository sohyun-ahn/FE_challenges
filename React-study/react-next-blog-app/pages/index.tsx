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
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: { allPostsData },
  };
};
