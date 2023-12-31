import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
  const renderedPosts = Object.values(posts).map((post) => {
    return(<div className="card" style={{ width: "30%", marginBottom: "20px" }} key={post.id}>
      <div className="card-body">
        <h3>{post.title}</h3>
        <CommentList postId={post.id}/>
        <CommentCreate postId={post.id}/>
      </div>
    </div>)
  });
  console.log(renderedPosts);
  return (
    <div className="d">
      {renderedPosts}
    </div>
  );
};
