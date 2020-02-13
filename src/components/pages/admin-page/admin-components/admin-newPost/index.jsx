import React, { Component } from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./style.scss"


const NewPost = ({path})=>{

        return(
            <div className="newPost-section">

                <Link to={`/admin${path}/newpost`}>
                    <FontAwesomeIcon icon={faPlus}/>
                    <span>Add New Post</span>
                </Link>

            </div>
        )
}

export default NewPost;





