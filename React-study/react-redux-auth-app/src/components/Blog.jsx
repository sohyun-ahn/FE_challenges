import React from "react";
import BlogEditor from "./BlogEditor";
import BlogPosts from "./BlogPosts";
import { useSelector } from "react-redux";

function Blog() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div style={{ backgroundColor: "darkgray", padding: 10 }}>
      {isLoggedIn && <BlogEditor />}
      <BlogPosts />
    </div>
  );
}

export default Blog;
