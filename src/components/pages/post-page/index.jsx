import React from "react";
import SinglePost from "../../app_components/single-post"
import Sidebar from "../home/sidebar";
import "./style.scss"
import ThisMonthsNews from "../../app_components/this-month-news"



const PostPage = ({match}) => {
const postid = match.params.id;

  return (
    <>
      <div className="post-section">
          <SinglePost postid={postid}/>
          <div className="post-sidebar"><Sidebar/></div>
      </div>
      <div>
        <ThisMonthsNews/>
      </div>

    </>

  )
};

export default PostPage;
