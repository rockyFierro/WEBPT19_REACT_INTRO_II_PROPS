//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data"

const PostsPage = () => {
    const [post, setPost] = useState(dummyData)
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
        { post.map((postObj, index) => {return( <Post 
key={index} post={postObj}/>)}) }
        
    </div>
  );
};

export default PostsPage;

