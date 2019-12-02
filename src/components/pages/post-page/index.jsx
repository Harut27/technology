import React from "react";
import SinglePost from "../../app_components/single-post"


const PostPage = ({match}) => {
const postid = match.params.id;

  return (
    <SinglePost postid={postid}/>
  )
};

export default PostPage;
