import React, {  useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from "react-html-parser";
import "./style.scss";

const NewPostForAdmin = ()=>{



    const [titleValue, setTitleValue] = useState('')

    const handleOnChange = (e , editor)=>{

        const data = editor.getData()
        setTitleValue(data)
        
    }


        return (
                <div className="admin-new-post flex-column">
      
                    <div className="flex-column">
                        
                        <div className="flex-column">
                            <span className="spanTitle">Please write your TITLE</span>
                            <h2>
                                <CKEditor
                                    editor={ ClassicEditor }
                                    onChange={handleOnChange}
                                />
                            </h2>
                        </div>

                        <div>
                            {ReactHtmlParser(titleValue)}
                        </div>
        
                        <div className="flex-column">
                            <span className="spanTitle">Please write your CATEGORY</span>
                            <span>
                                <CKEditor
                                    editor={ ClassicEditor }
                                />
                            </span>
                        </div>
        
                        <div className="flex-column">
                            <span className="spanTitle">Please write your SUBTITLE</span>
                            <span>
                                <CKEditor
                                    editor={ ClassicEditor }
                                />
                            </span>
                        </div>
      
                    </div>
      
                    <img src={`#`} alt=""/>
      
                    <div className="">
                      {/* <div dangerouslySetInnerHTML={{ __html:post.content}} /> */}
                    </div>
      
                </div>
               
          
        );
}

export default NewPostForAdmin;