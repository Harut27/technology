import React from "react";
import laptopsData from "../../../data-from-backend/laptops-data";
import HowtoData from "../../../data-from-backend/howto-data";
import phonesData from "../../../data-from-backend/phones-data";
import photographyesData from "../../../data-from-backend/photography-data";
import tvsData from "../../../data-from-backend/tvs-data";
import "./style.scss"

const allData = laptopsData.concat(HowtoData,phonesData,photographyesData,tvsData)


const SinglePost = ({postid,})=>{

    return(

        <div className="post-page">
      { allData.map((post,index) => {

        if(post.id == postid){

          return (
            <div className="post-wrapper" key={index}>

              <div className="title-wrapper">

                <h2>
                  {post.title}
                </h2>

                <span className="category">
                  Category - {post.category}
                </span>

                <span className="subtittle">
                  {post.subtitle}
                </span>

              </div>

              <img src={post.src} alt=""/>

              <div className="post-content">
                <div dangerouslySetInnerHTML={{ __html:post.content}} />
              </div>

            </div>
          );
          }
        })
      } 
    </div>
    )
}

export default SinglePost;