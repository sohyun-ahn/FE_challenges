import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { getAllPostIds, getPostData } from "@/lib/post";
import Head from "next/head";
import postStyles from "../../styles/Post.module.css";

const Posts = ({
  postData,
}: {
  postData: { title: string; date: string; contentHtml: string };
}) => {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={postStyles.container}>
        <h1>{postData.title}</h1>
        <div style={{ color: "#666" }}>{postData.date}</div>
        <div
          className={postStyles.content}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </div>
  );
};

export default Posts;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds(); // {params: {id:'pre-rendering'}, {params: {id:'ssg-ssr'},
  return {
    paths,
    fallback: false, // false라면 getStaticPaths로 return되지 않는 것은 모두 404 페이지가 뜸, true라면 fallback페이지가 뜸
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string); // type assertion
  return {
    props: {
      postData,
    },
  };
};
