import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../lib";
const Blog = () => {
  useEffect(() => {
    getAllPosts();
  }, []);
  const [posts, setPosts] = useState([]);
  const getAllPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const allPosts = await response.json();
    console.log(allPosts);
    setPosts(allPosts);
  };
  return (
    <div>
      <h1>Blog</h1>
      {posts.take(6).map((post) => (
        <h4 className="blog-link">
          <Link to={`/blog/${post.id}`} key={post.id}>
            {post.title}
          </Link>
        </h4>
      ))}
    </div>
  );
};

export default Blog;
