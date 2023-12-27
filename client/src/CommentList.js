import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default ({postId}) => {
  const [comments, setComments] = useState({});
  const fetchComment = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    setComments(res.data);
  };
  useEffect(() => {
    fetchComment();
  }, []);
  console.log(comments);
  const renderedComments = Object.values(comments).map((comment) => {
    return(<li key= {comment.id}>{comment.content}</li>)
  });
  console.log(renderedComments);
  return (
    <ul>{renderedComments}</ul>
  )
};
