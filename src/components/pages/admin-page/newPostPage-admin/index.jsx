import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class NewPostForAdmin extends Component {
    render() {
        return (
                <div className="post-wrapper">
      
                    <div className="title-wrapper">
                        
                        <h2>
                            <CKEditor
                                editor={ ClassicEditor }
                                data="<p>Please type your TITLE</p>"
                                onInit={ editor => {
                                
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </h2>
        
                        <span className="category">
                            Category - 
                        </span>
        
                        <span className="subtittle">
                            
                        </span>
      
                    </div>
      
                    <img src={`#`} alt=""/>
      
                    <div className="post-content">
                      {/* <div dangerouslySetInnerHTML={{ __html:post.content}} /> */}
                    </div>
      
                </div>
               
          










        );
    }
}

export default NewPostForAdmin;