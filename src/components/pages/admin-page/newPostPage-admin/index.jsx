import React, {  Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from "react-html-parser";
import "./style.scss";

class NewPostForAdmin extends Component {


    handleOnChange = ()=>{

    }

    handleInputChange = ()=>{

    }
    
    render(){

        return (
                <div className="admin-new-post flex-column">
      
                    <div className="flex-column">

                        <form >
                            <input id="input-title" type="text" placeholder="Please Write Title"/>
                        </form>
                     

                    </div>
      
                </div>
          
        );
    }
}



export default NewPostForAdmin;