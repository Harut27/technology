import React, { Component } from "react";
import Link from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


class NewPost extends Component{

    render(){


        return(
            <div className="newHowTo-section">

                <Link to={`howto/newpost`}>
                    <FontAwesomeIcon icon={faPlus}/>
                    <span>Add New Post</span>
                </Link>

            </div>
        )
    }
}


export default NewPost;





